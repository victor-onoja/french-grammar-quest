function normalize(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // strip all diacritics (accents, cedilla, etc.)
    .replace(/-/g, ' ')              // hyphens → spaces (quatre-vingts = quatre vingts)
    .replace(/['''’]/g, '')     // remove apostrophes (l'ami → lami)
    .replace(/[.,!?;:«»"""]/g, '')   // strip common punctuation
    .replace(/\s+/g, ' ')            // collapse multiple spaces
    .trim();
}

export function checkAnswer(userInput, correctAnswer) {
  const normUser = normalize(userInput);
  const answers = Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer];
  return answers.some(a => normalize(a) === normUser);
}
