import { fetch } from 'api';

export const POSTS_RECIEVE = 'POSTS_RECIEVE';
export const POSTS_REMOVE = 'POSTS_REMOVE';

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

export function removePosts() {
	return {
		type: POSTS_REMOVE
	};
}
