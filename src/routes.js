import { Route, IndexRoute } from 'react-router';
import PostsList from 'containers/PostsList';
import AlbumsList from 'containers/AlbumsList';
import Photos from 'containers/Photos';
import Chrome from 'components/Chrome';
import Home from 'components/Home';
import Posts from 'components/Posts';
import Albums from 'components/Albums';
import NoMatch from 'components/NoMatch';

export default (
	<Route path="/" component={Chrome}>
		<IndexRoute component={Home} />

		<Route path="posts" component={Posts}>
            <IndexRoute component={PostsList} />
        </Route>

		<Route path="albums" component={Albums}>
			<IndexRoute component={AlbumsList} />
			<Route path=":albumId" component={Photos} />
		</Route>

		<Route path="*" component={NoMatch} />
	</Route>
);
