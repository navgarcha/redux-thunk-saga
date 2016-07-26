import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { fetch } from 'api';
import { ALBUMS_REQUEST, receiveAlbums } from 'actions/albums';
import { albumsSelector } from 'reducers/selectors';

function* fetchAlbums() {
	const cachedAlbums = yield select(albumsSelector);

	if (!cachedAlbums) {
		try {
			const albums = yield call(fetch, '/albums');
			yield put(receiveAlbums(albums));
		} catch (error) {
			console.log('Albums request failed!');
		}
	} else {
		console.log('Albums served from cache!');
	}
}

export function* watchFetchAlbums() {
	yield* takeLatest(ALBUMS_REQUEST, fetchAlbums);
}
