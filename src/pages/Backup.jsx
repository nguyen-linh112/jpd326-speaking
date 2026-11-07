// ===== Sao lưu: xuất / nhập bản chỉnh sửa, khôi phục mục đã ẩn =====
import { useRef, useState } from 'react';
import {
  exportBackup,
  hasAnyEdits,
  importBackup,
  resetAllEdits,
  restoreDeleted,
  editsStore,
  useDeletedItems,
} from '../utils/contentStore.js';
import { useStore } from '../utils/store.js';
import FuriganaText from '../components/FuriganaText.jsx';

export default function Backup() {
  const edits = useStore(editsStore);
  const hiddenD = useDeletedItems('dialogues');
  const hiddenQ = useDeletedItems('questions');
  const fileRef = useRef(null);
  const [msg, setMsg] = useState(null); // { ok, text }

  const count = (k) => Object.keys(edits[k].overrides).length + edits[k].custom.length;

  const doExport = () => {
    const blob = new Blob([JSON.stringify(exportBackup(), null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `jpd326-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    setMsg({ ok: true, text: 'Đã xuất file sao lưu. Hãy lưu lại file .json này ở nơi bạn muốn.' });
  };

  const doImport = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    if (!window.confirm('Nhập file sẽ THAY THẾ toàn bộ bản chỉnh sửa, tiến độ và cài đặt hiện tại. Tiếp tục?')) return;
    try {
      importBackup(await file.text());
      setMsg({ ok: true, text: `Đã nhập “${file.name}” thành công.` });
    } catch (err) {
      setMsg({ ok: false, text: err.message });
    }
  };

  const doReset = () => {
    if (window.confirm('Xoá TẤT CẢ bản chỉnh sửa (sửa, thêm mới, đã ẩn) và quay về nội dung gốc?')) {
      resetAllEdits();
      setMsg({ ok: true, text: 'Đã khôi phục toàn bộ nội dung gốc.' });
    }
  };

  return (
    <div className="stack">
      <div className="page-head">
        <h1>💾 Sao lưu bản nháp của tôi</h1>
        <p className="muted">
          Bản chỉnh sửa tự lưu trong trình duyệt này. Xuất ra file .json để giữ lại hoặc chuyển sang máy/điện thoại khác.
        </p>
      </div>

      <section className="card">
        <h3 className="sec-title">Hiện bạn có</h3>
        <ul className="plain">
          <li>Hội thoại: <b>{count('dialogues')}</b> mục đã sửa / tự thêm, <b>{hiddenD.length}</b> mục đang ẩn</li>
          <li>Câu hỏi: <b>{count('questions')}</b> mục đã sửa / tự thêm, <b>{hiddenQ.length}</b> mục đang ẩn</li>
        </ul>
        <div className="btn-row">
          <button type="button" className="btn primary" onClick={doExport}>⬇ Xuất file .json</button>
          <button type="button" className="btn" onClick={() => fileRef.current?.click()}>⬆ Nhập file .json</button>
          <input ref={fileRef} type="file" accept="application/json,.json" hidden onChange={doImport} />
          <button type="button" className="btn ghost danger" disabled={!hasAnyEdits(edits)} onClick={doReset}>
            ↺ Khôi phục toàn bộ bản gốc
          </button>
        </div>
        {msg && <div className={`notice ${msg.ok ? 'ok' : 'warn'}`}>{msg.text}</div>}
        <p className="hint">File sao lưu gồm cả bản chỉnh sửa, tiến độ “đã thuộc” và cài đặt.</p>
      </section>

      {(hiddenD.length > 0 || hiddenQ.length > 0) && (
        <section className="card">
          <h3 className="sec-title">Mục đã ẩn – khôi phục lại</h3>
          <ul className="plain">
            {hiddenD.map((d) => (
              <li key={`d${d.id}`} className="restore-row">
                <span>🎭 <FuriganaText text={d.title} /> – {d.titleVi}</span>
                <button type="button" className="btn small" onClick={() => restoreDeleted('dialogues', d.id)}>Khôi phục</button>
              </li>
            ))}
            {hiddenQ.map((q) => (
              <li key={`q${q.id}`} className="restore-row">
                <span>💬 <FuriganaText text={q.question.ja} /></span>
                <button type="button" className="btn small" onClick={() => restoreDeleted('questions', q.id)}>Khôi phục</button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
