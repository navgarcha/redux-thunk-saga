import { ALBUMS_REQUEST, ALBUMS_RECIEVE, ALBUMS_REMOVE } from 'actions/albums';

const initialState = {
	data: null,
	isLoaded: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ALBUMS_REQUEST:
			return {
				...state,
				isLoaded: false
			};

		case ALBUMS_RECIEVE:
			return {
				...state,
				data: action.payload,
				isLoaded: true
			};

		case ALBUMS_REMOVE:
			return {
				...initialState
			};

		default:
			return state;
	}
};
