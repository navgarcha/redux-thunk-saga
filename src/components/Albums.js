import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestAlbums, removeAlbums } from 'actions/albums';

class Albums extends Component {
	static propTypes = {
		albums: PropTypes.object.isRequired
	}

	static need = [
		() => requestAlbums()
	]

	componentDidMount() {
		if (!this.props.albums.isLoaded) {
			Albums.need.map((need) => this.props.dispatch(need()))
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
