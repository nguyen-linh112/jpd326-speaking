// ===== Các ô nhập dùng trong chế độ chỉnh sửa =====
import FuriganaText from '../FuriganaText.jsx';

/** Ô nhập tiếng Nhật (hỗ trợ {漢字|かんじ}) + ô nghĩa Việt + xem trước furigana. */
export function JaViEdit({ value, onChange, jaLabel = 'Tiếng Nhật', viLabel = 'Nghĩa tiếng Việt', rows = 2 }) {
  const set = (patch) => onChange({ ...value, ...patch });
  return (
    <div className="jvedit">
      <label className="field">
        <span>{jaLabel}</span>
        <textarea
          className="ja"
          rows={rows}
          value={value.ja}
          placeholder="Ví dụ: {体調|たいちょう}を{崩|くず}してしまいました。"
          onChange={(e) => set({ ja: e.target.value })}
        />
      </label>
      {value.ja && (
        <div className="preview">
          <span className="preview-tag">Xem trước</span>
          <FuriganaText text={value.ja} forceFurigana />
        </div>
      )}
      <label className="field">
        <span>{viLabel}</span>
        <input type="text" value={value.vi || ''} onChange={(e) => set({ vi: e.target.value })} />
      </label>
    </div>
  );
}

export function TextField({ label, value, onChange, type = 'text', placeholder = '' }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input
        type={type}
        value={value ?? ''}
        placeholder={placeholder}
        onChange={(e) => onChange(type === 'number' ? Number(e.target.value) : e.target.value)}
      />
    </label>
  );
}

/**
 * Trình sửa danh sách tổng quát: thêm / xoá / đổi thứ tự.
 * render(item, update) trả về phần nhập liệu cho từng phần tử.
 */
export function ListEditor({ items, onChange, newItem, render, addLabel = '＋ Thêm', itemLabel }) {
  const update = (i, next) => onChange(items.map((it, idx) => (idx === i ? next : it)));
  const remove = (i) => onChange(items.filter((_, idx) => idx !== i));
  const move = (i, d) => {
    const j = i + d;
    if (j < 0 || j >= items.length) return;
    const arr = [...items];
    [arr[i], arr[j]] = [arr[j], arr[i]];
    onChange(arr);
  };
  return (
    <div className="list-editor">
      {items.map((it, i) => (
        <div className="list-item" key={i}>
          <div className="list-item-bar">
            <span className="list-item-no">{itemLabel ? itemLabel(it, i) : `#${i + 1}`}</span>
            <div className="btn-row">
              <button type="button" className="icon-btn" onClick={() => move(i, -1)} title="Lên" disabled={i === 0}>
                ↑
              </button>
              <button type="button" className="icon-btn" onClick={() => move(i, 1)} title="Xuống" disabled={i === items.length - 1}>
                ↓
              </button>
              <button type="button" className="icon-btn danger" onClick={() => remove(i)} title="Xoá">
                ✕
              </button>
            </div>
          </div>
          {render(it, (next) => update(i, next), i)}
        </div>
      ))}
      <button type="button" className="btn small" onClick={() => onChange([...items, newItem()])}>
        {addLabel}
      </button>
    </div>
  );
}

export function VocabEdit({ items, onChange }) {
  return (
    <ListEditor
      items={items}
      onChange={onChange}
      addLabel="＋ Thêm từ vựng"
      newItem={() => ({ word: '', reading: '', meaning: '' })}
      itemLabel={(it, i) => it.word || `Từ ${i + 1}`}
      render={(it, up) => (
        <div className="grid3">
          <TextField label="Từ" value={it.word} onChange={(v) => up({ ...it, word: v })} />
          <TextField label="Cách đọc (hiragana)" value={it.reading} onChange={(v) => up({ ...it, reading: v })} />
          <TextField label="Nghĩa tiếng Việt" value={it.meaning} onChange={(v) => up({ ...it, meaning: v })} />
        </div>
      )}
    />
  );
}

export function JaViListEdit({ items, onChange, addLabel = '＋ Thêm câu', rows = 2 }) {
  return (
    <ListEditor
      items={items}
      onChange={onChange}
      addLabel={addLabel}
      newItem={() => ({ ja: '', vi: '' })}
      render={(it, up) => <JaViEdit value={it} onChange={up} rows={rows} />}
    />
  );
}
