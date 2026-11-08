// ===== Chế độ thi thử =====
// Random 1 hội thoại + 1 vai + 2 câu hỏi. Có đồng hồ đếm ngược chuẩn bị / nói,
// ghi âm toàn bộ phần nói và cho nghe lại + xem đáp án mẫu ở cuối bài.
import { useEffect, useRef, useState } from 'react';
import DialoguePlayer from './DialoguePlayer.jsx';
import JaVi from './JaVi.jsx';
import ZoomImage from './ZoomImage.jsx';
import { ExpressionsBlock, GuideBlock, QuestionHeader, SamplesBlock } from './QuestionCard.jsx';
import { useRecorder } from '../hooks/useRecorder.js';
import { isPending, useContent } from '../utils/contentStore.js';
import { useSettings } from '../utils/settings.js';
import { stop as stopSpeech } from '../utils/speech.js';

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
const fmt = (s) => `${String(Math.floor(Math.max(0, s) / 60)).padStart(2, '0')}:${String(Math.max(0, s) % 60).padStart(2, '0')}`;

function Countdown({ sec, onEnd, kind }) {
  const [left, setLeft] = useState(sec);
  const endRef = useRef(onEnd);
  const fired = useRef(false);
  endRef.current = onEnd;

  useEffect(() => {
    const t = setInterval(() => setLeft((l) => l - 1), 1000);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    if (left <= 0 && !fired.current) {
      fired.current = true;
      endRef.current();
    }
  }, [left]);

  const pct = Math.max(0, (left / sec) * 100);
  return (
    <div className={`countdown ${kind} ${left <= 10 ? 'urgent' : ''}`}>
      <div className="count-num">{fmt(left)}</div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function ExamMode() {
  const dialogues = useContent('dialogues');
  const questions = useContent('questions');
  const settings = useSettings();
  const rec = useRecorder();

  const [exam, setExam] = useState(null); // { dialogue, version, role, q1, q2, steps }
  const [stage, setStage] = useState('intro'); // intro | run | review
  const [stepIdx, setStepIdx] = useState(0);
  const [micOk, setMicOk] = useState(false);
  const [useBot, setUseBot] = useState(false);
  const [wantRec, setWantRec] = useState(true);

  const usable = dialogues.filter((d) => d.versions.some((v) => !isPending(v)));
  const canExam = usable.length > 0 && questions.length >= 2;

  const start = async () => {
    stopSpeech();
    const dialogue = pick(usable);
    const version = pick(dialogue.versions.filter((v) => !isPending(v)));
    const [q1, q2] = shuffle(questions);
    const { prepSec, dialogueSec, questionSec } = settings;
    const steps = [
      { key: 'd-prep', kind: 'prep', part: 'd', sec: prepSec, title: 'Phần 1 · Hội thoại – Chuẩn bị' },
      { key: 'd-talk', kind: 'talk', part: 'd', sec: dialogueSec, title: 'Phần 1 · Hội thoại – Nói' },
      { key: 'q1-prep', kind: 'prep', part: 'q1', sec: prepSec, title: 'Phần 2 · Câu hỏi 1 (chuẩn bị trước) – Chuẩn bị' },
      { key: 'q1-talk', kind: 'talk', part: 'q1', sec: questionSec, title: 'Phần 2 · Câu hỏi 1 – Nói' },
      { key: 'q2-talk', kind: 'talk', part: 'q2', sec: questionSec, title: 'Phần 2 · Câu hỏi 2 (phản xạ) – Nói ngay' },
    ];
    setExam({ dialogue, version, role: Math.random() < 0.5 ? 'A' : 'B', q1, q2, steps });
    setStepIdx(0);
    setUseBot(false);
    setMicOk(false);
    if (wantRec) {
      const ok = await rec.start();
      if (ok) {
        rec.pause(); // bắt đầu bằng giai đoạn chuẩn bị -> chưa ghi
        setMicOk(true);
      }
    }
    setStage('run');
  };

  // Chỉ ghi âm ở các bước "nói", tạm dừng ở bước chuẩn bị
  const step = exam?.steps[stepIdx];
  useEffect(() => {
    if (stage !== 'run' || !micOk || !step) return;
    if (step.kind === 'talk') rec.resume();
    else rec.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, micOk, stepIdx]);

  const next = () => {
    stopSpeech();
    if (stepIdx + 1 >= exam.steps.length) {
      if (micOk) rec.stop();
      setStage('review');
    } else {
      setStepIdx((i) => i + 1);
    }
  };
  const abort = () => {
    stopSpeech();
    rec.reset();
    setStage('intro');
    setExam(null);
  };

  // ---------------- Màn hình bắt đầu ----------------
  if (stage === 'intro') {
    return (
      <div className="stack">
        <section className="card">
          <h2 className="sec-title">⏱ Quy trình thi thử</h2>
          <ol className="steps-list">
            <li>Random 1 hội thoại + 1 vai (bạn <u>không</u> được chọn vai, giống thi thật).</li>
            <li>Phần 1: chuẩn bị <b>{settings.prepSec}s</b> → nói <b>{fmt(settings.dialogueSec)}</b>.</li>
            <li>Phần 2 – câu 1: chuẩn bị <b>{settings.prepSec}s</b> → nói <b>{settings.questionSec}s</b> (có gợi ý).</li>
            <li>Phần 2 – câu 2 (phản xạ): nói ngay <b>{settings.questionSec}s</b>, chỉ hiện câu hỏi, không có gợi ý.</li>
            <li>Cuối bài: nghe lại bản ghi âm và xem đáp án mẫu để tự so sánh.</li>
          </ol>
          <p className="hint">Có thể chỉnh thời gian trong mục ⚙ Cài đặt ở trên.</p>
          <label className="check">
            <input type="checkbox" checked={wantRec} onChange={(e) => setWantRec(e.target.checked)} />
            Ghi âm toàn bộ phần nói (cần cho phép micro)
          </label>
          {!canExam && (
            <div className="notice warn">
              Cần ít nhất 1 hội thoại có nội dung và 2 câu hỏi để thi thử. Hãy kiểm tra lại phần chỉnh sửa/xoá.
            </div>
          )}
          <button type="button" className="btn primary big" disabled={!canExam} onClick={start}>
            ▶ Bắt đầu thi thử
          </button>
        </section>
      </div>
    );
  }

  // ---------------- Đang thi ----------------
  if (stage === 'run' && exam && step) {
    const { dialogue: d, version, role } = exam;
    const roleBox = role === 'A' ? d.roleA : d.roleB;
    const q = step.part === 'q1' ? exam.q1 : exam.q2;
    return (
      <div className="stack">
        <section className="card exam-head">
          <div className="exam-step">
            <span className="pill">{stepIdx + 1}/{exam.steps.length}</span>
            <b>{step.title}</b>
          </div>
          <Countdown key={step.key} sec={step.sec} kind={step.kind} onEnd={next} />
          <div className="btn-row between">
            <span className="muted small">
              {step.kind === 'prep' ? '📝 Đang chuẩn bị – chưa ghi âm' : micOk ? (rec.paused ? '⏸ Chưa ghi' : '🔴 Đang ghi âm') : '🗣 Hãy nói to rõ ràng'}
            </span>
            <div className="btn-row">
              <button type="button" className="btn primary" onClick={next}>
                {step.kind === 'prep' ? 'Sẵn sàng, nói luôn ➜' : 'Xong, tiếp ➜'}
              </button>
              <button type="button" className="btn ghost danger" onClick={abort}>Dừng thi</button>
            </div>
          </div>
          {rec.error && <div className="notice warn small">{rec.error} Bạn vẫn có thể thi thử mà không ghi âm.</div>}
        </section>

        {step.part === 'd' && (
          <>
            <section className="card">
              <div className="card-top">
                <span className="lesson">{d.lesson ? `第${d.lesson}課` : ''}</span>
                <span className="role-pill big">Bạn đóng vai {role}</span>
              </div>
              <ZoomImage src={d.promptImages?.[role]} alt={`Đề bài vai ${role}`} maxWidth={700} />
              <JaVi item={roleBox} id={`exam-role-${d.id}`} />
              {d.info?.length > 0 && (
                <div className="info-box">
                  <b>ℹ️ Thông tin</b>
                  {d.info.map((it, i) => (
                    <JaVi key={i} item={it} id={`exam-info-${i}`} />
                  ))}
                </div>
              )}
            </section>
            {step.kind === 'talk' && (
              <section className="card">
                <label className="check">
                  <input type="checkbox" checked={useBot} onChange={(e) => setUseBot(e.target.checked)} />
                  Để máy đóng vai đối phương theo hội thoại mẫu (tuỳ chọn)
                </label>
                {useBot && <DialoguePlayer version={version} fixedRole={role} />}
              </section>
            )}
          </>
        )}

        {step.part !== 'd' && (
          <>
            <QuestionHeader q={q} idPrefix="exam" />
            {step.part === 'q1' ? (
              <GuideBlock q={q} />
            ) : (
              <div className="notice info">⚡ Câu phản xạ: không có gợi ý – hãy trả lời ngay trong 2–3 câu.</div>
            )}
          </>
        )}
      </div>
    );
  }

  // ---------------- Kết quả ----------------
  const { dialogue: d, version, role, q1, q2 } = exam;
  return (
    <div className="stack">
      <section className="card">
        <h2 className="sec-title">🎉 Hoàn thành bài thi thử</h2>
        {micOk ? (
          rec.url ? (
            <>
              <p className="muted">Nghe lại phần nói của bạn (chỉ lưu tạm trong trình duyệt, không upload):</p>
              <audio className="rec-audio" controls src={rec.url} />
            </>
          ) : (
            <p className="muted">Đang xử lý bản ghi âm…</p>
          )
        ) : (
          <p className="muted">Lần này không có bản ghi âm.</p>
        )}
        <div className="btn-row">
          <button type="button" className="btn primary" onClick={() => { rec.reset(); setStage('intro'); setExam(null); }}>
            ↺ Thi lại (random mới)
          </button>
        </div>
      </section>

      <section className="card">
        <h3 className="sec-title">Phần 1 · Đáp án mẫu hội thoại</h3>
        <p className="muted">Bạn đã đóng vai <b>{role}</b> – “{version.label}”.</p>
        <DialoguePlayer version={version} />
      </section>

      {[q1, q2].map((q, i) => (
        <section key={q.id} className="stack">
          <h3 className="sec-title pad">Phần 2 · Câu {i + 1} {i === 1 ? '(phản xạ)' : ''}</h3>
          <QuestionHeader q={q} idPrefix={`res${i}`} />
          <GuideBlock q={q} />
          <ExpressionsBlock q={q} />
          <SamplesBlock q={q} />
        </section>
      ))}
    </div>
  );
}
