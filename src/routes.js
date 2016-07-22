import { Route, IndexRoute } from 'react-router';
import Chrome from 'components/Chrome';
import Home from 'components/Home';
import Posts from 'components/Posts';
import Albums from 'components/Albums';
import NoMatch from 'components/NoMatch';

export default (
	<Route path="/" component={Chrome}>
		<IndexRoute component={Home} />

		<Route path="posts" component={Posts} />
		<Route path="albums" component={Albums} />

		<Route path="*" component={NoMatch} />
	</Route>
);
