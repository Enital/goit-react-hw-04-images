import {useEffect} from 'react';
import PropTypes from 'prop-types';

import css from './modal.module.css';

export default function Modal({image,onClose}) {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [onClose]);

  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img src={image.largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.types = {
  image: PropTypes.object.isRequired,
  onModalClose: PropTypes.func.isRequired,
};