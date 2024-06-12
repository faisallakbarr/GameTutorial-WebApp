import React, { useState, useEffect } from 'react'
import { getVideoData } from '../utils/mlbb-video-data'
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar'
import VideoSpecificList from '../components/VideoSpecificList'

const VideoPage = () => {
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

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
}

  const filteredVideos = videos.filter((video) => {
    return video.title.toLowerCase().includes(keyword.toLowerCase());
  });
        
return (
    <div className='text-white m-8 '>
      <h1 className='text-4xl font-bold'>Video Tutorials</h1>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <VideoSpecificList videos={filteredVideos} />
    </div>
  )
}

export default VideoPage
