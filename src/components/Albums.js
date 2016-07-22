import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestAlbums } from 'actions/albums';
import { fetchComponentData } from 'utils';

class Albums extends Component {
	static propTypes = {
		albums: PropTypes.object.isRequired
	}

	static need = [
		() => requestAlbums()
	]

	componentDidMount() {
		fetchComponentData(Albums.need, this.props.dispatch);
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
