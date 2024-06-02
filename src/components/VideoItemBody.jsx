import React from 'react'
import { GiSandsOfTime } from "react-icons/gi";
import { MdOutlineOndemandVideo } from "react-icons/md";

const VideoItemBody = ({title, desc, duration, videos}) => {
  return (
    <div className='bg-gray-200 min-h-28'>
      <div className='p-7'>
        <h3 
        className='text-black font-semibold text-xl pb-4'
        style={{marginTop: '-10px'}}
        >{title}</h3>
        <p className='text-gray-400 text-lg font-semibold mb-2'>{desc}</p>
        <div className='grid grid-cols-2 pt-3 text-gray-600 text-lg'>
          <div className='flex items-center'>
            <GiSandsOfTime className='text-gray-600 text-xl' />
            <span className='ml-2'>{duration} hr</span>
          </div>
          <div className='flex items-center'>
            <MdOutlineOndemandVideo className='text-gray-600 text-xl' />
            <span className='ml-2'>{videos}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoItemBody
