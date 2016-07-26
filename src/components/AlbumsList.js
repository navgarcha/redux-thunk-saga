import { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { requestAlbums } from 'actions/albums';
import { albumsSelector } from 'reducers/selectors';

class AlbumsList extends Component {
	static propTypes = {
		albums: PropTypes.array,
	}

	componentWillMount() {
		this.props.requestAlbums();
	}

	render() {
		const albums = this.props.albums;

		return (
			<div>
				{this.props.albums ? this.props.albums.map(({ id, title }, index) =>
					<div key={index}>
						<Link to={`/albums/${id}`}>{title}</Link>
					</div>
				) : 'Loading...'}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	albums: albumsSelector(state)
});

export default connect(mapStateToProps, {
	requestAlbums
})(AlbumsList);
