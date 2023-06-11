import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Modal from '../Modal/Modal';

import css from './imageGallery.module.css';

class ImageGallery extends React.Component {
  state = {
    selectedImage: null,
  };
  handleImageClick = image => {
    this.setState({ selectedImage: image });
    document.addEventListener('keydown', this.handleKeyDown);
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ load: true });
    }
  }

  handleModalClose = () => {
    this.setState({ selectedImage: null });
  };
  
  render() {
    const { images, load } = this.props;
    const { selectedImage } = this.state;
    return (
      <div>
        <ul className={css.gallery}>
          {images &&
            images.map(image => {
              return (
                <li className={css.item} key={image.id}>
                  <div onClick={() => this.handleImageClick(image)}>
                    <ImageGalleryItem oneImage={image}></ImageGalleryItem>
                  </div>
                </li>
              );
            })}
        </ul>
        {selectedImage && (
          <Modal image={selectedImage} onClose={this.handleModalClose}></Modal>
        )}
        {load && <Loader />}
      </div>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  load: PropTypes.bool.isRequired,
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}