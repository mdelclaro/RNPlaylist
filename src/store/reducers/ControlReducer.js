import { OPTION_CHANGED, TRACK_POSITION_CHANGED } from '../actions/types';

const INITIAL_STATE = {
  option: 'add',
  position: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPTION_CHANGED:
      return {
        ...state,
        option: action.payload
      };
    case TRACK_POSITION_CHANGED:
        return {
          ...state,
          position: action.payload
        };
    default:
      return state;
  }
};
