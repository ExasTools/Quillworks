import { debugStorageSave } from './debug.js'

export function savePlaces(places) {
    const json = JSON.stringify(places)

    localStorage.setItem('places', json)
    debugStorageSave('places', json)
    //localStorage.setItem('places', JSON.stringify(places))
}

export function loadPlaces() {
    const savedPlaces = localStorage.getItem('places')

    return savedPlaces ? JSON.parse(savedPlaces) : []
}