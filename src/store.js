import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [thunkMiddleware, sagaMiddleware];

// Add logging on client
if (typeof window !== 'undefined') {
	middleware.push(createLogger({collapsed: true}))
}

export default (initialState) => {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middleware)
	);

	sagaMiddleware.run(rootSaga);

	return store;
};
