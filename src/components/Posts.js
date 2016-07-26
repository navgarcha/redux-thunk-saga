import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getPosts, removePosts } from 'actions/posts';

class Posts extends Component {
	static propTypes = {
		posts: PropTypes.object.isRequired
	}

	static need = [
		() => getPosts()
	]

	componentDidMount() {
		if (!this.props.posts.isLoaded) {
			Posts.need.map((need) => this.props.dispatch(need()))
		}
	}

	componentWillUnmount() {
		this.props.dispatch(removePosts());
	}

	render() {
		const { data, isLoaded } = this.props.posts;

		return (
			<div>
				This is the posts page!
				<pre style={{whiteSpace: 'normal'}}>{isLoaded ? JSON.stringify(data) : 'Loading...'}</pre>
			</div>
		);
	}
}

const mapStateToProps = ({ posts }) => ({posts});

export default connect(mapStateToProps)(Posts);
