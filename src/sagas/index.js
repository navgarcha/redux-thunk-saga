import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { ALBUMS_REQUEST, fetchAlbums } from './albums';

export default function* root() {
	yield fork(takeLatest, ALBUMS_REQUEST, fetchAlbums);
}
