import { debugStorageSave } from './debug.js'

export function saveCharacters(characters) {
    const json = JSON.stringify(characters)

    localStorage.setItem('characters', json)
    debugStorageSave('characters', json)
    //localStorage.setItem('characters', JSON.stringify(characters)) // Single line implementation, but neglects debug.
}

export function loadCharacters() {
    const savedCharacters = localStorage.getItem('characters')

    return savedCharacters ? JSON.parse(savedCharacters) : []
}
