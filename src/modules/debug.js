export const debugging = import.meta.env.DEV

export function debugStorageSave(key, json) {
	if (!debugging) return

	console.groupCollapsed(`[Quillworks] Saved "${key}"`)
	console.log('Object snapshot:', JSON.parse(json))
	console.log('JSON writtin:', json)
	console.groupEnd()
}

export function initDebugTools() {
	if (!debugging) return

		window.qwDebug = {
			dump() {
				for (const key of ['characters', 'places']) {
					const json = localStorage.getItem(key)
					const data = json ? JSON.parse(json) : []

					console.group(`[Quillworks] ${key}`)
					console.table(data)
					console.log('Raw JSON:', json)
					console.groupEnd()
				}
			},

			raw(key) {
				console.log(localStorage.getItem(key))
			},

			size(key) {
				const json = localStorage.getItem(key) ?? ''
				console.log(`${key}: ${new Blob([json]).size} bytes`)
			},

			clear(key) {
				if (confirm(`Delete localStorage entry "${key}"?`)) {
					localStorage.removeItem(key)
					console.log(`Delete "${key}"`)
				}
			}
		}

	console.log(`[Quillworks] Debugging enabled. Try qwDebug.dump()`)
}