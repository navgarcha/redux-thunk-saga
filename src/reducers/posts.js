import { POSTS_REQUEST, POSTS_RECIEVE } from 'actions/posts';

const initialState = {
	data: null,
	isLoading: true
};

export default (state = initialState, action) => {
	switch (action.type) {
		case POSTS_REQUEST:
			return {
				...state,
				isLoading: true
			};

		case POSTS_RECIEVE:
			return {
				...state,
				data: action.payload,
				isLoading: false
			};

		default:
			return state;
	}
};
