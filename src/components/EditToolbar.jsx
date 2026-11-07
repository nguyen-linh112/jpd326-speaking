// ===== Thanh nút Sửa / Khôi phục bản gốc / Xoá cho một mục =====
import { deleteItem, restoreOriginal } from '../utils/contentStore.js';

export function DraftBadge({ item }) {
  if (item.custom) return <span className="badge draft">Bản nháp của tôi · mới thêm</span>;
  if (item.edited) return <span className="badge draft">Bản nháp của tôi</span>;
  return null;
}

export default function EditToolbar({ kind, item, onEdit, onDeleted }) {
  const del = () => {
    const msg = item.custom
      ? 'Xoá hẳn mục tự thêm này? Không thể hoàn tác.'
      : 'Ẩn mục này khỏi danh sách? (Bạn có thể khôi phục lại ở trang Sao lưu).';
    if (window.confirm(msg)) {
      deleteItem(kind, item);
      onDeleted?.();
    }
  };
  const restore = () => {
    if (window.confirm('Bỏ toàn bộ chỉnh sửa của bạn và quay về nội dung gốc?')) restoreOriginal(kind, item.id);
  };
  return (
    <div className="btn-row edit-toolbar">
      <button type="button" className="btn small" onClick={onEdit}>
        ✏️ Chỉnh sửa
      </button>
      {item.edited && (
        <button type="button" className="btn small ghost" onClick={restore}>
          ↺ Khôi phục bản gốc
        </button>
      )}
      <button type="button" className="btn small ghost danger" onClick={del}>
        🗑 {item.custom ? 'Xoá' : 'Ẩn'}
      </button>
    </div>
  );
}
