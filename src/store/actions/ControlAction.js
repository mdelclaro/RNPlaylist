import { OPTION_CHANGED, TRACK_POSITION_CHANGED } from './types';

export const optionChanged = option => {
  return {
    type: OPTION_CHANGED,
    payload: option
  };
};

export const trackPositionChanged = position => {
    return {
      type: TRACK_POSITION_CHANGED,
      payload: position
    };
};
