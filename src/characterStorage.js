export function saveCharacters(characters) {
    localStorage.setItem('characters', JSON.stringify(characters))
    console.log("Saved!")
}

export function loadCharacters() {
    const savedCharacters = localStorage.getItem('characters')

    return savedCharacters ? JSON.parse(savedCharacters) : []
}
