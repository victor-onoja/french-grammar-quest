export const levels = [
  {
    id: 1,
    title: "Le Présent: -er Verbs",
    planet: "Zeta Prime",
    description: "The gateway to the Galaxie Française. Master the regular -er verbs.",
    lesson: `<h2>The Present Tense of Regular -er Verbs</h2><p>To conjugate regular -er verbs in the present tense, drop the <strong>-er</strong> and add:</p><ul><li><strong>je</strong> (I) -> <strong>-e</strong> (je parle)</li><li><strong>tu</strong> (you) -> <strong>-es</strong> (tu parles)</li><li><strong>il/elle/on</strong> (he/she/we) -> <strong>-e</strong> (il parle)</li><li><strong>nous</strong> (we) -> <strong>-ons</strong> (nous parlons)</li><li><strong>vous</strong> (you) -> <strong>-ez</strong> (vous parlez)</li><li><strong>ils/elles</strong> (they) -> <strong>-ent</strong> (ils parlent)</li></ul><p class="vocab-tip"><em>Tip:</em> "parler" means "to speak". "chanter" means "to sing".</p>`,
    exercises: [
      { id: "1-1", type: "mcq", question: "How do you say 'I speak'?", options: ["Je parles", "Je parlent", "Je parle", "Nous parlons"], answer: 2, explanation: "Je takes the -e ending." },
      { id: "1-2", type: "fill-blank", question: "Nous ____ (chanter) tous les jours.", answer: "chantons", hint: "We sing every day. Drop -er and add -ons." },
      { id: "1-3", type: "mcq", question: "Vous ____ (regarder) la télévision.", options: ["regarde", "regardes", "regardez", "regardons"], answer: 2, explanation: "Vous takes the -ez ending." },
      { id: "1-4", type: "translation", question: "They (f.) speak French.", answer: ["Elles parlent français.", "Elles parlent francais."], hint: "elles (they f.) + parler + français" },
      { id: "1-5", type: "fill-blank", question: "Tu ____ (aimer) le chocolat.", answer: "aimes", hint: "You like chocolate. Drop -er and add -es." }
    ],
    boss: {
      intro: "Alien Overlord Verbo challenges your present tense mastery!",
      timeLimit: 30,
      questions: [
        { type: "fill-blank", question: "Ils ____ (habiter) à Paris.", answer: "habitent" },
        { type: "fill-blank", question: "Je ____ (travailler) ce soir.", answer: "travaille" },
        { type: "fill-blank", question: "Nous ____ (dîner) ensemble.", answer: "dînons" }
      ]
    }
  },
  {
    id: 2,
    title: "-ir and -re Verbs",
    planet: "Nebula Secundus",
    description: "Venture deeper. Tackle the -ir and -re verbal forms.",
    lesson: `<h2>Regular -ir and -re Verbs</h2><p>For Type 1 <strong>-ir</strong> verbs like <em>choisir</em> (to choose):</p><ul><li>je <strong>-is</strong>, tu <strong>-is</strong>, il <strong>-it</strong></li><li>nous <strong>-issons</strong>, vous <strong>-issez</strong>, ils <strong>-issent</strong></li></ul><p>For regular <strong>-re</strong> verbs like <em>vendre</em> (to sell):</p><ul><li>je <strong>-s</strong>, tu <strong>-s</strong>, il <strong>[nothing]</strong></li><li>nous <strong>-ons</strong>, vous <strong>-ez</strong>, ils <strong>-ent</strong></li></ul>`,
    exercises: [
      { id: "2-1", type: "fill-blank", question: "Nous ____ (choisir) le rouge.", answer: "choisissons", hint: "Type 1 -ir verbs add -issons for 'nous'." },
      { id: "2-2", type: "mcq", question: "Je ____ (vendre) ma voiture.", options: ["vends", "vend", "vende", "vendons"], answer: 0, explanation: "Drop -re and add -s for je." },
      { id: "2-3", type: "fill-blank", question: "Il ____ (attendre) le bus.", answer: "attend", hint: "For 'il' with -re verbs, add nothing. Just drop -re." },
      { id: "2-4", type: "fill-blank", question: "Ils ____ (finir) leurs devoirs.", answer: "finissent", hint: "Type 1 -ir verb 'finir' plural ends in -issent." }
    ],
    boss: {
        intro: "The Irregular Entity attacks! Defend with your endings.",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Vous ____ (réussir)", answer: "réussissez" },
            { type: "fill-blank", question: "Tu ____ (perdre)", answer: "perds" },
            { type: "fill-blank", question: "Elle ____ (rougir)", answer: "rougit" }
        ]
    }
  },
  {
    id: 3,
    title: "Être and Avoir",
    planet: "Essencia",
    description: "The core forces of the universe: To Be and To Have.",
    lesson: `<h2>The verbs Être and Avoir</h2><div style="display: flex; gap: 2rem;"><div><p><strong>Être</strong></p><ul><li>Je <strong>suis</strong></li><li>Tu <strong>es</strong></li><li>Il/Elle <strong>est</strong></li><li>Nous <strong>sommes</strong></li><li>Vous <strong>êtes</strong></li><li>Ils/Elles <strong>sont</strong></li></ul></div><div><p><strong>Avoir</strong></p><ul><li>J'<strong>ai</strong></li><li>Tu <strong>as</strong></li><li>Il/Elle <strong>a</strong></li><li>Nous <strong>avons</strong></li><li>Vous <strong>avez</strong></li><li>Ils/Elles <strong>ont</strong></li></ul></div></div>`,
    exercises: [
        { id: "3-1", type: "mcq", question: "___ suis fatigué.", options: ["Il", "Je", "Nous", "Tu"], answer: 1, explanation: "Je suis = I am." },
        { id: "3-2", type: "fill-blank", question: "Elle ___ (avoir) un chat.", answer: "a", hint: "Third person singular of avoir." },
        { id: "3-3", type: "fill-blank", question: "Nous ___ (être) contents.", answer: "sommes", hint: "We are." }
    ],
    boss: {
        intro: "The Twin Dragons of Essencia await!",
        timeLimit: 25,
        questions: [
            { type: "fill-blank", question: "Vous ___ (être)", answer: "êtes" },
            { type: "fill-blank", question: "Ils ___ (avoir)", answer: "ont" },
            { type: "fill-blank", question: "J'___ (avoir)", answer: "ai" }
        ]
    }
  },
  {
    id: 4,
    title: "More Irregular Verbs",
    planet: "Mouvance",
    description: "Master aller (to go), venir (to come) and faire (to do).",
    lesson: `<h2>More Irregular Verbs</h2><p>Welcome to Mouvance. In this chapter, you will master the principles of More Irregular Verbs.</p><p>Review Chapter 4 of your textbook for full details.</p>`,
    exercises: [
        { id: "4-1", type: "mcq", question: "Start the More Irregular Verbs challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "4-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "4-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of Mouvance awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 5,
    title: "Devoir and its facets",
    planet: "Le Fardeau",
    description: "Master the verb devoir (must, to have to).",
    lesson: `<h2>Devoir and its facets</h2><p>Welcome to Le Fardeau. In this chapter, you will master the principles of Devoir and its facets.</p><p>Review Chapter 5 of your textbook for full details.</p>`,
    exercises: [
        { id: "5-1", type: "mcq", question: "Start the Devoir and its facets challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "5-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "5-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of Le Fardeau awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 6,
    title: "Pronominal Verbs",
    planet: "Miroir",
    description: "Master verbs with se/me/te/nous/vous.",
    lesson: `<h2>Pronominal Verbs</h2><p>Welcome to Miroir. In this chapter, you will master the principles of Pronominal Verbs.</p><p>Review Chapter 6 of your textbook for full details.</p>`,
    exercises: [
        { id: "6-1", type: "mcq", question: "Start the Pronominal Verbs challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "6-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "6-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of Miroir awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 7,
    title: "The Passé Composé",
    planet: "Mémoire",
    description: "The most common past tense in French.",
    lesson: `<h2>The Passé Composé</h2><p>Welcome to Mémoire. In this chapter, you will master the principles of The Passé Composé.</p><p>Review Chapter 7 of your textbook for full details.</p>`,
    exercises: [
        { id: "7-1", type: "mcq", question: "Start the The Passé Composé challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "7-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "7-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of Mémoire awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 8,
    title: "The Imparfait",
    planet: "Nostalgia",
    description: "The descriptive past tense.",
    lesson: `<h2>The Imparfait</h2><p>Welcome to Nostalgia. In this chapter, you will master the principles of The Imparfait.</p><p>Review Chapter 8 of your textbook for full details.</p>`,
    exercises: [
        { id: "8-1", type: "mcq", question: "Start the The Imparfait challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "8-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "8-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of Nostalgia awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 9,
    title: "The Futur Simple",
    planet: "Demain",
    description: "Expressing events in the future.",
    lesson: `<h2>The Futur Simple</h2><p>Welcome to Demain. In this chapter, you will master the principles of The Futur Simple.</p><p>Review Chapter 9 of your textbook for full details.</p>`,
    exercises: [
        { id: "9-1", type: "mcq", question: "Start the The Futur Simple challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "9-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "9-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of Demain awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 10,
    title: "The Plus-que-parfait",
    planet: "L'Ancien Temps",
    description: "The past in the past.",
    lesson: `<h2>The Plus-que-parfait</h2><p>Welcome to L'Ancien Temps. In this chapter, you will master the principles of The Plus-que-parfait.</p><p>Review Chapter 10 of your textbook for full details.</p>`,
    exercises: [
        { id: "10-1", type: "mcq", question: "Start the The Plus-que-parfait challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "10-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "10-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of L'Ancien Temps awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 11,
    title: "The Conditional",
    planet: "Mirage",
    description: "Expressing what would happen.",
    lesson: `<h2>The Conditional</h2><p>Welcome to Mirage. In this chapter, you will master the principles of The Conditional.</p><p>Review Chapter 11 of your textbook for full details.</p>`,
    exercises: [
        { id: "11-1", type: "mcq", question: "Start the The Conditional challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "11-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "11-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of Mirage awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 12,
    title: "Could, Should, Would",
    planet: "Volonté",
    description: "Pouvoir, devoir, and vouloir.",
    lesson: `<h2>Could, Should, Would</h2><p>Welcome to Volonté. In this chapter, you will master the principles of Could, Should, Would.</p><p>Review Chapter 12 of your textbook for full details.</p>`,
    exercises: [
        { id: "12-1", type: "mcq", question: "Start the Could, Should, Would challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "12-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "12-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of Volonté awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 13,
    title: "The Subjunctive",
    planet: "Le Doute",
    description: "The mood of doubt, necessity, and emotion.",
    lesson: `<h2>The Subjunctive</h2><p>Welcome to Le Doute. In this chapter, you will master the principles of The Subjunctive.</p><p>Review Chapter 13 of your textbook for full details.</p>`,
    exercises: [
        { id: "13-1", type: "mcq", question: "Start the The Subjunctive challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "13-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "13-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of Le Doute awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 14,
    title: "The Infinitive",
    planet: "L'Origine",
    description: "Verbs in their base form.",
    lesson: `<h2>The Infinitive</h2><p>Welcome to L'Origine. In this chapter, you will master the principles of The Infinitive.</p><p>Review Chapter 14 of your textbook for full details.</p>`,
    exercises: [
        { id: "14-1", type: "mcq", question: "Start the The Infinitive challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "14-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "14-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of L'Origine awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 15,
    title: "Participle and Gerund",
    planet: "Le Flux",
    description: "Adjectives and actions ending in -ant.",
    lesson: `<h2>Participle and Gerund</h2><p>Welcome to Le Flux. In this chapter, you will master the principles of Participle and Gerund.</p><p>Review Chapter 15 of your textbook for full details.</p>`,
    exercises: [
        { id: "15-1", type: "mcq", question: "Start the Participle and Gerund challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "15-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "15-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of Le Flux awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 16,
    title: "The Passé Simple",
    planet: "Le Grimoire",
    description: "The literary past tense.",
    lesson: `<h2>The Passé Simple</h2><p>Welcome to Le Grimoire. In this chapter, you will master the principles of The Passé Simple.</p><p>Review Chapter 16 of your textbook for full details.</p>`,
    exercises: [
        { id: "16-1", type: "mcq", question: "Start the The Passé Simple challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "16-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "16-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of Le Grimoire awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 17,
    title: "The Passive Voice",
    planet: "L'Éclipse",
    description: "When the subject receives the action.",
    lesson: `<h2>The Passive Voice</h2><p>Welcome to L'Éclipse. In this chapter, you will master the principles of The Passive Voice.</p><p>Review Chapter 17 of your textbook for full details.</p>`,
    exercises: [
        { id: "17-1", type: "mcq", question: "Start the The Passive Voice challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "17-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "17-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of L'Éclipse awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 18,
    title: "Indirect Speech",
    planet: "L'Écho",
    description: "Reporting what others said.",
    lesson: `<h2>Indirect Speech</h2><p>Welcome to L'Écho. In this chapter, you will master the principles of Indirect Speech.</p><p>Review Chapter 18 of your textbook for full details.</p>`,
    exercises: [
        { id: "18-1", type: "mcq", question: "Start the Indirect Speech challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "18-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "18-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of L'Écho awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 19,
    title: "The Imperative",
    planet: "Le Commandement",
    description: "Giving commands and orders.",
    lesson: `<h2>The Imperative</h2><p>Welcome to Le Commandement. In this chapter, you will master the principles of The Imperative.</p><p>Review Chapter 19 of your textbook for full details.</p>`,
    exercises: [
        { id: "19-1", type: "mcq", question: "Start the The Imperative challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "19-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "19-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of Le Commandement awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 20,
    title: "Articles and Nouns",
    planet: "L'Identité",
    description: "Le, la, les, un, une, des, and genders.",
    lesson: `<h2>Articles and Nouns</h2><p>Welcome to L'Identité. In this chapter, you will master the principles of Articles and Nouns.</p><p>Review Chapter 20 of your textbook for full details.</p>`,
    exercises: [
        { id: "20-1", type: "mcq", question: "Start the Articles and Nouns challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "20-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "20-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of L'Identité awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 21,
    title: "All the Pronouns",
    planet: "Le Substitut",
    description: "Replacing nouns to avoid repetition.",
    lesson: `<h2>All the Pronouns</h2><p>Welcome to Le Substitut. In this chapter, you will master the principles of All the Pronouns.</p><p>Review Chapter 21 of your textbook for full details.</p>`,
    exercises: [
        { id: "21-1", type: "mcq", question: "Start the All the Pronouns challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "21-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "21-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of Le Substitut awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 22,
    title: "Adjectives and Comparisons",
    planet: "L'Aura",
    description: "Describing nouns and comparing them.",
    lesson: `<h2>Adjectives and Comparisons</h2><p>Welcome to L'Aura. In this chapter, you will master the principles of Adjectives and Comparisons.</p><p>Review Chapter 22 of your textbook for full details.</p>`,
    exercises: [
        { id: "22-1", type: "mcq", question: "Start the Adjectives and Comparisons challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "22-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "22-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of L'Aura awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 23,
    title: "Demonstratives",
    planet: "L'Index",
    description: "Ce, cette, ces, celui, celle.",
    lesson: `<h2>Demonstratives</h2><p>Welcome to L'Index. In this chapter, you will master the principles of Demonstratives.</p><p>Review Chapter 23 of your textbook for full details.</p>`,
    exercises: [
        { id: "23-1", type: "mcq", question: "Start the Demonstratives challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "23-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "23-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of L'Index awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 24,
    title: "Relative Pronouns",
    planet: "Le Lien",
    description: "Qui, que, dont, où, lequel.",
    lesson: `<h2>Relative Pronouns</h2><p>Welcome to Le Lien. In this chapter, you will master the principles of Relative Pronouns.</p><p>Review Chapter 24 of your textbook for full details.</p>`,
    exercises: [
        { id: "24-1", type: "mcq", question: "Start the Relative Pronouns challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "24-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "24-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of Le Lien awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 25,
    title: "Adverbs and Time",
    planet: "La Mesure",
    description: "Modifying verbs and tracking time/place.",
    lesson: `<h2>Adverbs and Time</h2><p>Welcome to La Mesure. In this chapter, you will master the principles of Adverbs and Time.</p><p>Review Chapter 25 of your textbook for full details.</p>`,
    exercises: [
        { id: "25-1", type: "mcq", question: "Start the Adverbs and Time challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "25-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "25-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of La Mesure awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 26,
    title: "Numbers",
    planet: "L'Infini",
    description: "Counting from 0 to a million.",
    lesson: `<h2>Numbers</h2><p>Welcome to L'Infini. In this chapter, you will master the principles of Numbers.</p><p>Review Chapter 26 of your textbook for full details.</p>`,
    exercises: [
        { id: "26-1", type: "mcq", question: "Start the Numbers challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "26-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "26-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of L'Infini awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  },
  {
    id: 27,
    title: "Pot Pourri",
    planet: "L'Oméga",
    description: "The final challenge: prepositions and advanced structures.",
    lesson: `<h2>Pot Pourri</h2><p>Welcome to L'Oméga. In this chapter, you will master the principles of Pot Pourri.</p><p>Review Chapter 27 of your textbook for full details.</p>`,
    exercises: [
        { id: "27-1", type: "mcq", question: "Start the Pot Pourri challenge!", options: ["Ready", "Not Ready", "Skip", "Help"], answer: 0 },
        { id: "27-2", type: "fill-blank", question: "Type 'oui' to confirm your mastery.", answer: "oui" },
        { id: "27-3", type: "translation", question: "Translate to French: I am ready.", answer: ["Je suis prêt", "Je suis prête", "Je suis pret", "Je suis prete"] }
    ],
    boss: {
        intro: "The guardian of L'Oméga awaits!",
        timeLimit: 20,
        questions: [
            { type: "fill-blank", question: "Type 'gagner' (to win).", answer: "gagner" },
            { type: "fill-blank", question: "Type 'français'.", answer: "français" }
        ]
    }
  }
];
