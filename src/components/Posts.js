import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from 'actions/posts';
import { fetchComponentData } from 'utils';

class Posts extends Component {
	static propTypes = {
		posts: PropTypes.object.isRequired
	}

	static need = [
		() => fetchPosts()
	]

	componentDidMount() {
		fetchComponentData(Posts.need, this.props.dispatch);
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
