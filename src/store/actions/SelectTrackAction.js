import { SELECT_TRACK } from './types'; 

export const selectTrack = trackTitle => (
  {  
    type: SELECT_TRACK,
    payload: trackTitle
  }
);
