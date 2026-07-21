import './style.css'
import { saveCharacters, loadCharacters } from './modules/characterStorage.js'
import { displayHeader, displayLoreHeader, displayTimeHeader, displayWBHeader } from './modules/headers.js'
import { marked } from 'marked'

const app = document.querySelector('#app')
const ver = "0.1.2"


// Define arrays (empty drawer)
let Characters = loadCharacters()
let editCharIndex = null
let Locations = []
let editLocIndex = null
// I've refrained from adding ALL the drawers, I get scope creep like a mofo


function showHome() {
  app.innerHTML = `
    <main class="app-shell">
      ${displayHeader()}
      
      <section class="tool-card">
        <p> Finished the bones and skin of the Character input... moving along. </p>
        <p> That said, to those that read this- thank you for checking out what I'm working on! I really appreciate it more than I can convey through text </p>
      </section>
      ${displayFooter()}
    </main>
    
    `
  hookHeaderButtons()
  setActiveButton('home-button')
}

// felt like the header should go here to keep it out of the way for the main code



function displayFooter() {
  return `
    <section class="footer-card"><p>Exa's Writing Tools (Quillworks) build-${ver}</p></section>
  `
}

function hookHeaderButtons() {
  // because displayHeader() doesn't return any actual javascript- only HTML
  // this will hook the headers so the buttons can actually be used. 
  document.querySelector('#home-button').addEventListener('click', showHome)
  document.querySelector('#vault-button').addEventListener('click', showLoreVault)
  document.querySelector('#writing-button').addEventListener('click', showWritingDesk)
  document.querySelector('#settings-button').addEventListener('click', showSettings)
  document.querySelector("#time-button").addEventListener('click', Timeline)
  document.querySelector("#devlog-button").addEventListener('click', devLog)
}

function hookAltHeader() { // I decided against resusing hookHeaderButtons()
  document.querySelector("#home-button").addEventListener('click', showHome)
  document.querySelector("#char-button").addEventListener('click', lvChar)
  document.querySelector("#wb-button").addEventListener('click', showWB)
  document.querySelector("#event-button").addEventListener('click', lvEvents)
  document.querySelector("#tags-button").addEventListener('click', lvTags)
}

function hookTimeHeader() {
  document.querySelector("#home-button").addEventListener('click', showHome)
  // TODO: Add more when I get to this :)
}

function hookWBHeader() {
    document.querySelector("#vault-button").addEventListener('click', showLoreVault)
    document.querySelector("#locs-button").addEventListener('click', wbPlaces)
    document.querySelector("#nations-button").addEventListener('click', wbNations)
    document.querySelector("#factions-button").addEventListener('click', wbFactions)
    document.querySelector("#religion-button").addEventListener('click', wbReligion)
    document.querySelector("#gods-button").addEventListener('click', wbGods)
}

function showLoreVault() {
  app.innerHTML = `
    <main class="app-shell">
      ${displayLoreHeader()}

      <section class="tool-card">
        <h1>Lore Vault</h1>
        <p class="subtitle">You may select your desired 'mode' at the top.</p>
      </section>
      ${displayFooter()}
    </main>
    `
    hookAltHeader()
    setActiveButton('vault-button')
}

