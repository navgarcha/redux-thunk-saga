import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from 'actions/posts';

class Posts extends Component {
	static propTypes = {
		posts: PropTypes.object.isRequired
	}

	static need = [
		() => fetchPosts()
	]

	componentDidMount() {
		if (!this.props.posts.data) {
			Promise.all(Posts.need.map((need) => this.props.dispatch(need())));
		}
	}

	render() {
		const { data, isLoading } = this.props.posts;

		return (
			<div>
				This is the posts page!
				<pre style={{whiteSpace: 'normal'}}>{isLoading ? 'Loading...' : JSON.stringify(data)}</pre>
			</div>
		);
	}
}

const mapStateToProps = ({ posts }) => ({posts});

export default connect(mapStateToProps)(Posts);
