import { POSTS_RECEIVE, POSTS_CLEANUP } from 'actions/posts';

export default (state = null, action) => {
	switch (action.type) {
		case POSTS_RECEIVE:
			return action.payload;

		case POSTS_CLEANUP:
			return null;

		default:
			return state;
	}
};
