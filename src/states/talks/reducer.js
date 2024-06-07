import { ActionType } from './action';

export default function talksReducer(talks = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_TALKS:
      return action.payload.talks;
    case ActionType.CREATE_TALK:
      return [action.payload.talk, ...talks];
    case ActionType.UP_VOTE_TALK:
      return talks.map((talk) => {
        if (talk.id === action.payload.talkId) {
          return {
            ...talk,
            upVotesBy: talk.upVotesBy.includes(action.payload.userId)
              ? talk.upVotesBy.filter((id) => id !== action.payload.userId)
              : talk.upVotesBy.concat([action.payload.userId]),
            downVotesBy: talk.downVotesBy.includes(action.payload.userId)
              ? talk.downVotesBy.filter((id) => id !== action.payload.userId)
              : talk.downVotesBy,
          };
        }
        return talk;
      });
    case ActionType.DOWN_VOTE_TALK:
      return talks.map((talk) => {
        if (talk.id === action.payload.talkId) {
          return {
            ...talk,
            upVotesBy: talk.upVotesBy.includes(action.payload.userId)
              ? talk.upVotesBy.filter((id) => id !== action.payload.userId)
              : talk.upVotesBy,
            downVotesBy: talk.downVotesBy.includes(action.payload.userId)
              ? talk.downVotesBy.filter((id) => id !== action.payload.userId)
              : talk.downVotesBy.concat([action.payload.userId]),
          };
        }
        return talk;
      });
    case ActionType.NEUTRALIZE_VOTE_TALK:
      return talks.map((talk) => {
        if (talk.id === action.payload.talkId) {
          return {
            ...talk,
            upVotesBy: talk.upVotesBy.includes(action.payload.userId)
              ? talk.upVotesBy.filter((id) => id !== action.payload.userId)
              : talk.upVotesBy,
            downVotesBy: talk.downVotesBy.includes(action.payload.userId)
              ? talk.downVotesBy.filter((id) => id !== action.payload.userId)
              : talk.downVotesBy,
          };
        }
        return talk;
      });
    default:
      return talks;
  }
}