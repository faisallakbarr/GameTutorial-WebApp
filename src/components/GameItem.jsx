import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GameItem = ({ id, image }) => {
  return (
    <div 
    className="relative bottom-0 text-center text-white mt-4"
    style={{top: '450px' }}
    >
      <Link to={`/games/${id}`}>
        <img
          src={image}
          alt=""
          className="object-cover w-full h-60 md:h-72 lg:h-80 rounded-lg"
          style={{ maxHeight: '20rem' }} 
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
