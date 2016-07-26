import { fetch } from 'api';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_RECIEVE = 'POSTS_RECIEVE';
export const POSTS_REMOVE = 'POSTS_REMOVE';

function requestPosts() {
	return {
		type: POSTS_REQUEST
	};
}

function receivePosts(payload) {
	return {
		type: POSTS_RECIEVE,
		payload
	};
}

export function getPosts() {
	return (dispatch) => {
		dispatch(requestPosts());
		return fetch('/posts').then((users) => dispatch(receivePosts(users)));
	};
}

export function removePosts() {
	return {
		type: POSTS_REMOVE
	};
}
