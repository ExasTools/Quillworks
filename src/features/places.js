import { savePlaces, loadPlaces } from '../modules/placeStorage.js'
import { displayWBHeader } from '../modules/headers.js'
import { marked } from 'marked'

let Places = loadPlaces()
let editPlcIndex = null

export function showPlaces({
    app,
    displayFooter,
    hookWBHeader,
    setActiveButton
}) {
    app.innerHTML = `
        <main class="app-shell">
        ${displayWBHeader()}
        <br>
        <section class="tool-card-char-page"> <!-- TODO: Add Place specific CSS -->
          <label>Place Name</label>
          <input class="field-input" id="placeName">
          <br>
          <label>Place Type</label>
          <input class="field-input" id="placeType">
          <br>
          <label>Place Region</label>
          <input class="field-input" id="placeRegion">
          <br>
          <label>Place Description</label>
          <textarea class="field-input" id="placeDesc"></textarea>
          <br><br>
          <button id="submit-button">Save</button>
        </section>
    
        <section class="tool-card" id="places-list"></section>
        ${displayFooter()}
        <center><code>places_page_v1</code></center>
        </main>
      `
      if (Places.length !== 0) {
        renderPlaces()
      } else {
        document.querySelector('#places-list').innerHTML = `
          <div class="todo">An empty void sits where a world should be. Shall we get to creating?</div>
        `
      }
    
      hookWBHeader()
      setActiveButton('locs-button')
      document.querySelector('#submit-button').addEventListener('click', () => {
        // Save button listener
    
        const placeName = document.querySelector("#placeName")
        const placeType = document.querySelector("#placeType")
        const placeRegion = document.querySelector("#placeRegion")
        const placeDesc = document.querySelector("#placeDesc")
    
        const builtPlace = {
          name: placeName.value || "Missing Information",
          type: placeType.value || "Missing Information",
          region: placeRegion.value || "Missing Information",
          desc: placeDesc.value || "Missing Information"
        }
        let targetIndex
    
        if (editPlcIndex === null) {
          Places.push(builtPlace)
          targetIndex = Places.length - 1 
        } else {
          targetIndex = editPlcIndex
          Places[editPlcIndex] = builtPlace
          editPlcIndex = null
        }
    
        savePlaces(Places)
        renderPlaces()
    
        document.querySelector(`#place-card-${targetIndex}`).scrollIntoView({
          behavior: "smooth",
          block: "center"
        })
      })
}

function renderPlaces() {
  document.querySelector('#places-list').innerHTML =
  Places.map((place, index) => `
    <section class="place-card" id="place-card-${index}">
    <h2>Place Name: ${marked.parseInline(place.name)}</h2>
    <hr class="card-custom-divider">
    <div>Place Type: ${marked.parseInline(place.type)}</div>
    <div>Place Region: ${marked.parseInline(place.region)}</div>
    <div>Place Description: ${marked.parse(place.desc)}</div>
    <div>Index: ${index}</div>
    <button class="form-button edit-button" data-index="${index}">Edit</button> <button class="form-button delete-button" data-index="${index}">Delete</button>
    </section>
  `).join('')

  document.querySelectorAll(".edit-button").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index)
      const place = Places[index]
      
      document.querySelector("#placeName").value = place.name || "Missing Information"
      document.querySelector("#placeType").value = place.type || "Missing Information"
      document.querySelector("#placeRegion").value = place.region || "Missing Information"
      document.querySelector("#placeDesc").value = place.desc || "Missing Information"

      editPlcIndex = index
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    })
  })
  document.querySelectorAll(".delete-button").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index)
      // You sure?
      if (!confirm(`Delete "${Places[index].name}"?`)) return
      // Okie dokie

      Places.splice(index, 1)
      savePlaces(Places)
      renderPlaces()
      if (Places.length === 0) {
        document.querySelector('#places-list').innerHTML = `
          <div class="todo"> An empty void sits where a world should be. Shall we get to creating?</div>
        `
      }
    })
  })
}