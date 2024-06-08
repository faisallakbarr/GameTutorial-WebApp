import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_TALKS: 'RECEIVE_TALKS',
  CREATE_TALK: 'CREATE_TALK',
  UP_VOTE_TALK: 'UP_VOTE_TALK',
  DOWN_VOTE_TALK: 'DOWN_VOTE_TALK',
  NEUTRALIZE_VOTE_TALK: 'NEUTRALIZE_VOTE_TALK',
};

function receiveTalksActionCreator(talks) {
  return {
    type: ActionType.RECEIVE_TALKS,
    payload: {
      talks,
    },
  };
}

function createTalkActionCreator(talk) {
  return {
    type: ActionType.CREATE_TALK,
    payload: {
      talk,
    },
  };
}

function upVoteTalkActionCreator({ talkId, userId }) {
  return {
    type: ActionType.UP_VOTE_TALK,
    payload: {
      talkId,
      userId,
    },
  };
}

function downVoteTalkActionCreator({ talkId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_TALK,
    payload: {
      talkId,
      userId,
    },
  };
}

function neutralizeVoteTalkActionCreator({ talkId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_TALK,
    payload: {
      talkId,
      userId,
    },
  };
}

// thunk
function asyncCreateTalk({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const talk = await api.createTalk({ title, body, category });
      dispatch(createTalkActionCreator(talk));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteTalk(talkId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(upVoteTalkActionCreator({ talkId, userId: authUser.id }));

    try {
      await api.upVoteTalk(talkId);
    } catch (error) {
      alert(error.message);
      dispatch(downVoteTalkActionCreator({ talkId, userId: authUser.id }));
    }
  };
}

function asyncDownVoteTalk(talkId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(downVoteTalkActionCreator({ talkId, userId: authUser.id }));

    try {
      await api.downVoteTalk(talkId);
    } catch (error) {
      alert(error.message);
      dispatch(downVoteTalkActionCreator({ talkId, userId: authUser.id }));
    }
  };
}

function asyncNeutralizeVoteTalk(talkId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      neutralizeVoteTalkActionCreator({ talkId, userId: authUser.id }),
    );

    try {
      await api.neutralizeTalkVote(talkId);
    } catch (error) {
      alert(error.message);
      dispatch(
        neutralizeVoteTalkActionCreator({ talkId, userId: authUser.id }),
      );
    }
  };
}

export {
  ActionType,
  receiveTalksActionCreator,
  asyncCreateTalk,
  asyncUpVoteTalk,
  asyncDownVoteTalk,
  asyncNeutralizeVoteTalk,
};