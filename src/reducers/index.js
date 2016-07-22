import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import posts from './posts';
import albums from './albums';

export default combineReducers({
	posts,
	albums,
	routing
});
