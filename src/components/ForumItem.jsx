import React from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';
import ForumVote from './ForumVote';

const ForumItem = ({
  id, 
  title, 
  body, 
  category, 
  createdAt, 
  upVotesBy,
   downVotesBy, 
   totalComments, 
   upVote, 
   downVote, 
   neutralizeVote, 
   user, 
   authUser}) => {
    const navigate = useNavigate();

    const onForumClick = () => {
        navigate(`/forum/${id}`);
    };

    const onForumPress = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            navigate(`/forum/${id}`);
        }
    };

    return (
      <div className="text-white mt-3 border-2 w-full ">
      <header>
        <span className="rounded-lg px-4 py-1 bg-blue-300 text-lg">
          #{category}
        </span>
        <h1 className="mt-5">
          <div
            tabIndex={0}
            role="button"
            className="cursor-pointer font-bold text-2xl hover:text-blue-400"
            onClick={onForumClick}
            onKeyDown={onForumPress}
          >
            {title}
          </div>
        </h1>
      </header>
      <div className='overflow-hidden truncate mt-3'>
        {body}
      </div>
      <footer className="flex flex-row mb-2 gap-5 items-center p-1">
        <ForumVote 
        id={id}
        authUser={authUser}
        upVote={upVote}
        downVote={downVote}
        neutralizeVote={neutralizeVote}
        upVotesBy={upVotesBy}
        downVotesBy={downVotesBy}
        />
        <span className="flex items-center gap-2">
        
        </span>
        <span>
          {postedAt(createdAt)}
        </span>
        <span>
          Dibuat oleh <strong>{user.name}</strong>
        </span>
      </footer>
    </div>
    );
};

export default ForumItem;
