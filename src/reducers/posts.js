import { POSTS_RECIEVE, POSTS_REMOVE } from 'actions/posts';

export default (state = null, action) => {
	switch (action.type) {
		case POSTS_RECIEVE:
			return action.payload;

		case POSTS_REMOVE:
			return null;

		default:
			return state;
	}
};
