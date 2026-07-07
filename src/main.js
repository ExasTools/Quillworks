import './style.css'

const app = document.querySelector('#app')

function showHome() {
  app.innerHTML = `
    <main class="app-shell">
      ${displayHeader()}
      
      <section class="tool-card">
        <p> Currently, the only features available is a very rudamentary character input screen. More to come... </p>
      </section>
    </main>
    `
  hookHeaderButtons()
}

// felt like the header should go here to keep it out of the way for the main code

function displayHeader() {
  return `
    <h1> Exa's Writing Tools </h1>
    <section class="header-section">
      <button id="home-button" class="nav-button">Home</button>
      <button id="vault-button" class="nav-button">Lore Vault</button>
      <button id="writing-button" class="nav-button">Writing Desk</button>
      <button id="settings-button" class="nav-button">Settings</button>
    </section>
  `
}

function displayLoreHeader() {
  return `
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
  `
}

function hookHeaderButtons() {
  // because displayHeader() doesn't return any actual javascript- only HTML
  // this will hook the headers so the buttons can actually be used. 
  document.querySelector('#home-button').addEventListener('click', showHome)
  document.querySelector('#vault-button').addEventListener('click', showLoreVault)
  document.querySelector('#writing-button').addEventListener('click', showWritingDesk)
  document.querySelector('#settings-button').addEventListener('click', showSettings)
}

function hookAltHeader() { // I decided against resusing hookHeaderButtons()
  document.querySelector("#home-button").addEventListener('click', showHome)
  document.querySelector("#char-button").addEventListener('click', lvChar)
  document.querySelector("#locs-button").addEventListener('click', lvPlaces)
  document.querySelector("#events-button").addEventListener('click', lvEvents)
  document.querySelector("#tags-button").addEventListener('click', lvTags)
  document.querySelector("#time-button").addEventListener('click', lvTimeline)
  document.querySelector("#religion-button").addEventListener('click', lvReligion)
  document.querySelector("#gods-button").addEventListener('click', lvGods)
  document.querySelector("#nations-button").addEventListener('click', lvNations)
  document.querySelector("#factions-button").addEventListener('click', lvFactions)
  
}

function charSubmit() {
  const charName = document.querySelector("#charName")
  const charNick = document.querySelector("#charNickname")
  const charAge = document.querySelector("#charAge")
  const charRace = document.querySelector("#charRace")
  const charDesc = document.querySelector("#charDesc")

  console.log({
    name: charName.value,
    nickname: charNick.value,
    age: charAge.value,
    race: charRace.value,
    description: charDesc.value

  })
}

function showLoreVault() {
  app.innerHTML = `
    <main class="app-shell">
      ${displayLoreHeader()}

      <section class="tool-card">
        <h1>Lore Vault</h1>
        <p class="subtitle">You may select your desired 'mode' at the top.</p>
      </section>
    </main>
    `
    hookAltHeader()
}

function showWritingDesk() {
  app.innerHTML = `
    <main class="app-shell">
      ${displayHeader()}
      <h1>Writing Desk</h1>
      <p class="subtitle">Unavailable at this stage, but I promise it'll be soon!</p>

    </main>
  `

  hookHeaderButtons()
}

function showSettings() {
  app.innerHTML = `
    <main class="app-shell">
      ${displayHeader()}
      <br>
      <h1> Settings Page </h1>
      <p class="subtitle">Unavailable at this stage, will be made later on. </p>

    </main>
  `
  hookHeaderButtons()
}

// Lore Vault!

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
      <input class="field-input" id="charDesc">
      <br><br>
      <button id="submit-button">Export to Console</button>
    </section>
  `
  hookAltHeader()
  document.querySelector("#submit-button").addEventListener('click', charSubmit)
}

function lvPlaces() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayLoreHeader()}
    <br>
    <section class="tool-card">
      <p>Places page</p>
    </section>
  `
  hookAltHeader()
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
}

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
}

function lvTimeline() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayLoreHeader()}
    <br>
    <section class="tool-card">
      <p>Timeline page</p>
    </section>
  `
  hookAltHeader()
}

function lvReligion() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayLoreHeader()}
    <br>
    <section class="tool-card">
      <p>Religion page</p>
    </section>
  `
  hookAltHeader()
}

function lvGods() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayLoreHeader()}
    <br>
    <section class="tool-card">
      <p>Gods/Deities page</p>
    </section>
  `
  hookAltHeader()
}

function lvNations() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayLoreHeader()}
    <br>
    <section class="tool-card">
      <p>Nations page</p>
    </section>
  `
  hookAltHeader()
}

function lvFactions() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayLoreHeader()}
    <br>
    <section class="tool-card">
      <p>Factions page</p>
    </section>
  `
  hookAltHeader()
}

showHome()