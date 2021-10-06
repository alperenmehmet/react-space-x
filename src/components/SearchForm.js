import React, { useState } from 'react';
import SearchList from './SearchList';

const SearchForm = ({ detail }) => {
  const [searchField, setSearchField] = useState('');
  const [searchShow, setSearchShow] = useState(false);

  const filteredLaunches = detail.filter((launch) => {
    return launch.mission_name.includes(searchField.toLowerCase());
  });
  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === '') {
      setSearchShow(false);
      console.log(e.target.value);
    } else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return <SearchList filteredLaunches={filteredLaunches} />;
    }
  }
  return (
    <section className='section search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>Search Your Favorite Launches</label>
          <input type='search' name='' id='name' onChange={handleChange} />
        </div>
      </form>
      {searchList()}
    </section>
  );
};

export default SearchForm;
