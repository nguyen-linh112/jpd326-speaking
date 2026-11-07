// ===== Cài đặt dùng chung (lưu localStorage) =====
import { createStore, useStore } from './store.js';

export const settingsStore = createStore('jpd326.settings.v1', {
  showFurigana: true,
  showVi: true,
  rate: 1, // tốc độ đọc: 0.6 / 0.8 / 1 / 1.2
  voiceURI: '', // '' = tự chọn giọng ja-JP đầu tiên
  prepSec: 60, // thời gian chuẩn bị (thi thử)
  dialogueSec: 180, // thời gian nói hội thoại
  questionSec: 60, // thời gian nói mỗi câu hỏi
});

export function useSettings() {
  return useStore(settingsStore);
}

export const updateSettings = (patch) => settingsStore.set(patch);
