(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&c(t)}).observe(document,{childList:!0,subtree:!0});function d(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(r){if(r.ep)return;r.ep=!0;const s=d(r);fetch(r.href,s)}})();class w{constructor(){this.state=this.loadState()||this.getInitialState(),this.listeners=[]}getInitialState(){return{currentLevel:1,unlockedLevels:[1],xp:0,lives:3,stars:{},streaks:0}}loadState(){const e=localStorage.getItem("frenchQuestState");return e?JSON.parse(e):null}saveState(){localStorage.setItem("frenchQuestState",JSON.stringify(this.state)),this.notifyListeners()}addListener(e){this.listeners.push(e)}notifyListeners(){this.listeners.forEach(e=>e(this.state))}addXP(e){this.state.xp+=e,this.state.streaks+=1,this.state.streaks>3&&(this.state.xp+=Math.floor(e*.5)),this.saveState()}resetStreak(){this.state.streaks=0}loseLife(){return this.state.lives=Math.max(0,this.state.lives-1),this.resetStreak(),this.saveState(),this.state.lives>0}recoverLives(){this.state.lives=3,this.saveState()}completeLevel(e,d){this.state.stars[e]=Math.max(this.state.stars[e]||0,d),!this.state.unlockedLevels.includes(e+1)&&e<27&&this.state.unlockedLevels.push(e+1),this.saveState()}}const u=new w,y=[{id:1,title:"Le Présent: -er Verbs",planet:"Zeta Prime",description:"The gateway to the Galaxie Française. Master the regular -er verbs.",lesson:`
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
    `,exercises:[{id:"1-1",type:"mcq",question:"How do you say 'I speak'?",options:["Je parles","Je parlent","Je parle","Nous parlons"],answer:2,explanation:"Je takes the -e ending."},{id:"1-2",type:"fill-blank",question:"Nous ____ (chanter) tous les jours.",answer:"chantons",hint:"We sing every day. Drop -er and add -ons."},{id:"1-3",type:"mcq",question:"Vous ____ (regarder) la télévision.",options:["regarde","regardes","regardez","regardons"],answer:2,explanation:"Vous takes the -ez ending."},{id:"1-4",type:"translation",question:"They (f.) speak French.",answer:["Elles parlent français.","Elles parlent francais."],hint:"elles (they f.) + parler + français"},{id:"1-5",type:"fill-blank",question:"Tu ____ (aimer) le chocolat.",answer:"aimes",hint:"You like chocolate. Drop -er and add -es."}],boss:{intro:"Alien Overlord Verbo challenges your present tense mastery!",timeLimit:30,questions:[{type:"fill-blank",question:"Ils ____ (habiter) à Paris.",answer:"habitent"},{type:"fill-blank",question:"Je ____ (travailler) ce soir.",answer:"travaille"},{type:"fill-blank",question:"Nous ____ (dîner) ensemble.",answer:"dînons"}]}},{id:2,title:"-ir and -re Verbs",planet:"Nebula Secundus",description:"Venture deeper. Tackle the -ir and -re verbal forms.",lesson:`
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
    `,exercises:[{id:"2-1",type:"fill-blank",question:"Nous ____ (choisir) le rouge.",answer:"choisissons",hint:"Type 1 -ir verbs add -issons for 'nous'."},{id:"2-2",type:"mcq",question:"Je ____ (vendre) ma voiture.",options:["vends","vend","vende","vendons"],answer:0,explanation:"Drop -re and add -s for je."},{id:"2-3",type:"fill-blank",question:"Il ____ (attendre) le bus.",answer:"attend",hint:"For 'il' with -re verbs, add nothing. Just drop -re."},{id:"2-4",type:"fill-blank",question:"Ils ____ (finir) leurs devoirs.",answer:"finissent",hint:"Type 1 -ir verb 'finir' plural ends in -issent."}],boss:{intro:"The Irregular Entity attacks! Defend with your endings.",timeLimit:30,questions:[{type:"fill-blank",question:"Vous ____ (réussir)",answer:"réussissez"},{type:"fill-blank",question:"Tu ____ (perdre)",answer:"perds"},{type:"fill-blank",question:"Elle ____ (rougir)",answer:"rougit"}]}},{id:3,title:"Être and Avoir",planet:"Essencia",description:"The core forces of the universe: To Be and To Have.",lesson:`
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
    `,exercises:[{id:"3-1",type:"mcq",question:"___ suis fatigué.",options:["Il","Je","Nous","Tu"],answer:1,explanation:"Je suis = I am."},{id:"3-2",type:"fill-blank",question:"Elle ___ (avoir) un chat.",answer:"a",hint:"Third person singular of avoir."},{id:"3-3",type:"fill-blank",question:"Nous ___ (être) contents.",answer:"sommes",hint:"We are."}],boss:{intro:"The Twin Dragons of Essencia await!",timeLimit:25,questions:[{type:"fill-blank",question:"Vous ___ (être)",answer:"êtes"},{type:"fill-blank",question:"Ils ___ (avoir)",answer:"ont"},{type:"fill-blank",question:"J'___ (avoir)",answer:"ai"}]}}];for(let o=4;o<=27;o++)y.push({id:o,title:`Chapter ${o} Challenge`,planet:`Sector ${o}X`,description:"A mysterious grammar challenge awaits.",lesson:"<h2>In Development</h2><p>Stay tuned for this chapter's exact rules.</p>",exercises:[{id:`${o}-1`,type:"mcq",question:"Choose the correct form.",options:["A","B","C","D"],answer:0}],boss:{intro:"A placeholder boss blocks your path!",timeLimit:20,questions:[{type:"mcq",question:"Attack!",options:["Hit","Miss"],answer:0}]}});function _(o,e){const{unlockedLevels:d,stars:c}=u.state;o.innerHTML=`
    <div class="galaxy-map text-center">
      <h1 class="gradient-text">Galaxie Française</h1>
      <p class="subtitle">Select a planetary mission.</p>
      
      <div class="planets-container"></div>
    </div>
  `;const r=o.querySelector(".planets-container");y.forEach((s,t)=>{const i=d.includes(s.id),p=c[s.id]||0,n=document.createElement("div");n.className=`planet-card glass-panel ${i?"unlocked glow-effect":"locked"}`;const g=t%2===0?"20px":"-20px";n.style.transform=`translateX(${g})`,n.innerHTML=`
      <div class="planet-icon">${i?"🌍":"🔒"}</div>
      <div class="planet-info">
        <h3>Lv ${s.id}: ${s.planet}</h3>
        <p>${s.title}</p>
        <div class="stars">
          ${Array(3).fill(0).map((f,l)=>`<span class="star ${l<p?"earned":"empty"}">★</span>`).join("")}
        </div>
      </div>
    `,i&&(n.addEventListener("click",()=>{e("lesson",{levelId:s.id})}),n.style.cursor="pointer"),r.appendChild(n)})}function L(o,e,d){const c=d.levelId,r=y.find(s=>s.id===c);if(!r){o.innerHTML="<p>Mission data corrupted.</p>";return}o.innerHTML=`
    <div class="lesson-screen fade-in">
      <div class="glass-panel pad-2 rounded mx-auto" style="max-width: 500px">
        <h2 class="gradient-text mb-1">Planet ${r.planet}</h2>
        <h3 class="mb-2">${r.title}</h3>
        
        <div class="lesson-content text-left mb-3">
          ${r.lesson}
        </div>
        
        <button id="start-mission-btn" class="btn btn-primary w-100 glow-effect">ENGAGE EXERCISES</button>
      </div>
    </div>
  `,document.getElementById("start-mission-btn").addEventListener("click",()=>{e("exercise",{levelId:c})})}function k(o,e,d){const c=d.levelId,r=y.find(n=>n.id===c);if(!r||!r.exercises)return;let s=0,t=[...r.exercises];t.forEach(n=>{if(n.type==="mcq"){const g=n.options[n.answer];n.displayOptions=[...n.options].sort(()=>Math.random()-.5),n.correctDisplayIndex=n.displayOptions.indexOf(g)}});function i(){if(u.state.lives<=0){e("results",{levelId:c,success:!1,reason:"lives"});return}if(s>=t.length){e("boss",{levelId:c});return}const n=t[s],g=s/t.length*100;o.innerHTML=`
      <div class="exercise-screen fade-in w-100 max-w-500 mx-auto">
        <div class="progress-bar-container mb-2">
          <div class="progress-bar" style="width: ${g}%"></div>
        </div>
        
        <div class="glass-panel pad-2 rounded mb-2 text-center">
          <h3 class="mb-2">${n.question}</h3>
          <div id="interactive-area" class="mb-2"></div>
          <div id="feedback-area" class="feedback-area hidden"></div>
        </div>
      </div>
    `;const f=document.getElementById("interactive-area");if(n.type==="mcq"){const l=document.createElement("div");l.className="options-grid",n.displayOptions.forEach((a,h)=>{const m=document.createElement("button");m.className="btn text-left option-btn",m.innerHTML=a,m.onclick=()=>p(h===n.correctDisplayIndex,m),l.appendChild(m)}),f.appendChild(l)}else if(n.type==="fill-blank"||n.type==="translation"){f.innerHTML=`
        <input type="text" id="answer-input" class="text-input mb-1" placeholder="Type your answer..." autocomplete="off">
        <button id="submit-btn" class="btn btn-primary w-100">SUBMIT</button>
      `;const l=document.getElementById("submit-btn"),a=document.getElementById("answer-input"),h=()=>{const m=a.value.trim().toLowerCase();let v=!1;Array.isArray(n.answer)?v=n.answer.some(b=>b.toLowerCase()===m):v=m===n.answer.toLowerCase(),p(v,null,n.answer)};l.onclick=h,a.addEventListener("keypress",m=>{m.key==="Enter"&&h()}),setTimeout(()=>a.focus(),100)}}function p(n,g,f=""){const l=document.getElementById("feedback-area");if(l.classList.remove("hidden"),document.querySelectorAll(".option-btn, .text-input, #submit-btn").forEach(a=>{a.disabled=!0,a.classList.contains("option-btn")&&a.classList.add("disabled")}),n)g&&g.classList.add("correct"),l.innerHTML='<div class="success-text">Correct! +10 XP</div>',u.addXP(10),setTimeout(()=>{s++,i()},1500);else{g&&g.classList.add("wrong");const a=t[s],h=Array.isArray(a.answer)?a.answer[0]:a.type==="mcq"?a.displayOptions[a.correctDisplayIndex]:a.answer;let m=a.hint?`<p class="hint-text text-sm">${a.hint}</p>`:"";l.innerHTML=`
        <div class="error-text mb-1">Incorrect.</div>
        <div class="correction-box">Correct: <strong>${h}</strong></div>
        ${m}
        <button id="next-btn" class="btn btn-primary mt-1">CONTINUE</button>
      `,t.push({...a}),u.loseLife(),document.getElementById("next-btn").onclick=()=>{s++,i()}}}i()}function E(o,e,d){const c=d.levelId,s=y.find(l=>l.id===c).boss;if(!s){e("results",{levelId:c,success:!0});return}let t=s.timeLimit,i=0,p=null;function n(){if(u.state.lives<=0){clearInterval(p),e("results",{levelId:c,success:!1,reason:"lives"});return}if(i>=s.questions.length){clearInterval(p),e("results",{levelId:c,success:!0});return}const l=s.questions[i];o.innerHTML=`
      <div class="boss-screen fade-in text-center mx-auto" style="max-width: 500px">
        <div class="boss-header mb-2 glass-panel p-2">
            <h2 class="boss-title">${s.intro}</h2>
            <div class="timer-display ${t<=10?"danger text-blink":""}">${t}s</div>
        </div>

        <div class="glass-panel pad-2 rounded mb-2">
            <h3 class="mb-2">${l.question}</h3>
            
            <div id="boss-interaction">
               <input type="text" id="boss-input" class="text-input mb-1" placeholder="Type answer FAST..." autocomplete="off">
               <button id="boss-submit" class="btn btn-primary w-100">STRIKE</button>
            </div>
            <div id="boss-feedback" class="mt-1 hidden"></div>
        </div>
      </div>
    `;const a=document.getElementById("boss-input"),h=document.getElementById("boss-submit"),m=()=>{const v=a.value.trim().toLowerCase();let b=!1;Array.isArray(l.answer)?b=l.answer.some(x=>x.toLowerCase()===v):b=v===l.answer.toLowerCase(),g(b)};h.onclick=m,a.addEventListener("keypress",v=>{v.key==="Enter"&&m()}),setTimeout(()=>a.focus(),100)}function g(l){const a=document.getElementById("boss-feedback");a.classList.remove("hidden"),document.getElementById("boss-input").disabled=!0,document.getElementById("boss-submit").disabled=!0,l?(o.querySelector(".boss-title").classList.add("shake"),a.innerHTML='<div class="success-text">Direct Hit! +50 XP</div>',u.addXP(50),setTimeout(()=>{i++,n()},1e3)):(a.innerHTML=`<div class="error-text">Missed! Correct: ${q.answer}</div>`,u.loseLife(),t=Math.max(0,t-5),setTimeout(()=>{i++,n()},1500))}function f(){p=setInterval(()=>{t--;const l=document.querySelector(".timer-display");l&&(l.textContent=`${t}s`,t<=10&&l.classList.add("danger","text-blink")),t<=0&&(clearInterval(p),e("results",{levelId:c,success:!1,reason:"time"}))},1e3)}n(),f()}function I(o,e,d){const{levelId:c,success:r,reason:s}=d;let t,i,p=0;r?(u.state.lives===3?p=3:u.state.lives===2?p=2:p=1,u.completeLevel(c,p),t="MISSION ACCOMPLISHED",i=`You've conquered Sector ${c}.`):(t="MISSION FAILED",s==="lives"&&(i="Your ship sustained too much damage (lost all hearts)."),s==="time"&&(i="You ran out of time during the boss encounter!")),u.recoverLives(),o.innerHTML=`
    <div class="results-screen fade-in text-center mx-auto" style="max-width: 500px">
      <div class="glass-panel pad-2 rounded">
        <h1 class="${r?"gradient-text text-glow":"error-text"}">${t}</h1>
        <p class="mb-2">${i}</p>
        
        ${r?`
          <div class="stars big-stars mb-2">
            ${Array(3).fill(0).map((n,g)=>`<span class="star ${g<p?"earned":"empty"}">★</span>`).join("")}
          </div>
        `:""}

        <button id="map-btn" class="btn btn-primary w-100">RETURN TO GALAXY MAP</button>
      </div>
    </div>
  `,document.getElementById("map-btn").addEventListener("click",()=>{e("map")})}function T(o){const e={currentScreen:"map",params:{}},d=(t,i={})=>{e.currentScreen=t,e.params=i,s()};u.addListener(()=>{c()});function c(){const t=document.getElementById("xp-display"),i=document.getElementById("lives-display");t&&(t.textContent=`${u.state.xp} XP`),i&&(i.textContent=u.state.lives)}function r(){return`
      <header class="app-header glass-panel">
        <button class="icon-btn" id="home-btn">🪐</button>
        <div class="stat-pill"><span class="icon">⭐</span> <span id="xp-display">${u.state.xp} XP</span></div>
        <div class="stat-pill"><span class="icon">❤️</span> <span id="lives-display">${u.state.lives}</span></div>
      </header>
    `}function s(){o.innerHTML=r();const t=document.createElement("main");t.className="app-main";const i=document.createElement("div");switch(i.className="screen-container",t.appendChild(i),o.appendChild(t),document.getElementById("home-btn").addEventListener("click",()=>{e.currentScreen!=="boss"&&d("map")}),e.currentScreen){case"map":_(i,d);break;case"lesson":L(i,d,e.params);break;case"exercise":k(i,d,e.params);break;case"boss":E(i,d,e.params);break;case"results":I(i,d,e.params);break;default:i.innerHTML="Screen not found"}}s()}document.addEventListener("DOMContentLoaded",()=>{T(document.getElementById("app"))});
