function normalize(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')  // strip all diacritics (accents, cedilla, etc.)
    .replace(/-/g, ' ')               // hyphens → spaces (quatre-vingts = quatre vingts)
    .replace(/['’]/g, '')             // remove apostrophes (l'ami → lami)
    .replace(/[.,!?;:«»"“”()]/g, '')  // strip common punctuation
    .replace(/\s+/g, ' ')             // collapse multiple spaces
    // An elided article typed with a space instead of an apostrophe ("l ami")
    // must land on the same form as "l'ami". Single letters are not words in
    // French except "a" and "y", neither of which elide.
    .replace(/\b(qu|[ldjnsctm])\s+/g, '$1')
    .trim();
}

// Leading articles, longest-first so "les" is not eaten by "le".
const LEADING_ARTICLE = /^(?:(?:de\s+la|les|le|la|une|un|des|du)\s+|l\s*['’]\s*)/i;

// Gender/number tags carry information the learner is never asked to type.
const GRAMMAR_TAG = /^(?:m|f|mf|m\/f|pl)\.?$/i;

// Vocabulary is stored in dictionary form, which bundles things a learner
// would not type into the answer itself:
//   "l’allemand (m.)"   gender tag
//   "gentil(le)"        optional feminine ending
//   "avoir (eu)"        past participle
//   "beau, bel, belle"  alternate forms
//   "veuf/veuve"        paired forms
// Expand one stored entry into every form we should accept.
function expandVariants(answer) {
  const raw = String(answer).trim();
  const forms = new Set([raw]);

  const paren = raw.match(/^(.*?)\s*\(([^)]*)\)\s*(.*)$/);
  if (paren) {
    const [, head, inner, tail] = paren;
    const suffix = tail ? ' ' + tail : '';
    forms.add((head + suffix).trim());
    if (!GRAMMAR_TAG.test(inner.trim())) {
      forms.add((head + inner + suffix).trim());        // gentil + le
      forms.add((head + ' ' + inner + suffix).trim());  // avoir + eu
    }
  }

  for (const form of [...forms]) {
    if (/[,/]/.test(form)) {
      form.split(/[,/]/).forEach(part => {
        const trimmed = part.trim();
        if (trimmed) forms.add(trimmed);
      });
    }
  }

  // The English prompt gives no gender cue ("wardrobe" → une armoire), so the
  // article cannot be required.
  for (const form of [...forms]) {
    const bare = form.replace(LEADING_ARTICLE, '').trim();
    if (bare && bare !== form) forms.add(bare);
  }

  return [...forms];
}

// Exercises and boss questions: the stored answer is exactly what to type.
export function checkAnswer(userInput, correctAnswer) {
  const normUser = normalize(userInput);
  if (!normUser) return false;
  const answers = Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer];
  return answers.some(a => normalize(a) === normUser);
}

// Vocabulary drill: accept any reasonable form of a dictionary entry.
export function checkVocabAnswer(userInput, correctAnswer) {
  const normUser = normalize(userInput);
  if (!normUser) return false;
  const answers = Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer];
  return answers.some(a => expandVariants(a).some(v => normalize(v) === normUser));
}
