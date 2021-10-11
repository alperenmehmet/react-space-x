import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';

const getLocalStorage = () => {
  const favoriteLaunchesFromLocalStorage =
    localStorage.getItem('favoriteLaunches');
  return favoriteLaunchesFromLocalStorage
    ? JSON.parse(favoriteLaunchesFromLocalStorage)
    : [];
};

const LaunchesCard = ({ missionName, details, date, img, isFavorite }) => {
  const [readMore, setReadMore] = useState(false);
  const [favoriteLaunches, setFavoriteLaunches] = useState(getLocalStorage());

  const addToFavorites = () => {
    localStorage.setItem('favoriteLaunches', JSON.stringify(missionName));
    setFavoriteLaunches(favoriteLaunches);
  };

  return (
    <div className='launches'>
      <img src={img} className='img-container' />
      <div className='launch-footer'>
        <button className='like-icon' onClick={addToFavorites}>
          <FaRegHeart style={{ fill: isFavorite ? 'red' : '' }} />
        </button>
        <p>{date}</p>
        <h3>{missionName}</h3>
        <h5>{readMore ? details : `${details.substring(0, 10)}...`}</h5>
        <button
          className='btn btn-primary btn-details'
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default LaunchesCard;
