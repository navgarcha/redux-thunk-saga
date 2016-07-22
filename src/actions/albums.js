export const ALBUMS_REQUEST = 'ALBUMS_REQUEST';
export const ALBUMS_RECIEVE = 'ALBUMS_RECIEVE';

export function requestAlbums() {
	return {
		type: ALBUMS_REQUEST
	};
}

export function receiveAlbums(payload) {
	return {
		type: ALBUMS_RECIEVE,
		payload
	};
}
