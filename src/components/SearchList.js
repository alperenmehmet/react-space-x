import React from 'react';
import LaunchesCard from './LaunchesCard';

const SearchList = ({ filteredLaunches }) => {
  return (
    <div>
      {filteredLaunches.map((launch) => (
        <LaunchesCard
          key={launch.id}
          img={launch.links.flickr_images[0]}
          missionName={launch.mission_name}
          details={launch.details}
          date={launch.launch_date_local}
        />
      ))}
    </div>
  );
};

export default SearchList;
