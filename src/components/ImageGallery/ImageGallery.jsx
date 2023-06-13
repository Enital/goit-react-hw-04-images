import {useState} from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Modal from '../Modal/Modal';

import css from './imageGallery.module.css';

export default function ImageGallery({load, images}) {
  const [selectedImage, setSelectedImage] = useState(null);
    
  const handleModalClose = () => {
    setSelectedImage( null );
  };
    
  return (
      <div>
        <ul className={css.gallery}>
          {images &&
            images.map(image => {
              return (
                <li className={css.item} key={image.id}>
                  <div onClick={() => setSelectedImage( image )}>
                    <ImageGalleryItem oneImage={image}></ImageGalleryItem>
                  </div>
                </li>
              );
            })}
        </ul>
        {selectedImage && (
          <Modal image={selectedImage} onClose={handleModalClose}></Modal>
        )}
        {load && <Loader />}
      </div>
    );
}

ImageGallery.propTypes = {
  load: PropTypes.bool.isRequired,
  images: PropTypes.array.isRequired,
}