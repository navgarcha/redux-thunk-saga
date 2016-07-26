import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getAlbums, removeAlbums } from 'actions/albums';

class Albums extends Component {
	static propTypes = {
		albums: PropTypes.object.isRequired,
		getAlbums: PropTypes.func.isRequired,
		removeAlbums: PropTypes.func.isRequired
	}

	componentWillMount() {
		this.props.getAlbums();
	}

	componentWillUnmount() {
		this.props.removeAlbums();
	}

	render() {
		const { data, isLoaded } = this.props.albums;

		return (
			<div>
				This is the albums page!
				<pre style={{whiteSpace: 'normal'}}>{isLoaded ? JSON.stringify(data) : 'Loading...'}</pre>
			</div>
		);
	}
}

const mapStateToProps = ({ albums }) => ({albums});

export default connect(mapStateToProps, {
	getAlbums,
	removeAlbums
})(Albums);
