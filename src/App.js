import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import LaunchesCard from './components/LaunchesCard';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    fetch('https://api.spacex.land/rest/launches/')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  const onSearchChangeHandler = (searchInputValue) => {
    setSearch(searchInputValue);
    console.log(searchInputValue);
  };

  return (
    <div className='section'>
      <Navbar />
      <Header />
      <SearchForm onSearchChangeHandler={onSearchChangeHandler} />
      <div className='launches-center'>
        {data.map((launch) =>
          launch.details != null && launch.links.flickr_images[0] != null ? (
            <LaunchesCard
              key={launch.id}
              img={launch.links.flickr_images[0]}
              missionName={launch.mission_name}
              details={launch.details}
              date={launch.launch_date_local}
            />
          ) : (
            ''
          )
        )}
      </div>
    </div>
  );
};

export default App;
