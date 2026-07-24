export const debugging = import.meta.env.DEV

export function debugStorageSave(key, json) {
	if (!debugging) return

	console.groupCollapsed(`[Quillworks] Saved "${key}"`)
	console.log('Object snapshot:', JSON.parse(json))
	console.log('JSON writtin:' json)
	console.groupEnd()
}