export type WordProgress = {
  id: string;
  correct: number;
  wrong: number;
  box: number; // Leitner box (1–5)
  lastReviewed: string;
};

const KEY = "kana_master_progress_v1";

export function loadProgress(): Record<string, WordProgress> {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

export function saveProgress(data: Record<string, WordProgress>) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function updateProgressFor(id: string, correct: boolean) {
  const store = loadProgress();
  const now = new Date().toISOString();

  const p = store[id] ?? {
    id,
    correct: 0,
    wrong: 0,
    box: 1,
    lastReviewed: now,
  };

  if (correct) {
    p.correct++;
    p.box = Math.min(5, p.box + 1);
  } else {
    p.wrong++;
    p.box = Math.max(1, p.box - 1);
  }

  p.lastReviewed = now;

  store[id] = p;
  saveProgress(store);
}
