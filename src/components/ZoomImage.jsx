// ===== Ảnh thu nhỏ, bấm để phóng to toàn màn hình =====
import { useEffect, useState } from 'react';

/** Ghép đường dẫn ảnh trong public/ (base './' nên dùng BASE_URL cho chắc). */
export const assetUrl = (p) => `${import.meta.env.BASE_URL}${p}`;

export default function ZoomImage({ src, alt, caption, maxWidth = 560 }) {
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);

  // Nhấn Esc để đóng
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (!src || failed) return null;
  const url = assetUrl(src);

  return (
    <figure className="zoom-fig" style={{ maxWidth }}>
      <img className="zoom-thumb" src={url} alt={alt} loading="lazy" onClick={() => setOpen(true)} onError={() => setFailed(true)} />
      {caption && <figcaption>{caption}</figcaption>}
      {open && (
        <div className="lightbox" onClick={() => setOpen(false)} role="dialog" aria-label={alt}>
          <button type="button" className="lightbox-close" onClick={() => setOpen(false)} aria-label="Đóng">
            ✕
          </button>
          <img src={url} alt={alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </figure>
  );
}
