import React, { useState, useEffect } from 'react'
import { getModuleVideoData } from '../utils/video-data'
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar'
import VideoList from '../components/VideoList'

const VideoModulePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  useEffect(() => {
    const fetchGameData = async () => {
      const data = getModuleVideoData();
      setVideos(data);
    };

    fetchGameData();
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
}

  const filteredVideos = videos.filter((video) => {
    return video.title.toLowerCase().includes(keyword.toLowerCase());
  });
        
return (
    <div className='text-white m-8 '>
      <h1 className='text-4xl font-bold'>Video Module</h1>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <VideoList videos={filteredVideos} />
    </div>
  )
}

export default VideoModulePage
