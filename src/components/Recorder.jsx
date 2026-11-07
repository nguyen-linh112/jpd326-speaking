// ===== Ghi âm giọng nói của mình và nghe lại =====
import { useRecorder } from '../hooks/useRecorder.js';
import { stop as stopSpeech } from '../utils/speech.js';

const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

export default function Recorder({ label = 'Ghi âm', compact = false }) {
  const { recording, url, error, seconds, start, stop, reset } = useRecorder();

  const onStart = async () => {
    stopSpeech(); // dừng giọng đọc để không bị thu lẫn vào
    await start();
  };

  return (
    <div className={`recorder ${compact ? 'compact' : ''}`}>
      <div className="btn-row">
        {!recording ? (
          <button type="button" className="btn rec" onClick={onStart}>
            🎙 {url ? 'Ghi lại' : label}
          </button>
        ) : (
          <button type="button" className="btn rec on" onClick={stop}>
            ⏹ Dừng ghi <span className="rec-time">{fmt(seconds)}</span>
          </button>
        )}
        {url && !recording && (
          <button type="button" className="btn ghost" onClick={reset}>
            ✕ Xoá
          </button>
        )}
      </div>
      {url && !recording && <audio className="rec-audio" controls src={url} />}
      {error && <div className="notice warn small">{error}</div>}
    </div>
  );
}
