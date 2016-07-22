import { takeLatest, takeEvery } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { ALBUMS_REQUEST, fetchAlbums } from './albums';

export default function* root() {
	// yield fork(takeLatest, ALBUMS_REQUEST, fetchAlbums);
	yield fork(takeEvery, ALBUMS_REQUEST, fetchAlbums);
}
