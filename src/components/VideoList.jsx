import React, {useState} from 'react'

const VideoList = ({ videos }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;
  
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
      
    </div>
  )
}

export default VideoList