function devLog() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayHeader()}

    <section class="tool-card">
      <p><strong>Development Log</strong></p>
      
      <section class="tool-card">
        <section class="tool-card-dlog">
          <p><strong>build-0.1.2</strong></p>
          <p>• Added logic to headers to set "active" button. Helps navigation
        <section class="tool-card-dlog">
          <p><strong>build-0.1.1</strong></p>
          <p>• Added the beginnings of a Settings page with a lil button</p>
          <p>• Reorganized the Lore Vault Navigation with a dedicated World Building Section</p>
          <p>• Moved header components into a separate module to clean up <code>main.js</code></p>
          <p>• Added some customization to certain pages that were lacking it
          <div class="todo"><strong>TODO:</strong> Remake header to make navigation not completely arse.</div>
        </section>
        <section class="tool-card-dlog">
          <p><strong>build-0.1.0 (Character Page Milestone)</strong></p>
          <p>• Settled on "Quillworks" as the final project name
          <p>• Added a confirmation dialogue upon deletion of a character</p>
          <p>• Added an empty state message for <code>Characters</code> page</p>
          <p>• Like a goober, I've lightly versioned the Characters page in the very bottom middle.</p>
          <p>• Added <code>Markdown</code> support. I have extra modules but none are implemented outside of the basic version.
        </section>

        <section class="tool-card-dlog">
          <p><strong>build-0.0.2</strong></p>
          <p>• Fully removed the deprecated <code>charSubmit()</code></p>
          <p>• Added persistent character storage</p>
          <p>• Delete Button now deletes characters. No "are you sure?" prompt yet</p>
          <p>• Edit Button now refills the form and updates the existing character</p>
          <p>• Editing a character will auto-scroll to the form</p>
          <p>• Saving or updating a character automagically scrolls to its card</p>
          <p>• Split character storage functions into <code>characterStorage.js</code></p>
        </section>

        <section class="tool-card-dlog">
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
    ${displayFooter()}
    </main>
  `
  hookHeaderButtons()
  setActiveButton('devlog-button')
}

function showWritingDesk() {
  app.innerHTML = `
    <main class="app-shell">
      ${displayHeader()}
      <section class="tool-card">
        <h1>Writing Desk</h1>
        <br>
        <p class="subtitle">Unavailable at this stage, but I promise it'll be soon!</p>
      </section>
      ${displayFooter()}
    </main>
  `

  hookHeaderButtons()
  setActiveButton('writing-button')
}

function showSettings() {
  app.innerHTML = `
    <main class="app-shell">
      ${displayHeader()}
      <section class="tool-card">
        <h1> Settings Page </h1>
        <p class="subtitle">Semi-unavailable. Dummy button! </p>
        <center><button id="export-backup">Export Quillworks</button></center>
      </section>
      ${displayFooter()}
    </main>
  `
  hookHeaderButtons()
  setActiveButton('settings-button')
}

function pushDataToPage(formID){
  if (!Number.isInteger(formID)) {
    console.error("formID must be an integer")
    return
  }

  switch (formID) {
    
    case 1:
      document.querySelector('#characters-list').innerHTML = 
        Characters.map((character, index) => `
          <section class="character-card" id="character-card-${index}">
          <h2>Name: ${marked.parseInline(character.name)}</h2>
          <hr class="card-custom-divider">
          <div>Nickname: ${marked.parseInline(character.nickname)}</div>
          <div>Age: ${marked.parseInline(character.age)}</div>
          <div>Race: ${marked.parseInline(character.race)}</div>
          <div>Description: ${marked.parse(character.description)}</div>
          <div>Index: ${index}</div>
          <button class="form-button edit-button" data-index="${index}">Edit</button> <button class="form-button delete-button" data-index="${index}">Delete</button>
          </section>
        `).join('') 
    break
  }
  document.querySelectorAll(".edit-button").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index)
      const character = Characters[index]

      document.querySelector("#charName").value = character.name || "Missing Information"
      document.querySelector("#charNickname").value = character.nickname || "Missing Information"
      document.querySelector("#charAge").value = character.age || "Missing Information"
      document.querySelector("#charRace").value = character.race || "Missing Information"
      document.querySelector("#charDesc").value = character.description || "Missing Information"

      editCharIndex = index
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    })
  })
  document.querySelectorAll(".delete-button").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index)
      // are you sure?
      if (!confirm(`Delete "${Characters[index].name}"?`)) return
      // alright then
      
      Characters.splice(index, 1)
      saveCharacters(Characters)
      pushDataToPage(1)
      if (Characters.length === 0) {
        document.querySelector('#characters-list').innerHTML = `
          <p> An empty table sits in an empty room. Time to get this party started!</p>
          <p> Add some people! </p>
        `
      }
    })
  })
}

function setActiveButton(buttonId) {
  const button = document.getElementById(buttonId)
  button.classList.add('active')
}

function lvChar() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayLoreHeader()}
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
    ${displayFooter()}
    <center><code>characters_page_v1</code></center>
  `
  if (Characters.length !== 0) {
    pushDataToPage(1) 
    console.log("Data is being pushed")
  } else {
    document.querySelector('#characters-list').innerHTML = `
      <p> An empty table sits in an empty room. Time to get this party started!</p>
      <p> Add some people! </p>
    `
  }
  hookAltHeader()
  setActiveButton('char-button')
  document.querySelector("#submit-button").addEventListener('click', () => {
    // Save/Edit Button Listener
    
    const charName = document.querySelector("#charName")
    const charNick = document.querySelector("#charNickname")
    const charAge = document.querySelector("#charAge")
    const charRace = document.querySelector("#charRace")
    const charDesc = document.querySelector("#charDesc")

    const builtCharacter = {
      name: charName.value || "Missing Information",
      nickname: charNick.value || "Missing Information",
      age: charAge.value || "Missing Information",
      race: charRace.value || "Missing Information",
      description: charDesc.value || "Missing Information"
    }
    let targetIndex

    if (editCharIndex === null) {
      Characters.push(builtCharacter)
      targetIndex = Characters.length - 1
    } else {
      targetIndex = editCharIndex
      Characters[editCharIndex] = builtCharacter
      editCharIndex = null
    }

    saveCharacters(Characters)
    pushDataToPage(1)

    document.querySelector(`#character-card-${targetIndex}`).scrollIntoView({
      behavior: "smooth",
      block: "center"
    })

  })

}

