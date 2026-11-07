// ===== Store nhỏ gọn lưu localStorage, dùng với useSyncExternalStore =====
import { useSyncExternalStore } from 'react';

function safeParse(raw) {
  try {
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Tạo store có persist vào localStorage.
 * - get(): trả về state hiện tại (object bất biến)
 * - set(patch | fn): gộp patch hoặc chạy fn(state) -> state mới, rồi lưu
 * - replace(state): thay toàn bộ
 */
export function createStore(key, defaults) {
  let state = (() => {
    try {
      const saved = safeParse(localStorage.getItem(key));
      return saved ? { ...defaults, ...saved } : structuredClone(defaults);
    } catch {
      return structuredClone(defaults);
    }
  })();
  const listeners = new Set();

  function persist() {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {
      /* localStorage có thể bị chặn (chế độ riêng tư) – bỏ qua */
    }
  }
  function emit() {
    listeners.forEach((l) => l());
  }

  return {
    get: () => state,
    set(patchOrFn) {
      state = typeof patchOrFn === 'function' ? patchOrFn(state) : { ...state, ...patchOrFn };
      persist();
      emit();
    },
    replace(next) {
      state = { ...structuredClone(defaults), ...next };
      persist();
      emit();
    },
    subscribe(l) {
      listeners.add(l);
      return () => listeners.delete(l);
    },
  };
}

export function useStore(store) {
  return useSyncExternalStore(store.subscribe, store.get);
}
