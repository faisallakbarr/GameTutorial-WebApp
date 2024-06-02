import React, {useState} from 'react'
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 6;
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex > 0 ? prevIndex - itemsPerPage : 0
      );
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsPerPage < videos.length ? prevIndex + itemsPerPage : prevIndex
      );
    };
  
    const displayedVideos = videos.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div>
      <button
      onClick={handlePrev}
      className='text-3xl border-2 mt-2 px-2 rounded-full'
      >a</button>
      <button
      onClick={handleNext}
      className='text-3xl border-2 mt-2 ml-2 px-2 rounded-full'
      >d</button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-1">
      {displayedVideos.map((video) => (
      <VideoItem
      key={video.id}
      id={video.id}
      url={video.url}
      title={video.title}
      desc={video.desc}
      duration={video.duration}
      videos={video.videos}
      />
    ))}
    </div>
    </div>
  )
}

export default VideoList
