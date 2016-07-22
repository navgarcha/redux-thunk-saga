import { ALBUMS_REQUEST, ALBUMS_RECIEVE } from 'actions/albums';

const initialState = {
	data: null,
	isLoading: true
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ALBUMS_REQUEST:
			return {
				...state,
				isLoading: true
			};

		case ALBUMS_RECIEVE:
			return {
				...state,
				data: action.payload,
				isLoading: false
			};

		default:
			return state;
	}
};
