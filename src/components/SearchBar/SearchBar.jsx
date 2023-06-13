import { useState } from 'react';

import css from './searchBar.module.css';

export default function SearchBar({onFormSubmit}) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };
  
  const handleFormSubmit = event => {
    event.preventDefault();
    onFormSubmit(inputValue);
    setInputValue('');
  };
    
  return (
      <header className={css.searchBar}>
        <form className={css.form} onSubmit={handleFormSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>
          <input
            type="text"
            name="image"
            autoComplete="off"
            placeholder="Search images and photos"
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>
      </header>
    );
}