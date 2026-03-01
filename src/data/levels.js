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
    planet: "Mouvance",
    description: "Master the rules and syntax of More irregular verbs.",
    lesson: `<h2>More irregular verbs</h2><p>·4· Copyright © 200 8 by Annie H eminwa y. Click here for terms of use.   More irregular verbs 35The immediate future tense Aller is also used to form the immediate future. So, to talk about what you are going to do, use  aller in the present indicative followed immediately by a verb in the infi nitive. Je vais acheter une voiture en mai. I am going to buy a car in May. Nous allons faire un voyage en avril. We are going to go on a trip in April. Elle va apprendre le chinois. She is going to learn Chinese. Ils vont bientôt déménager . Th ey’re going to move soon. Th is construction can replace the present in colloquial speech. Vous déjeunez avec nous? Are you having lunch with us? Vous allez déjeuner avec nous? Are you going to have lunch with us? Est-ce que tu acceptes leur off re? Are you...</p>`,
    exercises: [
        { id: "4-1", type: "translation", question: "Type this perfectly: Je vais acheter une voiture en mai. I am going to buy a car in May.", answer: ["Je vais acheter une voiture en mai. I am going to buy a car in May."] },
        { id: "4-2", type: "translation", question: "Type this perfectly: Nous allons faire un voyage en avril. We are going to go on a trip in April.", answer: ["Nous allons faire un voyage en avril. We are going to go on a trip in April."] },
        { id: "4-3", type: "translation", question: "Type this perfectly: Elle va apprendre le chinois. She is going to learn Chinese.", answer: ["Elle va apprendre le chinois. She is going to learn Chinese."] }
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
            { type: "translation", question: "Type this perfectly: Ils vont bientôt déménager . Th ey’re going to move soon.", answer: ["Ils vont bientôt déménager . Th ey’re going to move soon."] },
            { type: "translation", question: "Type this perfectly: Vous déjeunez avec nous? Are you having lunch with us?", answer: ["Vous déjeunez avec nous? Are you having lunch with us?"] }
        ]
    }
  },
  {
    id: 5,
    title: "Devoir And Its Many Facets",
    planet: "Le Fardeau",
    description: "Master the rules and syntax of Devoir and its many facets.",
    lesson: `<h2>Devoir and its many facets</h2><p>45  46 practice makes perfect Complete French Grammar Il y a (there is, there are ) Il y a is an impersonal expression that means both there is and there are. Il y a un chat sur le canapé. Th ere is a cat on the sofa. Il n’y a plus rien dans le frigo. Th ere is nothing left in the fridge. Il y a is used in a variety of expressions. Qu’est-ce qu’ il y a ? What’s the matter? Il n’y a qu’à leur dire. Just tell them. Il y avait une fois... Once upon a time . . . Il y a cinquante kilomètres d’ici à Paris. It’s fi ft y kilometers from here to Paris. Il y en a qui feraient mieux de se taire. Some people would do better to keep quiet. Il s’agit de (it is a matter of, it’s about ) Il s’agit de (it is a matter of, it’s about ) is a fi xed expression that introduces the subject of a work  (book, fi l...</p>`,
    exercises: [
        { id: "5-1", type: "translation", question: "Type this perfectly: Il y a is an impersonal expression that means both there is and there are.", answer: ["Il y a is an impersonal expression that means both there is and there are."] },
        { id: "5-2", type: "translation", question: "Type this perfectly: Il y a un chat sur le canapé. Th ere is a cat on the sofa.", answer: ["Il y a un chat sur le canapé. Th ere is a cat on the sofa."] },
        { id: "5-3", type: "translation", question: "Type this perfectly: Il n’y a plus rien dans le frigo. Th ere is nothing left in the fridge.", answer: ["Il n’y a plus rien dans le frigo. Th ere is nothing left in the fridge."] }
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
            { type: "translation", question: "Type this perfectly: Il y a is used in a variety of expressions.", answer: ["Il y a is used in a variety of expressions."] },
            { type: "translation", question: "Type this perfectly: Il n’y a qu’à leur dire. Just tell them.", answer: ["Il n’y a qu’à leur dire. Just tell them."] }
        ]
    }
  },
  {
    id: 6,
    title: "Pronominal Verbs",
    planet: "Miroir",
    description: "Master the rules and syntax of Pronominal verbs.",
    lesson: `<h2>Pronominal verbs</h2><p>Several diff erent types of verbs are included in the pronominals: the refl exive , the  reciprocal , the passive , and the subjective . Too many? Not at all! As you study the  diff erent types, you’ll discover the subtleties of each. How to identify pronominal  verbs? Pronominal verbs are verbs that are preceded in the infi nitive and in con- jugated forms by the pronouns me, te, se, nous , vous , se. Let’s start with the refl ex- ive verbs. Reﬂ exive verbs Th e action of a refl exive verb is, for the most part, refl ected back on the subject,  the action being done to oneself. Th e pronouns me, te, se drop the e before mute  h or a vowel. je me lève I get up nous nous levons we get up tu te lèves you get up vous vous levez you get up il/elle se lève he/she gets up ils/elles se lèvent the...</p>`,
    exercises: [
        { id: "6-1", type: "translation", question: "Type this perfectly: Il se lève à sept heures. He gets up at seven.", answer: ["Il se lève à sept heures. He gets up at seven."] },
        { id: "6-2", type: "translation", question: "Type this perfectly: Je me couche à onze heures. I go to bed at eleven.", answer: ["Je me couche à onze heures. I go to bed at eleven."] },
        { id: "6-3", type: "translation", question: "Type this perfectly: Il s’assoit sur un banc . He sits down on a bench.", answer: ["Il s’assoit sur un banc . He sits down on a bench."] }
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
            { type: "translation", question: "Type this perfectly: Tu ne te reposes pas assez. You do not rest enough.", answer: ["Tu ne te reposes pas assez. You do not rest enough."] },
            { type: "translation", question: "Type this perfectly: Ils s’aiment beaucoup. Th ey love each other a lot.", answer: ["Ils s’aiment beaucoup. Th ey love each other a lot."] }
        ]
    }
  },
  {
    id: 7,
    title: "The Passé Composé",
    planet: "Mémoire",
    description: "Master the rules and syntax of The passé composé.",
    lesson: `<h2>The passé composé</h2><p>Th ere are several forms that can be used to talk about the past in French. Th e most  common is the passé composé , called in English the compound past or the pres- ent perfect. Th e passé composé is one of the tenses colloquially used in French to  talk about past events. It refers to a single action in the past. It is built of two parts:  the auxiliary or helping verb, avoir or être, /H11001 a past participle. The past participle of regular verbs Th e past participle is formed by adding an ending to the verb stem. Regular past  participles take the following endings: -er verbs take -é: parler (to speak ) /L50478 parlé (spoken ) -ir verbs take -i: choisir (to choose ) /L50478 choisi (chosen ) -re verbs take -u: entendre (to hear ) /L50478 entendu (heard ) Note that the passé composé can ...</p>`,
    exercises: [
        { id: "7-1", type: "translation", question: "Type this perfectly: Elle a pris une décision. /H20877 She has made a decision.", answer: ["Elle a pris une décision. /H20877 She has made a decision."] },
        { id: "7-2", type: "translation", question: "Type this perfectly: Il a vendu sa voiture. He sold his car.", answer: ["Il a vendu sa voiture. He sold his car."] },
        { id: "7-3", type: "translation", question: "Type this perfectly: Il n’a pas vendu sa voiture. He did not sell his car.", answer: ["Il n’a pas vendu sa voiture. He did not sell his car."] }
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
            { type: "translation", question: "Type this perfectly: Ils ont dîné au restaurant. Th ey had dinner at the restaurant.", answer: ["Ils ont dîné au restaurant. Th ey had dinner at the restaurant."] },
            { type: "translation", question: "Type this perfectly: Il a pris la bonne décision . He made the right decision.", answer: ["Il a pris la bonne décision . He made the right decision."] }
        ]
    }
  },
  {
    id: 8,
    title: "The Imparfait",
    planet: "Nostalgia",
    description: "Master the rules and syntax of The imparfait.",
    lesson: `<h2>The imparfait</h2><p>The imparfait Th e uses of the imparfait (imperfect ) are some of the most diffi cult aspects of  French grammar to master. While the passé composé is used to talk abo u t an  action that took place on a specifi c occasion in the past, the imparfait plays a dif- ferent role. It is used to describe a state of mind and being in the past as well as  continuous, repeated, or habitual past actions. T o form the imperfect, take the nous form of the present tense and remove  the -ons ending, which gives you the stem. Th en add the imparfait endings ( -ais,  -ais, -ait, -ions , -iez , -aient ) to this stem. For example: parler to speak nous parlons /L50478 parl- je parlais I spoke nous parlions we spoke tu parlais you spoke vous parliez you spoke il/elle parlait he/she spoke ils/elles parlaient th...</p>`,
    exercises: [
        { id: "8-1", type: "translation", question: "Type this perfectly: Elle faisait… /H20877 She used to do . . .", answer: ["Elle faisait… /H20877 She used to do . . ."] },
        { id: "8-2", type: "translation", question: "Type this perfectly: Il faisait trop chaud. It was too hot.", answer: ["Il faisait trop chaud. It was too hot."] },
        { id: "8-3", type: "translation", question: "Type this perfectly: Il avait faim. He was hungry.", answer: ["Il avait faim. He was hungry."] }
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
            { type: "translation", question: "Type this perfectly: Elle ne savait pas quoi faire. She did not know what to do.", answer: ["Elle ne savait pas quoi faire. She did not know what to do."] },
            { type: "translation", question: "Type this perfectly: Il semblait déprimé. He looked depressed.", answer: ["Il semblait déprimé. He looked depressed."] }
        ]
    }
  },
  {
    id: 9,
    title: "The Futur Simple",
    planet: "Demain",
    description: "Master the rules and syntax of The futur simple.",
    lesson: `<h2>The futur simple</h2><p>and  thefutur antérieur The futur simple You have become acquainted with the future in Chapter 4 when you studied the  futur immédiat . French has two other future constructions: the futur simple and  the futur antérieur . To form t he futur simple of most verbs, use the infi nitive as  the stem and add the endings -ai, -as, -a, -ons , -ez, -ont . For -re verbs, drop the e  from the infi nitive before adding the endings. Here are some examples: décider to decide je décider ai I’ll decide nous décider ons we’ll decide tu décider as you’ll decide vous décider ez you’ll decide il/elle décider a he’ll/she’ll decide ils/elles décider ont they’ll decide choisir to choose je choisir ai I’ll choose nous choisir ons we’ll choose tu choisir as you’ll choose vous choisir ez you’ll choose il/elle choi...</p>`,
    exercises: [
        { id: "9-1", type: "translation", question: "Type this perfectly: Elle ira à Paris quand elle aura le temps. She’ll go to Paris when she has time.", answer: ["Elle ira à Paris quand elle aura le temps. She’ll go to Paris when she has time."] },
        { id: "9-2", type: "translation", question: "Type this perfectly: Il nous dira lorsqu’il faudra parler. He’ll tell us when we have to talk.", answer: ["Il nous dira lorsqu’il faudra parler. He’ll tell us when we have to talk."] },
        { id: "9-3", type: "translation", question: "Type this perfectly: Elle vous préviendra dès qu’elle aura She’ll inform you as soon as she gets the results.", answer: ["Elle vous préviendra dès qu’elle aura She’ll inform you as soon as she gets the results."] }
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
            { type: "translation", question: "Type this perfectly: Elle vous téléphonera aussitôt qu’elle She’ll call you as soon as she lands in London .", answer: ["Elle vous téléphonera aussitôt qu’elle She’ll call you as soon as she lands in London ."] },
            { type: "translation", question: "Type this perfectly: Vous voudrez bien lui envoyer ma réponse. Please send him my answer.", answer: ["Vous voudrez bien lui envoyer ma réponse. Please send him my answer."] }
        ]
    }
  },
  {
    id: 10,
    title: "The Plus-Que-Parfait",
    planet: "L'Ancien Temps",
    description: "Master the rules and syntax of The plus-que-parfait.",
    lesson: `<h2>The plus-que-parfait</h2><p>Th e plus-que-parfait (pluperfect ) indicates a past action that happened before  another past action started (in English, had done ). It can be seen as “past” past  tense.  Formation of the plus-que-parfait To form t he plus-que-parfait , use the forms of avoir or être in the imparfait /H11001  the past participle of the main verb.  Let’s review the imparfait of the auxiliaries être and avoir : être to be j’étais I was nous étions we were tu étais you were vous étiez you were il/elle était he/she was ils/elles étaient they were avoir to have j’avais I had nous avions we had tu avais you had vous aviez you had il/elle avait he/she had ils/elles avaient they had Il avait toujours fi ni avant He had always fi nished before  les autres. the others. Tu avais oublié l’anniversaire de You had fo...</p>`,
    exercises: [
        { id: "10-1", type: "translation", question: "Type this perfectly: Il n’avait pas pu les joindre . He had not been able to reach them.", answer: ["Il n’avait pas pu les joindre . He had not been able to reach them."] },
        { id: "10-2", type: "translation", question: "Type this perfectly: Je m’étais évanouie dans la pharmacie. I had fainted in the pharmacy.", answer: ["Je m’étais évanouie dans la pharmacie. I had fainted in the pharmacy."] },
        { id: "10-3", type: "translation", question: "Type this perfectly: Vous vous étiez promenés le long du You had walked along the Saint-Martin canal.", answer: ["Vous vous étiez promenés le long du You had walked along the Saint-Martin canal."] }
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
            { type: "translation", question: "Type this perfectly: Nous nous étions embrassés sur le We had kissed on the Pont-Neuf.", answer: ["Nous nous étions embrassés sur le We had kissed on the Pont-Neuf."] },
            { type: "translation", question: "Type this perfectly: Je ne m’étais pas rendu compte que I had not realized I was sick.", answer: ["Je ne m’étais pas rendu compte que I had not realized I was sick."] }
        ]
    }
  },
  {
    id: 11,
    title: "Present Conditional",
    planet: "Mirage",
    description: "Master the rules and syntax of present conditional.",
    lesson: `<h2>Present conditional</h2><p>and the past conditional·11· The present conditional Th e présent du conditionnel (present conditional ) has many uses we’ll explore in  this chapter. It is formed by adding the endings of the imperfect to the future stem  of the verb. For -er and -ir verbs, the future stem is the entire infi nitive form. For  -re verbs, drop the fi nal -e from the infi nitive before adding the conditional end- ings. As you saw in Chapter 9, a number of irregular verbs have an irregular future stem. Th is same stem is used to form the present conditional. mettre to put je mettrais I would put nous mettrions we would put tu mettrais you would put vous mettriez you would put il/elle mettrait he/she would put ils/elles mettraient they would put faire to do je ferais I would do nous ferions we would do tu fera...</p>`,
    exercises: [
        { id: "11-1", type: "translation", question: "Type this perfectly: Il aimerait avoir une tortue. He would like to have a turtle.", answer: ["Il aimerait avoir une tortue. He would like to have a turtle."] },
        { id: "11-2", type: "translation", question: "Type this perfectly: Copyright © 200 8 by Annie H eminwa y. Click here for terms of use.", answer: ["Copyright © 200 8 by Annie H eminwa y. Click here for terms of use."] },
        { id: "11-3", type: "translation", question: "Type this perfectly: Dans de telles circonstances, que In such circumstances, what would you do?", answer: ["Dans de telles circonstances, que In such circumstances, what would you do?"] }
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
            { type: "translation", question: "Type this perfectly: Mettre les verbes au présent du conditionnel.", answer: ["Mettre les verbes au présent du conditionnel."] },
            { type: "translation", question: "Type this perfectly: Ce serait génial de pouvoir y aller It would be great to go together.", answer: ["Ce serait génial de pouvoir y aller It would be great to go together."] }
        ]
    }
  },
  {
    id: 12,
    title: "Could",
    planet: "Volonté",
    description: "Master the rules and syntax of Could.",
    lesson: `<h2>Could</h2><p>you solve this problem? Pourriez -vous annuler notre vol? Could you cancel our fl ight? Th e verb vouloir (to want ) is used to express wishes and desires. It is also used for a polite  request in the conditional form. je veux I want nous voulons we want tu veux you want vous voulez you want il/elle veut he/she wants ils/elles veulent they want Elle veut une augmentation. She wants a raise. Nous voulons une table près de la cheminée. We want a table by the fi replace. Je voudrais vous parler . I would like to speak with you. 3·9EXERCICE  Mettre au présent les verbes entre parenthèses.  1. Nous (vouloir) une chambre qui donne sur le jardin.  2. Je (ne pas pouvoir) assister à la réunion à quinze heures. 3. Je (vouloir) vous parler avant jeudi. 4. Nous (pouvoir) envoyer les documents par la p...</p>`,
    exercises: [
        { id: "12-1", type: "translation", question: "Type this perfectly: Elle veut une augmentation. She wants a raise.", answer: ["Elle veut une augmentation. She wants a raise."] },
        { id: "12-2", type: "translation", question: "Type this perfectly: Nous voulons une table près de la cheminée. We want a table by the fi replace.", answer: ["Nous voulons une table près de la cheminée. We want a table by the fi replace."] },
        { id: "12-3", type: "translation", question: "Type this perfectly: Je voudrais vous parler . I would like to speak with you.", answer: ["Je voudrais vous parler . I would like to speak with you."] }
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
            { type: "translation", question: "Type this perfectly: Elle ne va pas à l’école demain. She is not going to school tomorrow.", answer: ["Elle ne va pas à l’école demain. She is not going to school tomorrow."] },
            { type: "translation", question: "Type this perfectly: Je vais au théâtre ce soir. I am going to the theater tonight.", answer: ["Je vais au théâtre ce soir. I am going to the theater tonight."] }
        ]
    }
  },
  {
    id: 13,
    title: "Present Subjunctive",
    planet: "Le Doute",
    description: "Master the rules and syntax of present subjunctive.",
    lesson: `<h2>Present subjunctive</h2><p>Th e subjunctive is a mood, not a tense. Th e mood of a verb determines how one  views an event. You have already studied verb tenses in the indicative mood ( le  présent , l’imparfait , and le futur ), stating objective facts, and in the conditional  mood, relating to possibilities. In Chapter 19 we will study the imperative mood  that gives commands. Th e subjunctive is another mood that refers to someone’s  opinion or deals with hypothetical actions. For most verbs, the present of the subjunctive is formed by adding the sub- junctive endings (- e, -es, -e, -ions , -iez , -ent ) to the stem. Th e stem for je, tu, il/ elle, ils/elles is found by dropping the -ent ending from the third-person plural  present indicative form ( ils/elles ). Note that the sound of the verb will be the same  f...</p>`,
    exercises: [
        { id: "13-1", type: "translation", question: "Type this perfectly: Je veux acheter cet ordinateur. I want to buy this computer.", answer: ["Je veux acheter cet ordinateur. I want to buy this computer."] },
        { id: "13-2", type: "translation", question: "Type this perfectly: Je veux que tu achètes cet ordinateur. I want you to buy this computer.", answer: ["Je veux que tu achètes cet ordinateur. I want you to buy this computer."] },
        { id: "13-3", type: "translation", question: "Type this perfectly: Vous désirez suivre un cours You want to take a computer science class.", answer: ["Vous désirez suivre un cours You want to take a computer science class."] }
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
            { type: "translation", question: "Type this perfectly: Vous désirez que nous suivions un You want us to take a computer science course.", answer: ["Vous désirez que nous suivions un You want us to take a computer science course."] },
            { type: "translation", question: "Type this perfectly: Elle souhaite que tu ailles en France. She wishes you would go to France.", answer: ["Elle souhaite que tu ailles en France. She wishes you would go to France."] }
        ]
    }
  },
  {
    id: 14,
    title: "Nitive Mood",
    planet: "L'Origine",
    description: "Master the rules and syntax of nitive mood.",
    lesson: `<h2>Nitive mood</h2><p>The inﬁ nitif présent You will come across the infi nitif , the infi nitive mood, on many occasions. It is  used more frequently in French than in English. Th e infi nitif can be used as the  subject of a verb. (Note that the...</p>`,
    exercises: [
        { id: "14-1", type: "translation", question: "Type this perfectly: J'étudie nitive mood.", answer: ["J'étudie nitive mood."] },
        { id: "14-2", type: "translation", question: "Type this perfectly: J'étudie nitive mood.", answer: ["J'étudie nitive mood."] },
        { id: "14-3", type: "translation", question: "Type this perfectly: J'étudie nitive mood.", answer: ["J'étudie nitive mood."] }
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
            "english": "to cook"
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
            "english": "to crush"
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
            "english": "to cook"
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
            "english": "to crush"
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
            { type: "translation", question: "Type this perfectly: J'étudie nitive mood.", answer: ["J'étudie nitive mood."] },
            { type: "translation", question: "Type this perfectly: J'étudie nitive mood.", answer: ["J'étudie nitive mood."] }
        ]
    }
  },
  {
    id: 15,
    title: "Present Participle",
    planet: "Le Flux",
    description: "Master the rules and syntax of present participle.",
    lesson: `<h2>Present participle</h2><p>is used in English instead.) Faire la cuisine est son passe- Cooking is his favorite pastime. temps favori. Suivre des cours de cuisine est Taking cooking classes is fun. amusant. Voyager par le train est rapide. Traveling by train is fast. Apprendre une langue étrangère Learning a foreign language is very est très utile. useful. Th e infi nitif is also used for general instructions, prescriptions, public  notices, and proverbs (where the imperative is oft en used in English). Prendre une fois par jour. Take once a day. Ne pas se pencher par la fenêtre. Do not lean out of the window. Ne pas marcher sur la pelouse. Keep off the lawn. Lire le mode d’emploi avant Read the instructions before using. utilisation. Since a verb in the infi nitive mood is not conjugated, the negation ( ne… pas )  ...</p>`,
    exercises: [
        { id: "15-1", type: "translation", question: "Type this perfectly: Je lui ai demandé de ne pas faire I asked her not to fry the fi sh.", answer: ["Je lui ai demandé de ne pas faire I asked her not to fry the fi sh."] },
        { id: "15-2", type: "translation", question: "Type this perfectly: Elle m’a dit de ne pas mettre She told me not to put any oil in.", answer: ["Elle m’a dit de ne pas mettre She told me not to put any oil in."] },
        { id: "15-3", type: "translation", question: "Type this perfectly: Elle a entendu le coq chanter . She heard the rooster crowing .", answer: ["Elle a entendu le coq chanter . She heard the rooster crowing ."] }
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
            "english": "to win"
            },
      {
            "french": "battre",
            "english": "to beat"
            },
      {
            "french": "un vainqueur",
            "english": "winner"
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
            { type: "translation", question: "Type this perfectly: Il a fait macérer la viande vingt-quatre He macerated the meat twenty-four hours.", answer: ["Il a fait macérer la viande vingt-quatre He macerated the meat twenty-four hours."] },
            { type: "translation", question: "Type this perfectly: Elle a fait rôtir le poulet. She roasted the chicken.", answer: ["Elle a fait rôtir le poulet. She roasted the chicken."] }
        ]
    }
  },
  {
    id: 16,
    title: "Passé Simple",
    planet: "Le Grimoire",
    description: "Master the rules and syntax of passé simple.",
    lesson: `<h2>Passé simple</h2><p>Th e passé simple (simple past, historical past ) is a verb tense used mainly in writ- ten French, for literary and historical material. It may also be heard during a for- mal speech. It is the equivalent of the passé composé , used to recount a specifi c  action in the past. When relating events, quality newspapers use the passé simple  for refi nement. Scandal sheets will oft en use it to convey a sense of drama. When  reading French literature of all periods, you will need to recognize the passé sim- ple to get a full appreciation of the text. Formation of the passé simple Th e passé simple of regular -er verbs is formed by adding the endings -ai, -as, -a,  -âmes , -âtes , -èrent to the infi nitive stem. répéter to repeat je répét ai I repeated nous répét âmes we repeated tu répét as yo...</p>`,
    exercises: [
        { id: "16-1", type: "translation", question: "Type this perfectly: Elle pronon ça un discours. She made a speech.", answer: ["Elle pronon ça un discours. She made a speech."] },
        { id: "16-2", type: "translation", question: "Type this perfectly: Je rempla çai le comédien malade. I replaced the sick actor.", answer: ["Je rempla çai le comédien malade. I replaced the sick actor."] },
        { id: "16-3", type: "translation", question: "Type this perfectly: Il parta gea sa fortune. He shared his fortune.", answer: ["Il parta gea sa fortune. He shared his fortune."] }
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
            "english": "painting"
            },
      {
            "french": "un tableau",
            "english": "painting"
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
            { type: "translation", question: "Type this perfectly: Nous déména geâmes de nombreuses fois. We moved many times.", answer: ["Nous déména geâmes de nombreuses fois. We moved many times."] },
            { type: "translation", question: "Type this perfectly: On frappa à la porte et il se leva . Someone knocked on the door and he got up.", answer: ["On frappa à la porte et il se leva . Someone knocked on the door and he got up."] }
        ]
    }
  },
  {
    id: 17,
    title: "Passive Voice",
    planet: "L'Éclipse",
    description: "Master the rules and syntax of passive voice.",
    lesson: `<h2>Passive voice</h2><p>A sentence can either be in the active or the passive voice. In the active voice, the  subject performs the action, while in the voix passive (passive voice ), the subject is  acted upon. Th at is, in the passive voice, the subject and the object exchange roles.  Be aware that the passive voice is much more common in English than in French. In French, one tends to use the active voice. Compare the active and the passive voices. The active voice: Les croisés envahissent le pays. Th e crusaders are invading the   country. La souris mange le fromage. Th e mouse eats the cheese. The passive voice: Le pays est envahi par les croisés. Th e country is being invaded by   the crusaders. Le fromage est mangé par la souris. Th e cheese is being eaten by   the mouse. Formation of the passive voice Th ...</p>`,
    exercises: [
        { id: "17-1", type: "translation", question: "Type this perfectly: Elle s’est fait faire un robe pour son She had a dress made for her wedding.", answer: ["Elle s’est fait faire un robe pour son She had a dress made for her wedding."] },
        { id: "17-2", type: "translation", question: "Type this perfectly: Il s’est vu contraint d’accepter. He found himself forced to accept.", answer: ["Il s’est vu contraint d’accepter. He found himself forced to accept."] },
        { id: "17-3", type: "translation", question: "Type this perfectly: Ils se sont laissés infl uencer très Th ey let themselves be infl uenced very easily.", answer: ["Ils se sont laissés infl uencer très Th ey let themselves be infl uenced very easily."] }
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
            "english": "murderer"
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
            { type: "translation", question: "Type this perfectly: On vous demande au téléphone. You are wanted on the phone.", answer: ["On vous demande au téléphone. You are wanted on the phone."] },
            { type: "translation", question: "Type this perfectly: Compare the active and the passive voices.", answer: ["Compare the active and the passive voices."] }
        ]
    }
  },
  {
    id: 18,
    title: "Indirect Speech",
    planet: "L'Écho",
    description: "Master the rules and syntax of Indirect speech.",
    lesson: `<h2>Indirect speech</h2><p>Indirect speech is used, both in English and in French, to relate conversational  exchanges or information in the third person. Direct speech versus indirect speech I n d i r e c t s p e e c h ( le discours direct ), one says something or asks a question  directly. Quentin demande: Quentin asks:  « Où allez-vous? » “Where are you going?” Pierre dit: Pierre says:  « Le président est à Milan. » “Th e president is in Milan.” In indirect speech ( le discours indirect ), the words of one or more people  are reported or a question is asked indirectly. Th ere are no quotation marks. Quentin demande où vous allez . Quentin is asking where you are   going. Pierre dit que le président est Pierre is saying that the president à Milan . is in Milan. Verbs in the main clause of indirect speech are follo...</p>`,
    exercises: [
        { id: "18-1", type: "translation", question: "Type this perfectly: Elle est en Inde. She is in India.", answer: ["Elle est en Inde. She is in India."] },
        { id: "18-2", type: "translation", question: "Type this perfectly: Tu travailles pour France 2. You are working for France 2.", answer: ["Tu travailles pour France 2. You are working for France 2."] },
        { id: "18-3", type: "translation", question: "Type this perfectly: Il pleut à Londres. It is raining in London .", answer: ["Il pleut à Londres. It is raining in London ."] }
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
            { type: "translation", question: "Type this perfectly: Ils ont élu le candidat de gauche. Th ey elected the candidate from the left .", answer: ["Ils ont élu le candidat de gauche. Th ey elected the candidate from the left ."] },
            { type: "translation", question: "Type this perfectly: Elle a expliqué son programme. She explained her program.", answer: ["Elle a expliqué son programme. She explained her program."] }
        ]
    }
  },
  {
    id: 19,
    title: "Imperative Mood",
    planet: "Le Commandement",
    description: "Master the rules and syntax of imperative mood.",
    lesson: `<h2>Imperative mood</h2><p>that gives commands. Th e subjunctive is another mood that refers to someone’s  opinion or deals with hypothetical actions. For most verbs, the present of the subjunctive is formed by adding the sub- junctive endings (- e, -es, -e, -ions , -iez , -ent ) to the stem. Th e stem for je, tu, il/ elle, ils/elles is found by dropping the -ent ending from the third-person plural  present indicative form ( ils/elles ). Note that the sound of the verb will be the same  for all these persons. Let’s look at the verb penser (to think ). Th e third-person plural: ils/elles  pensent . Th e stem: pens- je pens e I speak tu pens es you speak il/elle pens e he/she speaks ils/elles pens ent they speak Th e stem for the nous and vous subjunctive forms is found by dropping the  -ons from the fi rst-person plu...</p>`,
    exercises: [
        { id: "19-1", type: "translation", question: "Type this perfectly: Je veux acheter cet ordinateur. I want to buy this computer.", answer: ["Je veux acheter cet ordinateur. I want to buy this computer."] },
        { id: "19-2", type: "translation", question: "Type this perfectly: Je veux que tu achètes cet ordinateur. I want you to buy this computer.", answer: ["Je veux que tu achètes cet ordinateur. I want you to buy this computer."] },
        { id: "19-3", type: "translation", question: "Type this perfectly: Vous désirez suivre un cours You want to take a computer science class.", answer: ["Vous désirez suivre un cours You want to take a computer science class."] }
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
            { type: "translation", question: "Type this perfectly: Vous désirez que nous suivions un You want us to take a computer science course.", answer: ["Vous désirez que nous suivions un You want us to take a computer science course."] },
            { type: "translation", question: "Type this perfectly: Elle souhaite que tu ailles en France. She wishes you would go to France.", answer: ["Elle souhaite que tu ailles en France. She wishes you would go to France."] }
        ]
    }
  },
  {
    id: 20,
    title: "Articles And Nouns",
    planet: "L'Identité",
    description: "Master the rules and syntax of Articles and nouns.",
    lesson: `<h2>Articles and nouns</h2><p>The deﬁ nite article with nouns Let’s fi rst look at the defi nite article. All nouns in French have a gender: masculine  or feminine, whether they refer to a person, an animal, a thing, or an abstract  notion. While English has only one defi nite article the, French uses le for mascu- line nouns and la for feminine nouns. Le and la are shortened to l’ before a singu- lar noun or adjective that begins with a vowel sound. Th e plural les is used for  both masculine and feminine. Masculine le village the village le pont the bridge Feminine la ville the city la région the region Plural les villages (m.pl.) the villages les villes (f.pl.) the cities Le and la become l’ in front of singular nouns starting with a vowel or a  mute h. Masculine l’océan the ocean l’ami the friend Feminine l’île the...</p>`,
    exercises: [
        { id: "20-1", type: "translation", question: "Type this perfectly: Elle a acheté un vélo . She bought a bike.", answer: ["Elle a acheté un vélo . She bought a bike."] },
        { id: "20-2", type: "translation", question: "Type this perfectly: Nous avons vu des lapins dans le jardin. We saw  rabbits in the garden.", answer: ["Nous avons vu des lapins dans le jardin. We saw  rabbits in the garden."] },
        { id: "20-3", type: "translation", question: "Type this perfectly: Il a acheté des rideaux pour le salon. He bought  curtains for the living room.", answer: ["Il a acheté des rideaux pour le salon. He bought  curtains for the living room."] }
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
            { type: "translation", question: "Type this perfectly: Il a un nouveau chien . He has a new dog.", answer: ["Il a un nouveau chien . He has a new dog."] },
            { type: "translation", question: "Type this perfectly: Tu veux emprunter un de mes livres ? Do you want to borrow one of my books?", answer: ["Tu veux emprunter un de mes livres ? Do you want to borrow one of my books?"] }
        ]
    }
  },
  {
    id: 21,
    title: "All The Pronouns",
    planet: "Le Substitut",
    description: "Master the rules and syntax of All the pronouns.",
    lesson: `<h2>All the pronouns</h2><p>Subject pronouns Th ere are many types of pronouns in French. Let’s start with the subject pronouns  you have already used when conjugating verbs. je I tu you (singular familiar) il he, it (masculine) elle she, it (feminine) on one, we, they, people nous we vous you (singular formal and all plurals) ils they (masculine, or mixed masculine and feminine) elles they (feminine) Th e third-person pronouns apply to people, animals, or things. Bertrand est chirurgien. Bertrand is a surgeon. Il est chirurgien . He is a surgeon . Les trois sœurs jouent dans le salon. Th e three sisters are playing in   the living room. Elles jouent dans le salon . Th ey are playing in the living   room. Le chat est assis sur la chaise. Th e cat is sitting on the chair. Il est assis sur la chaise. It is sitting on t...</p>`,
    exercises: [
        { id: "21-1", type: "translation", question: "Type this perfectly: Il est chirurgien . He is a surgeon .", answer: ["Il est chirurgien . He is a surgeon ."] },
        { id: "21-2", type: "translation", question: "Type this perfectly: Il est assis sur la chaise. It is sitting on the chair.", answer: ["Il est assis sur la chaise. It is sitting on the chair."] },
        { id: "21-3", type: "translation", question: "Type this perfectly: Elle est très polluée. It is very polluted.", answer: ["Elle est très polluée. It is very polluted."] }
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
            { type: "translation", question: "Type this perfectly: On ne peut pas penser à tout. One cannot think of everything.", answer: ["On ne peut pas penser à tout. One cannot think of everything."] },
            { type: "translation", question: "Type this perfectly: On va au cinéma cet après-midi? Shall we go to the movies this aft ernoon?", answer: ["On va au cinéma cet après-midi? Shall we go to the movies this aft ernoon?"] }
        ]
    }
  },
  {
    id: 22,
    title: "Adjectives And Comparisons",
    planet: "L'Aura",
    description: "Master the rules and syntax of Adjectives and comparisons.",
    lesson: `<h2>Adjectives and comparisons</h2><p>185Je déteste mon vieux canapé . I hate my old couch. Cette vieille maison est à vendre. Th is old house is for sale. Ce jeune chef est vraiment doué. Th is young chef is really talented. Cette jeune femme est écrivain. Th is young woman is a writer. Beware: Some adjectives have diff erent meanings, depending on whether they precede or follow  the noun. son ancien mari her former husband une statue ancienne an antique statue ma chère Carole my dear Carole un cadeau cher an expensive gift  Notre pauvre chien! Our poor dog! des pays pauvres poor countries sa propre idée his own idea une nappe propre a clean tablecloth une sale aff aire a nasty business une fenêtre sale a dirty window un grand homme an important man une femme grande a tall woman le dernier métro the last subway train l’an der...</p>`,
    exercises: [
        { id: "22-1", type: "translation", question: "Type this perfectly: Elle a les yeux verts . She has green eyes.", answer: ["Elle a les yeux verts . She has green eyes."] },
        { id: "22-2", type: "translation", question: "Type this perfectly: Il a acheté des chemises blanches . He bought some white shirts.", answer: ["Il a acheté des chemises blanches . He bought some white shirts."] },
        { id: "22-3", type: "translation", question: "Type this perfectly: Elle a plus de temps que Valérie. She has more time than Valérie.", answer: ["Elle a plus de temps que Valérie. She has more time than Valérie."] }
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
            { type: "translation", question: "Type this perfectly: Il a moins de chance que toi. He is less lucky than you are.", answer: ["Il a moins de chance que toi. He is less lucky than you are."] },
            { type: "translation", question: "Type this perfectly: Elle a autant de jouets que toi. She has as many toys as you do.", answer: ["Elle a autant de jouets que toi. She has as many toys as you do."] }
        ]
    }
  },
  {
    id: 23,
    title: "Demonstrative Adjectives",
    planet: "L'Index",
    description: "Master the rules and syntax of Demonstrative adjectives.",
    lesson: `<h2>Demonstrative adjectives</h2><p>and pronouns Demonstrative adjectives Sometimes you need to be very specifi c when identifying things. To do so, you use  demonstrative adjectives ( this, that, these, those ). In French, demonstratives, like  all adjectives, agree in gender and number with the noun they modify. Masculine singular ce livre this book cet auteur this author cet homme this man Note that the demonstrative adjective ce adds a - t before a masculine singu- lar noun that starts with a vowel or a mute h (cet appartement, cet arbre ). Feminine singular cette lampe this lamp cette télévision this television cette histoire this story Masculine and feminine plural ces cahiers (m.pl.) these notebooks ces arbres (m.pl.) these trees ces chemises (f.pl.) these shirts ces homards (m.pl.) these lobsters To make a distinctio...</p>`,
    exercises: [
        { id: "23-1", type: "translation", question: "Type this perfectly: Tu fais tes devoirs et elle fait les siens . You do your homework and she does hers.", answer: ["Tu fais tes devoirs et elle fait les siens . You do your homework and she does hers."] },
        { id: "23-2", type: "translation", question: "Type this perfectly: Nous aimons votre chien et vous aimez We like your dog and you like ours.", answer: ["Nous aimons votre chien et vous aimez We like your dog and you like ours."] },
        { id: "23-3", type: "translation", question: "Type this perfectly: Vous prenez vos billets et nous prenons You take your tickets and we take ours.", answer: ["Vous prenez vos billets et nous prenons You take your tickets and we take ours."] }
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
            { type: "translation", question: "Type this perfectly: Il a téléphoné à son avocat et elle a He called his lawyer and she called hers.", answer: ["Il a téléphoné à son avocat et elle a He called his lawyer and she called hers."] },
            { type: "translation", question: "Type this perfectly: Elle a besoin de mon aide et tu as besoin She needs your help and you need hers.", answer: ["Elle a besoin de mon aide et tu as besoin She needs your help and you need hers."] }
        ]
    }
  },
  {
    id: 24,
    title: "Relative Pronouns",
    planet: "Le Lien",
    description: "Master the rules and syntax of Relative pronouns.",
    lesson: `<h2>Relative pronouns</h2><p>qui and que can sometimes be followed by the subjunctive. If there is  some doubt about the existence of someone or the possible realization of something, the subjunc-tive may be used aft er the relative pronoun. Connaîtriez-vous quelqu’un qui sache Would you know someone who can speak parler le chinois couramment? Chinese fl uently? Il cherche quelqu’un qui puisse créer He is looking for someone who can create a un logiciel pour son entreprise. piece of soft ware for his company. 13·4EXERCICE  Indicatif ou subjonctif?  1. Il dit que leur page d’accueil (être) attrayante.  2. Elle doute qu’il (faire) chaud demain. 3. Ils sont heureux que leurs enfants (pouvoir) aller en Europe cet été. 4. Je pense que Maud (avoir) raison. 5. Je veux que tu (faire) la présentation jeudi. 6. Tu ne crois pas ...</p>`,
    exercises: [
        { id: "24-1", type: "translation", question: "Type this perfectly: Nous sommes ravis qu’elle ait gagné We are delighted she won the gold medal.", answer: ["Nous sommes ravis qu’elle ait gagné We are delighted she won the gold medal."] },
        { id: "24-2", type: "translation", question: "Type this perfectly: Je lui ai demandé de ne pas faire I asked her not to fry the fi sh.", answer: ["Je lui ai demandé de ne pas faire I asked her not to fry the fi sh."] },
        { id: "24-3", type: "translation", question: "Type this perfectly: Elle m’a dit de ne pas mettre She told me not to put any oil in.", answer: ["Elle m’a dit de ne pas mettre She told me not to put any oil in."] }
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
            "english": "wardrobe"
            },
      {
            "french": "une armoire",
            "english": "wardrobe"
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
            { type: "translation", question: "Type this perfectly: Elle a entendu le coq chanter . She heard the rooster crowing .", answer: ["Elle a entendu le coq chanter . She heard the rooster crowing ."] },
            { type: "translation", question: "Type this perfectly: Il a fait macérer la viande vingt-quatre He macerated the meat twenty-four hours.", answer: ["Il a fait macérer la viande vingt-quatre He macerated the meat twenty-four hours."] }
        ]
    }
  },
  {
    id: 25,
    title: "Adverbs And Expressions",
    planet: "La Mesure",
    description: "Master the rules and syntax of Adverbs and expressions.",
    lesson: `<h2>Adverbs and expressions</h2><p>of time, frequency,  and location Adverbs and expressions of time Th e following expressions are useful when talking about time: aujourd’hui today demain tomorrow hier yesterday  après-demain the day aft er tomorrow avant-hier the day before yesterday dans trois jours in three days (from today) dans une quinzaine in two weeks dans un mois in a month dans un an in a year la semaine prochaine next week la semaine dernière last week Il ira en France dans un an . He’ll go to France in a year. Je t’appellerai après-demain . I’ll call you the day aft er   tomorrow. Th e adverbs listed above are ordinarily used when you are speaking directly  to people, in what is known as direct style or direct speech. If you are discussing  past and future events, or telling a story, you are more likely to use ...</p>`,
    exercises: [
        { id: "25-1", type: "translation", question: "Type this perfectly: Il ira en France dans un an . He’ll go to France in a year.", answer: ["Il ira en France dans un an . He’ll go to France in a year."] },
        { id: "25-2", type: "translation", question: "Type this perfectly: Nous sommes partis le lendemain . We left the day aft er.", answer: ["Nous sommes partis le lendemain . We left the day aft er."] },
        { id: "25-3", type: "translation", question: "Type this perfectly: Il assiste rarement aux réunions. He rarely attends meetings.", answer: ["Il assiste rarement aux réunions. He rarely attends meetings."] }
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
            { type: "translation", question: "Type this perfectly: Il n’a pas revu sa sœur depuis dix ans. He has not seen his sister for ten years.", answer: ["Il n’a pas revu sa sœur depuis dix ans. He has not seen his sister for ten years."] },
            { type: "translation", question: "Type this perfectly: Nous ne sommes pas allées à Madrid We have not been to Madrid for ten years.", answer: ["Nous ne sommes pas allées à Madrid We have not been to Madrid for ten years."] }
        ]
    }
  },
  {
    id: 26,
    title: "Numbers",
    planet: "L'Infini",
    description: "Master the rules and syntax of Numbers.",
    lesson: `<h2>Numbers</h2><p>The numbers 0 to 50 Let’s start with numbers from 0 to 50. Although consonants are generally silent in  French, they are pronounced in the following numbers: cinq , six, sept , huit , neuf ,  dix. With sept , the -p- is silent, but the fi nal - t is pronounced. Th e fi nal - x in six  and dix is pronounced like an s. When the numbers cinq , six, huit , and dix are followed by a word beginning  with a consonant, their fi nal consonant is mute (silent). zéro zero vingt twenty un one vingt et un twenty-one deux two vingt-deux twenty-two trois three vingt-trois twenty-three quatre four vingt-quatre twenty-four cinq fi ve vingt-cinq twenty-fi ve six six vingt-six twenty-six sept seven vingt-sept twenty-seven huit eight vingt-huit twenty-eight neuf nine vingt-neuf twenty-nine dix ten trente thir...</p>`,
    exercises: [
        { id: "26-1", type: "translation", question: "Type this perfectly: Il a fi ni par lui dire la vérité. He fi nally told her the truth.", answer: ["Il a fi ni par lui dire la vérité. He fi nally told her the truth."] },
        { id: "26-2", type: "translation", question: "Type this perfectly: Elle a fi ni par accepter. She fi nally accepted.", answer: ["Elle a fi ni par accepter. She fi nally accepted."] },
        { id: "26-3", type: "translation", question: "Type this perfectly: Écrire les nombres suivants en toutes lettres.", answer: ["Écrire les nombres suivants en toutes lettres."] }
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
            { type: "translation", question: "Type this perfectly: Copyright © 200 8 by Annie H eminwa y. Click here for terms of use.", answer: ["Copyright © 200 8 by Annie H eminwa y. Click here for terms of use."] },
            { type: "translation", question: "Type this perfectly: Traduire en anglais les phrases suivantes.", answer: ["Traduire en anglais les phrases suivantes."] }
        ]
    }
  },
  {
    id: 27,
    title: "Pot Pourri",
    planet: "L'Oméga",
    description: "Master the rules and syntax of Pot pourri.",
    lesson: `<h2>Pot pourri</h2><p>·27· Copyright © 200 8 by Annie H eminwa y. Click here for terms of use.  commencer to begin, to start J’ai commencé un nouveau livre. I started a new book. Tu as bien commencé l’année? Did you start the year on the right foot? Il commence à pleuvoir. It’s starting to rain. Tout à coup, il a commencé à pleurer. Suddenly, he started crying. Elle a commencé par se présenter. She started by introducing herself. On va commencer par des escargots. We’ll start with snails. décider to decide C’est décidé . It’s (has been) decided. J’ai décidé d’ aller au cinéma. I decided to go to the movies. Nous avons décidé d ’aller au Japon. We decided to go to Japan. Ils se sont enfi n décidés à se marier. Th ey fi nally decided to get (got around to   getting) married. Décide-toi! Make up your mind! demande...</p>`,
    exercises: [
        { id: "27-1", type: "translation", question: "Type this perfectly: Tu as bien commencé l’année? Did you start the year on the right foot?", answer: ["Tu as bien commencé l’année? Did you start the year on the right foot?"] },
        { id: "27-2", type: "translation", question: "Type this perfectly: Il commence à pleuvoir. It’s starting to rain.", answer: ["Il commence à pleuvoir. It’s starting to rain."] },
        { id: "27-3", type: "translation", question: "Type this perfectly: Elle a commencé par se présenter. She started by introducing herself.", answer: ["Elle a commencé par se présenter. She started by introducing herself."] }
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
            { type: "translation", question: "Type this perfectly: On va commencer par des escargots. We’ll start with snails.", answer: ["On va commencer par des escargots. We’ll start with snails."] },
            { type: "translation", question: "Type this perfectly: Nous avons décidé d ’aller au Japon. We decided to go to Japan.", answer: ["Nous avons décidé d ’aller au Japon. We decided to go to Japan."] }
        ]
    }
  }
];
