import { combineReducers } from 'redux';
import posts from './posts';
import albums from './albums';

export default combineReducers({
	posts,
	albums
});
