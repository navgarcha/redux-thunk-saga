import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestPhotos, removePhotos } from 'actions/photos';
import { photosSelector } from 'reducers/selectors';

class Photos extends Component {
	static propTypes = {
		photos: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			thumbnailUrl: PropTypes.string.isRequired
	    }))
	}

	componentWillMount() {
		this.props.requestPhotos(this.props.params.albumId);
	}

	componentWillUnmount() {
		this.props.removePhotos(this.props.params.albumId);
	}

	render() {
		return (
			<div>
				<h2>Album {this.props.params.albumId}</h2>

				{this.props.photos ? this.props.photos.map((photo) =>
					<img key={photo.id} src={photo.thumbnailUrl} />
				) : 'Loading...'}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	photos: photosSelector(state, ownProps.params.albumId)
});

export default connect(mapStateToProps, {
	requestPhotos,
	removePhotos
})(Photos);
