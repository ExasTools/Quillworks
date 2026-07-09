(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.querySelector(`#app`),t=[];function n(){e.innerHTML=`
    <main class="app-shell">
      ${r()}
      
      <section class="tool-card">
        <p> Currently, the only features available is a very rudamentary character input screen. More to come... </p>
        <p> That said, to those that read this- thank you for checking out what I'm working on! I really appreciate it more than I can convey through text </p>
      </section>
    </main>
    `,a()}function r(){return`
    <h1> Exa's Writing Tools </h1>
    <section class="header-section">
      <button id="home-button" class="nav-button">Home</button>
      <button id="vault-button" class="nav-button">Lore Vault</button>
      <button id="writing-button" class="nav-button">Writing Desk</button>
      <button id="settings-button" class="nav-button">Settings</button>
    </section>
  `}function i(){return`
    <h1> The Lore Vault </h1>
      <section class="header-section">
        <button id="home-button" class="nav-button">Home</button>
        <button id="char-button" class="nav-button">Characters</button>
        <button id="locs-button" class="nav-button">Places</button>
        <button id="events-button" class="nav-button">Events</button>
        <button id="tags-button" class="nav-button">Tags</button>
        <button id="time-button" class="nav-button">Timeline</button>
        <button id="religion-button" class="nav-button">Religions</button>
        <button id="gods-button" class="nav-button">Gods/Higher Powers</button>
        <button id="nations-button" class="nav-button">Nations</button>
        <button id="factions-button" class="nav-button">Factions</button>
      </section>
  `}function a(){document.querySelector(`#home-button`).addEventListener(`click`,n),document.querySelector(`#vault-button`).addEventListener(`click`,s),document.querySelector(`#writing-button`).addEventListener(`click`,c),document.querySelector(`#settings-button`).addEventListener(`click`,l)}function o(){document.querySelector(`#home-button`).addEventListener(`click`,n),document.querySelector(`#char-button`).addEventListener(`click`,u),document.querySelector(`#locs-button`).addEventListener(`click`,f),document.querySelector(`#events-button`).addEventListener(`click`,p),document.querySelector(`#tags-button`).addEventListener(`click`,m),document.querySelector(`#time-button`).addEventListener(`click`,h),document.querySelector(`#religion-button`).addEventListener(`click`,g),document.querySelector(`#gods-button`).addEventListener(`click`,_),document.querySelector(`#nations-button`).addEventListener(`click`,v),document.querySelector(`#factions-button`).addEventListener(`click`,y)}function s(){e.innerHTML=`
    <main class="app-shell">
      ${i()}

      <section class="tool-card">
        <h1>Lore Vault</h1>
        <p class="subtitle">You may select your desired 'mode' at the top.</p>
      </section>
    </main>
    `,o()}function c(){e.innerHTML=`
    <main class="app-shell">
      ${r()}
      <h1>Writing Desk</h1>
      <p class="subtitle">Unavailable at this stage, but I promise it'll be soon!</p>

    </main>
  `,a()}function l(){e.innerHTML=`
    <main class="app-shell">
      ${r()}
      <br>
      <h1> Settings Page </h1>
      <p class="subtitle">Unavailable at this stage, will be made later on. </p>

    </main>
  `,a()}function u(){e.innerHTML=`
    <main class="app-shell">
    ${i()}
    <br>
    <section class="tool-card-char-page">  
    <label>Character Name</label>
      <input class="field-input" id="charName">
      <br>
      <label>Character Nickname</label>
      <input class="field-input" id="charNickname">
      <br>
      <label>Age</label>
      <input class="field-input" id="charAge">
      <br>
      <label>Race</label>
      <input class="field-input" id="charRace">
      <br>
      <label>Description</label>
      <textarea class="field-input" id="charDesc"></textarea>
      <br><br>
      <button id="submit-button">Save (loosely)</button>
    </section>

    <section class="tool-card" id="characters-list"></section>
  `,o(),document.querySelector(`#submit-button`).addEventListener(`click`,()=>{let e=document.querySelector(`#charName`),n=document.querySelector(`#charNickname`),r=document.querySelector(`#charAge`),i=document.querySelector(`#charRace`),a=document.querySelector(`#charDesc`),o={name:e.value||`Missing Information`,nickname:n.value||`Missing Information`,age:r.value||`Missing Information`,race:i.value||`Missing Information`,description:a.value||`Missing Information`};t.push(o),console.log(t),d(1)})}function d(e){if(!Number.isInteger(e)){console.error(`formID must be an integer`);return}switch(e){case 1:document.querySelector(`#characters-list`).innerHTML=t.map((e,t)=>`
          <section class="character-card">
          <h2>Name: ${e.name}</h2>
          <hr class="card-custom-divider">
          <p>Nickname: ${e.nickname}</p>
          <p>Age: ${e.age}</p>
          <p>Race: ${e.race}</p>
          <p>Description: ${e.description}</p>
          <p>Index: ${t}</p>
          <button id="edit-button" class="form-button" data-index="${t}">Edit</button> <button id="delete-button" class="form-button" data-index="${t}">Delete</button>
          </section>
        `).join(``);break}document.querySelector(`.form-button`).addEventListener(`click`,()=>{document.querySelectorAll(`.form-button`).forEach(e=>{e.addEventListener(`click`,()=>{console.log(`Look the button says the ID is `+e.dataset.index)})})})}function f(){e.innerHTML=`
    <main class="app-shell">
    ${i()}
    <br>
    <section class="tool-card">
      <p>Places page</p>
    </section>
  `,o()}function p(){e.innerHTML=`
    <main class="app-shell">
    ${i()}
    <br>
    <section class="tool-card">
      <p>CEvents page</p>
    </section>
  `,o()}function m(){e.innerHTML=`
    <main class="app-shell">
    ${i()}
    <br>
    <section class="tool-card">
      <p>Tags page</p>
    </section>
  `,o()}function h(){e.innerHTML=`
    <main class="app-shell">
    ${i()}
    <br>
    <section class="tool-card">
      <p>Timeline page</p>
    </section>
  `,o()}function g(){e.innerHTML=`
    <main class="app-shell">
    ${i()}
    <br>
    <section class="tool-card">
      <p>Religion page</p>
    </section>
  `,o()}function _(){e.innerHTML=`
    <main class="app-shell">
    ${i()}
    <br>
    <section class="tool-card">
      <p>Gods/Deities page</p>
    </section>
  `,o()}function v(){e.innerHTML=`
    <main class="app-shell">
    ${i()}
    <br>
    <section class="tool-card">
      <p>Nations page</p>
    </section>
  `,o()}function y(){e.innerHTML=`
    <main class="app-shell">
    ${i()}
    <br>
    <section class="tool-card">
      <p>Factions page</p>
    </section>
  `,o()}n();