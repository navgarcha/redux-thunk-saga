import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../../routes';
import rootSaga from '../../sagas';
import configureStore from '../../store';

function fetchContextData(store = {}, { components = [] }) {
	const promises = components.reduce((prev, current = {}) => {
		return (current.need || []).concat(prev);
	}, []).map((need) => store.dispatch(need()));

	// Ensure thunk and saga promises are resolved before rendering response
	return Promise.all([...promises, store.runSaga(rootSaga).done]);
}

export default function(request, reply) {
	const store = configureStore();

	match({routes, location: request.url}, (error, redirect, props) => {
		if (error) {
			reply(error.message).code(500);
		} else if (redirect) {
			reply.redirect(redirect.pathname + redirect.search);
		} else if (props) {
			const rootComponent = (
				<Provider store={store}>
					<RouterContext {...props} />
				</Provider>
			);

			fetchContextData(store, props).then(() => {
				const html = renderToString(rootComponent);
				const state = `window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())};`;

				reply.view('index', {html, state});
			});

			// Trigger sagas for component to run
			// https://github.com/yelouafi/redux-saga/issues/255#issuecomment-210275959
			renderToString(rootComponent);

			// Dispatch a close event so sagas stop listening after they're resolved
			store.close();
		} else {
			reply('Not Found').code(404);
		}
	});
}
