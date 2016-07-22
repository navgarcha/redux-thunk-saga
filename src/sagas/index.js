import { fork } from 'redux-saga/effects';
import { watchFetchAlbums } from './albums';

export default function* root() {
	yield fork(watchFetchAlbums);
}
