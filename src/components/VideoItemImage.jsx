import React from 'react'

const VideoItemImage = () => {
  return (
    <div className='relative mt-3'>
    <p className='absolute bg-beginner font-bold px-4 py-2 pt-1'>Beginner</p>
    <img 
    src='https://via.placeholder.com/150' 
    alt='thumbnail' 
    className='w-full h-40 object-cover'
    />
    </div>
  )
}

export default VideoItemImage
