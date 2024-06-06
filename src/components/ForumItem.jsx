import React from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';

const ForumItem = ({id, text, createdAt, likes = [], user = {}, authUser, like}) => {
    const navigate = useNavigate();
    console.log("ForumItem props: ", { id, text, like });
    const isTalkLiked = likes.includes(authUser);

    const onLikeClick = (event) => {
        event.stopPropagation();
        like(id);
    };

    const onForumClick = () => {
        navigate(`/forum/${id}`);
    };

    const onForumPress = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            navigate(`/forum/${id}`);
        }
    };

    return (
      <div className='text-white'>
      <div role="button" tabIndex={0} className="talk-item" onClick={onForumClick} onKeyDown={onForumPress}>
      <div className="talk-item__user-photo">
        <img src={user.photo} alt={user.name} />
      </div>
      <div className="talk-item__detail">
        <header>
          <div className="talk-item__user-info">
            <p className="talk-item__user-name">{user.name}</p>
            <p className="talk-item__user-id">
              @
              {user.id}
            </p>
          </div>
          <p className="talk-item__created-at">{postedAt(createdAt)}</p>
        </header>
        <article>
          <p className="talk-item__text">{text}</p>
        </article>
        {
          like && (
            <div className="talk-item__likes">
              <p>
                <button type="button" aria-label="like" onClick={onLikeClick}>
                  { isTalkLiked ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
                </button>
                {' '}
                {likes.length}
              </p>
            </div>
          )
        }
      </div>
    </div>
      </div>
    );
};

export default ForumItem;
