import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const VideoItemImage = ({id, title, img, difficult, locked }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();
  console.log('Difficult:', difficult); // Add this line to verify

  const handleClick = () => {
    if (locked && !isSubscribed) {
      alert('This content is locked. Please subscribe to unlock.');
      navigate(`/videos/${title}`)
    } else {
      navigate(`/videos/${title}/${id}`)
    }
  };

  return (
    <div className='relative mt-3' onClick={handleClick}>
      <p className={`absolute bg-${difficult} font-bold px-4 py-2 pt-1`}>
        {difficult}
      </p>
      <img 
        src={img} 
        alt='thumbnail' 
        className={`w-full h-40 object-cover ${locked && !isSubscribed ? 'opacity-50' : ''}`}
      />
      {locked && !isSubscribed && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold">Locked</span>
        </div>
      )}
    </div>
  );
}

export default VideoItemImage;
