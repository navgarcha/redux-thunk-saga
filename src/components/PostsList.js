import { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { requestPosts, cleanupPosts } from 'actions/posts';

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
		// this.props.dispatch(cleanupPosts());
	}

	render() {
		return (
            <div>
                {this.props.posts ? this.props.posts.map(({ id, title }, index) =>
                    <div key={index}>
                        <Link to={`/posts/${id}`}>{title}</Link>
                    </div>
                ) : 'Loading...'}
            </div>
		);
	}
}
