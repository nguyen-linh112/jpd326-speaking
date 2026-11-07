// ===== Lớp dữ liệu hợp nhất: dữ liệu gốc (src/data) + bản chỉnh sửa của người dùng =====
// Mọi trang đọc nội dung qua hook useContent(), KHÔNG import trực tiếp từ src/data.
// Bản sửa lưu trong localStorage (key jpd326.edits.v1) và có thể xuất/nhập file .json.
import { useMemo } from 'react';
import baseDialogues from '../data/dialogues.js';
import baseQuestions from '../data/questions.js';
import { createStore, useStore } from './store.js';
import { progressStore } from './progress.js';
import { settingsStore } from './settings.js';

const BASE = { dialogues: baseDialogues, questions: baseQuestions };
export const KINDS = ['dialogues', 'questions'];

const emptyKind = () => ({ overrides: {}, custom: [], deleted: [] });

export const editsStore = createStore('jpd326.edits.v1', {
  dialogues: emptyKind(),
  questions: emptyKind(),
});

const clone = (x) => structuredClone(x);
/** Bỏ các cờ nội bộ trước khi lưu. */
const clean = ({ edited, custom, ...rest }) => rest; // eslint-disable-line no-unused-vars

function build(kind, edits) {
  const e = edits[kind];
  const base = BASE[kind]
    .filter((it) => !e.deleted.includes(it.id))
    .map((it) => (e.overrides[it.id] ? { ...e.overrides[it.id], id: it.id, edited: true } : it));
  const custom = e.custom.map((it) => ({ ...it, custom: true }));
  return [...base, ...custom];
}

/** Hook: danh sách đầy đủ (gốc + sửa + tự thêm) của 'dialogues' | 'questions'. */
export function useContent(kind) {
  const edits = useStore(editsStore);
  return useMemo(() => build(kind, edits), [kind, edits]);
}

/** Lấy 1 mục theo id (id route luôn là chuỗi). */
export function findById(items, id) {
  return items.find((it) => String(it.id) === String(id));
}

export function getBaseItem(kind, id) {
  return BASE[kind].find((it) => String(it.id) === String(id));
}

/** Phiên bản hội thoại chưa có lượt thoại nào (ví dụ "Mẫu gốc" đang chờ cập nhật). */
export const isPending = (v) => !v.lines || v.lines.length === 0;

export function newCustomId() {
  return 'c' + Date.now().toString(36);
}

/** Lưu một mục đã chỉnh sửa. Mục gốc -> lưu thành override; mục tự thêm -> thay trong custom. */
export function saveItem(kind, item) {
  const data = clean(clone(item));
  editsStore.set((s) => {
    const e = { ...s[kind] };
    if (item.custom) {
      e.custom = e.custom.map((c) => (c.id === item.id ? data : c));
    } else {
      e.overrides = { ...e.overrides, [item.id]: data };
    }
    return { ...s, [kind]: e };
  });
}

export function addCustom(kind, item) {
  editsStore.set((s) => ({
    ...s,
    [kind]: { ...s[kind], custom: [...s[kind].custom, clean(clone(item))] },
  }));
}

/** Xoá: mục tự thêm bị bỏ hẳn; mục gốc được ẩn đi (có thể khôi phục ở trang Sao lưu). */
export function deleteItem(kind, item) {
  editsStore.set((s) => {
    const e = { ...s[kind] };
    if (item.custom) {
      e.custom = e.custom.filter((c) => c.id !== item.id);
    } else {
      e.deleted = [...new Set([...e.deleted, item.id])];
      const o = { ...e.overrides };
      delete o[item.id];
      e.overrides = o;
    }
    return { ...s, [kind]: e };
  });
}

/** "Khôi phục bản gốc": bỏ bản sửa, quay về nội dung trong src/data. */
export function restoreOriginal(kind, id) {
  editsStore.set((s) => {
    const o = { ...s[kind].overrides };
    delete o[id];
    return { ...s, [kind]: { ...s[kind], overrides: o } };
  });
}

export function restoreDeleted(kind, id) {
  editsStore.set((s) => ({
    ...s,
    [kind]: { ...s[kind], deleted: s[kind].deleted.filter((d) => d !== id) },
  }));
}

export function useDeletedItems(kind) {
  const edits = useStore(editsStore);
  return useMemo(() => BASE[kind].filter((it) => edits[kind].deleted.includes(it.id)), [kind, edits]);
}

export function hasAnyEdits(edits) {
  return KINDS.some((k) => {
    const e = edits[k];
    return Object.keys(e.overrides).length || e.custom.length || e.deleted.length;
  });
}

// ---------- Mẫu trống khi thêm mới ----------
const jv = (ja = '', vi = '') => ({ ja, vi });

export function blankDialogue() {
  return {
    id: newCustomId(),
    lesson: 0,
    title: '場面',
    titleVi: 'Hội thoại mới',
    roleA: jv(),
    roleB: jv(),
    info: [],
    vocab: [],
    versions: [
      {
        id: 'v1',
        label: 'Bản của tôi',
        draft: true,
        lines: [
          { speaker: 'A', ja: '', vi: '' },
          { speaker: 'B', ja: '', vi: '' },
        ],
      },
    ],
  };
}

export function blankQuestion() {
  return {
    id: newCustomId(),
    lesson: 0,
    question: jv(),
    guide: [],
    expressions: [],
    sampleAnswers: [{ title: 'Mẫu 1', lines: [jv()] }],
    vocab: [],
  };
}

// ---------- Xuất / nhập file sao lưu ----------
export function exportBackup() {
  return {
    app: 'jpd326-speaking',
    version: 1,
    exportedAt: new Date().toISOString(),
    edits: editsStore.get(),
    progress: progressStore.get(),
    settings: settingsStore.get(),
  };
}

function validKind(k) {
  return (
    k &&
    typeof k === 'object' &&
    k.overrides && typeof k.overrides === 'object' && !Array.isArray(k.overrides) &&
    Array.isArray(k.custom) &&
    Array.isArray(k.deleted)
  );
}

/** Kiểm tra file nhập; ném Error với thông báo tiếng Việt nếu sai định dạng. */
export function importBackup(text) {
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error('File không phải JSON hợp lệ.');
  }
  if (!data || data.app !== 'jpd326-speaking') {
    throw new Error('Đây không phải file sao lưu của web JPD326.');
  }
  if (!data.edits || !validKind(data.edits.dialogues) || !validKind(data.edits.questions)) {
    throw new Error('File sao lưu bị thiếu hoặc sai cấu trúc dữ liệu chỉnh sửa.');
  }
  editsStore.replace({ dialogues: data.edits.dialogues, questions: data.edits.questions });
  if (data.progress && typeof data.progress === 'object') progressStore.replace(data.progress);
  if (data.settings && typeof data.settings === 'object') settingsStore.replace(data.settings);
}

export function resetAllEdits() {
  editsStore.replace({ dialogues: emptyKind(), questions: emptyKind() });
}
