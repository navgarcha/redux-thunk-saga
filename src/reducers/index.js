import { combineReducers } from 'redux';
import posts from './posts';
import albums from './albums';
import photos from './photos';

export default combineReducers({
	posts,
	albums,
	photos
});
