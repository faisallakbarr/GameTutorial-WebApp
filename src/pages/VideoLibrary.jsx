import React, { useState, useEffect } from 'react'
import { getVideoData } from '../utils/video-data'
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar'
import VideoList from '../components/VideoList'

const VideoLibrary = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  useEffect(() => {
    const fetchGameData = async () => {
      const data = getVideoData();
      setVideos(data);
    };

    fetchGameData();
  }, []);

  const filteredVideos = videos.filter((video) => {
    return video.title.toLowerCase().includes(keyword.toLowerCase());
  });
        
return (
    <div className='text-white m-8 '>
      <h1 className='text-5xl font-bold'>Video Tutorials</h1>
      <SearchBar />
      <VideoList videos={filteredVideos} />
    </div>
  )
}

export default VideoLibrary
