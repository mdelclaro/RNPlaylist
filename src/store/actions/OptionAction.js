import { OPTION_CHANGED } from './types';

export const optionChanged = option => {
  return {
    type: OPTION_CHANGED,
    payload: option
  };
};