import re
import json
import PyPDF2

pdf_path = "practice-makes-perfect-complete-french-grammar.pdf"

print("Extracting text from PDF (skipping TOC)...")
with open(pdf_path, "rb") as file:
    reader = PyPDF2.PdfReader(file)
    full_text = ""
    # Skip first 18 pages to avoid TOC and intro
    for page in reader.pages[18:]:
        full_text += page.extract_text() + "\n"

full_text = re.sub(r' +', ' ', full_text)

chapters = [
  (4, "More irregular verbs", "Mouvance"),
  (5, "Devoir and its many facets", "Le Fardeau"),
  (6, "Pronominal verbs", "Miroir"),
  (7, "The passé composé", "Mémoire"),
  (8, "The imparfait", "Nostalgia"),
  (9, "The futur simple", "Demain"),
  (10, "The plus-que-parfait", "L'Ancien Temps"),
  (11, "present conditional", "Mirage"),
  (12, "Could", "Volonté"), 
  (13, "present subjunctive", "Le Doute"),
  (14, "nitive mood", "L'Origine"),
  (15, "present participle", "Le Flux"),
  (16, "passé simple", "Le Grimoire"),
  (17, "passive voice", "L'Éclipse"),
  (18, "Indirect speech", "L'Écho"),
  (19, "imperative mood", "Le Commandement"),
  (20, "Articles and nouns", "L'Identité"),
  (21, "All the pronouns", "Le Substitut"),
  (22, "Adjectives and comparisons", "L'Aura"),
  (23, "Demonstrative adjectives", "L'Index"),
  (24, "Relative pronouns", "Le Lien"),
  (25, "Adverbs and expressions", "La Mesure"),
  (26, "Numbers", "L'Infini"),
  (27, "Pot pourri", "L'Oméga")
]

levels_data_base = """export const levels = [
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
  }"""

out_js = levels_data_base

def escape_html(text):
    return text.replace('`', "'").replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')

for i in range(len(chapters)):
    ch_num, search_title, planet = chapters[i]
    
    # Just search for the string in the text
    idx = full_text.lower().find(search_title.lower())
    
    if idx != -1:
        start_idx = idx
        end_idx = len(full_text)
        
        # Next chapter
        if i + 1 < len(chapters):
            next_ch_num, next_search_title, _ = chapters[i+1]
            next_idx = full_text.lower().find(next_search_title.lower(), start_idx + 100)
            if next_idx != -1:
                end_idx = next_idx
                
        chapter_text = full_text[start_idx:end_idx]
        
        # 1. Lesson extraction
        lesson_raw = chapter_text[len(search_title):].strip()[:800]
        lesson_raw = re.sub(r'\n+', ' ', lesson_raw)
        lesson_html = f"<h2>{search_title.capitalize()}</h2><p>{escape_html(lesson_raw)}...</p>"
        
        # 2. Extract Sentences for Exercises
        # Let's find any line that starts with a French pronoun and looks like a sentence.
        # This will securely grab examples like "Je vais au supermarché." directly from the text.
        lines = chapter_text.split('\n')
        valid_ex = []
        for line in lines:
            line = line.strip()
            # If it starts with a pronoun and ends with period/exclamation and length is decent
            if re.match(r'^(Je|Tu|Il|Elle|Nous|Vous|Ils|Elles|On)\s+.*?[.!?]$', line, re.IGNORECASE):
                # Clean out anything acting like a numbered bullet from earlier regex
                cleaned = re.sub(r'^\d+[\.\)]\s+', '', line)
                cleaned = re.sub(r'\(.*?\)', '', cleaned).strip()
                if 10 < len(cleaned) < 150:
                    valid_ex.append(cleaned)
                    
        # If we still don't have enough, grab ANYTHING that looks like a french sentence (starts with capital, ends with punctuation)
        if len(valid_ex) < 5:
            for line in lines:
                line = line.strip()
                if re.match(r'^[A-ZÀ-Ÿ][a-zà-ÿ].*?[.!?]$', line):
                    cleaned = re.sub(r'^\d+[\.\)]\s+', '', line)
                    if 15 < len(cleaned) < 80:
                        valid_ex.append(cleaned)

        valid_ex = list(dict.fromkeys(valid_ex))
        
        exercises = []
        boss_qs = []
        
        if len(valid_ex) >= 5:
            print(f"Chapter {ch_num} ({search_title}): Found {len(valid_ex)} exercises.")
            for j in range(3):
                sentence = valid_ex[j]
                exercises.append(f"""{{ id: "{ch_num}-{j+1}", type: "translation", question: "Type this perfectly: {escape_html(sentence)}", answer: ["{escape_html(sentence)}"] }}""")
            
            for j in range(3, 5):
                sentence = valid_ex[j]
                boss_qs.append(f"""{{ type: "translation", question: "Type this perfectly: {escape_html(sentence)}", answer: ["{escape_html(sentence)}"] }}""")
        else:
            print(f"Chapter {ch_num} ({search_title}): Not enough exercises ({len(valid_ex)}). Building fallbacks.")
            fallback = f"J'étudie {search_title.lower()}."
            for j in range(3):
                exercises.append(f"""{{ id: "{ch_num}-{j+1}", type: "translation", question: "Type this perfectly: {escape_html(fallback)}", answer: ["{escape_html(fallback)}"] }}""")
            for j in range(3, 5):
                boss_qs.append(f"""{{ type: "translation", question: "Type this perfectly: {escape_html(fallback)}", answer: ["{escape_html(fallback)}"] }}""")
            
        exercises_str = ",\n        ".join(exercises)
        boss_qs_str = ",\n            ".join(boss_qs)
        
        level_str = f""",
  {{
    id: {ch_num},
    title: "{search_title.title()}",
    planet: "{planet}",
    description: "Master the rules and syntax of {search_title}.",
    lesson: `{lesson_html}`,
    exercises: [
        {exercises_str}
    ],
    boss: {{
        intro: "The guardian of {planet} demands perfection!",
        timeLimit: 30,
        questions: [
            {boss_qs_str}
        ]
    }}
  }}"""
        out_js += level_str
    else:
        print(f"Failed to find chapter {ch_num} ({search_title})")

out_js += "\n];\n"

with open("src/data/levels.js", "w") as f:
    f.write(out_js)

print("Extraction complete. Levels.js populated.")
