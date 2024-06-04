import React from 'react'
import mlbb from '../assets/trailer-videos/mlbb-trailer.mp4'

const AutoPlayVideo = () => {
  return (
    <div className='h-screen absolute'>
      <video 
      src={mlbb}
      autoPlay
      loop
      className='w-screen h-4/6 object-cover'
      />
    </div>
  )
}

export default AutoPlayVideo
