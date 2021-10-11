import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import LaunchesCard from './components/LaunchesCard';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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

  return (
    <div className='section'>
      <Header />
      <SearchForm detail={data} />
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
