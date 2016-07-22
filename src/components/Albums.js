import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestAlbums } from 'actions/albums';

class Albums extends Component {
	static propTypes = {
		albums: PropTypes.object.isRequired
	}

	static need = [
		() => requestAlbums()
	]

	componentDidMount() {
		if (!this.props.albums.data) {
			Promise.all(Albums.need.map((need) => this.props.dispatch(need())));
		}
	}

	render() {
		const { data, isLoading } = this.props.albums;

		return (
			<div>
				This is the albums page!
				<pre style={{whiteSpace: 'normal'}}>{isLoading ? 'Loading...' : JSON.stringify(data)}</pre>
			</div>
		);
	}
}

const mapStateToProps = ({ albums }) => ({albums});

export default connect(mapStateToProps)(Albums);
