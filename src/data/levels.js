export const levels = [
    {
        id: 1,
        title: "Le Présent: -er Verbs",
        planet: "Zeta Prime",
        description: "The gateway to the Galaxie Française. Master the regular -er verbs.",
        lesson: `
      <h2>The Present Tense of Regular -er Verbs</h2>
      <p>To conjugate regular -er verbs in the present tense, drop the <strong>-er</strong> and add:</p>
      <ul>
        <li><strong>je</strong> (I) -> <strong>-e</strong> (je parle)</li>
        <li><strong>tu</strong> (you) -> <strong>-es</strong> (tu parles)</li>
        <li><strong>il/elle/on</strong> (he/she/we) -> <strong>-e</strong> (il parle)</li>
        <li><strong>nous</strong> (we) -> <strong>-ons</strong> (nous parlons)</li>
        <li><strong>vous</strong> (you) -> <strong>-ez</strong> (vous parlez)</li>
        <li><strong>ils/elles</strong> (they) -> <strong>-ent</strong> (ils parlent)</li>
      </ul>
      <p class="vocab-tip"><em>Tip:</em> "parler" means "to speak". "chanter" means "to sing".</p>
    `,
        exercises: [
            {
                id: "1-1",
                type: "mcq",
                question: "How do you say 'I speak'?",
                options: ["Je parles", "Je parlent", "Je parle", "Nous parlons"],
                answer: 2,
                explanation: "Je takes the -e ending."
            },
            {
                id: "1-2",
                type: "fill-blank",
                question: "Nous ____ (chanter) tous les jours.",
                answer: "chantons",
                hint: "We sing every day. Drop -er and add -ons."
            },
            {
                id: "1-3",
                type: "mcq",
                question: "Vous ____ (regarder) la télévision.",
                options: ["regarde", "regardes", "regardez", "regardons"],
                answer: 2,
                explanation: "Vous takes the -ez ending."
            },
            {
                id: "1-4",
                type: "translation",
                question: "They (f.) speak French.",
                answer: ["Elles parlent français.", "Elles parlent francais."],
                hint: "elles (they f.) + parler + français"
            },
            {
                id: "1-5",
                type: "fill-blank",
                question: "Tu ____ (aimer) le chocolat.",
                answer: "aimes",
                hint: "You like chocolate. Drop -er and add -es."
            }
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
        lesson: `
      <h2>Regular -ir and -re Verbs</h2>
      <p>For Type 1 <strong>-ir</strong> verbs like <em>choisir</em> (to choose):</p>
      <ul>
        <li>je <strong>-is</strong>, tu <strong>-is</strong>, il <strong>-it</strong></li>
        <li>nous <strong>-issons</strong>, vous <strong>-issez</strong>, ils <strong>-issent</strong></li>
      </ul>
      <p>For regular <strong>-re</strong> verbs like <em>vendre</em> (to sell):</p>
      <ul>
        <li>je <strong>-s</strong>, tu <strong>-s</strong>, il <strong>[nothing]</strong></li>
        <li>nous <strong>-ons</strong>, vous <strong>-ez</strong>, ils <strong>-ent</strong></li>
      </ul>
    `,
        exercises: [
            {
                id: "2-1",
                type: "fill-blank",
                question: "Nous ____ (choisir) le rouge.",
                answer: "choisissons",
                hint: "Type 1 -ir verbs add -issons for 'nous'."
            },
            {
                id: "2-2",
                type: "mcq",
                question: "Je ____ (vendre) ma voiture.",
                options: ["vends", "vend", "vende", "vendons"],
                answer: 0,
                explanation: "Drop -re and add -s for je."
            },
            {
                id: "2-3",
                type: "fill-blank",
                question: "Il ____ (attendre) le bus.",
                answer: "attend",
                hint: "For 'il' with -re verbs, add nothing. Just drop -re."
            },
            {
                id: "2-4",
                type: "fill-blank",
                question: "Ils ____ (finir) leurs devoirs.",
                answer: "finissent",
                hint: "Type 1 -ir verb 'finir' plural ends in -issent."
            }
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
        lesson: `
      <h2>The verbs Être (to be) and Avoir (to have)</h2>
      <p>These are irregular but essential!</p>
      <div style="display: flex; gap: 2rem;">
        <div>
          <p><strong>Être</strong></p>
          <ul>
            <li>Je <strong>suis</strong></li>
            <li>Tu <strong>es</strong></li>
            <li>Il/Elle <strong>est</strong></li>
            <li>Nous <strong>sommes</strong></li>
            <li>Vous <strong>êtes</strong></li>
            <li>Ils/Elles <strong>sont</strong></li>
          </ul>
        </div>
        <div>
          <p><strong>Avoir</strong></p>
          <ul>
            <li>J'<strong>ai</strong></li>
            <li>Tu <strong>as</strong></li>
            <li>Il/Elle <strong>a</strong></li>
            <li>Nous <strong>avons</strong></li>
            <li>Vous <strong>avez</strong></li>
            <li>Ils/Elles <strong>ont</strong></li>
          </ul>
        </div>
      </div>
    `,
        exercises: [
            {
                id: "3-1",
                type: "mcq",
                question: "___ suis fatigué.",
                options: ["Il", "Je", "Nous", "Tu"],
                answer: 1,
                explanation: "Je suis = I am."
            },
            {
                id: "3-2",
                type: "fill-blank",
                question: "Elle ___ (avoir) un chat.",
                answer: "a",
                hint: "Third person singular of avoir."
            },
            {
                id: "3-3",
                type: "fill-blank",
                question: "Nous ___ (être) contents.",
                answer: "sommes",
                hint: "We are."
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
    }
];

for (let i = 4; i <= 27; i++) {
    levels.push({
        id: i,
        title: `Chapter ${i} Challenge`,
        planet: `Sector ${i}X`,
        description: "A mysterious grammar challenge awaits.",
        lesson: "<h2>In Development</h2><p>Stay tuned for this chapter's exact rules.</p>",
        exercises: [
            { id: `${i}-1`, type: "mcq", question: "Choose the correct form.", options: ["A", "B", "C", "D"], answer: 0 }
        ],
        boss: {
            intro: "A placeholder boss blocks your path!",
            timeLimit: 20,
            questions: [{ type: "mcq", question: "Attack!", options: ["Hit", "Miss"], answer: 0 }]
        }
    });
}
