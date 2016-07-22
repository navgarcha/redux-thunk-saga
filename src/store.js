import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [thunkMiddleware, sagaMiddleware];

export default (initialState) => {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middleware)
	);

	sagaMiddleware.run(rootSaga);

	return store;
};
