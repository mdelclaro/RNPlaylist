import { OPTION_CHANGED } from '../actions/types';

const INITIAL_STATE = {
  option: 'add'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPTION_CHANGED:
      return {
        ...state,
        option: action.payload
      };
    default:
      return state;
  }
};
