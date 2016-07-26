import { Component, PropTypes } from 'react';

export default class Photos extends Component {
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
