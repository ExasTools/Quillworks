import './style.css'
import { displayHeader, displayLoreHeader, displayTimeHeader, displayWBHeader } from './modules/headers.js'
import { showCharacters } from './features/characters.js' // import characters page
import { showPlaces } from './features/places.js' // import places page
import { showDevLog } from './features/devlog.js'

const app = document.querySelector('#app')
const ver = "0.1.3"
// Debugging has been passed to VITE through `npm run dev`


function showHome() {
  app.innerHTML = `
    <main class="app-shell">
      ${displayHeader()}
      
      <section class="tool-card">
        <p> Finished the bones and skin of the Worldbuilding Places page... moving along. </p>
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
  document.querySelector("#vault-button").addEventListener('click', showLoreVault)
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
    document.querySelector("#wb-button").addEventListener('click', showWB)
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
  showDevLog({
    app,
    displayHeader,
    hookHeaderButtons,
    setActiveButton,
    displayFooter,
  })
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

function setActiveButton(buttonId) {
  const button = document.getElementById(buttonId)
  button.classList.add('active')
}

function lvChar() {
  // keep wrapper for compatibility
  showCharacters({
    app,
    displayFooter,
    hookAltHeader,
    setActiveButton
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
  showPlaces({
    app,
    displayWBHeader,
    displayFooter,
    hookWBHeader,
    setActiveButton,
  })
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
