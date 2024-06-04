import React, { useState } from 'react';
import GameItem from './GameItem';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from 'framer-motion';


const GameList = ({ games }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - itemsPerPage : 0
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage < games.length ? prevIndex + itemsPerPage : prevIndex
    );
  };

  const displayedGames = games.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <>
    <button
    onClick={handlePrev}
    className="absolute bottom-0 right-0 text-white mt-4 border-2 px-2 py-2 rounded-full"
    style={{bottom: '395px', right: '335px' }}
    ><MdOutlineKeyboardArrowLeft /></button>
    <button
    onClick={handleNext}
    className="absolute bottom-0 right-0 text-white mt-4 border-2 px-2 py-2 rounded-full"
    style={{bottom: '395px', right: '280px' }}
    ><MdOutlineKeyboardArrowRight /></button>
    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
    {displayedGames.map((game) => (
      <GameItem 
        key={game.id}
        id={game.id}
        image={game.url}
        title={game.title}
      />
    ))}
    </motion.div>
    </>
  );
};

export default GameList;
