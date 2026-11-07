import ExamMode from '../components/ExamMode.jsx';

export default function Exam() {
  return (
    <div className="stack">
      <div className="page-head">
        <h1>⏱ Thi thử Speaking</h1>
        <p className="muted">Mô phỏng đề thi thật: 1 hội thoại + 2 câu hỏi, có đồng hồ đếm ngược và ghi âm.</p>
      </div>
      <ExamMode />
    </div>
  );
}
