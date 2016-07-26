import { fork } from 'redux-saga/effects';
import { watchFetchAlbums } from './albums';
import { watchFetchPhotos } from './photos';

export default function* root() {
	yield [
		fork(watchFetchAlbums),
		fork(watchFetchPhotos)
	];
}
