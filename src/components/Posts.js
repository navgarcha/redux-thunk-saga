import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, removePosts } from 'actions/posts';
import { fetchComponentData } from 'utils';

class Posts extends Component {
	static propTypes = {
		posts: PropTypes.object.isRequired
	}

	static need = [
		() => fetchPosts()
	]

	componentDidMount() {
		if (!this.props.posts.isLoaded) {
			fetchComponentData(Posts.need, this.props.dispatch);
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
