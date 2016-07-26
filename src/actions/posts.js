import { fetch } from 'api';

export const POSTS_RECIEVE = 'POSTS_RECIEVE';
export const POSTS_CLEANUP = 'POSTS_CLEANUP';

function receivePosts(payload) {
	return {
		type: POSTS_RECIEVE,
		payload
	};
}

export function requestPosts() {
	return (dispatch) => {
		return fetch('/posts').then((posts) => dispatch(receivePosts(posts)));
	};
}

export function cleanupPosts() {
	return {
		type: POSTS_CLEANUP
	};
}
