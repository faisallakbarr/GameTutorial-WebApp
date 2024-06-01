import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GameItem = ({ id, image }) => {
  return (
    <div 
    className="relative bottom-0 text-center text-white mt-4" 
    style={{ top: '460px' }}>
      <Link to={`/games/${id}`}>
        <img
          src={image}
          alt=""
          className="object-cover w-52 h-full md:h-72 lg:h-full rounded-lg"
          style={{ maxHeight: '21rem' }} 
        />
      </Link>
    </div>
  );
};

GameItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default GameItem;
