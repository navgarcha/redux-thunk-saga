import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { request } from 'api';
import { ALBUMS_REQUEST, receiveAlbums } from 'actions/albums';
import { albumsSelector } from 'selectors';

function* requestAlbums() {
	const cachedAlbums = yield select(albumsSelector);

	if (!cachedAlbums) {
		try {
			const albums = yield call(request, '/albums');
			yield put(receiveAlbums(albums));
		} catch (error) {
			console.log('Albums request failed!');
		}
	} else {
		console.log('Albums served from cache!');
	}
}

export function* watchRequestAlbums() {
	yield* takeLatest(ALBUMS_REQUEST, requestAlbums);
}
