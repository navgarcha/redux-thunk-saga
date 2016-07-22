import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestAlbums, removeAlbums } from 'actions/albums';
import { fetchComponentData } from 'utils';

class Albums extends Component {
	static propTypes = {
		albums: PropTypes.object.isRequired
	}

	static need = [
		() => requestAlbums()
	]

	componentDidMount() {
		if (!this.props.albums.isLoaded) {
			fetchComponentData(Albums.need, this.props.dispatch);
		}
	}

	componentWillUnmount() {
		this.props.dispatch(removeAlbums());
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

export default connect(mapStateToProps)(Albums);
