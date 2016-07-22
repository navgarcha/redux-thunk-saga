import { POSTS_REQUEST, POSTS_RECIEVE, POSTS_REMOVE } from 'actions/posts';

const initialState = {
	data: null,
	isLoaded: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case POSTS_REQUEST:
			return {
				...state,
				isLoaded: false
			};

		case POSTS_RECIEVE:
			return {
				...state,
				data: action.payload,
				isLoaded: true
			};

		case POSTS_REMOVE:
			return {
				...initialState
			};

		default:
			return state;
	}
};
