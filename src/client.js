import ReactDOM from 'react-dom';
import { match, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './store';

const store = configureStore(window.__INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store);

match({history, routes}, (error, redirect, props) => {
	ReactDOM.render(
		<Provider store={store}>
			<Router {...props} />
		</Provider>,
		document.getElementById('mount')
	);
});
