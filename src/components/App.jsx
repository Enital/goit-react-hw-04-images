import { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import LoadMoreButton from './LoadMoreButton/LoadMoreButton';
import { api } from './Functions/api';

import './app.module.css';

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);

  useEffect(() => {
    if (!query) return;

    const getApiData = async () => {
      setLoad(true);
      try {
        const response = await api(query, page);
        const { hits: loadedImages, totalHits: total } = response;
        if (loadedImages.length === 0) {
          alert('Nothing found =`(');
          return;
        }
        setShowMoreButton(page < Math.ceil(total / 12));
        setImages((images) => [...images, ...loadedImages]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    };
    getApiData();
  },[query, page]);
    
  const handleFormSubmit = value => {
    if (value !== query && value !== '') {
      setImages([]);
      setQuery(value);
      setPage(1);
    }
  };
  
  const nextPage = () => {
    setPage(page => page + 1 );
  };
  return (
      <div>
        <SearchBar onFormSubmit={handleFormSubmit}></SearchBar>
          <ImageGallery
            load={load}
            images={images}
          ></ImageGallery>

          {showMoreButton &&<LoadMoreButton onClick={nextPage} />}
      </div>
    );
  };