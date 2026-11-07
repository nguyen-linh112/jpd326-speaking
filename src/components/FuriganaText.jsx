// ===== Hiển thị chữ Nhật có furigana =====
// Parse cú pháp {漢字|かんじ} thành <ruby>漢字<rt>かんじ</rt></ruby>.
// Khi người dùng tắt furigana trong Cài đặt thì chỉ hiện chữ gốc.
import { parseFurigana, stripFurigana } from '../utils/furigana.js';
import { useSettings } from '../utils/settings.js';

export default function FuriganaText({ text, as: Tag = 'span', className = '', forceFurigana }) {
  const { showFurigana } = useSettings();
  const show = forceFurigana ?? showFurigana;

  if (!show) {
    return <Tag className={`ja ${className}`}>{stripFurigana(text)}</Tag>;
  }
  return (
    <Tag className={`ja ${className}`}>
      {parseFurigana(text).map((p, i) =>
        p.type === 'ruby' ? (
          <ruby key={i}>
            {p.base}
            <rp>(</rp>
            <rt>{p.reading}</rt>
            <rp>)</rp>
          </ruby>
        ) : (
          <span key={i}>{p.text}</span>
        ),
      )}
    </Tag>
  );
}
