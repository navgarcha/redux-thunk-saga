import { PHOTOS_RECIEVE, PHOTOS_CLEANUP } from 'actions/photos';

export default (state = {}, action) => {
	switch (action.type) {
		case PHOTOS_RECIEVE:
			return {
				...state,
				...action.payload
			};

		case PHOTOS_CLEANUP:
			const {[action.id]: omit, ...newState} = state;
			return newState;

		default:
			return state;
	}
};
