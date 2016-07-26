import { Route, IndexRoute } from 'react-router';
import Chrome from 'components/Chrome';
import Home from 'components/Home';
import Posts from 'components/Posts';
import Albums from 'components/Albums';
import AlbumsList from 'components/AlbumsList';
import Photos from 'components/Photos';
import NoMatch from 'components/NoMatch';

export default (
	<Route path="/" component={Chrome}>
		<IndexRoute component={Home} />

		<Route path="posts" component={Posts} />

		<Route path="albums" component={Albums}>
			<IndexRoute component={AlbumsList} />
			<Route path=":albumId" component={Photos} />
		</Route>

		<Route path="*" component={NoMatch} />
	</Route>
);
