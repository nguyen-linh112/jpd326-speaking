// ===== Chỉnh sửa một câu hỏi đáp (質問) =====
import { useState } from 'react';
import { JaViEdit, JaViListEdit, ListEditor, TextField, VocabEdit } from './fields.jsx';

export default function QuestionEditor({ initial, onSave, onCancel }) {
  const [q, setQ] = useState(() => structuredClone(initial));
  const [err, setErr] = useState('');
  const set = (patch) => setQ((x) => ({ ...x, ...patch }));

  const save = () => {
    if (!q.question.ja.trim()) {
      setErr('Hãy nhập nội dung câu hỏi (tiếng Nhật).');
      return;
    }
    onSave(q);
  };

  return (
    <div className="stack editor">
      <div className="notice info">
        ✏️ <b>Chế độ chỉnh sửa.</b> Gõ furigana theo cú pháp <code>{'{漢字|かんじ}'}</code>. Bản sửa của bạn được lưu
        trong trình duyệt và gắn nhãn “Bản nháp của tôi”.
      </div>

      <section className="card">
        <h3 className="sec-title">Câu hỏi</h3>
        <TextField label="Bài (第◯課)" type="number" value={q.lesson} onChange={(v) => set({ lesson: v })} />
        <JaViEdit value={q.question} onChange={(v) => set({ question: v })} rows={3} jaLabel="Câu hỏi (JP)" />
        <TextField label="Ghi chú (tuỳ chọn)" value={q.note || ''} onChange={(v) => set({ note: v })} />
        <h4 className="sub">Gợi ý ý trả lời</h4>
        <JaViListEdit items={q.guide || []} onChange={(v) => set({ guide: v })} addLabel="＋ Thêm gợi ý" />
      </section>

      <section className="card">
        <h3 className="sec-title">Mẫu câu gợi ý</h3>
        <ListEditor
          items={q.expressions || []}
          onChange={(v) => set({ expressions: v })}
          addLabel="＋ Thêm mẫu câu"
          itemLabel={(e, i) => e.pattern || `Mẫu ${i + 1}`}
          newItem={() => ({ pattern: '', meaning: '', examples: [{ ja: '', vi: '' }] })}
          render={(e, up) => (
            <div>
              <TextField label="Mẫu câu" value={e.pattern} onChange={(v) => up({ ...e, pattern: v })} />
              <TextField label="Nghĩa" value={e.meaning} onChange={(v) => up({ ...e, meaning: v })} />
              <h4 className="sub">Ví dụ</h4>
              <JaViListEdit items={e.examples || []} onChange={(v) => up({ ...e, examples: v })} addLabel="＋ Thêm ví dụ" />
            </div>
          )}
        />
      </section>

      <section className="card">
        <h3 className="sec-title">Bài trả lời mẫu</h3>
        <ListEditor
          items={q.sampleAnswers || []}
          onChange={(v) => set({ sampleAnswers: v })}
          addLabel="＋ Thêm bài mẫu"
          itemLabel={(s, i) => s.title || `Mẫu ${i + 1}`}
          newItem={() => ({ title: `Mẫu ${(q.sampleAnswers || []).length + 1}`, lines: [{ ja: '', vi: '' }] })}
          render={(s, up) => (
            <div>
              <TextField label="Tên bài mẫu" value={s.title} onChange={(v) => up({ ...s, title: v })} />
              <JaViListEdit items={s.lines || []} onChange={(v) => up({ ...s, lines: v })} addLabel="＋ Thêm câu" />
            </div>
          )}
        />
      </section>

      <section className="card">
        <h3 className="sec-title">Từ vựng</h3>
        <VocabEdit items={q.vocab || []} onChange={(v) => set({ vocab: v })} />
      </section>

      {err && <div className="notice warn">{err}</div>}
      <div className="sticky-actions">
        <button type="button" className="btn primary" onClick={save}>
          💾 Lưu bản nháp
        </button>
        <button type="button" className="btn" onClick={onCancel}>
          Huỷ
        </button>
      </div>
    </div>
  );
}
