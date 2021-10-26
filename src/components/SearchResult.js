import React from 'react';
import LaunchesCard from './LaunchesCard';

const SearchResult = ({ search }) => {
  const filteredShips = ships.filter((s) => {
    return s.mission_name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      {filteredShips.map((launch) => {
        return (
          <LaunchesCard
            key={launch.id}
            search={launch}
            launch={launch}
            {...launch}
          />
        );
      })}
    </div>
  );
};

export default SearchResult;
