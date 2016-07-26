import { ALBUMS_RECIEVE } from 'actions/albums';

export default (state = null, action) => {
	switch (action.type) {
		case ALBUMS_RECIEVE:
			return action.payload;

		default:
			return state;
	}
};
