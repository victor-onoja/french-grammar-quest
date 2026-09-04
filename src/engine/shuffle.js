// Fisher-Yates. `sort(() => Math.random() - 0.5)` is not a shuffle: the
// comparator is inconsistent, so elements tend to stay near their original
// index — which for a 4-option MCQ leaks the answer's position.
export function shuffle(items) {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
