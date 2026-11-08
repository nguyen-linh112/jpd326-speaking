// ===== Câu hỏi cô có thể hỏi thêm + gợi ý trả lời đơn giản =====
import { useState } from 'react';
import JaVi from './JaVi.jsx';

export default function FollowUps({ items, idPrefix }) {
  const [shown, setShown] = useState({});
  if (!items?.length) return null;
  return (
    <section className="card">
      <h3 className="sec-title">❓ Câu hỏi cô có thể hỏi thêm</h3>
      <p className="muted small">
        Phòng khi giám khảo hỏi thêm sau khi nói xong hội thoại. Hãy tự trả lời trước rồi mới bấm xem gợi ý.
      </p>
      <div className="followups">
        {items.map((it, i) => (
          <div className="followup" key={i}>
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
