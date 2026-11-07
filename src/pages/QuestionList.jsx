import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FuriganaText from '../components/FuriganaText.jsx';
import { DraftBadge } from '../components/EditToolbar.jsx';
import { addCustom, blankQuestion, useContent } from '../utils/contentStore.js';
import { useProgress } from '../utils/progress.js';
import { useSettings } from '../utils/settings.js';

export default function QuestionList() {
  const items = useContent('questions');
  const p = useProgress();
  const { showVi } = useSettings();
  const nav = useNavigate();
  const [lesson, setLesson] = useState('all');

  const lessons = useMemo(
    () => [...new Set(items.map((q) => q.lesson).filter(Boolean))].sort((a, b) => a - b),
    [items],
  );
  const shown = items.filter((q) => lesson === 'all' || q.lesson === Number(lesson));

  const addNew = () => {
    const q = blankQuestion();
    addCustom('questions', q);
    nav(`/questions/${q.id}`, { state: { edit: true } });
  };

  return (
    <div className="stack">
      <div className="page-head">
        <h1>💬 Hỏi đáp (質問)</h1>
        <p className="muted">Mỗi câu có gợi ý, mẫu câu kèm ví dụ, 2 bài trả lời mẫu và từ vựng.</p>
      </div>

      <div className="chips">
        <button type="button" className={`chip ${lesson === 'all' ? 'on' : ''}`} onClick={() => setLesson('all')}>
          Tất cả
        </button>
        {lessons.map((l) => (
          <button key={l} type="button" className={`chip ${String(l) === String(lesson) ? 'on' : ''}`} onClick={() => setLesson(l)}>
            第{l}課
          </button>
        ))}
      </div>

      <div className="list">
        {shown.map((q) => {
          const num = items.indexOf(q) + 1;
          return (
            <Link key={q.id} to={`/questions/${q.id}`} className="card link-card q-row">
              <div className="q-num">{num}</div>
              <div className="q-body">
                <div className="card-top">
                  <span className="lesson">{q.lesson ? `第${q.lesson}課` : 'Tự thêm'}</span>
                  <div className="badges">
                    <DraftBadge item={q} />
                    {p.isDone('questions', q.id) && <span className="badge ok">✓ Đã thuộc</span>}
                  </div>
                </div>
                <FuriganaText text={q.question.ja} className="q-text" />
                {showVi && <div className="vi">{q.question.vi}</div>}
              </div>
            </Link>
          );
        })}
        <button type="button" className="card add-card" onClick={addNew}>
          <span className="add-plus">＋</span>
          <span>Thêm câu hỏi mới</span>
        </button>
      </div>
    </div>
  );
}
