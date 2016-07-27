import { request } from 'api';

export const POSTS_RECEIVE = 'POSTS_RECEIVE';
export const POSTS_CLEANUP = 'POSTS_CLEANUP';

export function requestPosts() {
    return (dispatch) => {
        return request('/posts')
            .then((posts) => dispatch(receivePosts(posts)))
            .catch(() => console.log('Posts request failed!'));
    };
}

function receivePosts(payload) {
	return {
		type: POSTS_RECEIVE,
		payload
	};
}

export function cleanupPosts() {
	return {
		type: POSTS_CLEANUP
	};
}
