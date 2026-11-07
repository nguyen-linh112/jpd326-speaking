// ===== Thanh cài đặt dùng chung (lưu localStorage) =====
import { useState } from 'react';
import { updateSettings, useSettings } from '../utils/settings.js';
import { useSpeech } from '../utils/speech.js';

const RATES = [0.6, 0.8, 1, 1.2];

function Toggle({ checked, onChange, children }) {
  return (
    <label className="toggle">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span className="toggle-ui" />
      <span>{children}</span>
    </label>
  );
}

function SecInput({ label, value, onChange }) {
  return (
    <label className="sec-input">
      <span>{label}</span>
      <input
        type="number"
        min="5"
        max="900"
        value={value}
        onChange={(e) => onChange(Math.max(5, Math.min(900, Number(e.target.value) || 5)))}
      />
      <span>giây</span>
    </label>
  );
}

export default function SettingsBar() {
  const s = useSettings();
  const { voices } = useSpeech();
  const [open, setOpen] = useState(false);

  return (
    <div className="settings-bar">
      <div className="settings-quick">
        <Toggle checked={s.showFurigana} onChange={(v) => updateSettings({ showFurigana: v })}>
          Furigana
        </Toggle>
        <Toggle checked={s.showVi} onChange={(v) => updateSettings({ showVi: v })}>
          Nghĩa Việt
        </Toggle>
        <button type="button" className="btn small ghost" onClick={() => setOpen((o) => !o)}>
          ⚙ Cài đặt {open ? '▲' : '▼'}
        </button>
      </div>

      {open && (
        <div className="settings-panel">
          <div className="setting-row">
            <span className="setting-label">Tốc độ đọc</span>
            <div className="chips">
              {RATES.map((r) => (
                <button
                  type="button"
                  key={r}
                  className={`chip ${s.rate === r ? 'on' : ''}`}
                  onClick={() => updateSettings({ rate: r })}
                >
                  {r}x
                </button>
              ))}
            </div>
          </div>

          <div className="setting-row">
            <span className="setting-label">Giọng đọc</span>
            <select value={s.voiceURI} onChange={(e) => updateSettings({ voiceURI: e.target.value })}>
              <option value="">Tự động (giọng ja-JP đầu tiên)</option>
              {voices.map((v) => (
                <option key={v.voiceURI} value={v.voiceURI}>
                  {v.name} ({v.lang})
                </option>
              ))}
            </select>
          </div>
          {voices.length === 0 && <div className="hint">Máy chưa có giọng tiếng Nhật nào để chọn.</div>}

          <div className="setting-row wrap">
            <span className="setting-label">Thời gian thi thử</span>
            <div className="sec-inputs">
              <SecInput label="Chuẩn bị" value={s.prepSec} onChange={(v) => updateSettings({ prepSec: v })} />
              <SecInput label="Nói hội thoại" value={s.dialogueSec} onChange={(v) => updateSettings({ dialogueSec: v })} />
              <SecInput label="Nói mỗi câu hỏi" value={s.questionSec} onChange={(v) => updateSettings({ questionSec: v })} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
