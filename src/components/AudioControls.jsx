// ===== Nút / thanh điều khiển âm thanh =====
import { useEffect, useState } from 'react';
import { useSpeech } from '../utils/speech.js';

/** Nút 🔊 đọc một câu. Bấm lần nữa khi đang đọc để dừng. */
export default function SpeakButton({ text, id, role = null, label = '', small = false }) {
  const { playingKey, speak, stop, supported } = useSpeech();
  if (!supported) return null;
  const active = playingKey === id;
  return (
    <button
      type="button"
      className={`speak-btn ${active ? 'active' : ''} ${small ? 'small' : ''}`}
      onClick={() => (active ? stop() : speak(text, { key: id, role }))}
      aria-label={active ? 'Dừng đọc' : 'Nghe đọc'}
      title={active ? 'Dừng' : 'Nghe đọc'}
    >
      {active ? '⏹' : '🔊'}
      {label && <span className="speak-label">{label}</span>}
    </button>
  );
}

/** Thông báo khi máy không có giọng tiếng Nhật. */
export function VoiceNotice() {
  const { supported, hasJa } = useSpeech();
  const [wait, setWait] = useState(true);
  // Đợi một chút vì danh sách giọng nạp bất đồng bộ
  useEffect(() => {
    const t = setTimeout(() => setWait(false), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!supported) {
    return (
      <div className="notice warn">
        Trình duyệt này không hỗ trợ giọng đọc. Hãy dùng Chrome hoặc Edge để nghe âm thanh.
      </div>
    );
  }
  if (wait || hasJa) return null;
  return (
    <div className="notice warn">
      <b>Chưa tìm thấy giọng tiếng Nhật (ja-JP) trên máy.</b> Chrome/Edge trên Windows thường có sẵn giọng
      Nhật. Trên Windows: Settings → Time &amp; language → Speech → Add voices → Japanese. Trên Android/iPhone:
      cài gói giọng Nhật trong phần Text-to-speech của hệ thống.
    </div>
  );
}

/** Thanh điều khiển cho "Phát cả hội thoại / bài mẫu". */
export function QueueControls({ playing, paused, onPlay, onPause, onResume, onStop, playLabel = 'Phát cả bài' }) {
  const { supported } = useSpeech();
  if (!supported) return null;
  if (!playing) {
    return (
      <button type="button" className="btn primary" onClick={onPlay}>
        ▶ {playLabel}
      </button>
    );
  }
  return (
    <div className="btn-row">
      {paused ? (
        <button type="button" className="btn primary" onClick={onResume}>
          ▶ Tiếp tục
        </button>
      ) : (
        <button type="button" className="btn" onClick={onPause}>
          ⏸ Tạm dừng
        </button>
      )}
      <button type="button" className="btn" onClick={onStop}>
        ⏹ Dừng
      </button>
    </div>
  );
}
