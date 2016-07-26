import { connect } from 'react-redux';
import Posts from 'components/PostsList';

const mapStateToProps = ({ posts }) => ({
	posts
});

export default connect(mapStateToProps)(Posts);
