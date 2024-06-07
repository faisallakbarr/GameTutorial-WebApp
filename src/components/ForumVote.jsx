import React from 'react'
import {
    FaThumbsUp,
    FaRegThumbsUp,
    FaThumbsDown,
    FaRegThumbsDown,
  } from 'react-icons/fa';

const ForumVote = ({
    id,
    authUser,
    upVote,
    downVote,
    neutralizeVote,
    upVotesBy,
    downVotesBy,
}) => {
    const isUpvoted = upVotesBy.includes(authUser);
    const isDownVoted = downVotesBy.includes(authUser);
  
    function onDownVoteClick() {
      downVote(id);
    }
  
    function onUpVoteClick() {
      upVote(id);
    }
  
    function onNeutralizeVoteClick() {
      neutralizeVote(id);
    }
  return (
    <div className="flex items-center gap-5">
    <div className="flex items-center gap-2">
      {isUpvoted ? (
        <button
          onClick={onNeutralizeVoteClick}
          aria-label="Neutralize Vote"
          type="button"
        >
          <FaThumbsUp />
        </button>
      ) : (
        <button
          onClick={onUpVoteClick}
          aria-label="Up Vote"
          type="button"
        >
          <FaRegThumbsUp />
        </button>
      )}
      <p>{upVotesBy.length}</p>
    </div>
    <div className="flex items-center gap-2">
      {isDownVoted ? (
        <button
          onClick={onNeutralizeVoteClick}
          aria-label="Neutralize Vote"
          type="button"
        >
          <FaThumbsDown />
        </button>
      ) : (
        <button
          onClick={onDownVoteClick}
          aria-label="Down Vote"
          type="button"
        >
          <FaRegThumbsDown />
        </button>
      )}
      <p>{downVotesBy.length}</p>
    </div>
  </div>
);
}

export default ForumVote
