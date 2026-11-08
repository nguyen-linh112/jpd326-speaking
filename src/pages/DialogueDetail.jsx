import { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import DialoguePlayer from '../components/DialoguePlayer.jsx';
import DialogueEditor from '../components/Editor/DialogueEditor.jsx';
import EditToolbar, { DraftBadge } from '../components/EditToolbar.jsx';
import FuriganaText from '../components/FuriganaText.jsx';
import JaVi, { VocabList } from '../components/JaVi.jsx';
import FollowUps from '../components/FollowUps.jsx';
import ZoomImage from '../components/ZoomImage.jsx';
import { findById, getBaseItem, isPending, saveItem, useContent } from '../utils/contentStore.js';
import { toggleDone, useProgress } from '../utils/progress.js';

export default function DialogueDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const location = useLocation();
  const items = useContent('dialogues');
  const d = findById(items, id);
  const p = useProgress();
  const [editing, setEditing] = useState(!!location.state?.edit);
  const [vIdx, setVIdx] = useState(null);

  if (!d) {
    return (
      <div className="card">
        <p>Không tìm thấy hội thoại này.</p>
        <Link className="btn" to="/dialogues">← Về danh sách</Link>
      </div>
    );
  }

  if (editing) {
    return (
      <DialogueEditor
        initial={d}
        onCancel={() => setEditing(false)}
        onSave={(next) => {
          saveItem('dialogues', next);
          setVIdx(null);
          setEditing(false);
        }}
      />
    );
  }

  // Mặc định chọn phiên bản đầu tiên đã có nội dung
  const firstReady = Math.max(0, d.versions.findIndex((v) => !isPending(v)));
  const idx = Math.min(vIdx ?? firstReady, d.versions.length - 1);
  const version = d.versions[idx];
  const done = p.isDone('dialogues', d.id);
  // Bản đã chỉnh sửa từ trước có thể chưa có ảnh/câu hỏi thêm -> lấy từ dữ liệu gốc
  const base = getBaseItem('dialogues', d.id);
  const originalImage = d.originalImage ?? base?.originalImage;
  const promptImages = d.promptImages ?? base?.promptImages;
  const followUps = d.followUps ?? base?.followUps;

  return (
    <div className="stack">
      <Link to="/dialogues" className="back">← Danh sách hội thoại</Link>

      <section className="card">
        <div className="card-top">
          <span className="lesson">{d.lesson ? `第${d.lesson}課` : 'Tự thêm'}</span>
          <DraftBadge item={d} />
        </div>
        <h1 className="ja-title"><FuriganaText text={d.title} /></h1>
        <div className="vi">{d.titleVi}</div>
        {originalImage && (
          <ZoomImage
            src={originalImage}
            alt={`Hội thoại mẫu gốc – ${d.title}`}
            caption={`📄 Hội thoại mẫu gốc của bài ${d.lesson} (bấm vào ảnh để phóng to)`}
            maxWidth={520}
          />
        )}
        <div className="btn-row between">
          <button type="button" className={`btn ${done ? 'ok' : ''}`} onClick={() => toggleDone('dialogues', d.id)}>
            {done ? '✓ Đã thuộc' : 'Đánh dấu đã thuộc'}
          </button>
          <EditToolbar kind="dialogues" item={d} onEdit={() => setEditing(true)} onDeleted={() => nav('/dialogues')} />
        </div>
      </section>

      <section className="card">
        <h3 className="sec-title">📝 Đề bài</h3>
        {promptImages && (
          <div className="prompt-images">
            <p className="muted small">Ảnh đề giống đề thi thật (bấm vào ảnh để phóng to). Bên dưới là phần chữ có furigana và nghĩa Việt.</p>
            <ZoomImage src={promptImages.A} alt={`Đề bài vai A – ${d.title}`} caption="Vai A" maxWidth={780} />
            <ZoomImage src={promptImages.B} alt={`Đề bài vai B – ${d.title}`} caption="Vai B" maxWidth={780} />
          </div>
        )}
        <div className="roles">
          <div className="role-box a">
            <b>Vai A</b>
            <JaVi item={d.roleA} id={`ra-${d.id}`} />
          </div>
          <div className="role-box b">
            <b>Vai B</b>
            <JaVi item={d.roleB} id={`rb-${d.id}`} />
          </div>
        </div>
        {d.info?.length > 0 && (
          <div className="info-box">
            <b>ℹ️ Thông tin kèm theo</b>
            {d.info.map((it, i) => (
              <JaVi key={i} item={it} id={`info-${d.id}-${i}`} />
            ))}
          </div>
        )}
      </section>

      <VocabList vocab={d.vocab} />

      <section className="card">
        <h3 className="sec-title">💬 Hội thoại</h3>
        {d.versions.length > 1 && (
          <div className="tabs versions">
            {d.versions.map((v, i) => (
              <button key={v.id} type="button" className={`tab ${i === idx ? 'on' : ''}`} onClick={() => setVIdx(i)}>
                {v.label}
                {isPending(v) && ' (chờ cập nhật)'}
              </button>
            ))}
          </div>
        )}
        {version.note && !isPending(version) && <div className="notice info small">{version.note}</div>}
        {isPending(version) ? (
          <div className="notice warn">
            Chưa có “{version.label}” – sẽ được cập nhật sau. Bạn có thể dùng các phiên bản khác ở trên, hoặc bấm
            “Chỉnh sửa” để tự dán hội thoại mẫu vào.
          </div>
        ) : (
          <DialoguePlayer key={version.id} version={version} />
        )}
      </section>

      <FollowUps items={followUps} idPrefix={`fu-${d.id}`} />
    </div>
  );
}
