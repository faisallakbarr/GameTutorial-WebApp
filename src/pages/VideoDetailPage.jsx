import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoById } from '../utils/video-data';

const VideoDetailPage = () => {
    const { id } = useParams();
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const videoData = getVideoById(id);
        setVideo(videoData);
    }, [id]);

    if (!video) {
        return <div>Loading...</div>;
    }

    return (
        <div className='text-white m-8'>
            <h1 className='text-4xl mb-5 font-bold'>{video.title}</h1>
            <iframe 
            src={video.url} 
            title={video.title} 
            width="1000" 
            height="615"
            className='border-2 border-sky-400'
            ></iframe>
            <p className='my-5 text-2xl'>{video.desc}</p>
        </div>
    );
}

export default VideoDetailPage;
