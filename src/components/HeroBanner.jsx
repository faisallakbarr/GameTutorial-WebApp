// HeroBanner component
import React from 'react';

const HeroBanner = () => {
  return (
    <div 
    className="absolute flex w-screen h-3/6 justify-start items-start"
    style={{top: '85px' }}
    >
      <img 
        src="/tournament-banner.jpg" 
        alt="tournament-banner" 
        className='absolute w-8/12 h-5/6 object-cover rounded-lg shadow-xl'
      />
      <div className='flex w-screen h-screen p-5'>
      <h3 className='relative text-white text-4xl font-bold w-1/2'><br /><br /><br />Season 1<br /> Valorant Tournament</h3>
      <h3 className='relative text-white text-4xl font-bold items-end w-1/2'><br /><br /><br />Game<br />Master</h3>
      <button
        className="absolute text-white px-5 py-1 rounded-md bg-gradient-to-r from-button1 to-button2 transform -translate-x-1/2 bottom-0"
        style={{ left: '33%', bottom: '60px' }}
      >
        Join Now
      </button>
      </div>
      
    </div>
  );
};

export default HeroBanner;
