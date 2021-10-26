import React, { useState, useEffect } from 'react';

const SearchForm = (props) => {
  return (
    <section className='section search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>Search Your Favorite Launches</label>
          <input
            type='search'
            name='search-form'
            id='search-form'
            className='search-input'
            onChange={(e) => {
              props.onSearchChangeHandler(e.target.value);
            }}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
