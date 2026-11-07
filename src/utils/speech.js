// ===== Giọng đọc bằng Web Speech API (speechSynthesis, ja-JP) =====
// Dùng một "singleton" cho toàn app để mọi nút 🔊 chia sẻ cùng trạng thái
// (đang đọc câu nào, đang tạm dừng...) và để có thể dừng khi rời trang.
import { useSyncExternalStore } from 'react';
import { toSpeechText } from './furigana.js';
import { settingsStore } from './settings.js';

const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;

let state = {
  supported: !!synth,
  voices: [], // chỉ gồm voice ja-*
  playingKey: null, // key của câu đang đọc (để highlight)
  paused: false,
};
const listeners = new Set();
function setState(patch) {
  state = { ...state, ...patch };
  listeners.forEach((l) => l());
}

// ---------- Nạp danh sách giọng ----------
// Lưu ý: getVoices() có thể trả mảng rỗng lúc đầu, phải nghe sự kiện "voiceschanged".
function loadVoices() {
  if (!synth) return;
  const ja = synth.getVoices().filter((v) => v.lang.toLowerCase().replace('_', '-').startsWith('ja'));
  setState({ voices: ja });
}
if (synth) {
  loadVoices();
  synth.addEventListener?.('voiceschanged', loadVoices);
  // Một số trình duyệt (Safari cũ) không bắn sự kiện -> thử lại một lần
  setTimeout(loadVoices, 500);
}

/**
 * Chọn giọng + pitch theo vai.
 * - Có >= 2 giọng ja-JP: vai A dùng giọng đã chọn, vai B dùng giọng khác.
 * - Chỉ có 1 giọng: đổi pitch (A cao hơn, B thấp hơn) để phân biệt.
 */
function resolveVoice(role) {
  const { voiceURI } = settingsStore.get();
  const voices = state.voices;
  const selected = voices.find((v) => v.voiceURI === voiceURI) || voices[0] || null;
  if (!role) return { voice: selected, pitch: 1 };
  const other = voices.find((v) => v !== selected) || null;
  if (role === 'B') return other ? { voice: other, pitch: 1 } : { voice: selected, pitch: 0.75 };
  return other ? { voice: selected, pitch: 1 } : { voice: selected, pitch: 1.2 };
}

// ---------- Phát ----------
let runId = 0; // tăng mỗi lần stop/phát mới để huỷ các callback cũ
let current = null; // giữ tham chiếu utterance (tránh bị GC làm mất sự kiện onend trên Chrome)

/**
 * Đọc lần lượt một hàng đợi.
 * items: [{ text, role?: 'A'|'B', key? }]
 * opts: { onItem(index, item), onDone() }
 */
export function playItems(items, opts = {}) {
  if (!synth) return;
  synth.cancel();
  const id = ++runId;
  let i = 0;

  const next = () => {
    if (id !== runId) return;
    if (i >= items.length) {
      setState({ playingKey: null, paused: false });
      opts.onDone?.();
      return;
    }
    const idx = i++;
    const item = items[idx];
    const text = toSpeechText(item.text);
    if (!text) return next();

    opts.onItem?.(idx, item);
    setState({ playingKey: item.key ?? null, paused: false });

    const { voice, pitch } = resolveVoice(item.role);
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ja-JP';
    if (voice) u.voice = voice;
    u.pitch = pitch;
    u.rate = settingsStore.get().rate || 1;
    u.onend = () => next();
    u.onerror = (e) => {
      if (id !== runId) return;
      if (e.error === 'canceled' || e.error === 'interrupted') return;
      next(); // lỗi khác -> bỏ qua câu này, đọc tiếp
    };
    current = u;
    synth.speak(u);
  };

  // Sau cancel() Chrome cần một chút thời gian trước khi speak() lại
  setTimeout(next, 60);
}

/** Đọc một câu duy nhất. */
export function speak(text, { key = null, role = null, onDone } = {}) {
  playItems([{ text, key, role }], { onDone });
}

export function stop() {
  if (!synth) return;
  runId++;
  synth.cancel();
  current = null;
  setState({ playingKey: null, paused: false });
}

export function pause() {
  if (!synth || state.playingKey === null) return;
  synth.pause();
  setState({ paused: true });
}

export function resume() {
  if (!synth) return;
  synth.resume();
  setState({ paused: false });
}

function subscribe(l) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function useSpeech() {
  const s = useSyncExternalStore(subscribe, () => state);
  return { ...s, hasJa: s.voices.length > 0, speak, playItems, stop, pause, resume };
}
