import { takeLatest, takeEvery, delay } from 'redux-saga';
import { take, race, call, put } from 'redux-saga/effects';
import { fetch } from 'api';
import { ALBUMS_REQUEST, ALBUMS_REMOVE, receiveAlbums } from 'actions/albums';

function* fetchAlbums() {
	// yield delay(1000);

	try {
		const { albums, cancel } = yield race({
			albums: call(fetch, '/albums'),
			cancel: take(ALBUMS_REMOVE)
		});

		if (albums) {
			yield put(receiveAlbums(albums));
		} else if (cancel) {
			console.log('Albums request cancelled!');
		}
	} catch (error) {
		console.log('Album request failed!');
	}
}

export function* watchFetchAlbums() {
	yield* takeLatest(ALBUMS_REQUEST, fetchAlbums);
	// yield* takeEvery(ALBUMS_REQUEST, fetchAlbums);
}
