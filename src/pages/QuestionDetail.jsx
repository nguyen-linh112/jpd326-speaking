import { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import QuestionEditor from '../components/Editor/QuestionEditor.jsx';
import EditToolbar, { DraftBadge } from '../components/EditToolbar.jsx';
import QuestionCard from '../components/QuestionCard.jsx';
import { findById, saveItem, useContent } from '../utils/contentStore.js';
import { toggleDone, useProgress } from '../utils/progress.js';

export default function QuestionDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const location = useLocation();
  const items = useContent('questions');
  const q = findById(items, id);
  const p = useProgress();
  const [editing, setEditing] = useState(!!location.state?.edit);

  if (!q) {
    return (
      <div className="card">
        <p>Không tìm thấy câu hỏi này.</p>
        <Link className="btn" to="/questions">← Về danh sách</Link>
      </div>
    );
  }

  if (editing) {
    return (
      <QuestionEditor
        initial={q}
        onCancel={() => setEditing(false)}
        onSave={(next) => {
          saveItem('questions', next);
          setEditing(false);
        }}
      />
    );
  }

  const done = p.isDone('questions', q.id);
  const idx = items.indexOf(q);

  return (
    <div className="stack">
      <Link to="/questions" className="back">← Danh sách câu hỏi</Link>
      <section className="card">
        <div className="card-top">
          <span className="lesson">
            {q.lesson ? `第${q.lesson}課` : 'Tự thêm'} · Câu {idx + 1}
          </span>
          <DraftBadge item={q} />
        </div>
        <div className="btn-row between">
          <button type="button" className={`btn ${done ? 'ok' : ''}`} onClick={() => toggleDone('questions', q.id)}>
            {done ? '✓ Đã thuộc' : 'Đánh dấu đã thuộc'}
          </button>
          <EditToolbar kind="questions" item={q} onEdit={() => setEditing(true)} onDeleted={() => nav('/questions')} />
        </div>
      </section>
      <QuestionCard q={q} />
      <div className="btn-row between">
        {idx > 0 ? <Link className="btn" to={`/questions/${items[idx - 1].id}`}>← Câu trước</Link> : <span />}
        {idx < items.length - 1 ? <Link className="btn" to={`/questions/${items[idx + 1].id}`}>Câu sau →</Link> : <span />}
      </div>
    </div>
  );
}
