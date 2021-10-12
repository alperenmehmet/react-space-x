import React from 'react';

const LaunchDate = (props) => {
  const newDate = new Date(props.date);
  const month = newDate.toLocaleString('en-US', { month: '2-digit' });
  const day = newDate.toLocaleString('en-US', { day: '2-digit' });
  const year = newDate.getFullYear();

  return (
    <div className='launch-date'>
      <div>{`${month}/${day}/${year}`}</div>
    </div>
  );
};

export default LaunchDate;
