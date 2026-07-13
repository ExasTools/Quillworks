(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){localStorage.setItem(`characters`,JSON.stringify(e)),console.log(`Saved!`)}function t(){let e=localStorage.getItem(`characters`);return e?JSON.parse(e):[]}var n=document.querySelector(`#app`),r=`0.0.3`,i=t(),a=null;function o(){n.innerHTML=`
    <main class="app-shell">
      ${s()}
      
      <section class="tool-card">
        <p> Finished the bones and skin of the Character input... moving along. </p>
        <p> That said, to those that read this- thank you for checking out what I'm working on! I really appreciate it more than I can convey through text </p>
      </section>
      ${u()}
    </main>
    
    `,d()}function s(){return`
    <h1> Exa's Writing Tools </h1>
    <section class="header-section">
      <button id="home-button" class="nav-button">Home</button>
      <button id="vault-button" class="nav-button">Lore Vault</button>
      <button id="time-button" class="nav-button">Timeline</button>
      <button id="writing-button" class="nav-button">Writing Desk</button>
      <button id="settings-button" class="nav-button">Settings</button>
      <button id="devlog-button" class="nav-button">Dev Log</button>
    </section>
  `}function c(){return`
    <h1> The Lore Vault </h1>
      <section class="header-section">
        <button id="home-button" class="nav-button">Home</button>
        <button id="char-button" class="nav-button">Characters</button>
        <button id="locs-button" class="nav-button">Places</button>
        <button id="events-button" class="nav-button">Events</button>
        <button id="tags-button" class="nav-button">Tags</button>
        <button id="religion-button" class="nav-button">Religions</button>
        <button id="gods-button" class="nav-button">Gods/Higher Powers</button>
        <button id="nations-button" class="nav-button">Nations</button>
        <button id="factions-button" class="nav-button">Factions</button>
      </section>
  `}function l(){return`
    <h1> The Timeline </h1>
      <section class="header-section">
        <button id="home-button" class="nav-button">Home</button>
        <button class="nav-button">Placeholder</button>
        <button class="nav-button">Placeholder</button>
        <button class="nav-button">Placeholder</button>
      </section>
  `}function u(){return`
    <section class="footer-card"><p>Exa's Writing Tools build-${r}</p></section>
  `}function d(){document.querySelector(`#home-button`).addEventListener(`click`,o),document.querySelector(`#vault-button`).addEventListener(`click`,m),document.querySelector(`#writing-button`).addEventListener(`click`,g),document.querySelector(`#settings-button`).addEventListener(`click`,_),document.querySelector(`#time-button`).addEventListener(`click`,C),document.querySelector(`#devlog-button`).addEventListener(`click`,h)}function f(){document.querySelector(`#home-button`).addEventListener(`click`,o),document.querySelector(`#char-button`).addEventListener(`click`,v),document.querySelector(`#locs-button`).addEventListener(`click`,b),document.querySelector(`#events-button`).addEventListener(`click`,x),document.querySelector(`#tags-button`).addEventListener(`click`,S),document.querySelector(`#religion-button`).addEventListener(`click`,w),document.querySelector(`#gods-button`).addEventListener(`click`,T),document.querySelector(`#nations-button`).addEventListener(`click`,E),document.querySelector(`#factions-button`).addEventListener(`click`,D)}function p(){document.querySelector(`#home-button`).addEventListener(`click`,o)}function m(){n.innerHTML=`
    <main class="app-shell">
      ${c()}

      <section class="tool-card">
        <h1>Lore Vault</h1>
        <p class="subtitle">You may select your desired 'mode' at the top.</p>
      </section>
      ${u()}
    </main>
    `,f()}function h(){n.innerHTML=`
    <main class="app-shell">
    ${s()}

    <section class="tool-card">
      <p><strong>Development Log</strong></p>
      
      <section class="tool-card">
        <p><strong>build-0.0.3</strong></p>
        <p>• Added a confirmation dialogue upon deletion of a character</p>
        <p>• Added an empty state message for <code>Characters</code> page</p>
        <p>• Like a goober, I've lightly versioned the Characters page in the very bottom middle.</p>
      </section>

      <section class="tool-card">
        <p><strong>build-0.0.2</strong></p>
        <p>• Fully removed the deprecated <code>charSubmit()</code></p>
        <p>• Added persistent character storage</p>
        <p>• Delete Button now deletes characters. No "are you sure?" prompt yet</p>
        <p>• Edit Button now refills the form and updates the existing character</p>
        <p>• Editing a character will auto-scroll to the form</p>
        <p>• Saving or updating a character automagically scrolls to its card</p>
        <p>• Split character storage functions into <code>characterStorage.js</code></p>
      </section>

      <section class="tool-card">
        <p><strong>build-0.0.1</strong></p>
        <p>• Put together the basic framework.</p>
        <p>• Got page navigation working.</p>
        <p>• Characters can now be created and stored.</p>
        <p>• Character cards finally look like... well, cards.</p>
        <p>• Learned map(), index, and why event listeners should behave themselves.</p>
        <p>• Fixed a performance issue that was entirely my own fault.</p>
        <p>• Added build information to the footer.</p>
        <p>• Calling this a solid first milestone.</p>
        <p>• Oh! And also added a lil devlog page.</p>
      </section>

    </section>
    ${u()}
    </main>
  `,d()}function g(){n.innerHTML=`
    <main class="app-shell">
      ${s()}
      <h1>Writing Desk</h1>
      <p class="subtitle">Unavailable at this stage, but I promise it'll be soon!</p>
    ${u()}
    </main>
  `,d()}function _(){n.innerHTML=`
    <main class="app-shell">
      ${s()}
      <br>
      <h1> Settings Page </h1>
      <p class="subtitle">Unavailable at this stage, will be made later on. </p>
    ${u()}
    </main>
  `,d()}function v(){n.innerHTML=`
    <main class="app-shell">
    ${c()}
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
      <button id="submit-button">Save</button>
    </section>

    <section class="tool-card" id="characters-list"></section>
    ${u()}
    <center><code>characters_page_v1</code></center>
  `,i.length===0?document.querySelector(`#characters-list`).innerHTML=`
      <p> An empty table sits in an empty room. Time to get this party started!</p>
      <p> Add some people! </p>
    `:(y(1),console.log(`Data is being pushed`)),f(),document.querySelector(`#submit-button`).addEventListener(`click`,()=>{let t=document.querySelector(`#charName`),n=document.querySelector(`#charNickname`),r=document.querySelector(`#charAge`),o=document.querySelector(`#charRace`),s=document.querySelector(`#charDesc`),c={name:t.value||`Missing Information`,nickname:n.value||`Missing Information`,age:r.value||`Missing Information`,race:o.value||`Missing Information`,description:s.value||`Missing Information`},l;a===null?(i.push(c),l=i.length-1):(l=a,i[a]=c,a=null),e(i),y(1),document.querySelector(`#character-card-${l}`).scrollIntoView({behavior:`smooth`,block:`center`})})}function y(t){if(!Number.isInteger(t)){console.error(`formID must be an integer`);return}switch(t){case 1:document.querySelector(`#characters-list`).innerHTML=i.map((e,t)=>`
          <section class="character-card" id="character-card-${t}">
          <h2>Name: ${e.name}</h2>
          <hr class="card-custom-divider">
          <p>Nickname: ${e.nickname}</p>
          <p>Age: ${e.age}</p>
          <p>Race: ${e.race}</p>
          <p>Description: ${e.description}</p>
          <p>Index: ${t}</p>
          <button class="form-button edit-button" data-index="${t}">Edit</button> <button class="form-button delete-button" data-index="${t}">Delete</button>
          </section>
        `).join(``);break}document.querySelectorAll(`.edit-button`).forEach(e=>{e.addEventListener(`click`,()=>{let t=Number(e.dataset.index),n=i[t];document.querySelector(`#charName`).value=n.name||`Missing Information`,document.querySelector(`#charNickname`).value=n.nickname||`Missing Information`,document.querySelector(`#charAge`).value=n.age||`Missing Information`,document.querySelector(`#charRace`).value=n.race||`Missing Information`,document.querySelector(`#charDesc`).value=n.description||`Missing Information`,a=t,window.scrollTo({top:0,behavior:`smooth`})})}),document.querySelectorAll(`.delete-button`).forEach(t=>{t.addEventListener(`click`,()=>{let n=Number(t.dataset.index);confirm(`Delete "${i[n].name}"?`)&&(i.splice(n,1),e(i),y(1),i.length===0&&(document.querySelector(`#characters-list`).innerHTML=`
          <p> An empty table sits in an empty room. Time to get this party started!</p>
          <p> Add some people! </p>
        `))})})}function b(){n.innerHTML=`
    <main class="app-shell">
    ${c()}
    <br>
    <section class="tool-card">
      <p>Places page</p>
    </section>
  `,f()}function x(){n.innerHTML=`
    <main class="app-shell">
    ${c()}
    <br>
    <section class="tool-card">
      <p>CEvents page</p>
    </section>
  `,f()}function S(){n.innerHTML=`
    <main class="app-shell">
    ${c()}
    <br>
    <section class="tool-card">
      <p>Tags page</p>
    </section>
  `,f()}function C(){n.innerHTML=`
    <main class="app-shell">
    ${l()}
    <br>
    <section class="tool-card">
      <p>This is a planned major feature!</p>
      <p>That said... I couldn't tell you when I'll get around to it.</p>
      <p>Check back sometime after I finish more of the Lore Vault </p>
    </section>
  `,p()}function w(){n.innerHTML=`
    <main class="app-shell">
    ${c()}
    <br>
    <section class="tool-card">
      <p>Religion page</p>
    </section>
  `,f()}function T(){n.innerHTML=`
    <main class="app-shell">
    ${c()}
    <br>
    <section class="tool-card">
      <p>Gods/Deities page</p>
    </section>
  `,f()}function E(){n.innerHTML=`
    <main class="app-shell">
    ${c()}
    <br>
    <section class="tool-card">
      <p>Nations page</p>
    </section>
  `,f()}function D(){n.innerHTML=`
    <main class="app-shell">
    ${c()}
    <br>
    <section class="tool-card">
      <p>Factions page</p>
    </section>
  `,f()}o();