import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '/src/utils/index.js';
import ForumVote from '../components/ForumVote';

export default function ForumDetail({
  id,
  title,
  body,
  owner,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  upVoteThreadDetail,
  downVoteThreadDetail,
  neutralizeVoteThreadDetail,
  authUser,
}) {
  
  return (
    <section>
      <div className="flex flex-col gap-2 justify-center text-white mt-32">
        <header>
          <span className="rounded-lg py-1 bg-blue-300 px-4 text-2xl">
            # {category}
          </span>
          <h1 className="mt-5 font-bold text-3xl">
            {title}
          </h1>
        </header>
        <div className='text-xl max-w-1/2'>
          {body}
        </div>
        <div className="flex items-center gap-3 mt-3 text-xl">
          <ForumVote
            id={id}
            authUser={authUser}
            upVote={upVoteThreadDetail}
            downVote={downVoteThreadDetail}
            neutralizeVote={neutralizeVoteThreadDetail}
            upVotesBy={upVotesBy}
            downVotesBy={downVotesBy}
          />
          <div className="flex flex-row items-center gap-3">
            <p>Creator:</p>
            <img
              className="w-6 h-6 rounded-full"
              src={owner.avatar}
              alt={owner.name}
            />
            <p>{owner.name}</p>
            <p>{postedAt(createdAt)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}