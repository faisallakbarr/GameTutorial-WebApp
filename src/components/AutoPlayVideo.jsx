import React from 'react'

const AutoPlayVideo = ({trailer}) => {
  return (
    <div className='h-screen absolute'>
      <video 
      src={trailer}
      autoPlay
      loop
      className='w-screen h-4/6 object-cover'
      />
    </div>
  )
}

export default AutoPlayVideo
