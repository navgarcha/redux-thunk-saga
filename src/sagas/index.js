import { fork } from 'redux-saga/effects';
import { watchFetchAlbums } from './albums';

export default function* root() {
	// @TODO: yield [watchFetchAlbums()];  Why not??
	yield fork(watchFetchAlbums);
}
