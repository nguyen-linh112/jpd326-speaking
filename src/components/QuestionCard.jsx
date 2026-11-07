// ===== Chi tiết một câu hỏi đáp (質問) =====
// Gồm: câu hỏi, gợi ý ý trả lời, từng mẫu câu kèm ví dụ + nghĩa Việt, 2 bài mẫu, từ vựng.
import JaVi, { VocabList } from './JaVi.jsx';
import FuriganaText from './FuriganaText.jsx';
import SpeakButton, { QueueControls } from './AudioControls.jsx';
import Recorder from './Recorder.jsx';
import { useSettings } from '../utils/settings.js';
import { useSpeech } from '../utils/speech.js';

export function QuestionHeader({ q, idPrefix = 'q' }) {
  return (
    <section className="card question-main">
      <JaVi item={q.question} id={`${idPrefix}-${q.id}-main`} className="big" />
      {q.note && <div className="notice info small">{q.note}</div>}
    </section>
  );
}

export function GuideBlock({ q }) {
  if (!q.guide?.length) return null;
  return (
    <section className="card">
      <h3 className="sec-title">💡 Gợi ý ý trả lời</h3>
      <ol className="guide-list">
        {q.guide.map((g, i) => (
          <li key={i}>
            <JaVi item={g} id={`g-${q.id}-${i}`} />
          </li>
        ))}
      </ol>
      <p className="hint">
        Các lối diễn đạt gợi ý chỉ mang tính tham khảo, không bắt buộc dùng hết – chỉ cần dùng cách bạn thấy phù hợp.
        Mỗi câu chỉ cần trả lời ngắn gọn 2–3 câu, đủ ý cơ bản, không cần diễn giải phức tạp.
      </p>
    </section>
  );
}

function SampleAnswer({ qid, sample, index }) {
  const { playItems, stop, pause, resume, playingKey, paused } = useSpeech();
  const prefix = `sa-${qid}-${index}-`;
  const playing = playingKey !== null && String(playingKey).startsWith(prefix);
  return (
    <div className="sample">
      <div className="sample-head">
        <h4>{sample.title || `Mẫu ${index + 1}`}</h4>
        <QueueControls
          playing={playing}
          paused={paused}
          onPlay={() => playItems(sample.lines.map((l, i) => ({ text: l.ja, key: prefix + i })))}
          onPause={pause}
          onResume={resume}
          onStop={stop}
          playLabel="Đọc cả bài"
        />
      </div>
      {sample.lines.map((l, i) => (
        <div key={i} className={`sample-line ${playingKey === prefix + i ? 'playing' : ''}`}>
          <JaVi item={l} id={prefix + i} />
        </div>
      ))}
    </div>
  );
}

export function ExpressionsBlock({ q }) {
  const { showVi } = useSettings();
  if (!q.expressions?.length) return null;
  return (
    <section className="card">
      <h3 className="sec-title">🧩 Mẫu câu gợi ý (使われる言葉や文型・表現)</h3>
      <div className="expr-list">
        {q.expressions.map((e, i) => (
          <div className="expr" key={i}>
            <div className="expr-head">
              <FuriganaText text={e.pattern} className="expr-pattern" />
              {showVi && e.meaning && <span className="expr-meaning">= {e.meaning}</span>}
            </div>
            {e.examples?.map((ex, j) => (
              <div className="expr-example" key={j}>
                <JaVi item={ex} id={`ex-${q.id}-${i}-${j}`} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export function SamplesBlock({ q }) {
  if (!q.sampleAnswers?.length) return null;
  return (
    <section className="card">
      <h3 className="sec-title">✅ Bài trả lời mẫu</h3>
      {q.sampleAnswers.map((s, i) => (
        <SampleAnswer key={i} qid={q.id} sample={s} index={i} />
      ))}
    </section>
  );
}

/** Hiển thị đầy đủ một câu hỏi. */
export default function QuestionCard({ q }) {
  return (
    <div className="stack">
      <QuestionHeader q={q} />
      <GuideBlock q={q} />
      <ExpressionsBlock q={q} />
      <SamplesBlock q={q} />
      <VocabList vocab={q.vocab} />
      <section className="card">
        <h3 className="sec-title">🎙 Luyện nói</h3>
        <p className="muted">Tự trả lời câu hỏi bằng giọng của bạn rồi nghe lại để so với bài mẫu.</p>
        <Recorder label="Ghi âm câu trả lời" />
      </section>
    </div>
  );
}
