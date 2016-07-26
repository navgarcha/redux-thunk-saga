import { Component, PropTypes } from 'react';
import { requestPosts, removePosts } from 'actions/posts';

export default class Posts extends Component {
	static propTypes = {
		posts: PropTypes.array
	}

	static need = [
		() => requestPosts()
	]

	componentDidMount() {
		if (!this.props.posts) {
			Posts.need.map((need) => this.props.dispatch(need()))
		}
	}

	componentWillUnmount() {
		this.props.dispatch(removePosts());
	}

	render() {
		return (
			<div>
				<h1>Posts Page</h1>

				<pre style={{whiteSpace: 'normal'}}>
					{this.props.posts ? JSON.stringify(this.props.posts) : 'Loading...'}
				</pre>
			</div>
		);
	}
}
