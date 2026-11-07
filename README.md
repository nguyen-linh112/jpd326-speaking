# JPD326 – Web ôn thi Speaking tiếng Nhật 🌸

Web React + Vite (JavaScript), chỉ chạy phía client (không backend). Giao diện tiếng Việt, tông hồng nhạt.

## Chạy trên máy

```bash
npm install
npm run dev
```

Mở địa chỉ hiện ra (thường là http://localhost:5173). Build bản chạy thật: `npm run build` (kết quả ở thư mục `dist/`).

## Tính năng
- **Hội thoại role-play (6 場面)**: xem dạng bong bóng chat, nghe từng câu / cả hội thoại (giọng A và B khác nhau), luyện vai A/B/Random (câu của vai mình bị ẩn, có gợi ý), ghi âm và nghe lại. Mỗi 場面 có nhiều phiên bản: **Mẫu gốc** (của giáo viên) và **Bản luyện thêm**.
- **Hỏi đáp (10 câu)**: gợi ý ý trả lời, từng mẫu câu kèm ví dụ + nghĩa Việt, 2 bài mẫu, từ vựng, ghi âm.
- **Thi thử**: random 1 hội thoại + vai + 2 câu hỏi, đồng hồ đếm ngược chuẩn bị/nói, ghi âm toàn bộ phần nói, xem đáp án mẫu cuối bài. Câu 2 là câu phản xạ (ẩn gợi ý).
- **Cài đặt**: bật/tắt furigana, nghĩa Việt; tốc độ đọc 0.6x–1.2x; chọn giọng ja-JP; chỉnh thời gian thi thử.
- **Tiến độ**: đánh dấu “đã thuộc” cho từng hội thoại / câu hỏi.
- **Chỉnh sửa nội dung**: nút **Chỉnh sửa** ở mọi hội thoại / câu hỏi (sửa, thêm, xoá). Bản sửa gắn nhãn **“Bản nháp của tôi”**, lưu trong trình duyệt, có nút **Khôi phục bản gốc**. Trang **Sao lưu** cho **xuất / nhập file .json** (dùng để lưu riêng hoặc chuyển máy).

## Furigana
Trong dữ liệu và ô chỉnh sửa, viết `{漢字|かんじ}` → hiển thị `<ruby>`. Khi nghe đọc, phần `|かんじ}` và ngoặc được bỏ, chỉ đọc chữ gốc. Chỗ trống `【______】` được đọc thành “まるまる”.

## Thêm / sửa hội thoại mẫu trong code (`src/data/dialogues.js`)
Mỗi 場面 có mảng `versions`. Để dán hội thoại mẫu gốc mới, tìm version có `id: 'goc'` và điền `lines`:

```js
{
  id: 'goc',
  label: 'Mẫu gốc',
  draft: false,
  note: 'Hội thoại mẫu của giáo viên',
  lines: [
    { speaker: 'A', ja: '{体調|たいちょう}を{崩|くず}しました。', vi: 'Tôi bị ốm.' },
    { speaker: 'B', ja: '{大丈夫|だいじょうぶ}ですか。', vi: 'Bạn có sao không?' },
  ],
}
```
`lines: []` (rỗng) nghĩa là “chưa có mẫu – chờ cập nhật”. Muốn thêm phiên bản mới, thêm một object vào `versions`.
Câu hỏi nằm trong `src/data/questions/qNN.js` (mỗi file một câu; gom ở `src/data/questions.js`).

> Không cần sửa code: người dùng có thể bấm **Chỉnh sửa** trên web. Bản sửa chỉ nằm trong trình duyệt của người đó (localStorage, key `jpd326.edits.v1`).

## Âm thanh & ghi âm
- Đọc bằng **Web Speech API** (`ja-JP`). Chất lượng phụ thuộc giọng cài trong máy. Nếu máy không có giọng Nhật, web sẽ hiện hướng dẫn (Chrome/Edge trên Windows thường có sẵn).
- Ghi âm bằng **MediaRecorder**: chỉ lưu tạm trong bộ nhớ, **không upload**. Micro cần **HTTPS hoặc localhost**.

## Deploy (để dùng trên điện thoại)
Web dùng `HashRouter` và `base: './'` nên deploy được lên hosting tĩnh bất kỳ:

- **Vercel / Netlify**: kết nối repo → Build command `npm run build` → Output directory `dist`.
- **GitHub Pages**: chạy `npm run build`, đẩy nội dung thư mục `dist/` lên nhánh `gh-pages` (hoặc dùng GitHub Actions).

## Cấu trúc
```
src/
  data/        dialogues.js, questions.js (+ questions/qNN.js)
  components/  FuriganaText, AudioControls, Recorder, DialoguePlayer, QuestionCard, ExamMode, SettingsBar, Editor/*
  hooks/       useSpeech, useRecorder, useProgress, useContent
  utils/       furigana, speech, store, settings, progress, contentStore
  pages/       Home, DialogueList/Detail, QuestionList/Detail, Exam, Backup
```
