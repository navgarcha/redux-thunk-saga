import { connect } from 'react-redux';
import Posts from 'components/Posts';

const mapStateToProps = ({ posts }) => ({
	posts
});

export default connect(mapStateToProps)(Posts);
