// ===== Chỉnh sửa một hội thoại (场面) =====
import { useState } from 'react';
import { JaViEdit, JaViListEdit, ListEditor, TextField, VocabEdit } from './fields.jsx';

export default function DialogueEditor({ initial, onSave, onCancel }) {
  const [d, setD] = useState(() => structuredClone(initial));
  const [err, setErr] = useState('');
  const set = (patch) => setD((x) => ({ ...x, ...patch }));

  const save = () => {
    if (!d.title.trim() && !d.titleVi.trim()) {
      setErr('Hãy nhập tiêu đề cho hội thoại.');
      return;
    }
    if (!d.versions.length) {
      setErr('Cần ít nhất một phiên bản hội thoại.');
      return;
    }
    onSave(d);
  };

  return (
    <div className="stack editor">
      <div className="notice info">
        ✏️ <b>Chế độ chỉnh sửa.</b> Gõ furigana theo cú pháp <code>{'{漢字|かんじ}'}</code>. Bản sửa của bạn được lưu
        trong trình duyệt và gắn nhãn “Bản nháp của tôi”.
      </div>

      <section className="card">
        <h3 className="sec-title">Thông tin chung</h3>
        <div className="grid3">
          <TextField label="Bài (第◯課)" type="number" value={d.lesson} onChange={(v) => set({ lesson: v })} />
          <TextField label="Tiêu đề (JP)" value={d.title} onChange={(v) => set({ title: v })} />
          <TextField label="Tiêu đề tiếng Việt" value={d.titleVi} onChange={(v) => set({ titleVi: v })} />
        </div>
        <h4 className="sub">Đề bài vai A</h4>
        <JaViEdit value={d.roleA} onChange={(v) => set({ roleA: v })} rows={3} />
        <h4 className="sub">Đề bài vai B</h4>
        <JaViEdit value={d.roleB} onChange={(v) => set({ roleB: v })} rows={3} />
        <h4 className="sub">Thông tin kèm theo</h4>
        <JaViListEdit items={d.info || []} onChange={(v) => set({ info: v })} addLabel="＋ Thêm thông tin" />
      </section>

      <section className="card">
        <h3 className="sec-title">Từ vựng</h3>
        <VocabEdit items={d.vocab || []} onChange={(v) => set({ vocab: v })} />
      </section>

      <section className="card">
        <h3 className="sec-title">Các phiên bản hội thoại</h3>
        <ListEditor
          items={d.versions}
          onChange={(v) => set({ versions: v })}
          addLabel="＋ Thêm phiên bản"
          itemLabel={(v, i) => v.label || `Phiên bản ${i + 1}`}
          newItem={() => ({
            id: 'v' + Date.now().toString(36),
            label: 'Bản của tôi',
            draft: true,
            lines: [
              { speaker: 'A', ja: '', vi: '' },
              { speaker: 'B', ja: '', vi: '' },
            ],
          })}
          render={(v, upV) => (
            <div>
              <TextField label="Tên phiên bản" value={v.label} onChange={(x) => upV({ ...v, label: x })} />
              <TextField label="Ghi chú (tuỳ chọn)" value={v.note || ''} onChange={(x) => upV({ ...v, note: x })} />
              <h4 className="sub">Các lượt thoại</h4>
              <ListEditor
                items={v.lines}
                onChange={(lines) => upV({ ...v, lines })}
                addLabel="＋ Thêm lượt thoại"
                itemLabel={(l, i) => `Lượt ${i + 1} · ${l.speaker}`}
                newItem={() => ({
                  speaker: v.lines.length && v.lines[v.lines.length - 1].speaker === 'A' ? 'B' : 'A',
                  ja: '',
                  vi: '',
                })}
                render={(l, upL) => (
                  <div>
                    <label className="field inline">
                      <span>Người nói</span>
                      <select value={l.speaker} onChange={(e) => upL({ ...l, speaker: e.target.value })}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                      </select>
                    </label>
                    <JaViEdit value={l} onChange={(x) => upL({ ...l, ...x })} />
                  </div>
                )}
              />
            </div>
          )}
        />
      </section>

      <section className="card">
        <h3 className="sec-title">Câu hỏi cô có thể hỏi thêm</h3>
        <ListEditor
          items={d.followUps || []}
          onChange={(v) => set({ followUps: v })}
          addLabel="＋ Thêm câu hỏi"
          itemLabel={(f, i) => `Câu hỏi ${i + 1}`}
          newItem={() => ({ q: { ja: '', vi: '' }, a: { ja: '', vi: '' } })}
          render={(f, up) => (
            <div>
              <JaViEdit value={f.q} onChange={(x) => up({ ...f, q: x })} jaLabel="Câu hỏi (JP)" />
              <JaViEdit value={f.a} onChange={(x) => up({ ...f, a: x })} jaLabel="Gợi ý trả lời (JP)" />
            </div>
          )}
        />
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
