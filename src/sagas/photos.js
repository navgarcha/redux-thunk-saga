import { takeLatest } from 'redux-saga';
import { take, race, call, put, select } from 'redux-saga/effects';
import { fetch } from 'api';
import { PHOTOS_REQUEST, PHOTOS_REMOVE, receivePhotos } from 'actions/photos';
import { photosSelector } from 'reducers/selectors';

function* fetchPhotos({ id }) {
	const cachedPhotos = yield select(photosSelector, id);

	if (!cachedPhotos) {
		try {
			const { photos, cancel } = yield race({
				photos: call(fetch, `/photos?albumId=${id}`),
				cancel: take(PHOTOS_REMOVE)
			});

			if (photos) {
				yield put(receivePhotos(id, photos));
			} else if (cancel) {
				console.log('Photos request cancelled!');
			}
		} catch (error) {
			console.log('Photos request failed!');
		}
	} else {
		console.log('Photos served from cache!');
	}
}

export function* watchFetchPhotos() {
	yield* takeLatest(PHOTOS_REQUEST, fetchPhotos);
}
