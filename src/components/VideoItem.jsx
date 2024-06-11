import React from 'react'
import VideoItemImage from './VideoItemImage'
import VideoItemBody from './VideoItemBody'
import { Link } from 'react-router-dom'

const VideoItem = ({id, url, title, desc, duration, videos, img}) => {
  return (
    <div className='min-w-72 max-w-72'>
    <Link to={`/videos/${title}`}>
      <VideoItemImage img={img} />
      <VideoItemBody title={title} desc={desc} duration={duration} videos={videos} />
      </Link>
    </div>
    
  )
}

export default VideoItem
