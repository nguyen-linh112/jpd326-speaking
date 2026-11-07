// ===== Tiến độ "đã thuộc" (lưu localStorage) =====
import { createStore, useStore } from './store.js';

export const progressStore = createStore('jpd326.progress.v1', {
  dialogues: {}, // { [id]: true }
  questions: {},
});

export function useProgress() {
  const state = useStore(progressStore);
  return {
    isDone: (kind, id) => !!state[kind]?.[id],
    count: (kind, ids) => ids.filter((id) => state[kind]?.[id]).length,
  };
}

export function toggleDone(kind, id) {
  progressStore.set((s) => {
    const next = { ...s[kind] };
    if (next[id]) delete next[id];
    else next[id] = true;
    return { ...s, [kind]: next };
  });
}
