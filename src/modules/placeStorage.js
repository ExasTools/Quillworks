export function savePlaces(places) {
    localStorage.setItem('places', JSON.stringify(places))
    console.log("Saved!")
}

export function loadPlaces() {
    const savedPlaces = localStorage.getItem('places')

    return savedPlaces ? JSON.parse(savedPlaces) : []
}