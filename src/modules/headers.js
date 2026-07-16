export function displayHeader() {
  return `
    <h1> Exa's Writing Tools (Quillworks) </h1>
    <section class="header-section">
      <button id="home-button" class="nav-button">Home</button>
      <button id="vault-button" class="nav-button">Lore Vault</button>
      <button id="time-button" class="nav-button">Timeline</button>
      <button id="writing-button" class="nav-button">Writing Desk</button>
      <button id="settings-button" class="nav-button">Settings</button>
      <button id="devlog-button" class="nav-button">Dev Log</button>
    </section>
  `
}

export function displayLoreHeader() {
  return `
    <h1> The Lore Vault </h1>
      <section class="header-section">
        <button id="home-button" class="nav-button">Home</button>
        <button id="char-button" class="nav-button">Characters</button>
        <button id="wb-button" class="nav-button">World Building</button>
  		<button id="event-button" class="nav-button">Events</button>
        <button id="tags-button" class="nav-button">Tags</button>
      </section>
  `
}

export function displayTimeHeader() {
  return `
    <h1> The Timeline </h1>
      <section class="header-section">
        <button id="home-button" class="nav-button">Home</button>
        <button class="nav-button">Placeholder</button>
        <button class="nav-button">Placeholder</button>
        <button class="nav-button">Placeholder</button>
      </section>
  `
}

export function displayWBHeader() {
	return `
		<h1> Worldbuilding </h1>
			<section class="header-section">
				<button id="vault-button" class="nav-button">Lore Vault</button>
				<button id="locs-button" class="nav-button">Places</button>
				<button id="nations-button" class="nav-button">Nations</button>
				<button id="factions-button" class="nav-button">Factions</button>
				<button id="religion-button" class="nav-button">Religions</button>
				<button id="gods-button" class="nav-button">Gods/Higher Powers</button>
			</section>
	`
}
