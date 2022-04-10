import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';

export const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-group input-group-lg container mt-5'>
        <input
          type='text'
          className='form-control'
          aria-label='Large'
          aria-describedby='inputGroup-sizing-sm'
          name='name'
          ref={searchValue}
          onChange={searchCocktail}
          placeholder='Search for a cocktail'
        />
      </div>
    </form>
  );
};
