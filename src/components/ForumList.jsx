import React, { useState } from 'react';
import ForumItem from './ForumItem';
import { Link } from 'react-router-dom';
import { FaRegPlusSquare } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const ForumList = ({ talks, upVote, downVote, neutralizeVote }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 9;

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
    <div className='flex'>
    <button
      onClick={handlePrev}
      className='text-3xl border-2 px-1 mt-2 rounded-full'
      ><MdOutlineKeyboardArrowLeft /></button>
      <button
      onClick={handleNext}
      className='text-3xl border-2 px-1 mt-2 ml-2 rounded-full'
      ><MdOutlineKeyboardArrowRight /></button>
      <Link to='/forumAdd' className='text-white text-5xl pl-4'><FaRegPlusSquare className='pt-2' /></Link>
</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-1">
        {displayedForum.length > 0 ? (
          displayedForum.map((talk) => (
            <ForumItem 
              key={talk.id}
              {...talk}
              upVote={upVote}
              downVote={downVote}
              neutralizeVote={neutralizeVote}
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