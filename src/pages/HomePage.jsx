import React, { useState, useEffect } from 'react';
import HeroBanner from '../components/HeroBanner';
import GameList from '../components/GameList';
import { useSearchParams } from 'react-router-dom';
import { getGameData } from '../utils/game-data';

const HomePage = ({ authUser }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [games, setGames] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  useEffect(() => {
    const fetchGameData = async () => {
      const data = getGameData();
      setGames(data);
    };

    fetchGameData();
  }, []);

  const filteredGames = games.filter((game) => {
    return game.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <div className="text-2xl font-semibold">
      <h1 className="m-4 text-center text-white">Welcome, {authUser.name}</h1>
      <HeroBanner />
      <h1 
      className="absolute bottom-0 text-center text-white mt-4"
      style={{bottom: '415px' }}
      >Game For You To Choose</h1>
      <GameList games={filteredGames} />
    </div>
  );
};

export default HomePage;
