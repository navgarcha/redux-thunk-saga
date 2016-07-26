import { takeLatest } from 'redux-saga';
import { take, race, call, put, select } from 'redux-saga/effects';
import { fetch } from 'api';
import { ALBUMS_GET, ALBUMS_REMOVE, requestAlbums, receiveAlbums } from 'actions/albums';
import { getAlbums } from 'reducers/selectors';

function* fetchAlbums() {
	const { isLoaded } = yield select(getAlbums);

	if (!isLoaded) {
		yield put(requestAlbums());

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
}

export function* watchFetchAlbums() {
	yield* takeLatest(ALBUMS_GET, fetchAlbums);
}
