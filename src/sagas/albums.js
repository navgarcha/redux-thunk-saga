import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { fetch } from 'api';
import { receiveAlbums } from 'actions/albums';

export { ALBUMS_REQUEST } from 'actions/albums';

export function* fetchAlbums() {
	yield delay(1000);
	const albums = yield call(fetch, '/albums');
	yield put(receiveAlbums(albums));
}
