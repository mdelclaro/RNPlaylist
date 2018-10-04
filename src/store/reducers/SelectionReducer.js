import { SELECT_TRACK } from '../actions/types';

const INITIAL_STATE = {
  selectedTrack: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_TRACK:
      return {
        ...state,
        selectedTrack: action.payload
      };
    default:
      return state;
  }
};
