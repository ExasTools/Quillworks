import { saveCharacters, loadCharacters } from '../modules/characterStorage.js'
import { displayLoreHeader } from '../modules/headers.js'
import { marked } from 'marked'

let Characters = loadCharacters()
let editCharIndex = null

export function showCharacters({
    app,
    displayFooter,
    hookAltHeader,
    setActiveButton
}) {
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

    <section class="tool-card card-grid" id="characters-list"></section>
    ${displayFooter()}
    <center><code>characters_page_v3</code></center>
  `
  if (Characters.length !== 0) {
    renderCharacters()
    console.log("Data is being pushed")
  } else {
    document.querySelector('#characters-list').innerHTML = `
      <div class="todo"><p> An empty table sits in an empty room. Time to get this party started! Add some people! </p></div>
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
    renderCharacters()

    document.querySelector(`#character-card-${targetIndex}`).scrollIntoView({
      behavior: "smooth",
      block: "center"
    })

  })

}

function renderCharacters(){
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
      renderCharacters()
      if (Characters.length === 0) {
        document.querySelector('#characters-list').innerHTML = `
          <div class="todo"><p> An empty table sits in an empty room. Time to get this party started! Add some people! </p></div>
        `
      }
    })
  })
}