function showWB() {
  app.innerHTML = `
    <main class="app-shell">
      ${displayWBHeader()}
      <br>
      <section class="tool-card">
        <p class="subtitle">Welcome to the World Building drawer. You can access its different modes up top.</p>
      </section>
      ${displayFooter()}
    </main>
  `
  hookWBHeader()
  setActiveButton('wb-button')
}

function lvEvents() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayLoreHeader()}
    <br>
    <section class="tool-card">
      <p>CEvents page</p>
    </section>
  `
  hookAltHeader()
  setActiveButton('event-button')
}

//#
function lvTags() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayLoreHeader()}
    <br>
    <section class="tool-card">
      <p>Tags page</p>
    </section>
  `
  hookAltHeader()
  setActiveButton('tags-button')
}

function Timeline() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayTimeHeader()}
    <br>
    <section class="tool-card">
      <p>This is a planned major feature!</p>
      <p>That said... I couldn't tell you when I'll get around to it.</p>
      <p>Check back sometime after I finish more of the Lore Vault </p>
    </section>
    ${displayFooter()}
  `
  hookTimeHeader()
}

function wbPlaces() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayWBHeader()}
    <br>
    <section class="tool-card">
      <p></p>
    </section>
  `
  hookWBHeader()
  setActiveButton('locs-button')
}

function wbReligion() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayWBHeader()}
    <br>
    <section class="tool-card">
      <p>Religion page</p>
    </section>
  `
  hookWBHeader()
  setActiveButton('religion-button')
}

function wbGods() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayWBHeader()}
    <br>
    <section class="tool-card">
      <p>Gods/Deities page</p>
    </section>
  `
  hookWBHeader()
  setActiveButton('gods-button')
}

function wbNations() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayWBHeader()}
    <br>
    <section class="tool-card">
      <p>Nations page</p>
    </section>
  `
  hookWBHeader()
  setActiveButton('nations-button')
}

function wbFactions() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayWBHeader()}
    <br>
    <section class="tool-card">
      <p>Factions page</p>
    </section>
  `
  hookWBHeader()
  setActiveButton('factions-button')
}

showHome()
