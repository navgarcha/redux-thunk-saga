import { render } from 'react-dom';
import { match, Router, browserHistory as history } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './store';

const store = configureStore(window.__INITIAL_STATE__);

match({history, routes}, (error, redirect, props) => {
	render(
		<Provider store={store}>
			<Router {...props} />
		</Provider>,
		document.getElementById('mount')
	);
});
