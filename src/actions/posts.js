import { fetch } from 'api';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_RECIEVE = 'POSTS_RECIEVE';

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

export function fetchPosts() {
	return (dispatch) => {
		dispatch(requestPosts());
		return fetch('/posts').then((users) => dispatch(receivePosts(users)));
	};
}
