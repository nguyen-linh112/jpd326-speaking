// ===== Câu hỏi cô có thể hỏi thêm + gợi ý trả lời đơn giản =====
// Mỗi câu hỏi bám theo một câu trong hội thoại (trường `ref`): giám khảo thường hỏi lại
// về chính điều bạn đã nói (vì sao, như thế nào...).
import { useState } from 'react';
import FuriganaText from './FuriganaText.jsx';
import JaVi from './JaVi.jsx';
import { useSettings } from '../utils/settings.js';

export default function FollowUps({ items, idPrefix }) {
  const [shown, setShown] = useState({});
  const { showVi } = useSettings();
  if (!items?.length) return null;
  return (
    <section className="card">
      <h3 className="sec-title">❓ Câu hỏi cô có thể hỏi thêm</h3>
      <p className="muted small">
        Giám khảo thường hỏi lại về <b>chính điều bạn vừa nói</b> trong hội thoại (vì sao lại đưa ra giải pháp đó, giải thích
        thêm…). Mỗi câu bên dưới có ghi rõ nó gắn với câu nào. Hãy tự trả lời trước rồi mới bấm xem gợi ý.
      </p>
      <div className="followups">
        {items.map((it, i) => (
          <div className="followup" key={i}>
            {it.ref?.ja && (
              <div className="followup-ref">
                <span className="small">🔗 Khi bạn nói:</span>{' '}
                <FuriganaText text={it.ref.ja} className="ref-ja" />
                {showVi && it.ref.vi && <span className="vi"> ({it.ref.vi})</span>}
              </div>
            )}
            <div className="followup-q">
              <span className="q-badge">Q{i + 1}</span>
              <JaVi item={it.q} id={`${idPrefix}-q${i}`} />
            </div>
            {shown[i] ? (
              <div className="followup-a">
                <b className="small">Gợi ý trả lời</b>
                <JaVi item={it.a} id={`${idPrefix}-a${i}`} />
              </div>
            ) : (
              <button type="button" className="btn small" onClick={() => setShown((s) => ({ ...s, [i]: true }))}>
                💡 Xem gợi ý trả lời
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
