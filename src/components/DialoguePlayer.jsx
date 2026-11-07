// ===== Phát / luyện vai một phiên bản hội thoại =====
// Hai chế độ:
//  - Xem: bong bóng chat (A trái, B phải), nút 🔊 từng câu, "Phát cả hội thoại" có highlight.
//  - Luyện vai: chọn A / B / Random. Câu của vai mình bị ẩn, máy tự đọc câu của vai kia.
import { useEffect, useMemo, useRef, useState } from 'react';
import FuriganaText from './FuriganaText.jsx';
import SpeakButton, { QueueControls } from './AudioControls.jsx';
import Recorder from './Recorder.jsx';
import { useSettings } from '../utils/settings.js';
import { useSpeech } from '../utils/speech.js';

function Bubble({ line, id, active, hidden, onReveal, revealed, mine }) {
  const { showVi } = useSettings();
  const side = line.speaker === 'A' ? 'left' : 'right';

  if (hidden && !revealed) {
    return (
      <div className={`bubble-row ${side}`}>
        <div className="bubble mine-hidden">
          <span className="spk">{line.speaker}</span>
          <span>🎤 Lượt của bạn</span>
          <button type="button" className="btn small ghost" onClick={onReveal}>
            Xem gợi ý
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={`bubble-row ${side}`}>
      <div className={`bubble ${active ? 'playing' : ''} ${mine ? 'mine' : ''}`}>
        <span className="spk">{line.speaker}</span>
        <div className="bubble-body">
          <div className="javi-ja">
            <SpeakButton text={line.ja} id={id} role={line.speaker} small />
            <FuriganaText text={line.ja} />
          </div>
          {showVi && line.vi && <div className="vi">{line.vi}</div>}
        </div>
      </div>
    </div>
  );
}

export default function DialoguePlayer({ version, fixedRole = null, startInPractice = false }) {
  const lines = version.lines;
  const [mode, setMode] = useState(startInPractice ? 'practice' : 'view');

  return (
    <div className="dialogue-player">
      {!fixedRole && (
        <div className="tabs">
          <button type="button" className={`tab ${mode === 'view' ? 'on' : ''}`} onClick={() => setMode('view')}>
            👀 Xem
          </button>
          <button type="button" className={`tab ${mode === 'practice' ? 'on' : ''}`} onClick={() => setMode('practice')}>
            🎭 Luyện vai
          </button>
        </div>
      )}
      {mode === 'view' ? (
        <ViewMode version={version} lines={lines} />
      ) : (
        <PracticeMode key={version.id} version={version} lines={lines} fixedRole={fixedRole} />
      )}
    </div>
  );
}

// ---------------- Chế độ Xem ----------------
function ViewMode({ version, lines }) {
  const { playItems, stop, pause, resume, playingKey, paused } = useSpeech();
  const prefix = `${version.id}-v-`;
  const playing = playingKey !== null && String(playingKey).startsWith(prefix);

  const playAll = () =>
    playItems(lines.map((l, i) => ({ text: l.ja, role: l.speaker, key: prefix + i })));

  return (
    <div>
      <div className="player-bar">
        <QueueControls
          playing={playing}
          paused={paused}
          onPlay={playAll}
          onPause={pause}
          onResume={resume}
          onStop={stop}
          playLabel="Phát cả hội thoại"
        />
      </div>
      <div className="chat">
        {lines.map((l, i) => (
          <Bubble key={i} line={l} id={prefix + i} active={playingKey === prefix + i} />
        ))}
      </div>
    </div>
  );
}

// ---------------- Chế độ Luyện vai ----------------
function PracticeMode({ version, lines, fixedRole }) {
  const { speak, stop } = useSpeech();
  const [roleChoice, setRoleChoice] = useState(fixedRole || 'A'); // 'A' | 'B' | 'R'
  const [myRole, setMyRole] = useState(fixedRole || null); // vai đã chốt khi bắt đầu
  const [step, setStep] = useState(fixedRole ? 0 : -1); // -1 = chưa bắt đầu
  const [revealed, setRevealed] = useState({});
  const [bump, setBump] = useState(0); // đổi để chạy lại hiệu ứng đọc khi "Làm lại"
  const endRef = useRef(null);
  const prefix = `${version.id}-p-`;

  const started = step >= 0;
  const finished = started && step >= lines.length;

  const begin = () => {
    stop();
    const r = roleChoice === 'R' ? (Math.random() < 0.5 ? 'A' : 'B') : roleChoice;
    setMyRole(r);
    setRevealed({});
    setStep(0);
    setBump((b) => b + 1);
  };
  const restart = () => {
    stop();
    setStep(-1);
    if (!fixedRole) setMyRole(null);
    setRevealed({});
  };

  // Tới lượt của vai kia -> máy tự đọc, đọc xong tự sang câu kế
  useEffect(() => {
    if (!started || finished || !myRole) return;
    const line = lines[step];
    if (line.speaker !== myRole) {
      speak(line.ja, { key: prefix + step, role: line.speaker, onDone: () => setStep((s) => s + 1) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, started, myRole, bump]);

  // Tự cuộn xuống câu mới
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [step]);

  const visible = useMemo(() => (started ? lines.slice(0, Math.min(step + 1, lines.length)) : []), [started, step, lines]);

  if (!started) {
    return (
      <div className="practice-setup">
        <p className="muted">
          Chọn vai của bạn. Câu thoại của vai bạn sẽ bị ẩn (có thể xem gợi ý), máy sẽ tự đọc câu của vai còn lại.
        </p>
        <div className="chips">
          {[
            ['A', 'Vai A'],
            ['B', 'Vai B'],
            ['R', '🎲 Random'],
          ].map(([v, label]) => (
            <button key={v} type="button" className={`chip big ${roleChoice === v ? 'on' : ''}`} onClick={() => setRoleChoice(v)}>
              {label}
            </button>
          ))}
        </div>
        <button type="button" className="btn primary" onClick={begin}>
          ▶ Bắt đầu luyện
        </button>
      </div>
    );
  }

  const cur = lines[step];
  const myTurn = !finished && cur.speaker === myRole;

  return (
    <div>
      <div className="player-bar">
        <span className="role-pill">Bạn đóng vai {myRole}</span>
        <button type="button" className="btn small ghost" onClick={restart}>
          ↺ Làm lại
        </button>
      </div>
      <div className="chat">
        {visible.map((l, i) => {
          const mine = l.speaker === myRole;
          return (
            <Bubble
              key={i}
              line={l}
              id={prefix + i}
              active={false}
              mine={mine}
              hidden={mine && !finished}
              revealed={!!revealed[i]}
              onReveal={() => setRevealed((r) => ({ ...r, [i]: true }))}
            />
          );
        })}
        <div ref={endRef} />
      </div>

      {myTurn && (
        <div className="my-turn">
          <Recorder key={step} label="Ghi âm lượt của bạn" compact />
          <button type="button" className="btn primary" onClick={() => setStep((s) => s + 1)}>
            Tiếp ➜
          </button>
        </div>
      )}
      {!myTurn && !finished && <div className="muted center">🔊 Đang nghe đối phương…</div>}
      {finished && (
        <div className="notice ok">
          🎉 Hoàn thành! Bạn đã luyện hết hội thoại. Hãy thử đổi vai hoặc luyện lại cho trôi chảy hơn nhé.
        </div>
      )}
    </div>
  );
}
