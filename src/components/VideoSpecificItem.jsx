import React from 'react'
import VideoItemImage from './VideoItemImage'
import VideoItemBody from './VideoItemBody'
import { Link } from 'react-router-dom'

const VideoSpecificItem = ({id, url, title, desc, duration, videos, img, difficult, locked}) => {
  return (
    <div className='min-w-72 max-w-72'>
      <VideoItemImage img={img} difficult={difficult} locked={locked} id={id} title={title} />
      <VideoItemBody id={id} title={title} desc={desc} duration={duration} videos={videos} locked={locked} />
    </div>
    
  )
}

export default VideoSpecificItem
