import { Link } from 'react-router-dom';
import { useContent } from '../utils/contentStore.js';
import { useProgress } from '../utils/progress.js';

function Bar({ label, done, total }) {
  const pct = total ? Math.round((done / total) * 100) : 0;
  return (
    <div className="progress">
      <div className="progress-head">
        <span>{label}</span>
        <b>
          {done}/{total}
        </b>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function Home() {
  const dialogues = useContent('dialogues');
  const questions = useContent('questions');
  const p = useProgress();

  return (
    <div className="stack">
      <section className="hero card">
        <h1>Ôn thi Speaking tiếng Nhật <span className="pill">JPD326</span></h1>
        <p className="muted">
          Luyện hội thoại role-play và trả lời câu hỏi với âm thanh, furigana và nghĩa tiếng Việt. Ôn mọi lúc, kể cả trên điện thoại.
        </p>
        <div className="btn-row">
          <Link className="btn primary" to="/dialogues">🎭 Luyện hội thoại</Link>
          <Link className="btn" to="/questions">💬 Luyện hỏi đáp</Link>
          <Link className="btn" to="/exam">⏱ Thi thử</Link>
        </div>
      </section>

      <section className="card">
        <h2 className="sec-title">📋 Cấu trúc đề thi thật</h2>
        <div className="score-grid">
          <div className="score-box">
            <div className="score-num">60<small>điểm</small></div>
            <b>Phần 1 – Hội thoại role-play 1-1</b>
            <p>Đóng vai trong tình huống với giám khảo. Sinh viên <u>không</u> được chọn vai A/B.</p>
          </div>
          <div className="score-box">
            <div className="score-num">30<small>điểm</small></div>
            <b>Phần 2 – Trả lời 2 câu hỏi</b>
            <p>1 câu chuẩn bị trước (20đ) + 1 câu phản xạ (10đ).</p>
          </div>
          <div className="score-box">
            <div className="score-num">10<small>điểm</small></div>
            <b>Điểm thể hiện</b>
            <p>Ngữ điệu, trọng âm, độ tự nhiên khi nói.</p>
          </div>
        </div>
        <p className="hint">💡 Mỗi câu hỏi chỉ cần trả lời ngắn gọn 2–3 câu, đủ ý cơ bản.</p>
      </section>

      <section className="card">
        <h2 className="sec-title">🎓 Lưu ý khi ôn (theo hướng dẫn của môn)</h2>
        <ul className="notes">
          <li>Hiểu đúng và đủ các đoạn hội thoại mẫu trong sách (mục やってみよう, các bài 6-7-8-10) để vận dụng vào role-play.</li>
          <li>Từ mới (nếu có) sẽ được cung cấp trong đề thi.</li>
          <li>Tập nói theo hội thoại mẫu và học tốt từ vựng theo các chủ đề của bài học, vì các câu hỏi ở phần 2 đều được xây dựng theo chủ đề trong sách.</li>
          <li>Sinh viên không bắt buộc phải dùng đúng những cấu trúc được gợi ý; việc hiểu và trả lời đúng câu hỏi trong phòng thi được tính là đạt. Tuy nhiên, những lối diễn đạt được giới thiệu rất thuận lợi cho việc vận dụng để trả lời các câu hỏi.</li>
          <li>Câu hỏi có rất nhiều cách trả lời, chỉ cần nói ngắn gọn 2-3 câu, đủ ý cơ bản. Không cần diễn giải phức tạp.</li>
        </ul>
      </section>

      <section className="card">
        <h2 className="sec-title">📈 Tiến độ của bạn</h2>
        <Bar label="Hội thoại đã thuộc" done={p.count('dialogues', dialogues.map((d) => String(d.id)))} total={dialogues.length} />
        <Bar label="Câu hỏi đã thuộc" done={p.count('questions', questions.map((q) => String(q.id)))} total={questions.length} />
      </section>

      <section className="card">
        <h2 className="sec-title">✏️ Tự chỉnh sửa nội dung</h2>
        <p className="muted">
          Mỗi hội thoại và câu hỏi đều có nút <b>Chỉnh sửa</b>: bạn có thể sửa, thêm, xoá nội dung theo ý mình. Bản sửa được lưu
          trong trình duyệt (gắn nhãn “Bản nháp của tôi”) và có thể xuất ra file ở trang <Link to="/backup">Sao lưu</Link>.
        </p>
      </section>
    </div>
  );
}
