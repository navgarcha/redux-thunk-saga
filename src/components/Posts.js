import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestPosts, removePosts } from 'actions/posts';

class Posts extends Component {
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

const mapStateToProps = ({ posts }) => ({posts});

export default connect(mapStateToProps)(Posts);
