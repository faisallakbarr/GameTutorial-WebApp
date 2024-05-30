import React from 'react';
import GameItem from './GameItem';

const GameList = ({ games }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {games.slice(0, 5).map((game) => (
        <GameItem 
          key={game.id}
          id={game.id}
          image={game.url}
          title={game.title}
        />
      ))}
    </div>
  );
};

export default GameList;
