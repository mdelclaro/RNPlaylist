import { SELECT_TRACK } from './types'; 

export const selectTrack = id => (
  {  
    type: SELECT_TRACK,
    payload: id
  }
);
