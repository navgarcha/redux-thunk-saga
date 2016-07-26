import { connect } from 'react-redux';
import { requestPhotos, cleanupPhotos } from 'actions/photos';
import { photosSelector } from 'selectors';
import Photos from 'components/Photos';

const mapStateToProps = (state, ownProps) => ({
	photos: photosSelector(state, ownProps.params.albumId)
});

export default connect(mapStateToProps, {
	requestPhotos,
	cleanupPhotos
})(Photos);
