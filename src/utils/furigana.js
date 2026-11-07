// ===== Xử lý cú pháp furigana =====
// Quy ước trong dữ liệu:  {漢字|かんじ}  ->  <ruby>漢字<rt>かんじ</rt></ruby>
// Ví dụ: "{体調|たいちょう}を{崩|くず}してしまいました。"

const FURIGANA_RE = /\{([^|{}]+)\|([^{}]+)\}/g;

/**
 * Tách chuỗi thành các đoạn: { type: 'text', text } hoặc { type: 'ruby', base, reading }.
 * Dùng để render <ruby> trong FuriganaText.
 */
export function parseFurigana(input) {
  const text = input == null ? '' : String(input);
  const parts = [];
  let last = 0;
  let m;
  FURIGANA_RE.lastIndex = 0;
  while ((m = FURIGANA_RE.exec(text)) !== null) {
    if (m.index > last) parts.push({ type: 'text', text: text.slice(last, m.index) });
    parts.push({ type: 'ruby', base: m[1], reading: m[2] });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push({ type: 'text', text: text.slice(last) });
  return parts;
}

/** Bỏ phần |かんじ} và dấu ngoặc, chỉ giữ chữ gốc (dùng để hiển thị khi tắt furigana). */
export function stripFurigana(input) {
  if (input == null) return '';
  return String(input).replace(FURIGANA_RE, '$1');
}

/**
 * Chuẩn bị chuỗi cho giọng đọc (TTS):
 *  - bỏ furigana, chỉ đọc chữ gốc
 *  - chỗ trống 【______】 đọc thành "まるまる" cho tự nhiên
 *  - bỏ các ký hiệu lạ như ~ ／ không cần đọc
 */
export function toSpeechText(input) {
  return stripFurigana(input)
    .replace(/【[_＿\s]+】/g, 'まるまる')
    .replace(/[~〜～]/g, '')
    .replace(/[／/]/g, '、')
    .trim();
}
