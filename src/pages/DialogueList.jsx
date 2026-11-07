import { Link, useNavigate } from 'react-router-dom';
import FuriganaText from '../components/FuriganaText.jsx';
import { DraftBadge } from '../components/EditToolbar.jsx';
import { addCustom, blankDialogue, useContent } from '../utils/contentStore.js';
import { useProgress } from '../utils/progress.js';
import { useSettings } from '../utils/settings.js';

export default function DialogueList() {
  const items = useContent('dialogues');
  const p = useProgress();
  const { showVi } = useSettings();
  const nav = useNavigate();

  const addNew = () => {
    const d = blankDialogue();
    addCustom('dialogues', d);
    nav(`/dialogues/${d.id}`, { state: { edit: true } });
  };

  return (
    <div className="stack">
      <div className="page-head">
        <h1>🎭 Hội thoại role-play</h1>
        <p className="muted">Chọn một tình huống để xem hội thoại, nghe đọc và luyện đóng vai.</p>
      </div>
      <div className="card-grid">
        {items.map((d) => {
          const done = p.isDone('dialogues', d.id);
          return (
            <Link key={d.id} to={`/dialogues/${d.id}`} className="card link-card">
              <div className="card-top">
                <span className="lesson">{d.lesson ? `第${d.lesson}課` : 'Tự thêm'}</span>
                <div className="badges">
                  <DraftBadge item={d} />
                  {done && <span className="badge ok">✓ Đã thuộc</span>}
                </div>
              </div>
              <h3 className="ja-title"><FuriganaText text={d.title} /></h3>
              {showVi && <div className="vi">{d.titleVi}</div>}
              <div className="muted small">{d.versions.length} phiên bản hội thoại</div>
            </Link>
          );
        })}
        <button type="button" className="card add-card" onClick={addNew}>
          <span className="add-plus">＋</span>
          <span>Thêm hội thoại mới</span>
        </button>
      </div>
    </div>
  );
}
