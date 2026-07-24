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

function seed(key, amount) {
	if (!debugging) return

	if (key !== 'places') {
		console.error(`[Quillworks] Cannot seed "${key}" yet`)
		return
	}

	if (!Number.isInteger(amount) || amount < 1) {
		console.error('[Quillworks] Amount must be a positive integer.')
		return
	}

	if (!confirm(`Replace "${key}" with ${amount} generated places?`)) {
		return
	}

	const places = []

	for (let index = 0; index < amount; index++) {
		const place = {
			name: `Debug Place ${index + 1}`,
			type: 'Debug Type',
			region: 'Debug Region'
			desc: `Generated place number ${index + 1}.`
		}

		places.push(place)
	}

	const json = JSON.stringify(places)

	localStorage.setItem(key, json)
	debugStorageSave(key, json)

	console.log('[Quillworks] Refresh the page to load the seeded data')
}