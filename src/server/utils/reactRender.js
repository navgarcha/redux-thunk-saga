import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { END } from 'redux-saga';
import routes from '../../routes';
import rootSaga from '../../sagas';
import configureStore from '../../store';

function fetchContextData(store = {}, { components = [] }) {
	const rootTask = store.runSaga(rootSaga);
	const promises = components.reduce((prev, current = {}) => {
		return (current.need || []).concat(prev);
	}, []).map((need) => store.dispatch(need()));

	promises.push(rootTask.done);
	store.dispatch(END);

	return Promise.all(promises);
}

export default function(request, reply) {
	const store = configureStore();

	match({routes, location: request.url}, (error, redirect, props) => {
		if (error) {
			reply(error.message).code(500);
		} else if (redirect) {
			reply.redirect(redirect.pathname + redirect.search);
		} else if (props) {
			fetchContextData(store, props).then(() => {
				const html = renderToString(
					<Provider store={store}>
						<RouterContext {...props} />
					</Provider>
				);

				const state = `window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())};`;

				reply.view('index', {html, state});
			});
		} else {
			reply('Not Found').code(404);
		}
	});
}
