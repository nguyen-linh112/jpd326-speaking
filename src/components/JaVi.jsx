// ===== Một câu tiếng Nhật (furigana) + nghĩa tiếng Việt + nút nghe =====
import FuriganaText from './FuriganaText.jsx';
import SpeakButton from './AudioControls.jsx';
import { useSettings } from '../utils/settings.js';

export default function JaVi({ item, id, role = null, noSpeak = false, className = '' }) {
  const { showVi } = useSettings();
  if (!item) return null;
  return (
    <div className={`javi ${className}`}>
      <div className="javi-ja">
        {!noSpeak && id && <SpeakButton text={item.ja} id={id} role={role} small />}
        <FuriganaText text={item.ja} />
      </div>
      {showVi && item.vi && <div className="vi">{item.vi}</div>}
    </div>
  );
}

/** Bảng từ vựng: từ – cách đọc (hiragana) – nghĩa Việt. */
export function VocabList({ vocab, title = 'Từ vựng' }) {
  if (!vocab || vocab.length === 0) return null;
  return (
    <section className="card">
      <h3 className="sec-title">📖 {title}</h3>
      <div className="vocab-grid">
        {vocab.map((v, i) => (
          <div className="vocab-item" key={i}>
            <div className="vocab-word ja">{v.word}</div>
            {v.reading && v.reading !== v.word && <div className="vocab-reading ja">{v.reading}</div>}
            <div className="vocab-meaning">{v.meaning}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
