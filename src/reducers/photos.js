import { PHOTOS_RECIEVE, PHOTOS_REMOVE } from 'actions/photos';

export default (state = {}, action) => {
	switch (action.type) {
		case PHOTOS_RECIEVE:
			return {
				...state,
				[action.id]: action.payload,
			};

		case PHOTOS_REMOVE:
			const {[action.id]: omit, ...newState} = state;
			return newState;

		default:
			return state;
	}
};
