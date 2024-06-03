import React, { useState } from 'react';
import ForumItem from './ForumItem';

const ForumList = ({ talks, like }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - itemsPerPage : 0
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage < talks.length ? prevIndex + itemsPerPage : prevIndex
    );
  };

  const displayedForum = talks.slice(currentIndex, currentIndex + itemsPerPage);
  console.log("Displayed Forum: ", displayedForum); 

  return (
    <div>
      <button
        onClick={handlePrev}
        className='text-3xl border-2 mt-2 px-2 rounded-full'
      >a</button>
      <button
        onClick={handleNext}
        className='text-3xl border-2 mt-2 ml-2 px-2 rounded-full'
      >d</button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-1">
        {displayedForum.length > 0 ? (
          displayedForum.map((talk) => (
            <ForumItem 
              key={talk.id}
              {...talk}
              like={like}
            />
          ))
        ) : (
          <div>No Data</div>
        )}
      </div>
    </div>
  );
}

export default ForumList;