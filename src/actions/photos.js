export const PHOTOS_REQUEST = 'PHOTOS_REQUEST';
export const PHOTOS_RECIEVE = 'PHOTOS_RECIEVE';
export const PHOTOS_REMOVE = 'PHOTOS_REMOVE';

export function requestPhotos(id) {
	return {
		type: PHOTOS_REQUEST,
		id
	};
}

export function receivePhotos(id, payload) {
	return {
		type: PHOTOS_RECIEVE,
		id,
		payload
	};
}

export function removePhotos(id) {
	return {
		type: PHOTOS_REMOVE,
		id
	};
}
