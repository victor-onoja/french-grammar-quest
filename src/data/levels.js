export const levels = [
  {
    id: 1,
    title: "Le Présent: -er Verbs",
    rule: ["Drop -er, add endings: -e/-es/-e/-ons/-ez/-ent", "je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent", "Tip: je/tu/il/elle forms sound the same — only -ons and -ez change the sound"],
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
    vocabulary: [
      { french: "à midi", english: "at noon" }, { french: "à minuit", english: "at midnight" }, { french: "aujourd’hui", english: "today" }, { french: "demain", english: "tomorrow" }, { french: "hier", english: "yesterday" }, { french: "après-demain", english: "the day after tomorrow" }, { french: "avant-hier", english: "the day before yesterday" }, { french: "le matin", english: "in the morning" }, { french: "l’après-midi", english: "in the afternoon" }, { french: "le soir", english: "in the evening" }, { french: "toujours", english: "always" }, { french: "souvent", english: "often" },
      { french: "accepter", english: "to accept" }, { french: "aimer", english: "to like/love" }, { french: "annuler", english: "to cancel" }, { french: "apporter", english: "to bring" }, { french: "attraper", english: "to catch" }, { french: "augmenter", english: "to increase" }, { french: "bavarder", english: "to chat" }, { french: "casser", english: "to break" }, { french: "chercher", english: "to look for" }, { french: "commander", english: "to order" }, { french: "couper", english: "to cut" }, { french: "danser", english: "to dance" }, { french: "déjeuner", english: "to have lunch" }, { french: "demander", english: "to ask" }, { french: "dessiner", english: "to draw" }, { french: "donner", english: "to give" }, { french: "emprunter", english: "to borrow" }, { french: "enlever", english: "to remove" }, { french: "étudier", english: "to study" }, { french: "exprimer", english: "to express" }, { french: "gagner", english: "to win/earn" }, { french: "garder", english: "to keep" }, { french: "habiter", english: "to live" }, { french: "laver", english: "to wash" }, { french: "manger", english: "to eat" }, { french: "mériter", english: "to deserve" }, { french: "oublier", english: "to forget" }, { french: "porter", english: "to carry" }, { french: "prêter", english: "to lend" }, { french: "refuser", english: "to refuse" }, { french: "regarder", english: "to watch" }, { french: "saluer", english: "to greet" }, { french: "sauter", english: "to jump" }, { french: "tomber", english: "to fall" }, { french: "travailler", english: "to work" }, { french: "visiter", english: "to visit" }
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
    rule: ["-ir verbs (type 1): -is/-is/-it/-issons/-issez/-issent", "-re verbs: drop -re, add -s/-s/nothing/-ons/-ez/-ent", "Exception: partir/sortir/dormir use short endings: -s/-s/-t"],
    planet: "Nebula Secundus",
    description: "Venture deeper. Tackle the -ir and -re verbal forms.",
    lesson: `<h2>Regular -ir and -re Verbs</h2><p>For Type 1 <strong>-ir</strong> verbs like <em>choisir</em> (to choose):</p><ul><li>je <strong>-is</strong>, tu <strong>-is</strong>, il <strong>-it</strong></li><li>nous <strong>-issons</strong>, vous <strong>-issez</strong>, ils <strong>-issent</strong></li></ul><p>For regular <strong>-re</strong> verbs like <em>vendre</em> (to sell):</p><ul><li>je <strong>-s</strong>, tu <strong>-s</strong>, il <strong>[nothing]</strong></li><li>nous <strong>-ons</strong>, vous <strong>-ez</strong>, ils <strong>-ent</strong></li></ul>`,
    exercises: [
      { id: "2-1", type: "fill-blank", question: "Nous ____ (choisir) le rouge.", answer: "choisissons", hint: "Type 1 -ir verbs add -issons for 'nous'." },
      { id: "2-2", type: "mcq", question: "Je ____ (vendre) ma voiture.", options: ["vends", "vend", "vende", "vendons"], answer: 0, explanation: "Drop -re and add -s for je." },
      { id: "2-3", type: "fill-blank", question: "Il ____ (attendre) le bus.", answer: "attend", hint: "For 'il' with -re verbs, add nothing. Just drop -re." },
      { id: "2-4", type: "fill-blank", question: "Ils ____ (finir) leurs devoirs.", answer: "finissent", hint: "Type 1 -ir verb 'finir' plural ends in -issent." }
    ],
    vocabulary: [
      { french: "l’allemand (m.)", english: "German" }, { french: "l’anglais (m.)", english: "English" }, { french: "l’arabe (m.)", english: "Arabic" }, { french: "le chinois", english: "Chinese" }, { french: "le créole", english: "Creole" }, { french: "l’espagnol (m.)", english: "Spanish" }, { french: "le français", english: "French" }, { french: "l’hindi (m.)", english: "Hindi" }, { french: "l’italien (m.)", english: "Italian" }, { french: "le japonais", english: "Japanese" },
      { french: "finir", english: "to finish" }, { french: "choisir", english: "to choose" }, { french: "accomplir", english: "to accomplish" }, { french: "bâtir", english: "to build" }, { french: "remplir", english: "to fill" }, { french: "réussir", english: "to succeed" }, { french: "sortir", english: "to go out" }, { french: "partir", english: "to leave" }, { french: "dormir", english: "to sleep" }, { french: "servir", english: "to serve" }, { french: "vendre", english: "to sell" }, { french: "attendre", english: "to wait" }, { french: "perdre", english: "to lose" }, { french: "répondre", english: "to answer" }, { french: "entendre", english: "to hear" }, { french: "prendre", english: "to take" }, { french: "comprendre", english: "to understand" }, { french: "apprendre", english: "to learn" }
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
    rule: ["etre: suis / es / est / sommes / etes / sont", "avoir: ai / as / a / avons / avez / ont", "Both are irregular — they must be memorized cold"],
    planet: "Essencia",
    description: "The core forces of the universe: To Be and To Have.",
    lesson: `<h2>The verbs Être and Avoir</h2><div style="display: flex; gap: 2rem;"><div><p><strong>Être</strong></p><ul><li>Je <strong>suis</strong></li><li>Tu <strong>es</strong></li><li>Il/Elle <strong>est</strong></li><li>Nous <strong>sommes</strong></li><li>Vous <strong>êtes</strong></li><li>Ils/Elles <strong>sont</strong></li></ul></div><div><p><strong>Avoir</strong></p><ul><li>J'<strong>ai</strong></li><li>Tu <strong>as</strong></li><li>Il/Elle <strong>a</strong></li><li>Nous <strong>avons</strong></li><li>Vous <strong>avez</strong></li><li>Ils/Elles <strong>ont</strong></li></ul></div></div>`,
    exercises: [
        { id: "3-1", type: "mcq", question: "___ suis fatigué.", options: ["Il", "Je", "Nous", "Tu"], answer: 1, explanation: "Je suis = I am." },
        { id: "3-2", type: "fill-blank", question: "Elle ___ (avoir) un chat.", answer: "a", hint: "Third person singular of avoir." },
        { id: "3-3", type: "fill-blank", question: "Nous ___ (être) contents.", answer: "sommes", hint: "We are." }
    ],
    vocabulary: [
      {
            "french": "agréable",
            "english": "pleasant"
            },
      {
            "french": "amusant(e)",
            "english": "funny"
            },
      {
            "french": "beau, bel, belle",
            "english": "beautiful"
            },
      {
            "french": "bon, bonne",
            "english": "good"
            },
      {
            "french": "charmant(e)",
            "english": "charming"
            },
      {
            "french": "cher, chère",
            "english": "expensive"
            },
      {
            "french": "créatif, créative",
            "english": "creative"
            },
      {
            "french": "efficace",
            "english": "efficient"
            },
      {
            "french": "frais, fraîche",
            "english": "fresh, cool"
            },
      {
            "french": "gentil(le)",
            "english": "kind, nice"
            },
      {
            "french": "grand(e)",
            "english": "tall"
            },
      {
            "french": "heureux, heureuse",
            "english": "happy, content"
            },
      {
            "french": "jeune",
            "english": "young"
            },
      {
            "french": "libre",
            "english": "free"
            },
      {
            "french": "nouveau, nouvel, nouvelle",
            "english": "new"
            },
      {
            "french": "petit(e)",
            "english": "small"
            },
      {
            "french": "sec, sèche",
            "english": "dry"
            },
      {
            "french": "sympathique",
            "english": "nice, friendly"
            },
      {
            "french": "vieux, vieil, vieille",
            "english": "old"
            },
      {
            "french": "être",
            "english": "to be"
            },
      {
            "french": "avoir",
            "english": "to have"
            },
      {
            "french": "savoir",
            "english": "to know (facts)"
            },
      {
            "french": "connaître",
            "english": "to know (people/places)"
            },
      {
            "french": "pouvoir",
            "english": "can, to be able to"
            },
      {
            "french": "vouloir",
            "english": "to want"
            },
      {
            "french": "apercevoir",
            "english": "to perceive"
            },
      {
            "french": "décevoir",
            "english": "to disappoint"
            },
      {
            "french": "émouvoir",
            "english": "to move (emotion)"
            },
      {
            "french": "prévoir",
            "english": "to foresee"
            },
      {
            "french": "recevoir",
            "english": "to receive"
            },
      {
            "french": "valoir",
            "english": "to be worth"
            },
      {
            "french": "voir",
            "english": "to see"
            },
      {
            "french": "falloir",
            "english": "to be necessary"
            },
      {
            "french": "pleuvoir",
            "english": "to rain"
            }
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
    rule: ["faire: fais/fais/fait/faisons/faites/font", "aller: vais/vas/va/allons/allez/vont", "vouloir/pouvoir pattern: veux/veut/veulent, peux/peut/peuvent"],
    planet: "Mouvance",
    description: "Master the rules and syntax of More irregular verbs.",
    lesson: `<h2>More irregular verbs</h2><p>The immediate future tense. Aller is also used to form the immediate future. So, to talk about what you are going to do, use  aller in the present indicative followed immediately by a verb in the infinitive. Je vais acheter une voiture en mai. I am going to buy a car in May. Nous allons faire un voyage en avril. We are going to go on a trip in April. Elle va apprendre le chinois. She is going to learn Chinese. Ils vont bientôt déménager. They’re going to move soon. This construction can replace the present in colloquial speech. Vous déjeunez avec nous? Are you having lunch with us? Vous allez déjeuner avec nous? Are you going to have lunch with us? Est-ce que tu acceptes leur off re? Are you...</p>`,
    exercises: [
      { id: "4-1", type: "mcq", question: "How do you say 'I go'?", options: ["Je vais", "Je vas", "Je vai", "J'alle"], answer: 0, explanation: "Aller is irregular: je vais, tu vas, il va, nous allons, vous allez, ils vont." },
      { id: "4-2", type: "fill-blank", question: "Nous ____ (aller) au marché demain.", answer: "allons", hint: "Nous allons = We go. The immediate future uses aller + infinitive." },
      { id: "4-3", type: "mcq", question: "To say 'She is going to study', use:", options: ["Elle va étudier", "Elle aller étudier", "Elle vais étudier", "Elle étudier va"], answer: 0, explanation: "Immediate future = aller (conjugated) + infinitive." },
      { id: "4-4", type: "fill-blank", question: "Qu'est-ce qu'il ____ (faire) ce soir?", answer: "fait", hint: "Faire is irregular: je fais, tu fais, il fait, nous faisons, vous faites, ils font." },
      { id: "4-5", type: "translation", question: "Translate: We are going to go on a trip in April.", answer: ["Nous allons faire un voyage en avril."], hint: "Use aller + infinitive for the immediate future." }
    ],
    vocabulary: [
      {
            "french": "lundi",
            "english": "Monday"
            },
      {
            "french": "mardi",
            "english": "Tuesday"
            },
      {
            "french": "mercredi",
            "english": "Wednesday"
            },
      {
            "french": "jeudi",
            "english": "Thursday"
            },
      {
            "french": "vendredi",
            "english": "Friday"
            },
      {
            "french": "samedi",
            "english": "Saturday"
            },
      {
            "french": "dimanche",
            "english": "Sunday"
            },
      {
            "french": "janvier",
            "english": "January"
            },
      {
            "french": "février",
            "english": "February"
            },
      {
            "french": "mars",
            "english": "March"
            },
      {
            "french": "avril",
            "english": "April"
            },
      {
            "french": "mai",
            "english": "May"
            },
      {
            "french": "juin",
            "english": "June"
            },
      {
            "french": "juillet",
            "english": "July"
            },
      {
            "french": "août",
            "english": "August"
            },
      {
            "french": "septembre",
            "english": "September"
            },
      {
            "french": "octobre",
            "english": "October"
            },
      {
            "french": "novembre",
            "english": "November"
            },
      {
            "french": "décembre",
            "english": "December"
            },
      {
            "french": "le printemps",
            "english": "spring"
            },
      {
            "french": "l’été",
            "english": "summer"
            },
      {
            "french": "l’automne",
            "english": "fall"
            },
      {
            "french": "l’hiver",
            "english": "winter"
            },
      {
            "french": "aller",
            "english": "to go"
            },
      {
            "french": "venir",
            "english": "to come"
            },
      {
            "french": "devenir",
            "english": "to become"
            },
      {
            "french": "revenir",
            "english": "to come back"
            },
      {
            "french": "tenir",
            "english": "to hold"
            },
      {
            "french": "faire",
            "english": "to do/make"
            }
],
    boss: {
        intro: "The guardian of Mouvance demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Ils ____ (aller) bientôt déménager.", answer: "vont" },
            { type: "fill-blank", question: "Il ____ (faire) du sport le weekend.", answer: "fait" },
            { type: "fill-blank", question: "Nous ____ (aller) voir un film ce soir.", answer: "allons" }
        ]
    }
  },
  {
    id: 5,
    title: "Devoir And Its Many Facets",
    rule: ["devoir conjugates: dois/dois/doit/devons/devez/doivent", "devoir + infinitive = must/have to: Je dois partir", "Also means to owe: Je te dois 10 euros"],
    planet: "Le Fardeau",
    description: "Master the rules and syntax of Devoir and its many facets.",
    lesson: `<h2>Devoir and its many facets</h2><p><strong>Devoir</strong> is irregular, and it carries three different meanings depending on what follows it. Learn the conjugation first — it has to be memorised cold.</p><ul><li>je <strong>dois</strong></li><li>tu <strong>dois</strong></li><li>il/elle/on <strong>doit</strong></li><li>nous <strong>devons</strong></li><li>vous <strong>devez</strong></li><li>ils/elles <strong>doivent</strong></li></ul><p><strong>1. Obligation.</strong> Followed by an infinitive, devoir means <em>must</em> or <em>to have to</em>. This is by far the most common use.</p><ul><li>Je <strong>dois</strong> partir maintenant. &rarr; I must leave now.</li><li>Nous <strong>devons</strong> finir ce travail avant vendredi. &rarr; We have to finish this work before Friday.</li><li>Vous <strong>devez</strong> étudier. &rarr; You must study.</li></ul><p><strong>2. Probability.</strong> Devoir also expresses what is likely — the English <em>must</em> that means <em>probably</em>.</p><ul><li>Elle <strong>doit</strong> être fatiguée. &rarr; She must be tired.</li><li>Ils <strong>doivent</strong> être en retard. &rarr; They must be running late.</li></ul><p><strong>3. To owe.</strong> With a direct object instead of an infinitive, devoir means to owe.</p><ul><li>Je te <strong>dois</strong> dix euros. &rarr; I owe you ten euros.</li></ul><p class="vocab-tip"><em>Tip:</em> The past participle is <strong>dû</strong> — j’ai dû partir (I had to leave). Careful with the conditional: <strong>je devrais</strong> means <em>I should</em>, not <em>I must</em>.</p><p><strong>Il y a</strong> (there is, there are)</p><p>An impersonal expression covering both there is and there are — the number of the noun after it makes no difference.</p><ul><li>Il y a un chat sur le canapé. &rarr; There is a cat on the sofa.</li><li>Il n’y a plus rien dans le frigo. &rarr; There is nothing left in the fridge.</li></ul><p>It also anchors a number of set expressions:</p><ul><li>Qu’est-ce qu’il y a ? &rarr; What’s the matter?</li><li>Il n’y a qu’à leur dire. &rarr; Just tell them.</li><li>Il y avait une fois… &rarr; Once upon a time…</li><li>Il y a cinquante kilomètres d’ici à Paris. &rarr; It’s fifty kilometers from here to Paris.</li><li>Il y en a qui feraient mieux de se taire. &rarr; Some people would do better to keep quiet.</li></ul><p><strong>Il s’agit de</strong> (it is a matter of, it’s about)</p><p>A fixed expression introducing the subject of a work — a book, a film, a play. It is always impersonal: only <em>il</em> can be its subject, and it never takes a personal one.</p><ul><li>Il s’agit d’une histoire d’amour. &rarr; It’s about a love story.</li><li>Dans ce livre, il s’agit de la Révolution. &rarr; This book is about the Revolution.</li></ul>`,
    exercises: [
      { id: "5-1", type: "mcq", question: "What does 'Il y a un chat sur le canapé' mean?", options: ["There is a cat on the sofa", "He has a cat on the sofa", "There is a sofa for the cat", "A cat is on the floor"], answer: 0, explanation: "'Il y a' means 'there is' or 'there are'." },
      { id: "5-2", type: "fill-blank", question: "Je ____ (devoir) partir maintenant.", answer: "dois", hint: "Devoir: je dois, tu dois, il doit, nous devons, vous devez, ils doivent." },
      { id: "5-3", type: "mcq", question: "Which is correct for 'You must study'?", options: ["Tu dois étudier", "Tu devoir étudier", "Tu doit étudier", "Tu devez étudier"], answer: 0, explanation: "Tu dois = you must. Devoir is conjugated for each subject." },
      { id: "5-4", type: "fill-blank", question: "____ beaucoup d'étudiants dans cette classe. (There are many students...)", answer: "Il y a", hint: "Use 'il y a' for both 'there is' and 'there are'." },
      { id: "5-5", type: "mcq", question: "Nous ____ finir ce travail avant vendredi.", options: ["devons", "doit", "devoir", "dois"], answer: 0, explanation: "Nous devons = we must. The nous form of devoir is devons." }
    ],
    vocabulary: [
      {
            "french": "une voiture",
            "english": "a car"
            },
      {
            "french": "un autobus",
            "english": "a bus"
            },
      {
            "french": "un taxi",
            "english": "a cab"
            },
      {
            "french": "un train",
            "english": "a train"
            },
      {
            "french": "un avion",
            "english": "a plane"
            },
      {
            "french": "une navette",
            "english": "a shuttle"
            },
      {
            "french": "la circulation",
            "english": "traffic"
            },
      {
            "french": "embarquer",
            "english": "to board"
            },
      {
            "french": "débarquer",
            "english": "to get off"
            },
      {
            "french": "atterrir",
            "english": "to land"
            },
      {
            "french": "décoller",
            "english": "to take off"
            },
      {
            "french": "manquer le train",
            "english": "to miss the train"
            },
      {
            "french": "conduire",
            "english": "to drive"
            },
      {
            "french": "tomber en panne",
            "english": "to break down"
            },
      {
            "french": "faire le plein",
            "english": "to fill up"
            },
      {
            "french": "monter",
            "english": "to go up/get on"
            },
      {
            "french": "descendre",
            "english": "to go down/get off"
            },
      {
            "french": "voyager",
            "english": "to travel"
            },
      {
            "french": "devoir",
            "english": "to have to/must"
            },
      {
            "french": "peindre",
            "english": "to paint"
            },
      {
            "french": "craindre",
            "english": "to fear"
            },
      {
            "french": "plaindre",
            "english": "to pity"
            },
      {
            "french": "éteindre",
            "english": "to extinguish"
            }
],
    boss: {
        intro: "The guardian of Le Fardeau demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Tu ____ (devoir) partir maintenant.", answer: "dois" },
            { type: "fill-blank", question: "Il y ____ beaucoup de monde ici.", answer: "a" },
            { type: "fill-blank", question: "Elle ____ (devoir) appeler ses parents.", answer: "doit" }
        ]
    }
  },
  {
    id: 6,
    title: "Pronominal Verbs",
    rule: ["Add a reflexive pronoun (me/te/se/nous/vous/se) before the verb", "je me leve, tu te leves, il se leve, nous nous levons", "The subject acts on itself — 'I wash myself', 'she gets up'"],
    planet: "Miroir",
    description: "Master the rules and syntax of Pronominal verbs.",
    lesson: `<h2>Pronominal verbs</h2><p>Several diff erent types of verbs are included in the pronominals: the reflexive, the  reciprocal, the passive, and the subjective. Too many? Not at all! As you study the  diff erent types, you’ll discover the subtleties of each. How to identify pronominal  verbs? Pronominal verbs are verbs that are preceded in the infinitive and in conjugated forms by the pronouns me, te, se, nous, vous, se. Let’s start with the reflexive verbs. Reflexive verbs The action of a reflexive verb is, for the most part, reflected back on the subject,  the action being done to oneself. The pronouns me, te, se drop the e before mute  h or a vowel. je me lève I get up nous nous levons we get up tu te lèves you get up vous vous levez you get up il/elle se lève he/she gets up ils/elles se lèvent the...</p>`,
    exercises: [
      { id: "6-1", type: "mcq", question: "How do you say 'I get up at 7'?", options: ["Je me lève à sept heures", "Je lève à sept heures", "Je me lever à sept heures", "Je se lève à sept heures"], answer: 0, explanation: "Reflexive verbs need a pronoun: me, te, se, nous, vous, se." },
      { id: "6-2", type: "fill-blank", question: "Elle ____ lave les mains. (She washes her hands.)", answer: "se", hint: "The reflexive pronoun for il/elle is 'se'." },
      { id: "6-3", type: "fill-blank", question: "Nous ____ (se coucher) à onze heures.", answer: "nous couchons", hint: "Se coucher: je me couche, nous nous couchons, vous vous couchez." },
      { id: "6-4", type: "mcq", question: "Which sentence is grammatically correct?", options: ["Ils s'aiment beaucoup", "Ils aiment se beaucoup", "Ils se aiment beaucoup", "Ils aiment beaucoup se"], answer: 0, explanation: "The reflexive pronoun (se → s' before vowel) goes before the verb." },
      { id: "6-5", type: "translation", question: "Translate: You do not rest enough. (tu form)", answer: ["Tu ne te reposes pas assez."], hint: "Use the pronominal verb 'se reposer' in negative form." }
    ],
    vocabulary: [
      {
            "french": "la peau",
            "english": "skin"
            },
      {
            "french": "le visage",
            "english": "face"
            },
      {
            "french": "la tête",
            "english": "head"
            },
      {
            "french": "les cheveux",
            "english": "hair"
            },
      {
            "french": "les yeux",
            "english": "eyes"
            },
      {
            "french": "le nez",
            "english": "nose"
            },
      {
            "french": "la bouche",
            "english": "mouth"
            },
      {
            "french": "les lèvres",
            "english": "lips"
            },
      {
            "french": "l'oreille",
            "english": "ear"
            },
      {
            "french": "le dos",
            "english": "back"
            },
      {
            "french": "le bras",
            "english": "arm"
            },
      {
            "french": "le coude",
            "english": "elbow"
            },
      {
            "french": "la main",
            "english": "hand"
            },
      {
            "french": "le doigt",
            "english": "finger"
            },
      {
            "french": "l'ongle",
            "english": "nail"
            },
      {
            "french": "la hanche",
            "english": "hip"
            },
      {
            "french": "la taille",
            "english": "waist"
            },
      {
            "french": "la jambe",
            "english": "leg"
            },
      {
            "french": "le genou",
            "english": "knee"
            },
      {
            "french": "la cheville",
            "english": "ankle"
            },
      {
            "french": "le pied",
            "english": "foot"
            },
      {
            "french": "se lever",
            "english": "to get up"
            },
      {
            "french": "se laver",
            "english": "to wash"
            },
      {
            "french": "s'habiller",
            "english": "to get dressed"
            },
      {
            "french": "se reposer",
            "english": "to rest"
            },
      {
            "french": "se promener",
            "english": "to walk"
            },
      {
            "french": "s'amuser",
            "english": "to have fun"
            },
      {
            "french": "se dépêcher",
            "english": "to hurry"
            },
      {
            "french": "s'endormir",
            "english": "to fall asleep"
            }
],
    boss: {
        intro: "The guardian of Miroir demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Je ____ (se lever) à sept heures.", answer: "me lève" },
            { type: "fill-blank", question: "Ils ____ (se parler) tous les jours.", answer: "se parlent" },
            { type: "fill-blank", question: "Vous ____ (se dépêcher)!", answer: "vous dépêchez" }
        ]
    }
  },
  {
    id: 7,
    title: "The Passé Composé",
    rule: ["Formula: avoir or etre (present) + past participle", "Most verbs take avoir. DR MRS VANDERTRAMP verbs take etre", "With etre: the past participle agrees with the subject in gender/number"],
    planet: "Mémoire",
    description: "Master the rules and syntax of The passé composé.",
    lesson: `<h2>The passé composé</h2><p>There are several forms that can be used to talk about the past in French. The most  common is the passé composé, called in English the compound past or the present perfect. The passé composé is one of the tenses colloquially used in French to  talk about past events. It refers to a single action in the past. It is built of two parts:  the auxiliary or helping verb, avoir or être, /H11001 a past participle. The past participle of regular verbs The past participle is formed by adding an ending to the verb stem. Regular past  participles take the following endings: -er verbs take -é: parler (to speak) &rarr; parlé (spoken) -ir verbs take -i: choisir (to choose) &rarr; choisi (chosen) -re verbs take -u: entendre (to hear) &rarr; entendu (heard) Note that the passé composé can ...</p>`,
    exercises: [
      { id: "7-1", type: "mcq", question: "What is the passé composé of 'parler' for 'je'?", options: ["j'ai parlé", "j'ai parler", "je suis parlé", "j'avais parlé"], answer: 0, explanation: "Passé composé = avoir/être (present) + past participle. -er verbs take -é." },
      { id: "7-2", type: "fill-blank", question: "Ils ____ (manger) au restaurant hier soir.", answer: "ont mangé", hint: "Manger is an -er verb: past participle is mangé. Use 'ont' for ils." },
      { id: "7-3", type: "mcq", question: "Which verb uses ÊTRE (not avoir) in passé composé?", options: ["aller", "manger", "finir", "vendre"], answer: 0, explanation: "Verbs of motion like aller, venir, partir, arriver use être as auxiliary." },
      { id: "7-4", type: "fill-blank", question: "Elle ____ (venir) hier. (She came yesterday.)", answer: "est venue", hint: "Venir uses être. The past participle venu agrees with a feminine subject: venue." },
      { id: "7-5", type: "mcq", question: "How do you negate passé composé? Il ____ sa voiture.", options: ["n'a pas vendu", "n'a vendu pas", "pas a vendu", "a ne vendu pas"], answer: 0, explanation: "In passé composé, ne...pas wraps around the auxiliary: n'a pas vendu." }
    ],
    vocabulary: [
      {
            "french": "le cinéma",
            "english": "cinema"
            },
      {
            "french": "le film",
            "english": "film/movie"
            },
      {
            "french": "le documentaire",
            "english": "documentary"
            },
      {
            "french": "le metteur en scène",
            "english": "director"
            },
      {
            "french": "tourner un film",
            "english": "to shoot a movie"
            },
      {
            "french": "le tournage",
            "english": "shooting (film)"
            },
      {
            "french": "le théâtre",
            "english": "theater"
            },
      {
            "french": "la pièce de théâtre",
            "english": "play"
            },
      {
            "french": "l'intrigue",
            "english": "plot"
            },
      {
            "french": "l'acteur/actrice",
            "english": "actor/actress"
            },
      {
            "french": "le comédien/comédienne",
            "english": "actor/actress (theater)"
            },
      {
            "french": "la vedette",
            "english": "star"
            },
      {
            "french": "les coulisses",
            "english": "backstage"
            },
      {
            "french": "les décors",
            "english": "sets"
            },
      {
            "french": "jouer un rôle",
            "english": "to play a role"
            },
      {
            "french": "sous-titré",
            "english": "subtitled"
            },
      {
            "french": "doublé",
            "english": "dubbed"
            },
      {
            "french": "avoir (eu)",
            "english": "to have (had)"
            },
      {
            "french": "être (été)",
            "english": "to be (been)"
            },
      {
            "french": "faire (fait)",
            "english": "to do (done)"
            },
      {
            "french": "prendre (pris)",
            "english": "to take (taken)"
            },
      {
            "french": "mettre (mis)",
            "english": "to put (put)"
            },
      {
            "french": "voir (vu)",
            "english": "to see (seen)"
            },
      {
            "french": "boire (bu)",
            "english": "to drink (drunk)"
            }
],
    boss: {
        intro: "The guardian of Mémoire demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Elle ____ (manger) une pomme.", answer: "a mangé" },
            { type: "fill-blank", question: "Nous ____ (partir) à midi.", answer: "sommes partis" },
            { type: "fill-blank", question: "Il ____ (prendre) le bus.", answer: "a pris" }
        ]
    }
  },
  {
    id: 8,
    title: "The Imparfait",
    rule: ["Stem = nous present tense minus -ons. Endings: -ais/-ais/-ait/-ions/-iez/-aient", "Use for: past habits (every day), ongoing background, descriptions", "Contrast with passe compose: imparfait = was happening, PC = it happened"],
    planet: "Nostalgia",
    description: "Master the rules and syntax of The imparfait.",
    lesson: `<h2>The imparfait</h2><p>The imparfait The uses of the imparfait (imperfect) are some of the most difficult aspects of  French grammar to master. While the passé composé is used to talk abo u t an  action that took place on a specific occasion in the past, the imparfait plays a different role. It is used to describe a state of mind and being in the past as well as  continuous, repeated, or habitual past actions. T o form the imperfect, take the nous form of the present tense and remove  the -ons ending, which gives you the stem. Then add the imparfait endings (-ais,  -ais, -ait, -ions, -iez, -aient) to this stem. For example, <strong>parler</strong> (to speak): nous parlons &rarr; <strong>parl-</strong>. je parlais (I spoke), tu parlais (you spoke), il/elle parlait (he/she spoke), nous parlions (we spoke), vous parliez (you spoke), ils/elles parlaient (they spoke).</p>`,
    exercises: [
      { id: "8-1", type: "mcq", question: "What is the imparfait stem of 'parler' (from 'nous parlons')?", options: ["parl-", "parle-", "parler-", "parlons-"], answer: 0, explanation: "Remove -ons from the nous present form: parlons → parl-." },
      { id: "8-2", type: "fill-blank", question: "Quand j'étais jeune, je ____ (jouer) au foot tous les jours.", answer: "jouais", hint: "Habitual past actions use imparfait. Stem: jou- + -ais." },
      { id: "8-3", type: "mcq", question: "Which ending is correct for 'il/elle' in imparfait?", options: ["-ait", "-ais", "-aient", "-ions"], answer: 0, explanation: "Imparfait endings: -ais, -ais, -ait, -ions, -iez, -aient." },
      { id: "8-4", type: "fill-blank", question: "Nous ____ (habiter) à Lyon quand j'étais enfant.", answer: "habitions", hint: "Nous imparfait = stem + -ions. Habiter stem: habit-." },
      { id: "8-5", type: "mcq", question: "When would you use imparfait instead of passé composé?", options: ["To describe a habitual past action", "To narrate a single completed event", "To talk about the future", "To express a command"], answer: 0, explanation: "Imparfait describes habitual, repeated, or ongoing past states/actions." }
    ],
    vocabulary: [
      {
            "french": "les vacances",
            "english": "vacation"
            },
      {
            "french": "faire un voyage",
            "english": "to take a trip"
            },
      {
            "french": "un pèlerinage",
            "english": "pilgrimage"
            },
      {
            "french": "à la mer",
            "english": "by the sea"
            },
      {
            "french": "à la plage",
            "english": "at the beach"
            },
      {
            "french": "à la campagne",
            "english": "in the country"
            },
      {
            "french": "à la montagne",
            "english": "in the mountains"
            },
      {
            "french": "le paysage",
            "english": "landscape"
            },
      {
            "french": "dans le parc",
            "english": "in the park"
            },
      {
            "french": "randonner",
            "english": "to go hiking"
            },
      {
            "french": "escalader",
            "english": "to climb"
            },
      {
            "french": "une étape",
            "english": "stopover"
            },
      {
            "french": "explorer",
            "english": "to explore"
            },
      {
            "french": "une visite guidée",
            "english": "guided tour"
            },
      {
            "french": "visiter",
            "english": "to visit (place)"
            },
      {
            "french": "rendre visite à",
            "english": "to visit (person)"
            },
      {
            "french": "accueillir",
            "english": "to welcome"
            },
      {
            "french": "un festival",
            "english": "festival"
            },
      {
            "french": "les loisirs",
            "english": "leisure time"
            }
],
    boss: {
        intro: "The guardian of Nostalgia demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Quand j'étais enfant, je ____ (jouer) au parc.", answer: "jouais" },
            { type: "fill-blank", question: "Nous ____ (habiter) à Lyon.", answer: "habitions" },
            { type: "fill-blank", question: "Elle ____ (être) professeure.", answer: "était" }
        ]
    }
  },
  {
    id: 9,
    title: "The Futur Simple",
    rule: ["Add to the infinitive: -ai/-as/-a/-ons/-ez/-ont (keep -re verbs: vendr-ai)", "Irregular stems: etre→ser, avoir→aur, aller→ir, faire→fer, pouvoir→pourr", "Use for definite future plans and if-then (Si...futur simple)"],
    planet: "Demain",
    description: "Master the rules and syntax of The futur simple.",
    lesson: `<h2>The futur simple</h2><p>You have become acquainted with the future in Chapter 4 when you studied the  futur immédiat. French has two other future constructions: the futur simple and  the futur antérieur. To form t he futur simple of most verbs, use the infinitive as  the stem and add the endings -ai, -as, -a, -ons, -ez, -ont. For -re verbs, drop the e  from the infinitive before adding the endings. Here are some examples: décider to decide je décider ai I’ll decide nous décider ons we’ll decide tu décider as you’ll decide vous décider ez you’ll decide il/elle décider a he’ll/she’ll decide ils/elles décider ont they’ll decide choisir to choose je choisir ai I’ll choose nous choisir ons we’ll choose tu choisir as you’ll choose vous choisir ez you’ll choose il/elle choi...</p>`,
    exercises: [
      { id: "9-1", type: "mcq", question: "What is the futur simple of 'décider' for 'je'?", options: ["je déciderai", "je déciderais", "je décideré", "je décidai"], answer: 0, explanation: "Futur simple = infinitive + endings: -ai, -as, -a, -ons, -ez, -ont." },
      { id: "9-2", type: "fill-blank", question: "Elle ____ (partir) demain matin.", answer: "partira", hint: "Partir futur: je partirai, tu partiras, il/elle partira. Stem = partir-." },
      { id: "9-3", type: "mcq", question: "What is the irregular futur stem of 'aller'?", options: ["ir-", "all-", "aller-", "va-"], answer: 0, explanation: "Irregular future stems: aller→ir-, avoir→aur-, être→ser-, faire→fer-." },
      { id: "9-4", type: "fill-blank", question: "Vous ____ (avoir) les résultats la semaine prochaine.", answer: "aurez", hint: "Avoir has an irregular future stem: aur-. Vous + -ez = aurez." },
      { id: "9-5", type: "mcq", question: "When a clause begins with 'quand' about the future, the verb is in:", options: ["futur simple", "imparfait", "présent", "conditionnel"], answer: 0, explanation: "After quand/lorsque/dès que for future events, French uses futur simple (unlike English)." }
    ],
    vocabulary: [
      {
            "french": "un élève",
            "english": "pupil"
            },
      {
            "french": "un étudiant",
            "english": "student"
            },
      {
            "french": "un professeur",
            "english": "teacher"
            },
      {
            "french": "un cours",
            "english": "course"
            },
      {
            "french": "un examen",
            "english": "exam"
            },
      {
            "french": "un stage",
            "english": "internship"
            },
      {
            "french": "apprendre",
            "english": "to learn"
            },
      {
            "french": "enseigner",
            "english": "to teach"
            },
      {
            "french": "étudier",
            "english": "to study"
            },
      {
            "french": "suivre un cours",
            "english": "to take a class"
            },
      {
            "french": "les devoirs",
            "english": "homework"
            },
      {
            "french": "passer un examen",
            "english": "to take an exam"
            },
      {
            "french": "réussir",
            "english": "to pass/succeed"
            },
      {
            "french": "échouer",
            "english": "to fail"
            },
      {
            "french": "parler couramment",
            "english": "to speak fluently"
            },
      {
            "french": "être rouillé",
            "english": "to be rusty"
            },
      {
            "french": "un CV",
            "english": "resume"
            },
      {
            "french": "faire l'école buissonnière",
            "english": "to play hooky"
            },
      {
            "french": "recevoir son diplôme",
            "english": "to graduate"
            },
      {
            "french": "une note",
            "english": "grade"
            }
],
    boss: {
        intro: "The guardian of Demain demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Elle ____ (aller) à Paris la semaine prochaine.", answer: "ira" },
            { type: "fill-blank", question: "Vous ____ (avoir) les résultats demain.", answer: "aurez" },
            { type: "fill-blank", question: "Je ____ (faire) mes devoirs ce soir.", answer: "ferai" }
        ]
    }
  },
  {
    id: 10,
    title: "The Plus-Que-Parfait",
    rule: ["Formula: avoir or etre (imparfait) + past participle", "j'avais mange, il etait parti", "Use for 'had done' — an action completed before another past action"],
    planet: "L'Ancien Temps",
    description: "Master the rules and syntax of The plus-que-parfait.",
    lesson: `<h2>The plus-que-parfait</h2><p>The plus-que-parfait (pluperfect) indicates a past action that happened before  another past action started (in English, had done). It can be seen as “past” past  tense.  Formation of the plus-que-parfait To form t he plus-que-parfait, use the forms of avoir or être in the imparfait /H11001  the past participle of the main verb.  Let’s review the imparfait of the auxiliaries être and avoir : être to be j’étais I was nous étions we were tu étais you were vous étiez you were il/elle était he/she was ils/elles étaient they were avoir to have j’avais I had nous avions we had tu avais you had vous aviez you had il/elle avait he/she had ils/elles avaient they had Il avait toujours fini avant He had always finished before  les autres. the others. Tu avais oublié l’anniversaire de You had fo...</p>`,
    exercises: [
      { id: "10-1", type: "mcq", question: "How is the plus-que-parfait formed?", options: ["Imparfait of avoir/être + past participle", "Present of avoir/être + past participle", "Futur of avoir/être + past participle", "Passé composé of avoir/être"], answer: 0, explanation: "Plus-que-parfait = avoir/être (imparfait) + past participle. E.g., j'avais mangé." },
      { id: "10-2", type: "fill-blank", question: "Il ____ (finir) avant les autres. (He had finished before the others.)", answer: "avait fini", hint: "Imparfait of avoir for il = avait. Past participle of finir = fini." },
      { id: "10-3", type: "mcq", question: "What does 'Tu avais oublié ton livre' mean?", options: ["You had forgotten your book", "You forgot your book", "You will forget your book", "You were forgetting your book"], answer: 0, explanation: "Plus-que-parfait translates to 'had + past participle' in English." },
      { id: "10-4", type: "fill-blank", question: "Elles ____ (partir) avant notre arrivée.", answer: "étaient parties", hint: "Partir uses être. Imparfait of être for elles = étaient. Participle 'parties' agrees: plural feminine." },
      { id: "10-5", type: "mcq", question: "Which sentence uses plus-que-parfait correctly?", options: ["Il avait mangé quand j'ai appelé", "Il a mangé quand j'avais appelé", "Il mange quand j'avais appelé", "Il mangeait quand j'a appelé"], answer: 0, explanation: "Plus-que-parfait (avait mangé) shows the action that happened FIRST before another past event." }
    ],
    vocabulary: [
      {
            "french": "une pharmacie",
            "english": "pharmacy"
            },
      {
            "french": "un pharmacien",
            "english": "pharmacist"
            },
      {
            "french": "une ordonnance",
            "english": "prescription"
            },
      {
            "french": "un médicament",
            "english": "medicine"
            },
      {
            "french": "un remède",
            "english": "remedy"
            },
      {
            "french": "un sirop",
            "english": "syrup"
            },
      {
            "french": "un traitement",
            "english": "treatment"
            },
      {
            "french": "des effets secondaires",
            "english": "side effects"
            },
      {
            "french": "un cachet/une gélule",
            "english": "pill/capsule"
            },
      {
            "french": "un analgésique",
            "english": "painkiller"
            },
      {
            "french": "une toux",
            "english": "cough"
            },
      {
            "french": "tousser",
            "english": "to cough"
            },
      {
            "french": "avoir un rhume",
            "english": "to have a cold"
            },
      {
            "french": "avoir la grippe",
            "english": "to have the flu"
            },
      {
            "french": "avoir mal",
            "english": "to have pain"
            },
      {
            "french": "être allergique",
            "english": "to be allergic"
            },
      {
            "french": "une douleur",
            "english": "pain"
            },
      {
            "french": "souffrir",
            "english": "to suffer"
            },
      {
            "french": "conseiller",
            "english": "to advise"
            }
],
    boss: {
        intro: "The guardian of L'Ancien Temps demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Il ____ (finir) avant les autres.", answer: "avait fini" },
            { type: "fill-blank", question: "Elles ____ (partir) quand je suis arrivé.", answer: "étaient parties" },
            { type: "fill-blank", question: "Je ____ (manger) quand il a appelé.", answer: "avais mangé" }
        ]
    }
  },
  {
    id: 11,
    title: "Present Conditional",
    rule: ["Same irregular stems as futur simple, but add imparfait endings", "Endings: -ais/-ais/-ait/-ions/-iez/-aient → je parlerais, il serait", "Use for: polite requests, hypotheticals, reported speech"],
    planet: "Mirage",
    description: "Master the rules and syntax of present conditional.",
    lesson: `<h2>Present conditional</h2><p>The présent du conditionnel (present conditional) has many uses we’ll explore in  this chapter. It is formed by adding the endings of the imperfect to the future stem  of the verb. For -er and -ir verbs, the future stem is the entire infinitive form. For  -re verbs, drop the final -e from the infinitive before adding the conditional endings. As you saw in Chapter 9, a number of irregular verbs have an irregular future stem. This same stem is used to form the present conditional. mettre to put je mettrais I would put nous mettrions we would put tu mettrais you would put vous mettriez you would put il/elle mettrait he/she would put ils/elles mettraient they would put faire to do je ferais I would do nous ferions we would do tu fera...</p>`,
    exercises: [
      { id: "11-1", type: "mcq", question: "The conditionnel présent is formed from:", options: ["Future stem + imparfait endings", "Infinitive + present endings", "Past participle + être", "Imparfait stem + future endings"], answer: 0, explanation: "Conditional = future stem + imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient)." },
      { id: "11-2", type: "fill-blank", question: "Il ____ (aimer) avoir une tortue. (He would like to have a turtle.)", answer: "aimerait", hint: "Aimer future stem = aimer-. Conditional for il = aimerait." },
      { id: "11-3", type: "mcq", question: "What is 'I would do' in French?", options: ["Je ferais", "Je ferai", "Je faisais", "Je fais"], answer: 0, explanation: "Faire has an irregular future/conditional stem: fer-. Je + -ais = ferais." },
      { id: "11-4", type: "fill-blank", question: "Nous ____ (aller) au cinéma, mais nous sommes fatigués.", answer: "irions", hint: "Aller conditional stem = ir-. Nous + -ions = irions." },
      { id: "11-5", type: "mcq", question: "Which sentence expresses a polite request using conditional?", options: ["Je voudrais un café, s'il vous plaît.", "Je veux un café, s'il vous plaît.", "Je voulais un café, s'il vous plaît.", "Je vais vouloir un café."], answer: 0, explanation: "Conditional (voudrais) is used for polite requests, softer than the present tense (veux)." }
    ],
    vocabulary: [
      {
            "french": "un animal",
            "english": "animal"
            },
      {
            "french": "un agneau",
            "english": "lamb"
            },
      {
            "french": "un aigle",
            "english": "eagle"
            },
      {
            "french": "un âne",
            "english": "donkey"
            },
      {
            "french": "une baleine",
            "english": "whale"
            },
      {
            "french": "un boeuf",
            "english": "ox"
            },
      {
            "french": "un canard",
            "english": "duck"
            },
      {
            "french": "un chameau",
            "english": "camel"
            },
      {
            "french": "un chat",
            "english": "cat"
            },
      {
            "french": "un cheval",
            "english": "horse"
            },
      {
            "french": "une chèvre",
            "english": "goat"
            },
      {
            "french": "un chien",
            "english": "dog"
            },
      {
            "french": "un cochon",
            "english": "pig"
            },
      {
            "french": "une colombe",
            "english": "dove"
            },
      {
            "french": "un coq",
            "english": "rooster"
            },
      {
            "french": "un crocodile",
            "english": "crocodile"
            },
      {
            "french": "un dauphin",
            "english": "dolphin"
            },
      {
            "french": "un écureuil",
            "english": "squirrel"
            },
      {
            "french": "un éléphant",
            "english": "elephant"
            },
      {
            "french": "une girafe",
            "english": "giraffe"
            },
      {
            "french": "une grenouille",
            "english": "frog"
            },
      {
            "french": "un lion",
            "english": "lion"
            },
      {
            "french": "un loup",
            "english": "wolf"
            },
      {
            "french": "un mouton",
            "english": "sheep"
            },
      {
            "french": "un oiseau",
            "english": "bird"
            },
      {
            "french": "un ours",
            "english": "bear"
            },
      {
            "french": "un pingouin",
            "english": "penguin"
            },
      {
            "french": "un poisson",
            "english": "fish"
            },
      {
            "french": "une poule",
            "english": "hen"
            },
      {
            "french": "un renard",
            "english": "fox"
            },
      {
            "french": "un requin",
            "english": "shark"
            },
      {
            "french": "un serpent",
            "english": "snake"
            },
      {
            "french": "un singe",
            "english": "monkey"
            },
      {
            "french": "une souris",
            "english": "mouse"
            },
      {
            "french": "un tigre",
            "english": "tiger"
            },
      {
            "french": "une tortue",
            "english": "turtle"
            },
      {
            "french": "une vache",
            "english": "cow"
            },
      {
            "french": "un zèbre",
            "english": "zebra"
            }
],
    boss: {
        intro: "The guardian of Mirage demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Je ____ (aimer) aller en France.", answer: "aimerais" },
            { type: "fill-blank", question: "Nous ____ (pouvoir) vous aider.", answer: "pourrions" },
            { type: "fill-blank", question: "Elle ____ (vouloir) une augmentation.", answer: "voudrait" }
        ]
    }
  },
  {
    id: 12,
    title: "Could",
    rule: ["'could' = conditional of pouvoir: pourrais/pourrais/pourrait/pourrions/pourriez/pourraient", "Polite request: Pourriez-vous m'aider? (Could you help me?)", "Hypothesis: Si j'avais le temps, je pourrais venir"],
    planet: "Volonté",
    description: "Master the rules and syntax of Could.",
    lesson: `<h2>Could</h2><p>Pourriez-vous annuler notre vol? Could you cancel our flight? The verb vouloir (to want) is used to express wishes and desires. It is also used for a polite  request in the conditional form. je veux I want nous voulons we want tu veux you want vous voulez you want il/elle veut he/she wants ils/elles veulent they want Elle veut une augmentation. She wants a raise. Nous voulons une table près de la cheminée. We want a table by the fireplace. Je voudrais vous parler. I would like to speak with you. 3·9EXERCICE  Mettre au présent les verbes entre parenthèses.  1. Nous (vouloir) une chambre qui donne sur le jardin.  2. Je (ne pas pouvoir) assister à la réunion à quinze heures. 3. Je (vouloir) vous parler avant jeudi. 4. Nous (pouvoir) envoyer les documents par la p...</p>`,
    exercises: [
      { id: "12-1", type: "mcq", question: "How do you politely say 'Could you help me?'", options: ["Pourriez-vous m'aider?", "Pouvez-vous m'aider?", "Puissiez-vous m'aider?", "Pouviez-vous m'aider?"], answer: 0, explanation: "Conditional of pouvoir (pourriez) is more polite than the present (pouvez)." },
      { id: "12-2", type: "fill-blank", question: "Elle ____ (vouloir) te parler. (She would like to speak with you.)", answer: "voudrait", hint: "Vouloir conditional stem = voudr-. Elle + -ait = voudrait." },
      { id: "12-3", type: "mcq", question: "What is the conditional stem of 'pouvoir'?", options: ["pourr-", "pouv-", "peuv-", "pouvr-"], answer: 0, explanation: "Pouvoir has an irregular conditional/future stem: pourr-." },
      { id: "12-4", type: "fill-blank", question: "Nous ____ (pouvoir) envoyer les documents. (We could send the documents.)", answer: "pourrions", hint: "Pouvoir conditional stem = pourr-. Nous + -ions = pourrions." },
      { id: "12-5", type: "mcq", question: "Elle veut ____. (She wants a raise.)", options: ["une augmentation", "un augmentation", "des augmentations", "une augmente"], answer: 0, explanation: "Augmentation is feminine: une augmentation." }
    ],
    vocabulary: [
      {
            "french": "les instruments",
            "english": "instruments"
            },
      {
            "french": "l'accordéon",
            "english": "accordion"
            },
      {
            "french": "l'alto",
            "english": "viola"
            },
      {
            "french": "la basse",
            "english": "bass"
            },
      {
            "french": "la batterie",
            "english": "drums"
            },
      {
            "french": "les castagnettes",
            "english": "castanets"
            },
      {
            "french": "la clarinette",
            "english": "clarinet"
            },
      {
            "french": "le clavecin",
            "english": "harpsichord"
            },
      {
            "french": "le cor",
            "english": "horn"
            },
      {
            "french": "la contrebasse",
            "english": "double bass"
            },
      {
            "french": "la cymbale",
            "english": "cymbal"
            },
      {
            "french": "la flûte",
            "english": "flute"
            },
      {
            "french": "la guitare",
            "english": "guitar"
            },
      {
            "french": "l'harmonica",
            "english": "harmonica"
            },
      {
            "french": "la harpe",
            "english": "harp"
            },
      {
            "french": "le hautbois",
            "english": "oboe"
            },
      {
            "french": "le piano",
            "english": "piano"
            },
      {
            "french": "le saxophone",
            "english": "saxophone"
            },
      {
            "french": "le synthétiseur",
            "english": "synthesizer"
            },
      {
            "french": "le tambour",
            "english": "drum"
            },
      {
            "french": "le trombone",
            "english": "trombone"
            },
      {
            "french": "la trompette",
            "english": "trumpet"
            },
      {
            "french": "le violon",
            "english": "violin"
            },
      {
            "french": "le violoncelle",
            "english": "cello"
            },
      {
            "french": "le xylophone",
            "english": "xylophone"
            }
],
    boss: {
        intro: "The guardian of Volonté demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "____-vous m'aider? (Could you... polite)", answer: "Pourriez" },
            { type: "fill-blank", question: "Il ____ (vouloir) te parler.", answer: "voudrait" },
            { type: "fill-blank", question: "Nous ____ (vouloir) une table pour deux.", answer: "voudrions" }
        ]
    }
  },
  {
    id: 13,
    title: "Present Subjunctive",
    rule: ["Stem = ils present tense minus -ent. Endings: -e/-es/-e/-ions/-iez/-ent", "Triggered by: vouloir que, falloir que, bien que, pour que, douter que", "Key irregulars: etre (soit), avoir (ait), aller (aille), faire (fasse)"],
    planet: "Le Doute",
    description: "Master the rules and syntax of present subjunctive.",
    lesson: `<h2>Present subjunctive</h2><p>The subjunctive is a mood, not a tense. The mood of a verb determines how one  views an event. You have already studied verb tenses in the indicative mood (le  présent, l’imparfait, and le futur), stating objective facts, and in the conditional  mood, relating to possibilities. In Chapter 19 we will study the imperative mood  that gives commands. The subjunctive is another mood that refers to someone’s  opinion or deals with hypothetical actions. For most verbs, the present of the subjunctive is formed by adding the subjunctive endings (- e, -es, -e, -ions, -iez, -ent) to the stem. The stem for je, tu, il/ elle, ils/elles is found by dropping the -ent ending from the third-person plural  present indicative form (ils/elles). Note that the sound of the verb will be the same  f...</p>`,
    exercises: [
      { id: "13-1", type: "mcq", question: "When is the subjunctive used?", options: ["After expressions of will, doubt, or emotion with 'que'", "To describe habitual past actions", "To make polite requests", "To form the future tense"], answer: 0, explanation: "The subjunctive is triggered by: vouloir que, douter que, être content que, il faut que, etc." },
      { id: "13-2", type: "fill-blank", question: "Je veux que tu ____ (venir) à la fête.", answer: "viennes", hint: "Venir is irregular in subjunctive: que je vienne, tu viennes, il vienne." },
      { id: "13-3", type: "mcq", question: "Which sentence triggers the subjunctive?", options: ["Il faut que nous partions.", "Il pense que nous partons.", "Il dit que nous partons.", "Il sait que nous partons."], answer: 0, explanation: "'Il faut que' always triggers the subjunctive. Penser/dire/savoir + que use indicative." },
      { id: "13-4", type: "fill-blank", question: "Elle souhaite que vous ____ (finir) avant midi.", answer: "finissiez", hint: "Souhaiter que triggers subjunctive. Finir subjunctive vous = finissiez." },
      { id: "13-5", type: "mcq", question: "What is the subjunctive of 'être' for 'il'?", options: ["soit", "est", "serait", "sera"], answer: 0, explanation: "Être has an irregular subjunctive: je sois, tu sois, il soit, nous soyons, vous soyez, ils soient." }
    ],
    vocabulary: [
      {
            "french": "un ordinateur",
            "english": "computer"
            },
      {
            "french": "une souris",
            "english": "mouse"
            },
      {
            "french": "une touche",
            "english": "key"
            },
      {
            "french": "un clavier",
            "english": "keyboard"
            },
      {
            "french": "un écran",
            "english": "screen"
            },
      {
            "french": "cliquer",
            "english": "to click"
            },
      {
            "french": "imprimer",
            "english": "to print"
            },
      {
            "french": "une imprimante",
            "english": "printer"
            },
      {
            "french": "l'informatique",
            "english": "computer science"
            },
      {
            "french": "un internaute",
            "english": "web user"
            },
      {
            "french": "une banque de données",
            "english": "data bank"
            },
      {
            "french": "une base de données",
            "english": "database"
            },
      {
            "french": "une disquette",
            "english": "floppy disk"
            },
      {
            "french": "une page d'accueil",
            "english": "home page"
            },
      {
            "french": "la Toile",
            "english": "the Web"
            },
      {
            "french": "un disque dur",
            "english": "hard drive"
            },
      {
            "french": "un logiciel",
            "english": "software"
            },
      {
            "french": "numérique",
            "english": "digital"
            },
      {
            "french": "numériser",
            "english": "to digitize"
            },
      {
            "french": "sauvegarder",
            "english": "to save"
            },
      {
            "french": "se connecter",
            "english": "to log on"
            },
      {
            "french": "surfer sur Internet",
            "english": "to surf the Net"
            },
      {
            "french": "télécharger",
            "english": "to download"
            },
      {
            "french": "un site Web",
            "english": "website"
            }
],
    boss: {
        intro: "The guardian of Le Doute demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Il faut que tu ____ (venir).", answer: "viennes" },
            { type: "fill-blank", question: "Elle veut que nous ____ (partir).", answer: "partions" },
            { type: "fill-blank", question: "Je souhaite qu'il ____ (faire) beau.", answer: "fasse" }
        ]
    }
  },
  {
    id: 14,
    title: "Nitive Mood",
    rule: ["ne...pas surrounds the conjugated verb: je ne mange pas", "ne...plus (no more), ne...jamais (never), ne...rien (nothing), ne...que (only)", "In passe compose, ne...pas wraps the auxiliary: je n'ai pas mange"],
    planet: "L'Origine",
    description: "Master the rules and syntax of the infinitive mood.",
    lesson: `<h2>The infinitive mood</h2><p>The infinitif présent You will come across the infinitif, the infinitive mood, on many occasions. It is  used more frequently in French than in English. The infinitif can be used as the  subject of a verb. (Note that the...</p>`,
    exercises: [
      { id: "14-1", type: "mcq", question: "Which sentence uses the infinitive as a subject?", options: ["Voyager est amusant.", "Il voyage souvent.", "Il a voyagé hier.", "En voyageant, il chante."], answer: 0, explanation: "The infinitive can function as the subject of a sentence, like a noun." },
      { id: "14-2", type: "fill-blank", question: "Ne pas ____ (marcher) sur la pelouse. (Keep off the lawn.)", answer: "marcher", hint: "Negative infinitive instructions use: ne pas + infinitive." },
      { id: "14-3", type: "mcq", question: "Which sentence uses 'demander de' correctly?", options: ["Elle m'a demandé de partir.", "Elle m'a demandé que je parte.", "Elle m'a demandé je parte.", "Elle m'a demandé partir."], answer: 0, explanation: "After demander à quelqu'un, use de + infinitive." },
      { id: "14-4", type: "fill-blank", question: "J'entends les enfants ____ (chanter) dans le jardin.", answer: "chanter", hint: "After perception verbs (entendre, voir, écouter), use the infinitive." },
      { id: "14-5", type: "mcq", question: "How do you negate an infinitive?", options: ["Place ne pas BEFORE the infinitive", "Place ne...pas around the infinitive", "Place pas after the infinitive", "Place ne after the infinitive"], answer: 0, explanation: "Both ne and pas come BEFORE the infinitive: ne pas partir, ne pas manger." }
    ],
    vocabulary: [
      {
            "french": "ajouter",
            "english": "to add"
            },
      {
            "french": "assaisonner",
            "english": "to season"
            },
      {
            "french": "bouillir",
            "english": "to boil"
            },
      {
            "french": "braiser",
            "english": "to braise"
            },
      {
            "french": "broyer",
            "english": "to grind"
            },
      {
            "french": "caraméliser",
            "english": "to caramelize"
            },
      {
            "french": "couper",
            "english": "to cut"
            },
      {
            "french": "cuire",
            "english": "to cook (to bake)"
            },
      {
            "french": "décortiquer",
            "english": "to shell"
            },
      {
            "french": "écailler",
            "english": "to scale"
            },
      {
            "french": "écraser",
            "english": "to crush, to squash"
            },
      {
            "french": "écumer",
            "english": "to skim"
            },
      {
            "french": "émincer",
            "english": "to slice thinly"
            },
      {
            "french": "épicer",
            "english": "to spice"
            },
      {
            "french": "éplucher",
            "english": "to peel"
            },
      {
            "french": "faire la cuisine",
            "english": "to do the cooking"
            },
      {
            "french": "faire revenir",
            "english": "to brown"
            },
      {
            "french": "faire sauter",
            "english": "to sauté"
            },
      {
            "french": "farcir",
            "english": "to stuff"
            },
      {
            "french": "flamber",
            "english": "to flambé"
            },
      {
            "french": "frire",
            "english": "to fry"
            },
      {
            "french": "garnir",
            "english": "to garnish"
            },
      {
            "french": "glacer",
            "english": "to glaze"
            },
      {
            "french": "gratiner",
            "english": "to brown/gratin"
            },
      {
            "french": "griller",
            "english": "to grill"
            },
      {
            "french": "hacher",
            "english": "to chop"
            },
      {
            "french": "macérer",
            "english": "to macerate"
            },
      {
            "french": "mariner",
            "english": "to marinate"
            },
      {
            "french": "mettre au four",
            "english": "to put in oven"
            },
      {
            "french": "mijoter",
            "english": "to simmer"
            },
      {
            "french": "paner",
            "english": "to bread"
            },
      {
            "french": "pétrir",
            "english": "to knead"
            },
      {
            "french": "piler",
            "english": "to crush (to pound)"
            },
      {
            "french": "pocher",
            "english": "to poach"
            },
      {
            "french": "râper",
            "english": "to grate"
            },
      {
            "french": "réduire",
            "english": "to reduce"
            },
      {
            "french": "rôtir",
            "english": "to roast"
            },
      {
            "french": "tremper",
            "english": "to soak"
            },
      {
            "french": "verser",
            "english": "to pour"
            }
],
    boss: {
        intro: "The guardian of L'Origine demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Il a commencé ____ pleuvoir.", answer: "à" },
            { type: "fill-blank", question: "Je lui ai demandé ____ partir.", answer: "de" },
            { type: "fill-blank", question: "J'entends les oiseaux ____ (chanter).", answer: "chanter" }
        ]
    }
  },
  {
    id: 15,
    title: "Present Participle",
    rule: ["Present participle = nous present stem (minus -ons) + -ant", "parlons→parlant, finissons→finissant, prenons→prenant", "en + participle = while doing: en parlant (while speaking), en mangeant"],
    planet: "Le Flux",
    description: "Master the rules and syntax of present participle.",
    lesson: `<h2>Present participle</h2><p>The infinitif is often used in French where English uses the -ing form. Faire la cuisine est son passe-temps favori. Cooking is his favorite pastime. Suivre des cours de cuisine est Taking cooking classes is fun. amusant. Voyager par le train est rapide. Traveling by train is fast. Apprendre une langue étrangère Learning a foreign language is very est très utile. useful. The infinitif is also used for general instructions, prescriptions, public  notices, and proverbs (where the imperative is often used in English). Prendre une fois par jour. Take once a day. Ne pas se pencher par la fenêtre. Do not lean out of the window. Ne pas marcher sur la pelouse. Keep off the lawn. Lire le mode d’emploi avant Read the instructions before using. utilisation. Since a verb in the infinitive mood is not conjugated, the negation (ne… pas)  ...</p>`,
    exercises: [
      { id: "15-1", type: "mcq", question: "How is the present participle formed?", options: ["nous form minus -ons + -ant", "Infinitive + -ant", "je form + -ant", "Past participle + -ant"], answer: 0, explanation: "Present participle: take the nous form, remove -ons, add -ant. parlons → parlant." },
      { id: "15-2", type: "fill-blank", question: "Il a répondu en ____ (sourire). (He answered while smiling.)", answer: "souriant", hint: "The gérondif = en + present participle. Sourire: nous sourions → souri- + ant = souriant." },
      { id: "15-3", type: "mcq", question: "What does 'en travaillant' mean?", options: ["while working / by working", "after working", "before working", "to work"], answer: 0, explanation: "En + present participle (gérondif) expresses simultaneous action or means." },
      { id: "15-4", type: "fill-blank", question: "Elle a fait ____ (rôtir) le poulet. (She had the chicken roasted.)", answer: "rôtir", hint: "Faire + infinitive is a causative construction meaning 'to have something done'." },
      { id: "15-5", type: "mcq", question: "What is the present participle of 'avoir'?", options: ["ayant", "avantant", "avonnant", "havant"], answer: 0, explanation: "Avoir, être, and savoir have irregular present participles: ayant, étant, sachant." }
    ],
    vocabulary: [
      {
            "french": "jouer",
            "english": "to play"
            },
      {
            "french": "un joueur/joueuse",
            "english": "player"
            },
      {
            "french": "un adversaire",
            "english": "opponent"
            },
      {
            "french": "une équipe",
            "english": "team"
            },
      {
            "french": "gagner",
            "english": "to win"
            },
      {
            "french": "remporter une victoire",
            "english": "to win a victory"
            },
      {
            "french": "battre",
            "english": "to beat"
            },
      {
            "french": "un vainqueur",
            "english": "victor"
            },
      {
            "french": "un gagnant",
            "english": "winner"
            },
      {
            "french": "un perdant",
            "english": "loser"
            },
      {
            "french": "un match",
            "english": "game"
            },
      {
            "french": "manquer",
            "english": "to miss"
            },
      {
            "french": "courir",
            "english": "to run"
            },
      {
            "french": "sauter",
            "english": "to jump"
            },
      {
            "french": "lancer",
            "english": "to throw"
            },
      {
            "french": "s'entraîner",
            "english": "to train"
            },
      {
            "french": "un entraîneur",
            "english": "trainer"
            },
      {
            "french": "le base-ball",
            "english": "baseball"
            },
      {
            "french": "le basket-ball",
            "english": "basketball"
            },
      {
            "french": "la boxe",
            "english": "boxing"
            },
      {
            "french": "le cyclisme",
            "english": "cycling"
            },
      {
            "french": "le football",
            "english": "soccer"
            },
      {
            "french": "le football américain",
            "english": "football"
            },
      {
            "french": "le golf",
            "english": "golf"
            },
      {
            "french": "le jogging",
            "english": "jogging"
            },
      {
            "french": "la lutte",
            "english": "wrestling"
            },
      {
            "french": "la natation",
            "english": "swimming"
            },
      {
            "french": "le patinage",
            "english": "ice skating"
            },
      {
            "french": "la plongée",
            "english": "diving"
            },
      {
            "french": "le ski",
            "english": "skiing"
            },
      {
            "french": "la descente",
            "english": "downhill skiing"
            },
      {
            "french": "le ski de fond",
            "english": "cross-country skiing"
            },
      {
            "french": "le ski nautique",
            "english": "waterskiing"
            },
      {
            "french": "le tennis",
            "english": "tennis"
            },
      {
            "french": "la voile",
            "english": "sailing"
            },
      {
            "french": "un stade",
            "english": "stadium"
            },
      {
            "french": "une raquette",
            "english": "racket"
            },
      {
            "french": "un ballon",
            "english": "ball"
            }
],
    boss: {
        intro: "The guardian of Le Flux demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Il parle toujours en ____ (manger).", answer: "mangeant" },
            { type: "fill-blank", question: "Elle a quitté la salle en ____ (courir).", answer: "courant" },
            { type: "fill-blank", question: "Je prépare le dîner en ____ (écouter) la radio.", answer: "écoutant" }
        ]
    }
  },
  {
    id: 16,
    title: "Passé Simple",
    rule: ["-er verbs: -ai/-as/-a/-ames/-ates/-erent", "-ir/-re verbs: -is/-is/-it/-imes/-ites/-irent", "Literary tense — seen in novels, not used in spoken French"],
    planet: "Le Grimoire",
    description: "Master the rules and syntax of passé simple.",
    lesson: `<h2>Passé simple</h2><p>The passé simple (simple past, historical past) is a verb tense used mainly in written French, for literary and historical material. It may also be heard during a formal speech. It is the equivalent of the passé composé, used to recount a specific  action in the past. When relating events, quality newspapers use the passé simple  for refinement. Scandal sheets will often use it to convey a sense of drama. When  reading French literature of all periods, you will need to recognize the passé simple to get a full appreciation of the text. Formation of the passé simple The passé simple of regular -er verbs is formed by adding the endings -ai, -as, -a,  -âmes, -âtes, -èrent to the infinitive stem. répéter to repeat je répét ai I repeated nous répét âmes we repeated tu répét as yo...</p>`,
    exercises: [
      { id: "16-1", type: "mcq", question: "The passé simple is mainly used in:", options: ["Written/literary French", "Everyday spoken French", "Questions about the future", "Informal conversations"], answer: 0, explanation: "The passé simple is a literary/historical tense, found in novels and formal texts." },
      { id: "16-2", type: "fill-blank", question: "Il ____ (entrer) dans la salle sans frapper.", answer: "entra", hint: "Passé simple -er verbs: drop -er, add -ai/-as/-a/-âmes/-âtes/-èrent. Il → -a." },
      { id: "16-3", type: "mcq", question: "What is the passé simple of 'ils finir'?", options: ["ils finirent", "ils finèrent", "ils finissèrent", "ils finaient"], answer: 0, explanation: "-ir verb passé simple: je finis, tu finis, il finit, nous finîmes, vous finîtes, ils finirent." },
      { id: "16-4", type: "fill-blank", question: "Nous ____ (partir) à l'aube. (We left at dawn.)", answer: "partîmes", hint: "-ir verb passé simple for nous = stem + -îmes. Partir → part + îmes." },
      { id: "16-5", type: "mcq", question: "Which is the passé simple of 'être' for 'il'?", options: ["fut", "était", "sera", "est"], answer: 0, explanation: "Être passé simple: je fus, tu fus, il fut, nous fûmes, vous fûtes, ils furent." }
    ],
    vocabulary: [
      {
            "french": "l'art",
            "english": "art"
            },
      {
            "french": "un musée",
            "english": "museum"
            },
      {
            "french": "une collection",
            "english": "collection"
            },
      {
            "french": "collectionner",
            "english": "to collect"
            },
      {
            "french": "un collectionneur",
            "english": "collector"
            },
      {
            "french": "une galerie",
            "english": "gallery"
            },
      {
            "french": "une visite guidée",
            "english": "guided tour"
            },
      {
            "french": "un conservateur",
            "english": "curator"
            },
      {
            "french": "une exposition",
            "english": "exhibition"
            },
      {
            "french": "les beaux-arts",
            "english": "fine arts"
            },
      {
            "french": "une toile",
            "english": "canvas"
            },
      {
            "french": "une peinture",
            "english": "painting (the paint)"
            },
      {
            "french": "un tableau",
            "english": "painting (a picture)"
            },
      {
            "french": "une aquarelle",
            "english": "watercolor"
            },
      {
            "french": "une gravure",
            "english": "etching"
            },
      {
            "french": "un dessin",
            "english": "drawing"
            },
      {
            "french": "une sculpture",
            "english": "sculpture"
            },
      {
            "french": "une statue",
            "english": "statue"
            },
      {
            "french": "une nature morte",
            "english": "still life"
            },
      {
            "french": "un chef-d'oeuvre",
            "english": "masterpiece"
            },
      {
            "french": "une photographie",
            "english": "photograph"
            },
      {
            "french": "un vernissage",
            "english": "opening"
            },
      {
            "french": "peindre",
            "english": "to paint"
            },
      {
            "french": "dessiner",
            "english": "to draw"
            },
      {
            "french": "sculpter",
            "english": "to sculpt"
            },
      {
            "french": "un peintre",
            "english": "painter"
            },
      {
            "french": "un paysagiste",
            "english": "landscape painter"
            },
      {
            "french": "un portraitiste",
            "english": "portrait painter"
            },
      {
            "french": "une palette",
            "english": "palette"
            },
      {
            "french": "un pinceau",
            "english": "paintbrush"
            },
      {
            "french": "un chevalet",
            "english": "easel"
            },
      {
            "french": "un dessinateur",
            "english": "sketcher"
            },
      {
            "french": "un sculpteur",
            "english": "sculptor"
            },
      {
            "french": "un photographe",
            "english": "photographer"
            },
      {
            "french": "un atelier",
            "english": "studio"
            }
],
    boss: {
        intro: "The guardian of Le Grimoire demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Il ____ (entrer) dans la salle.", answer: "entra" },
            { type: "fill-blank", question: "Ils ____ (finir) le projet.", answer: "finirent" },
            { type: "fill-blank", question: "Elle ____ (prendre) la parole.", answer: "prit" }
        ]
    }
  },
  {
    id: 17,
    title: "Passive Voice",
    rule: ["Formula: etre (conjugated) + past participle + par + agent", "La lettre est ecrite par Marie (The letter is written by Marie)", "The participle agrees in gender and number with the grammatical subject"],
    planet: "L'Éclipse",
    description: "Master the rules and syntax of passive voice.",
    lesson: `<h2>Passive voice</h2><p>A sentence can either be in the active or the passive voice. In the active voice, the  subject performs the action, while in the voix passive (passive voice), the subject is  acted upon. That is, in the passive voice, the subject and the object exchange roles.  Be aware that the passive voice is much more common in English than in French. In French, one tends to use the active voice. Compare the active and the passive voices. The active voice: Les croisés envahissent le pays. The crusaders are invading the   country. La souris mange le fromage. The mouse eats the cheese. The passive voice: Le pays est envahi par les croisés. The country is being invaded by   the crusaders. Le fromage est mangé par la souris. The cheese is being eaten by   the mouse. Formation of the passive voice Th ...</p>`,
    exercises: [
      { id: "17-1", type: "mcq", question: "How is the passive voice formed in French?", options: ["être + past participle (agrees with subject)", "avoir + past participle", "se + infinitive", "être + infinitive"], answer: 0, explanation: "Passive = être (conjugated) + past participle. The participle agrees with the subject." },
      { id: "17-2", type: "fill-blank", question: "Le livre ____ (écrire) par un auteur célèbre. (The book was written...)", answer: "a été écrit", hint: "Passive passé composé = a été + past participle. Écrire → écrit." },
      { id: "17-3", type: "mcq", question: "What does 'par' introduce in a passive sentence?", options: ["The agent (who does the action)", "The object", "The time", "The purpose"], answer: 0, explanation: "In passive voice, 'par' introduces the agent: 'Le fromage est mangé par la souris.'" },
      { id: "17-4", type: "fill-blank", question: "Les fenêtres ____ (ouvrir) par le vent. (The windows were opened by the wind.)", answer: "ont été ouvertes", hint: "Passive: ont été + past participle. Ouvrir → ouvert. Fenêtres is feminine plural: ouvertes." },
      { id: "17-5", type: "mcq", question: "Which is the passive transformation of 'Le chat mange le fromage'?", options: ["Le fromage est mangé par le chat.", "Le fromage a mangé le chat.", "Le fromage mange le chat.", "Le chat est mangé le fromage."], answer: 0, explanation: "Passive: object becomes subject + être + past participle + par + original subject." }
    ],
    vocabulary: [
      {
            "french": "la police",
            "english": "police"
            },
      {
            "french": "le policier",
            "english": "police officer"
            },
      {
            "french": "arriver sur les lieux",
            "english": "arrive at scene"
            },
      {
            "french": "une fusillade",
            "english": "shoot-out"
            },
      {
            "french": "prendre la fuite",
            "english": "to flee"
            },
      {
            "french": "poursuivre",
            "english": "to pursue"
            },
      {
            "french": "attraper",
            "english": "to catch"
            },
      {
            "french": "arrêter",
            "english": "to arrest"
            },
      {
            "french": "passer les menottes",
            "english": "to handcuff"
            },
      {
            "french": "voler",
            "english": "to steal"
            },
      {
            "french": "un vol",
            "english": "theft"
            },
      {
            "french": "cambrioler",
            "english": "to burglarize"
            },
      {
            "french": "un cambriolage",
            "english": "burglary"
            },
      {
            "french": "un vol à l'étalage",
            "english": "shoplifting"
            },
      {
            "french": "une agression",
            "english": "assault"
            },
      {
            "french": "le harcèlement",
            "english": "harassment"
            },
      {
            "french": "le blanchiment d'argent",
            "english": "money laundering"
            },
      {
            "french": "le chantage",
            "english": "blackmail"
            },
      {
            "french": "l'escroquerie",
            "english": "fraud"
            },
      {
            "french": "un escroc",
            "english": "crook"
            },
      {
            "french": "un meurtre",
            "english": "murder"
            },
      {
            "french": "un assassin",
            "english": "assassin"
            },
      {
            "french": "un meurtrier",
            "english": "murderer"
            },
      {
            "french": "un attentat",
            "english": "terrorist attack"
            },
      {
            "french": "un détournement",
            "english": "hijacking"
            },
      {
            "french": "un témoin",
            "english": "witness"
            },
      {
            "french": "un témoignage",
            "english": "testimony"
            },
      {
            "french": "témoigner",
            "english": "to testify"
            },
      {
            "french": "prévenir la police",
            "english": "call the police"
            },
      {
            "french": "les empreintes",
            "english": "fingerprints"
            },
      {
            "french": "l'ADN",
            "english": "DNA"
            },
      {
            "french": "l'accusé",
            "english": "accused"
            },
      {
            "french": "être condamné à",
            "english": "be sentenced to"
            },
      {
            "french": "une amende",
            "english": "fine"
            },
      {
            "french": "une peine",
            "english": "sentence"
            }
],
    boss: {
        intro: "The guardian of L'Éclipse demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Le gâteau ____ (manger) par les enfants.", answer: "a été mangé" },
            { type: "fill-blank", question: "La lettre ____ (écrire) par Marie.", answer: "a été écrite" },
            { type: "fill-blank", question: "Les fenêtres ____ (ouvrir) par le vent.", answer: "ont été ouvertes" }
        ]
    }
  },
  {
    id: 18,
    title: "Indirect Speech",
    rule: ["Direct to Indirect: present becomes imparfait, futur becomes conditionnel", "Il a dit qu'il mangeait (He said he was eating)", "Time words shift: aujourd'hui→ce jour-la, demain→le lendemain"],
    planet: "L'Écho",
    description: "Master the rules and syntax of Indirect speech.",
    lesson: `<h2>Indirect speech</h2><p>Indirect speech is used, both in English and in French, to relate conversational  exchanges or information in the third person. Direct speech versus indirect speech I n d i r e c t s p e e c h (le discours direct), one says something or asks a question  directly. Quentin demande: Quentin asks:  « Où allez-vous? » “Where are you going?” Pierre dit: Pierre says:  « Le président est à Milan. » “The president is in Milan.” In indirect speech (le discours indirect), the words of one or more people  are reported or a question is asked indirectly. There are no quotation marks. Quentin demande où vous allez. Quentin is asking where you are   going. Pierre dit que le président est Pierre is saying that the president à Milan. is in Milan. Verbs in the main clause of indirect speech are follo...</p>`,
    exercises: [
      { id: "18-1", type: "mcq", question: "How is a direct statement converted to indirect speech?", options: ["Add 'que' after the reporting verb", "Remove quotation marks only", "Add 'si' after the reporting verb", "No change is needed"], answer: 0, explanation: "Direct: Il dit: 'Je suis fatigué.' → Indirect: Il dit qu'il est fatigué. Add 'que'." },
      { id: "18-2", type: "fill-blank", question: "Elle dit ____ elle est à Paris. (She says that she is in Paris.)", answer: "qu'", hint: "After a reporting verb (dire, expliquer), use 'que' (qu' before vowels)." },
      { id: "18-3", type: "mcq", question: "How do you report 'Où allez-vous?' indirectly?", options: ["Il demande où vous allez.", "Il demande que vous allez.", "Il demande si vous allez où.", "Il demande où vous alliez."], answer: 0, explanation: "Indirect questions use où/quand/comment/si without inversion. No quotation marks." },
      { id: "18-4", type: "fill-blank", question: "Pierre dit que le président ____ (être) à Milan. (He is currently there.)", answer: "est", hint: "When the reporting verb is present tense, the tense in the subordinate clause stays the same." },
      { id: "18-5", type: "mcq", question: "When the main verb is past, 'Je suis content' (present) becomes:", options: ["il était content", "il est content", "il sera content", "il serait content"], answer: 0, explanation: "When reporting verb is past tense, the present tense shifts back to imparfait." }
    ],
    vocabulary: [
      {
            "french": "la politique",
            "english": "politics"
            },
      {
            "french": "le pouvoir",
            "english": "power"
            },
      {
            "french": "le gouvernement",
            "english": "government"
            },
      {
            "french": "gouverner",
            "english": "to govern"
            },
      {
            "french": "le politique",
            "english": "politician"
            },
      {
            "french": "la gauche",
            "english": "left wing"
            },
      {
            "french": "la droite",
            "english": "right wing"
            },
      {
            "french": "le centre",
            "english": "center"
            },
      {
            "french": "le parti",
            "english": "party"
            },
      {
            "french": "la coalition",
            "english": "coalition"
            },
      {
            "french": "l'élection",
            "english": "election"
            },
      {
            "french": "la voix",
            "english": "vote/voice"
            },
      {
            "french": "le premier tour",
            "english": "first round"
            },
      {
            "french": "élire",
            "english": "to elect"
            },
      {
            "french": "être élu",
            "english": "to be elected"
            },
      {
            "french": "voter",
            "english": "to vote"
            },
      {
            "french": "le droit de vote",
            "english": "right to vote"
            },
      {
            "french": "l'électeur",
            "english": "voter"
            },
      {
            "french": "le scrutin",
            "english": "ballot"
            },
      {
            "french": "le bulletin de vote",
            "english": "ballot paper"
            },
      {
            "french": "le suffrage universel",
            "english": "universal suffrage"
            },
      {
            "french": "la réforme",
            "english": "reform"
            },
      {
            "french": "gagner les élections",
            "english": "win elections"
            },
      {
            "french": "perdre les élections",
            "english": "lose elections"
            },
      {
            "french": "le sondage",
            "english": "poll"
            },
      {
            "french": "la démocratie",
            "english": "democracy"
            },
      {
            "french": "la monarchie",
            "english": "monarchy"
            },
      {
            "french": "le multipartisme",
            "english": "multiparty system"
            },
      {
            "french": "la parité",
            "english": "equality"
            },
      {
            "french": "l'abstention",
            "english": "abstention"
            },
      {
            "french": "boycotter",
            "english": "to boycott"
            }
],
    boss: {
        intro: "The guardian of L'Écho demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Il dit ____ il est fatigué.", answer: "qu'" },
            { type: "fill-blank", question: "Elle demande où tu ____ (aller).", answer: "vas" },
            { type: "fill-blank", question: "Il a dit ____ elle était malade.", answer: "qu'" }
        ]
    }
  },
  {
    id: 19,
    title: "Imperative Mood",
    rule: ["Use tu/nous/vous forms without the subject pronoun", "-er verbs: drop the final -s from tu form: parle! (not parles!)", "Negative: ne + verb + pas → Ne parle pas! / N'y allez pas!"],
    planet: "Le Commandement",
    description: "Master the rules and syntax of imperative mood.",
    lesson: `<h2>Imperative mood</h2><p>The imperative is the mood that gives commands. The subjunctive is another mood that refers to someone’s  opinion or deals with hypothetical actions. For most verbs, the present of the subjunctive is formed by adding the subjunctive endings (- e, -es, -e, -ions, -iez, -ent) to the stem. The stem for je, tu, il/ elle, ils/elles is found by dropping the -ent ending from the third-person plural  present indicative form (ils/elles). Note that the sound of the verb will be the same  for all these persons. Let’s look at the verb penser (to think). The third-person plural: ils/elles  pensent. The stem: <strong>pens-</strong>. je pense (I think), tu penses (you think), il/elle pense (he/she thinks), ils/elles pensent (they think). The stem for the nous and vous subjunctive forms is found by dropping the  -ons from the first-person plu...</p>`,
    exercises: [
      { id: "19-1", type: "mcq", question: "Which is the correct imperative (tu form) of 'parler'?", options: ["Parle!", "Parles!", "Parlez!", "Parlons!"], answer: 0, explanation: "For -er verbs, the tu imperative drops the -s: parle (not parles)." },
      { id: "19-2", type: "fill-blank", question: "____ (écouter/vous) attentivement! (Listen carefully!)", answer: "Écoutez", hint: "The vous imperative = vous present form without 'vous': écoutez." },
      { id: "19-3", type: "mcq", question: "How do you say 'Let's eat!' in French?", options: ["Mangeons!", "Mangez!", "Mange!", "Manger!"], answer: 0, explanation: "The nous imperative is the same as the nous present form: mangeons." },
      { id: "19-4", type: "fill-blank", question: "Ne ____ (partir) pas sans moi! (Don't leave without me! — tu form)", answer: "pars", hint: "Negative imperative: ne + verb + pas. Partir (tu): pars." },
      { id: "19-5", type: "mcq", question: "What is the imperative of 'être' (vous form)?", options: ["Soyez!", "Êtes!", "Seriez!", "Serez!"], answer: 0, explanation: "Être has an irregular imperative: Sois! (tu), Soyons! (nous), Soyez! (vous)." }
    ],
    vocabulary: [
      {
            "french": "un nom",
            "english": "name"
            },
      {
            "french": "un prénom",
            "english": "first name"
            },
      {
            "french": "un surnom",
            "english": "nickname"
            },
      {
            "french": "épeler",
            "english": "to spell"
            },
      {
            "french": "s'appeler",
            "english": "to be named"
            },
      {
            "french": "l'état civil",
            "english": "civil status"
            },
      {
            "french": "la date de naissance",
            "english": "birth date"
            },
      {
            "french": "le lieu de naissance",
            "english": "birthplace"
            },
      {
            "french": "une naissance",
            "english": "birth"
            },
      {
            "french": "un mariage",
            "english": "marriage"
            },
      {
            "french": "un décès",
            "english": "death"
            },
      {
            "french": "une adresse",
            "english": "address"
            },
      {
            "french": "une carte d'identité",
            "english": "ID card"
            },
      {
            "french": "un passeport",
            "english": "passport"
            },
      {
            "french": "un permis de conduire",
            "english": "driver's license"
            },
      {
            "french": "un certificat",
            "english": "certificate"
            },
      {
            "french": "célibataire",
            "english": "single"
            },
      {
            "french": "marié",
            "english": "married"
            },
      {
            "french": "séparé",
            "english": "separated"
            },
      {
            "french": "divorcé",
            "english": "divorced"
            },
      {
            "french": "veuf/veuve",
            "english": "widower/widow"
            },
      {
            "french": "une parenté",
            "english": "kinship"
            },
      {
            "french": "un lien de parenté",
            "english": "family tie"
            },
      {
            "french": "un arbre généalogique",
            "english": "family tree"
            },
      {
            "french": "un ancêtre",
            "english": "ancestor"
            },
      {
            "french": "signer",
            "english": "to sign"
            },
      {
            "french": "cocher",
            "english": "to check off"
            }
],
    boss: {
        intro: "The guardian of Le Commandement demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "____ (écouter/tu) attentivement!", answer: "Écoute" },
            { type: "fill-blank", question: "Ne ____ (parler/vous) pas!", answer: "parlez" },
            { type: "fill-blank", question: "____ (être/nous) courageux!", answer: "Soyons" }
        ]
    }
  },
  {
    id: 20,
    title: "Articles And Nouns",
    rule: ["Definite (le/la/l'/les): specific, known nouns", "Indefinite (un/une/des): non-specific nouns — 'a', 'some'", "Partitive (du/de la/de l'): a portion of a mass noun — du pain, de l'eau"],
    planet: "L'Identité",
    description: "Master the rules and syntax of Articles and nouns.",
    lesson: `<h2>Articles and nouns</h2><p>The definite article with nouns Let’s first look at the definite article. All nouns in French have a gender: masculine  or feminine, whether they refer to a person, an animal, a thing, or an abstract  notion. While English has only one definite article the, French uses le for masculine nouns and la for feminine nouns. Le and la are shortened to l’ before a singular noun or adjective that begins with a vowel sound. The plural les is used for  both masculine and feminine. Masculine le village the village le pont the bridge Feminine la ville the city la région the region Plural les villages (m.pl.) the villages les villes (f.pl.) the cities Le and la become l’ in front of singular nouns starting with a vowel or a  mute h. Masculine l’océan the ocean l’ami the friend Feminine l’île the...</p>`,
    exercises: [
      { id: "20-1", type: "mcq", question: "Which article goes with 'ami' (masculine, starts with vowel)?", options: ["l'ami", "la ami", "le ami", "les ami"], answer: 0, explanation: "Le/la become l' before a vowel or mute h. L'ami, l'île, l'homme." },
      { id: "20-2", type: "fill-blank", question: "Je voudrais ____ café, s'il vous plaît. (I would like some coffee.)", answer: "du", hint: "Use the partitive article (du/de la/de l') for uncountable nouns: du café, de la soupe." },
      { id: "20-3", type: "mcq", question: "What is the plural of 'le cheval' (horse)?", options: ["les chevaux", "les chevals", "les chevales", "des chevals"], answer: 0, explanation: "Nouns ending in -al form plurals in -aux: cheval → chevaux, journal → journaux." },
      { id: "20-4", type: "fill-blank", question: "Elle a acheté ____ légumes au marché. (She bought some vegetables.)", answer: "des", hint: "Use 'des' (indefinite plural) when referring to an unspecified quantity." },
      { id: "20-5", type: "mcq", question: "After a negation, 'des' and 'un/une' change to:", options: ["de (or d')", "les", "des", "un"], answer: 0, explanation: "After negation: Je mange des fruits → Je ne mange pas de fruits. Un/une also becomes de." }
    ],
    vocabulary: [
      {
            "french": "la terre",
            "english": "earth"
            },
      {
            "french": "une planète",
            "english": "planet"
            },
      {
            "french": "un pays",
            "english": "country"
            },
      {
            "french": "un continent",
            "english": "continent"
            },
      {
            "french": "une capitale",
            "english": "capital"
            },
      {
            "french": "une ville",
            "english": "city"
            },
      {
            "french": "un village",
            "english": "village"
            },
      {
            "french": "une rue",
            "english": "street"
            },
      {
            "french": "une ruelle",
            "english": "alley"
            },
      {
            "french": "une impasse",
            "english": "dead end"
            },
      {
            "french": "un plan de la ville",
            "english": "city map"
            },
      {
            "french": "un arrondissement",
            "english": "district"
            },
      {
            "french": "une région",
            "english": "region"
            },
      {
            "french": "une province",
            "english": "province"
            },
      {
            "french": "un état",
            "english": "state"
            },
      {
            "french": "un royaume",
            "english": "kingdom"
            },
      {
            "french": "le désert",
            "english": "desert"
            },
      {
            "french": "une frontière",
            "english": "border"
            },
      {
            "french": "une carte",
            "english": "map"
            },
      {
            "french": "une route",
            "english": "road"
            },
      {
            "french": "une autoroute",
            "english": "highway"
            },
      {
            "french": "une côte",
            "english": "coast"
            },
      {
            "french": "une plaine",
            "english": "plain"
            },
      {
            "french": "une vallée",
            "english": "valley"
            },
      {
            "french": "une montagne",
            "english": "mountain"
            },
      {
            "french": "une colline",
            "english": "hill"
            },
      {
            "french": "une île",
            "english": "island"
            },
      {
            "french": "un pont",
            "english": "bridge"
            },
      {
            "french": "la mer",
            "english": "sea"
            },
      {
            "french": "un océan",
            "english": "ocean"
            },
      {
            "french": "une rivière",
            "english": "river"
            },
      {
            "french": "un fleuve",
            "english": "river (to sea)"
            },
      {
            "french": "un ruisseau",
            "english": "stream"
            },
      {
            "french": "le nord",
            "english": "north"
            },
      {
            "french": "le sud",
            "english": "south"
            },
      {
            "french": "l'est",
            "english": "east"
            },
      {
            "french": "l'ouest",
            "english": "west"
            },
      {
            "french": "un peuple",
            "english": "people"
            },
      {
            "french": "une tribu",
            "english": "tribe"
            },
      {
            "french": "autochtone",
            "english": "native"
            },
      {
            "french": "étranger",
            "english": "foreign"
            },
      {
            "french": "inconnu",
            "english": "unknown"
            }
],
    boss: {
        intro: "The guardian of L'Identité demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Je bois ____ café chaque matin.", answer: "du" },
            { type: "fill-blank", question: "Elle a acheté ____ fleurs. (some)", answer: "des" },
            { type: "fill-blank", question: "Il n'y a plus ____ pain. (any)", answer: "de" }
        ]
    }
  },
  {
    id: 21,
    title: "All The Pronouns",
    rule: ["Subject: je/tu/il/elle/nous/vous/ils/elles", "Direct object (COD): me/te/le/la/nous/vous/les — replaces who/what", "Indirect object (COI): me/te/lui/nous/vous/leur — replaces a + person"],
    planet: "Le Substitut",
    description: "Master the rules and syntax of All the pronouns.",
    lesson: `<h2>All the pronouns</h2><p>Subject pronouns There are many types of pronouns in French. Let’s start with the subject pronouns  you have already used when conjugating verbs. je I tu you (singular familiar) il he, it (masculine) elle she, it (feminine) on one, we, they, people nous we vous you (singular formal and all plurals) ils they (masculine, or mixed masculine and feminine) elles they (feminine) The third-person pronouns apply to people, animals, or things. Bertrand est chirurgien. Bertrand is a surgeon. Il est chirurgien. He is a surgeon. Les trois sœurs jouent dans le salon. The three sisters are playing in   the living room. Elles jouent dans le salon. They are playing in the living   room. Le chat est assis sur la chaise. The cat is sitting on the chair. Il est assis sur la chaise. It is sitting on t...</p>`,
    exercises: [
      { id: "21-1", type: "mcq", question: "Which pronoun replaces 'les enfants' in 'Je vois les enfants'?", options: ["Je les vois", "Je leur vois", "Je en vois", "Je vois les"], answer: 0, explanation: "Direct object pronoun: le (m.sg), la (f.sg), les (pl). Les enfants → les." },
      { id: "21-2", type: "fill-blank", question: "Je ____ parle. (I speak to them — plural indirect object)", answer: "leur", hint: "Indirect object pronouns: lui (him/her), leur (them). Use 'leur' for plural." },
      { id: "21-3", type: "mcq", question: "What does the pronoun 'y' replace?", options: ["A location or 'à + thing'", "A direct object person", "An indirect object person", "Possession"], answer: 0, explanation: "'Y' replaces a place or 'à + thing': Je vais à Paris → J'y vais." },
      { id: "21-4", type: "fill-blank", question: "Il ____ a beaucoup. (There are a lot of them — of vegetables.)", answer: "en", hint: "'En' replaces 'de + noun' or a quantity. J'en veux = I want some." },
      { id: "21-5", type: "mcq", question: "What is the stress pronoun for 'il'?", options: ["lui", "il", "son", "soi"], answer: 0, explanation: "Stress pronouns: moi, toi, lui, elle, nous, vous, eux, elles." }
    ],
    vocabulary: [
      {
            "french": "un acteur/actrice",
            "english": "actor/actress"
            },
      {
            "french": "un architecte",
            "english": "architect"
            },
      {
            "french": "un artiste",
            "english": "artist"
            },
      {
            "french": "un avocat",
            "english": "lawyer"
            },
      {
            "french": "un coiffeur",
            "english": "hairdresser"
            },
      {
            "french": "un commerçant",
            "english": "shopkeeper"
            },
      {
            "french": "un comptable",
            "english": "accountant"
            },
      {
            "french": "un cuisinier",
            "english": "cook"
            },
      {
            "french": "un dentiste",
            "english": "dentist"
            },
      {
            "french": "un directeur",
            "english": "manager"
            },
      {
            "french": "un écrivain",
            "english": "writer"
            },
      {
            "french": "un homme d'affaires",
            "english": "businessman"
            },
      {
            "french": "un fleuriste",
            "english": "florist"
            },
      {
            "french": "un infirmier",
            "english": "nurse"
            },
      {
            "french": "un informaticien",
            "english": "IT specialist"
            },
      {
            "french": "un ingénieur",
            "english": "engineer"
            },
      {
            "french": "un journaliste",
            "english": "journalist"
            },
      {
            "french": "un mannequin",
            "english": "model"
            },
      {
            "french": "un médecin",
            "english": "doctor"
            },
      {
            "french": "un metteur en scène",
            "english": "director"
            },
      {
            "french": "un musicien",
            "english": "musician"
            },
      {
            "french": "un ouvrier",
            "english": "worker"
            },
      {
            "french": "un pharmacien",
            "english": "pharmacist"
            },
      {
            "french": "un photographe",
            "english": "photographer"
            },
      {
            "french": "un pilote",
            "english": "pilot"
            },
      {
            "french": "un plombier",
            "english": "plumber"
            },
      {
            "french": "un pompier",
            "english": "firefighter"
            },
      {
            "french": "un professeur",
            "english": "teacher"
            },
      {
            "french": "un rédacteur",
            "english": "editor"
            },
      {
            "french": "une sage-femme",
            "english": "midwife"
            },
      {
            "french": "un serveur",
            "english": "waiter"
            }
],
    boss: {
        intro: "The guardian of Le Substitut demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Je ____ vois tous les jours. (les enfants)", answer: "les" },
            { type: "fill-blank", question: "Il ____ parle. (à ses amis)", answer: "leur" },
            { type: "fill-blank", question: "Elle ____ mange. (des fraises)", answer: "en" }
        ]
    }
  },
  {
    id: 22,
    title: "Adjectives And Comparisons",
    rule: ["Adjectives agree with noun: grand/grande, grands/grandes", "Comparative: plus/moins/aussi + adj + que → plus grand que (taller than)", "Superlative: le/la/les plus + adj → le plus grand (the tallest)"],
    planet: "L'Aura",
    description: "Master the rules and syntax of Adjectives and comparisons.",
    lesson: `<h2>Adjectives and comparisons</h2><p>Je déteste mon vieux canapé. I hate my old couch. Cette vieille maison est à vendre. This old house is for sale. Ce jeune chef est vraiment doué. This young chef is really talented. Cette jeune femme est écrivain. This young woman is a writer. Beware: Some adjectives have diff erent meanings, depending on whether they precede or follow  the noun. son ancien mari her former husband une statue ancienne an antique statue ma chère Carole my dear Carole un cadeau cher an expensive gift  Notre pauvre chien! Our poor dog! des pays pauvres poor countries sa propre idée his own idea une nappe propre a clean tablecloth une sale aff aire a nasty business une fenêtre sale a dirty window un grand homme an important man une femme grande a tall woman le dernier métro the last subway train l’an der...</p>`,
    exercises: [
      { id: "22-1", type: "mcq", question: "How does 'grand' agree with a feminine noun?", options: ["grande", "grand", "grands", "grandez"], answer: 0, explanation: "Most adjectives add -e for feminine: grand → grande, petit → petite." },
      { id: "22-2", type: "fill-blank", question: "Elle est ____ que son frère. (She is taller than her brother.)", answer: "plus grande", hint: "Comparison: plus + adjective (+ que) = more...than. Plus grande = taller." },
      { id: "22-3", type: "mcq", question: "Where do most French adjectives go?", options: ["After the noun", "Before the noun", "Before or after equally", "At the end of the sentence"], answer: 0, explanation: "Most adjectives come AFTER the noun. BAGS adjectives (Beauty, Age, Goodness, Size) go before." },
      { id: "22-4", type: "fill-blank", question: "C'est le ____ (bon) restaurant de la ville. (It's the best restaurant.)", answer: "meilleur", hint: "Bon has an irregular superlative: meilleur(e). Le meilleur = the best." },
      { id: "22-5", type: "mcq", question: "How do you say 'She has as many toys as you'?", options: ["Elle a autant de jouets que toi.", "Elle a plus de jouets que toi.", "Elle a aussi de jouets comme toi.", "Elle a tant de jouets que toi."], answer: 0, explanation: "Equality comparison: autant de + noun + que = as many/much as." }
    ],
    vocabulary: [
      {
            "french": "beige",
            "english": "beige"
            },
      {
            "french": "blanc",
            "english": "white"
            },
      {
            "french": "bleu",
            "english": "blue"
            },
      {
            "french": "bleu ciel",
            "english": "sky blue"
            },
      {
            "french": "bleu clair",
            "english": "light blue"
            },
      {
            "french": "bleu foncé",
            "english": "dark blue"
            },
      {
            "french": "bleu marine",
            "english": "navy blue"
            },
      {
            "french": "bordeaux",
            "english": "burgundy"
            },
      {
            "french": "gris",
            "english": "gray"
            },
      {
            "french": "jaune",
            "english": "yellow"
            },
      {
            "french": "marron",
            "english": "brown"
            },
      {
            "french": "noir",
            "english": "black"
            },
      {
            "french": "ocre",
            "english": "ochre"
            },
      {
            "french": "orange",
            "english": "orange"
            },
      {
            "french": "rose",
            "english": "pink"
            },
      {
            "french": "rouge",
            "english": "red"
            },
      {
            "french": "vert",
            "english": "green"
            },
      {
            "french": "vert olive",
            "english": "olive green"
            },
      {
            "french": "violet",
            "english": "purple"
            },
      {
            "french": "à carreaux",
            "english": "checked"
            },
      {
            "french": "à rayures",
            "english": "striped"
            },
      {
            "french": "à fleurs",
            "english": "flowered"
            },
      {
            "french": "à pois",
            "english": "polka-dotted"
            },
      {
            "french": "à volants",
            "english": "flounced"
            },
      {
            "french": "à plis",
            "english": "pleated"
            }
],
    boss: {
        intro: "The guardian of L'Aura demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Elle est plus ____ que moi. (tall/grande)", answer: "grande" },
            { type: "fill-blank", question: "C'est le ____ (best) restaurant.", answer: "meilleur" },
            { type: "fill-blank", question: "Il a autant ____ chance que toi.", answer: "de" }
        ]
    }
  },
  {
    id: 23,
    title: "Demonstrative Adjectives",
    rule: ["ce (masc), cet (masc before vowel/h), cette (fem), ces (plural)", "cet homme, cette femme, ces enfants", "Add -ci (near) or -la (far) for contrast: ce livre-ci vs ce livre-la"],
    planet: "L'Index",
    description: "Master the rules and syntax of Demonstrative adjectives.",
    lesson: `<h2>Demonstrative adjectives</h2><p>Sometimes you need to be very specific when identifying things. To do so, you use  demonstrative adjectives (this, that, these, those). In French, demonstratives, like  all adjectives, agree in gender and number with the noun they modify. Masculine singular ce livre this book cet auteur this author cet homme this man Note that the demonstrative adjective ce adds a - t before a masculine singular noun that starts with a vowel or a mute h (cet appartement, cet arbre). Feminine singular cette lampe this lamp cette télévision this television cette histoire this story Masculine and feminine plural ces cahiers (m.pl.) these notebooks ces arbres (m.pl.) these trees ces chemises (f.pl.) these shirts ces homards (m.pl.) these lobsters To make a distinctio...</p>`,
    exercises: [
      { id: "23-1", type: "mcq", question: "Which demonstrative goes before 'homme' (masculine, starts with vowel)?", options: ["cet homme", "ce homme", "cette homme", "ces homme"], answer: 0, explanation: "Before a masculine singular noun starting with vowel or mute h, use 'cet': cet homme, cet arbre." },
      { id: "23-2", type: "fill-blank", question: "J'aime ____ (this/f.) robe. (I like this dress.)", answer: "cette", hint: "Feminine singular demonstrative = cette. Cette robe, cette table." },
      { id: "23-3", type: "mcq", question: "What is the plural demonstrative for both genders?", options: ["ces", "ce", "cet", "cette"], answer: 0, explanation: "Ces is used for both masculine and feminine plural: ces livres, ces maisons." },
      { id: "23-4", type: "fill-blank", question: "Je préfère ____ (these) chaussures. (I prefer these shoes.)", answer: "ces", hint: "Chaussures is feminine plural. The plural demonstrative is 'ces' for all genders." },
      { id: "23-5", type: "mcq", question: "How do you say 'this book here' (to distinguish from another)?", options: ["ce livre-ci", "ce livre-là", "cet livre-ci", "ces livre-ci"], answer: 0, explanation: "Add -ci (here) or -là (there) after the noun to distinguish: ce livre-ci vs ce livre-là." }
    ],
    vocabulary: [
      {
            "french": "une famille",
            "english": "family"
            },
      {
            "french": "un adulte",
            "english": "adult"
            },
      {
            "french": "un mari",
            "english": "husband"
            },
      {
            "french": "une femme",
            "english": "wife"
            },
      {
            "french": "un père",
            "english": "father"
            },
      {
            "french": "une mère",
            "english": "mother"
            },
      {
            "french": "un fils",
            "english": "son"
            },
      {
            "french": "une fille",
            "english": "daughter"
            },
      {
            "french": "un enfant",
            "english": "child"
            },
      {
            "french": "un bébé",
            "english": "baby"
            },
      {
            "french": "un frère",
            "english": "brother"
            },
      {
            "french": "une soeur",
            "english": "sister"
            },
      {
            "french": "aîné",
            "english": "eldest"
            },
      {
            "french": "cadet",
            "english": "youngest"
            },
      {
            "french": "benjamin",
            "english": "youngest child"
            },
      {
            "french": "un parent",
            "english": "relative"
            },
      {
            "french": "un oncle",
            "english": "uncle"
            },
      {
            "french": "une tante",
            "english": "aunt"
            },
      {
            "french": "un cousin",
            "english": "cousin"
            },
      {
            "french": "un beau-père",
            "english": "father-in-law"
            },
      {
            "french": "une belle-mère",
            "english": "mother-in-law"
            },
      {
            "french": "un beau-frère",
            "english": "brother-in-law"
            },
      {
            "french": "une belle-soeur",
            "english": "sister-in-law"
            },
      {
            "french": "un neveu",
            "english": "nephew"
            },
      {
            "french": "une nièce",
            "english": "niece"
            },
      {
            "french": "un grand-père",
            "english": "grandfather"
            },
      {
            "french": "une grand-mère",
            "english": "grandmother"
            },
      {
            "french": "un petit-fils",
            "english": "grandson"
            },
      {
            "french": "une petite-fille",
            "english": "granddaughter"
            },
      {
            "french": "les petits-enfants",
            "english": "grandchildren"
            }
],
    boss: {
        intro: "The guardian of L'Index demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "J'aime ____ (this) livre.", answer: "ce" },
            { type: "fill-blank", question: "Regarde ____ (this/f.) robe!", answer: "cette" },
            { type: "fill-blank", question: "Ils adorent ____ (these) chansons.", answer: "ces" }
        ]
    }
  },
  {
    id: 24,
    title: "Relative Pronouns",
    rule: ["qui = subject (who/that does the action in the relative clause)", "que = direct object (that/whom — the object of the clause)", "dont = of which/whose, ou = where or when (place/time expressions)"],
    planet: "Le Lien",
    description: "Master the rules and syntax of Relative pronouns.",
    lesson: `<h2>Relative pronouns</h2><p>The relative pronouns qui and que can sometimes be followed by the subjunctive. If there is  some doubt about the existence of someone or the possible realization of something, the subjunctive may be used after the relative pronoun. Connaîtriez-vous quelqu’un qui sache Would you know someone who can speak parler le chinois couramment? Chinese fluently? Il cherche quelqu’un qui puisse créer He is looking for someone who can create a un logiciel pour son entreprise. piece of software for his company. 13·4EXERCICE  Indicatif ou subjonctif?  1. Il dit que leur page d’accueil (être) attrayante.  2. Elle doute qu’il (faire) chaud demain. 3. Ils sont heureux que leurs enfants (pouvoir) aller en Europe cet été. 4. Je pense que Maud (avoir) raison. 5. Je veux que tu (faire) la présentation jeudi. 6. Tu ne crois pas ...</p>`,
    exercises: [
      { id: "24-1", type: "mcq", question: "Which relative pronoun is the SUBJECT of the relative clause?", options: ["qui", "que", "dont", "où"], answer: 0, explanation: "'Qui' is the subject pronoun: L'homme qui parle = The man who is speaking." },
      { id: "24-2", type: "fill-blank", question: "Le film ____ j'ai vu était magnifique. (The film that I saw...)", answer: "que", hint: "'Que' is the direct object relative pronoun. I saw 'the film' → the film is the object." },
      { id: "24-3", type: "mcq", question: "Which pronoun replaces 'de + noun'?", options: ["dont", "que", "qui", "où"], answer: 0, explanation: "'Dont' replaces 'de + noun': Le livre dont je parle = The book I'm talking about." },
      { id: "24-4", type: "fill-blank", question: "Paris est la ville ____ j'habite. (Paris is the city where I live.)", answer: "où", hint: "'Où' is used as a relative pronoun for places: la ville où, le pays où." },
      { id: "24-5", type: "mcq", question: "Complete: 'The woman ____ I met is French.'", options: ["que j'ai rencontrée", "qui j'ai rencontrée", "dont j'ai rencontrée", "où j'ai rencontrée"], answer: 0, explanation: "'Que' is used when the relative pronoun is the direct object. I met the woman → que." }
    ],
    vocabulary: [
      {
            "french": "marchander",
            "english": "to bargain"
            },
      {
            "french": "un meuble",
            "english": "furniture"
            },
      {
            "french": "une chaise",
            "english": "chair"
            },
      {
            "french": "un tabouret",
            "english": "stool"
            },
      {
            "french": "une table",
            "english": "table"
            },
      {
            "french": "une table basse",
            "english": "coffee table"
            },
      {
            "french": "un fauteuil",
            "english": "armchair"
            },
      {
            "french": "un canapé",
            "english": "sofa"
            },
      {
            "french": "un buffet",
            "english": "sideboard"
            },
      {
            "french": "un lit",
            "english": "bed"
            },
      {
            "french": "un placard",
            "english": "closet"
            },
      {
            "french": "une penderie",
            "english": "wardrobe (closet)"
            },
      {
            "french": "une armoire",
            "english": "wardrobe (cabinet)"
            },
      {
            "french": "une armoire à pharmacie",
            "english": "medicine cabinet"
            },
      {
            "french": "une lampe",
            "english": "lamp"
            },
      {
            "french": "une lampe de chevet",
            "english": "bedside lamp"
            },
      {
            "french": "un miroir",
            "english": "mirror"
            },
      {
            "french": "une coiffeuse",
            "english": "dressing table"
            },
      {
            "french": "un vase",
            "english": "vase"
            },
      {
            "french": "un secrétaire",
            "english": "writing desk"
            },
      {
            "french": "une commode",
            "english": "chest of drawers"
            },
      {
            "french": "un coffre",
            "english": "chest"
            },
      {
            "french": "une bibliothèque",
            "english": "bookcase"
            },
      {
            "french": "une étagère",
            "english": "shelf"
            },
      {
            "french": "un tapis",
            "english": "rug"
            },
      {
            "french": "une horloge",
            "english": "clock"
            },
      {
            "french": "un rideau",
            "english": "curtain"
            },
      {
            "french": "cher",
            "english": "expensive"
            },
      {
            "french": "bon marché",
            "english": "cheap"
            },
      {
            "french": "un antiquaire",
            "english": "antiques dealer"
            },
      {
            "french": "un marché aux puces",
            "english": "flea market"
            },
      {
            "french": "une vente aux enchères",
            "english": "auction"
            },
      {
            "french": "faire une offre",
            "english": "to bid"
            },
      {
            "french": "baisser le prix",
            "english": "lower the price"
            }
],
    boss: {
        intro: "The guardian of Le Lien demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Le film ____ j'ai vu était bien.", answer: "que" },
            { type: "fill-blank", question: "L'homme ____ parle est mon père.", answer: "qui" },
            { type: "fill-blank", question: "C'est la ville ____ j'habite.", answer: "où" }
        ]
    }
  },
  {
    id: 25,
    title: "Adverbs And Expressions",
    rule: ["Form many adverbs: feminine adjective + -ment (lent→lente→lentement)", "Common irregulars: bien, mal, vite, beaucoup, peu, tres, trop", "Position: after verb in simple tenses; after auxiliary in compound tenses"],
    planet: "La Mesure",
    description: "Master the rules and syntax of Adverbs and expressions.",
    lesson: `<h2>Adverbs and expressions</h2><p>The following expressions are useful when talking about time: aujourd’hui today demain tomorrow hier yesterday  après-demain the day after tomorrow avant-hier the day before yesterday dans trois jours in three days (from today) dans une quinzaine in two weeks dans un mois in a month dans un an in a year la semaine prochaine next week la semaine dernière last week Il ira en France dans un an. He’ll go to France in a year. Je t’appellerai après-demain. I’ll call you the day after   tomorrow. The adverbs listed above are ordinarily used when you are speaking directly  to people, in what is known as direct style or direct speech. If you are discussing  past and future events, or telling a story, you are more likely to use ...</p>`,
    exercises: [
      { id: "25-1", type: "mcq", question: "How is an adverb typically formed from an adjective in French?", options: ["Add -ment to the feminine form", "Add -ment to the masculine form", "Add -ément to the masculine form", "Add -amment to any form"], answer: 0, explanation: "Take the feminine form of the adjective + -ment: lent → lente → lentement." },
      { id: "25-2", type: "fill-blank", question: "Il parle ____ (rapide → adverb). (He speaks quickly.)", answer: "rapidement", hint: "Rapide is the same in masculine and feminine. Rapide + ment = rapidement." },
      { id: "25-3", type: "mcq", question: "What does 'souvent' mean?", options: ["often", "never", "always", "sometimes"], answer: 0, explanation: "Frequency adverbs: toujours (always), souvent (often), parfois (sometimes), jamais (never)." },
      { id: "25-4", type: "fill-blank", question: "Il assiste ____ (rare → adverb) aux réunions.", answer: "rarement", hint: "Rare → rare (same m/f) + ment = rarement." },
      { id: "25-5", type: "mcq", question: "Where does an adverb typically go in a simple present tense sentence?", options: ["After the conjugated verb", "Before the subject", "Before the verb", "At the very end always"], answer: 0, explanation: "In a simple tense, adverbs go after the conjugated verb: Il parle bien, Il mange souvent." }
    ],
    vocabulary: [
      {
            "french": "une agence de voyages",
            "english": "travel agency"
            },
      {
            "french": "un antiquaire",
            "english": "antiques dealer"
            },
      {
            "french": "une banque",
            "english": "bank"
            },
      {
            "french": "une bijouterie",
            "english": "jewelry store"
            },
      {
            "french": "un boucher",
            "english": "butcher"
            },
      {
            "french": "un boulanger",
            "english": "baker"
            },
      {
            "french": "un bureau de tabac",
            "english": "tobacco shop"
            },
      {
            "french": "un coiffeur",
            "english": "hairdresser"
            },
      {
            "french": "une confiserie",
            "english": "candy store"
            },
      {
            "french": "un cordonnier",
            "english": "shoemaker"
            },
      {
            "french": "un épicier",
            "english": "grocer"
            },
      {
            "french": "un fleuriste",
            "english": "florist"
            },
      {
            "french": "un horloger",
            "english": "watchmaker"
            },
      {
            "french": "un kiosque à journaux",
            "english": "newsstand"
            },
      {
            "french": "un magasin",
            "english": "store"
            },
      {
            "french": "un magasin de chaussures",
            "english": "shoe store"
            },
      {
            "french": "un marchand",
            "english": "merchant"
            },
      {
            "french": "une librairie",
            "english": "bookstore"
            },
      {
            "french": "un opticien",
            "english": "optician"
            },
      {
            "french": "une papeterie",
            "english": "stationery store"
            },
      {
            "french": "une pharmacie",
            "english": "pharmacy"
            },
      {
            "french": "un pâtissier",
            "english": "pastry cook"
            },
      {
            "french": "une poissonnerie",
            "english": "fish market"
            },
      {
            "french": "une quincaillerie",
            "english": "hardware store"
            },
      {
            "french": "un salon de coiffure",
            "english": "hair salon"
            },
      {
            "french": "un supermarché",
            "english": "supermarket"
            },
      {
            "french": "un pressing",
            "english": "dry cleaner"
            }
],
    boss: {
        intro: "The guardian of La Mesure demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Il parle trop ____ (rapide → adverb).", answer: "rapidement" },
            { type: "fill-blank", question: "Il travaille ____ (sérieux → adverb).", answer: "sérieusement" },
            { type: "fill-blank", question: "Elle répond ____ (lent → adverb).", answer: "lentement" }
        ]
    }
  },
  {
    id: 26,
    title: "Numbers",
    rule: ["70 = soixante-dix (60+10), 80 = quatre-vingts (4x20), 90 = quatre-vingt-dix", "Ordinals: premier/premiere, then add -ieme to cardinal (deuxieme, troisieme)", "Collective nouns: une dizaine (~10), une douzaine (12), une centaine (~100)"],
    planet: "L'Infini",
    description: "Master the rules and syntax of Numbers.",
    lesson: `<h2>Numbers</h2><p>The numbers 0 to 50 Let’s start with numbers from 0 to 50. Although consonants are generally silent in  French, they are pronounced in the following numbers: cinq, six, sept, huit, neuf,  dix. With sept, the -p- is silent, but the final - t is pronounced. The final - x in six  and dix is pronounced like an s. When the numbers cinq, six, huit, and dix are followed by a word beginning  with a consonant, their final consonant is mute (silent). zéro zero vingt twenty un one vingt et un twenty-one deux two vingt-deux twenty-two trois three vingt-trois twenty-three quatre four vingt-quatre twenty-four cinq five vingt-cinq twenty-five six six vingt-six twenty-six sept seven vingt-sept twenty-seven huit eight vingt-huit twenty-eight neuf nine vingt-neuf twenty-nine dix ten trente thir...</p>`,
    exercises: [
      { id: "26-1", type: "mcq", question: "How do you say '21' in French?", options: ["vingt et un", "vingt-un", "vingt et une", "vingt-et-un"], answer: 0, explanation: "21, 31, 41, 51, 61, 71 all use 'et un': vingt et un, trente et un, etc." },
      { id: "26-2", type: "fill-blank", question: "J'ai ____ (80) euros. (Hint: French for 80 = 4×20)", answer: "quatre-vingts", hint: "80 = quatre-vingts (four-twenties). Drop the -s when followed by another number." },
      { id: "26-3", type: "mcq", question: "What is 70 in French?", options: ["soixante-dix", "septante", "soixante-et-dix", "soixante dix"], answer: 0, explanation: "70 = soixante-dix (60+10). 71 = soixante-et-onze, 79 = soixante-dix-neuf." },
      { id: "26-4", type: "fill-blank", question: "Il a ____ (91) ans. (He is 91 years old.)", answer: "quatre-vingt-onze", hint: "91 = quatre-vingt-onze (80+11). Note: quatre-vingts drops the -s before another number." },
      { id: "26-5", type: "mcq", question: "How do you say the ordinal 'first' (feminine) in French?", options: ["première", "premier", "prémière", "une"], answer: 0, explanation: "Ordinals: premier/première (1st), deuxième (2nd), troisième (3rd). Premier is irregular." }
    ],
    vocabulary: [
      {
            "french": "l'accès haut-débit",
            "english": "high-speed access"
            },
      {
            "french": "un administrateur",
            "english": "admin"
            },
      {
            "french": "une adresse URL",
            "english": "URL"
            },
      {
            "french": "une adresse IP",
            "english": "IP address"
            },
      {
            "french": "une bibliothèque numérique",
            "english": "digital library"
            },
      {
            "french": "un blog",
            "english": "blog"
            },
      {
            "french": "un domaine",
            "english": "domain"
            },
      {
            "french": "une fenêtre",
            "english": "window"
            },
      {
            "french": "un fil RSS",
            "english": "RSS feed"
            },
      {
            "french": "une FAQ",
            "english": "FAQ"
            },
      {
            "french": "un fournisseur d'accès",
            "english": "ISP"
            },
      {
            "french": "glisser-déposer",
            "english": "drag and drop"
            },
      {
            "french": "un internaute",
            "english": "web user"
            },
      {
            "french": "un moteur de recherche",
            "english": "search engine"
            },
      {
            "french": "naviguer",
            "english": "to browse"
            },
      {
            "french": "une page d'accueil",
            "english": "home page"
            },
      {
            "french": "une page Web",
            "english": "web page"
            },
      {
            "french": "un pirate",
            "english": "hacker"
            },
      {
            "french": "rechercher",
            "english": "to search"
            },
      {
            "french": "un site Web",
            "english": "website"
            },
      {
            "french": "un serveur",
            "english": "server"
            },
      {
            "french": "un signet",
            "english": "bookmark"
            },
      {
            "french": "surfer",
            "english": "to surf"
            },
      {
            "french": "la Toile",
            "english": "Web"
            },
      {
            "french": "le Web 2.0",
            "english": "Web 2.0"
            }
],
    boss: {
        intro: "The guardian of L'Infini demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Comment dit-on 80 en français?", answer: "quatre-vingts" },
            { type: "fill-blank", question: "Comment dit-on 70 en français?", answer: "soixante-dix" },
            { type: "fill-blank", question: "Comment dit-on 91 en français?", answer: "quatre-vingt-onze" }
        ]
    }
  },
  {
    id: 27,
    title: "Pot Pourri",
    rule: ["Key tense review: present, passe compose, imparfait, futur, conditionnel, subjonctif", "Subjunctive triggers: vouloir que, falloir que, bien que, pour que", "Pitfalls: participle agreement with etre, reflexive accords, ne...que = only"],
    planet: "L'Oméga",
    description: "Master the rules and syntax of Pot pourri.",
    lesson: `<h2>Pot pourri</h2><p>commencer to begin, to start J’ai commencé un nouveau livre. I started a new book. Tu as bien commencé l’année? Did you start the year on the right foot? Il commence à pleuvoir. It’s starting to rain. Tout à coup, il a commencé à pleurer. Suddenly, he started crying. Elle a commencé par se présenter. She started by introducing herself. On va commencer par des escargots. We’ll start with snails. décider to decide C’est décidé. It’s (has been) decided. J’ai décidé d’ aller au cinéma. I decided to go to the movies. Nous avons décidé d ’aller au Japon. We decided to go to Japan. Ils se sont enfin décidés à se marier. They finally decided to get (got around to   getting) married. Décide-toi! Make up your mind! demande...</p>`,
    exercises: [
      { id: "27-1", type: "mcq", question: "Which preposition follows 'commencer' before an infinitive?", options: ["commencer à", "commencer de", "commencer pour", "commencer que"], answer: 0, explanation: "Commencer à + infinitive: Il commence à pleuvoir. (It starts to rain.)" },
      { id: "27-2", type: "fill-blank", question: "Nous avons décidé ____ aller au Japon. (We decided to go to Japan.)", answer: "d'", hint: "Décider de + infinitive: décider de partir, décider d'aller (de → d' before vowel)." },
      { id: "27-3", type: "mcq", question: "What does 'Il manque à sa famille' mean?", options: ["His family misses him", "He misses his family", "He is missing from work", "His family is missing"], answer: 0, explanation: "Manquer à = to be missed by. Il manque à sa famille = His family misses him." },
      { id: "27-4", type: "fill-blank", question: "Elle a fini ____ accepter. (She finally accepted.)", answer: "par", hint: "Finir par + infinitive = to end up doing something. Elle a fini par accepter." },
      { id: "27-5", type: "mcq", question: "Which construction means 'to ask someone to do something'?", options: ["demander à qn de + infinitive", "demander que + subjonctif", "demander qn + infinitive", "demander de + subjonctif"], answer: 0, explanation: "Demander à quelqu'un de faire: Je lui ai demandé de partir." }
    ],
    vocabulary: [
      {
            "french": "un aspirateur",
            "english": "vacuum cleaner"
            },
      {
            "french": "une assiette",
            "english": "plate"
            },
      {
            "french": "un bol",
            "english": "bowl"
            },
      {
            "french": "une cafetière",
            "english": "coffee pot"
            },
      {
            "french": "une casserole",
            "english": "pan"
            },
      {
            "french": "un congélateur",
            "english": "freezer"
            },
      {
            "french": "un couteau",
            "english": "knife"
            },
      {
            "french": "une cuillère",
            "english": "spoon"
            },
      {
            "french": "une cuisinière",
            "english": "stove"
            },
      {
            "french": "un four",
            "english": "oven"
            },
      {
            "french": "un four à micro-ondes",
            "english": "microwave"
            },
      {
            "french": "une fourchette",
            "english": "fork"
            },
      {
            "french": "un grille-pain",
            "english": "toaster"
            },
      {
            "french": "un lave-vaisselle",
            "english": "dishwasher"
            },
      {
            "french": "une louche",
            "english": "ladle"
            },
      {
            "french": "une nappe",
            "english": "tablecloth"
            },
      {
            "french": "un ouvre-boîtes",
            "english": "can opener"
            },
      {
            "french": "un plateau",
            "english": "tray"
            },
      {
            "french": "une poêle",
            "english": "frying pan"
            },
      {
            "french": "un réfrigérateur",
            "english": "fridge"
            },
      {
            "french": "une serviette",
            "english": "napkin"
            },
      {
            "french": "une soucoupe",
            "english": "saucer"
            },
      {
            "french": "une tasse",
            "english": "cup"
            },
      {
            "french": "une théière",
            "english": "teapot"
            },
      {
            "french": "un tire-bouchon",
            "english": "corkscrew"
            },
      {
            "french": "un verre",
            "english": "glass"
            },
      {
            "french": "commencer",
            "english": "to start"
            },
      {
            "french": "décider",
            "english": "to decide"
            },
      {
            "french": "demander",
            "english": "to ask"
            },
      {
            "french": "donner",
            "english": "to give"
            },
      {
            "french": "jouer",
            "english": "to play"
            },
      {
            "french": "parler",
            "english": "to speak"
            },
      {
            "french": "croire",
            "english": "to believe"
            },
      {
            "french": "tenir",
            "english": "to hold"
            },
      {
            "french": "rêver",
            "english": "to dream"
            },
      {
            "french": "manquer",
            "english": "to miss"
            }
],
    boss: {
        intro: "The guardian of L'Oméga demands perfection!",
        timeLimit: 30,
        questions: [
            { type: "fill-blank", question: "Il a commencé ____ pleuvoir.", answer: "à" },
            { type: "fill-blank", question: "Elle a fini ____ accepter.", answer: "par" },
            { type: "fill-blank", question: "J'ai décidé ____ rester.", answer: "de" }
        ]
    }
  }
];

// Levels are numbered 1..N contiguously; screens gate "is there a next sector?"
// on this rather than a hardcoded number.
export const lastLevelId = levels[levels.length - 1].id;
