import React from 'react';
import { AiOutlineComment } from 'react-icons/ai';
import PropTypes from 'prop-types';
import CommentItem from '../components/CommentItem';
import { commentShape } from '../components/constant'

export default function CommentList({
  comments,
  authUser,
  upVoteComment,
  downVoteComment,
  neutralizeVoteComment,
}) {
  if (comments.length === 0) {
    return (
      <div className="mt-5 flex flex-col items-center">
        <AiOutlineComment className=" text-blue-600 text-9xl" />
        <p className="text-blue-600 text-lg">Belum ada komentar</p>
        <p className="text-blue-600 text-sm">
          Jadilah pertama yang berkomentar
        </p>
      </div>
    );
  }
  return (
    <section className="w-full mx-auto flex flex-col gap-3 text-white">
      <p className="mt-4">
        Komentar
        (
        {comments.length}
        )
      </p>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          {...comment}
          authUser={authUser}
          upVote={upVoteComment}
          downVote={downVoteComment}
          neutralizeVote={neutralizeVoteComment}
        />
      ))}
    </section>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  authUser: PropTypes.string.isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
  neutralizeVoteComment: PropTypes.func.isRequired,
};