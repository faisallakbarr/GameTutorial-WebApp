import React from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';

const ForumItem = ({id, text, createdAt, likes, user, authUser, like}) => {
    const navigate = useNavigate();
    const isTalkLiked = likes.includes(authUser);

    const onLikeClick = (event) => {
        event.stopPropagation();
        like(id);
    }

    const onForumClick = () => {
        navigate(`/forum/${id}`);
    }

    const onForumPress = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            navigate(`/forum/${id}`);
        }
    }

  return (
    <div className='text-white'>
      <h1>a</h1>
    </div> 
  )
}

export default ForumItem
