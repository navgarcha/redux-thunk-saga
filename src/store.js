import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware, { END } from 'redux-saga';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = [thunkMiddleware, sagaMiddleware];

// Add logging for client
if (typeof window !== 'undefined' && window.document) {
	middleware.push(createLogger({collapsed: true}))
}

export default (initialState) => {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middleware)
	);

	store.runSaga = sagaMiddleware.run;

	return store;
};
