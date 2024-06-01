import React, { useState } from 'react';
import GameItem from './GameItem';

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
    className="absolute bottom-0 right-0 text-white mt-4 border-2 px-4 py-2 rounded-full"
    style={{bottom: '395px', right: '345px' }}
    >a</button>
    <button
    onClick={handleNext}
    className="absolute bottom-0 right-0 text-white mt-4 border-2 px-4 py-2 rounded-full"
    style={{bottom: '395px', right: '280px' }}
    >d</button>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
    {displayedGames.map((game) => (
      <GameItem 
        key={game.id}
        id={game.id}
        image={game.url}
        title={game.title}
      />
    ))}
    </div>
    </>
  );
};

export default GameList;
