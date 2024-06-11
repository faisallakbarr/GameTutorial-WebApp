import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
 
const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
  NEUTRALIZE_VOTE_THREAD_DETAIL: 'NEUTRALIZE_VOTE_THREAD_DETAIL',
  CREATE_COMMENT: 'CREATE_COMMENT',
  UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
  NEUTRALIZE_VOTE_COMMENT: 'NEUTRALIZE_VOTE_COMMENT',
};
 
function receiveThreadDetailActionCreator(detailThread) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      detailThread,
    },
  };
}
 
function upVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}
 
function downVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}
 
function neutralizeVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}
 
function createCommentActionCreator(comment) {
  return {
    type: ActionType.CREATE_COMMENT,
    payload: {
      comment,
    },
  };
}
 
function upVoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}
 
function downVoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}
 
function neutralizeVoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}
 
// thunk
function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
 
    try {
      const threadDetail = await api.getThreadById(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
 
 
function asyncUpVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { detailThread, authUser } = getState();
    console.log('asyncUpVoteThreadDetail called with threadDetail:', detailThread, 'and authUser:', authUser);
 
    if (!detailThread || !detailThread.id) {
      console.error('Thread detail is not available or does not have an ID');
      return;
    }
 
    dispatch(upVoteThreadDetailActionCreator(authUser.id));
 
    try {
      await api.upVoteTalk(detailThread.id);
    } catch (error) {
      alert(error.message);
    }
  };
}
 
function asyncDownVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { detailThread, authUser } = getState();
    dispatch(downVoteThreadDetailActionCreator(authUser.id));
 
    try {
      await api.downVoteTalk(detailThread.id);
    } catch (error) {
      alert(error.message);
    }
  };
}
 
function asyncNeutralizeVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { detailThread, authUser } = getState();
    dispatch(neutralizeVoteThreadDetailActionCreator(authUser.id));
 
    try {
      await api.neutralizeTalkVote(detailThread.id);
    } catch (error) {
      alert(error.message);
    }
  };
}
 
function asyncCreateComment({ content }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { detailThread } = getState();
 
    try {
      const comment = await api.createComment({
        content,
        threadId: detailThread.id,
      });
      dispatch(createCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
 
function asyncUpVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(upVoteCommentActionCreator(commentId, authUser.id));
 
    try {
      await api.upVoteComment(detailThread.id, commentId);
    } catch (error) {
      alert(error.message);
    }
  };
}
 
function asyncDownVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(downVoteCommentActionCreator(commentId, authUser.id));
 
    try {
      await api.downVoteComment(detailThread.id, commentId);
    } catch (error) {
      alert(error.message);
    }
  };
}
 
function asyncNeutralizeVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(neutralizeVoteCommentActionCreator(commentId, authUser.id));
 
    try {
      await api.neutralizeCommentVote(detailThread.id, commentId);
    } catch (error) {
      alert(error.message);
    }
  };
}
 
export {
  ActionType,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncCreateComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
};