import {
  TRACK_ADDED,
  TRACK_CHANGED,
  TRACK_DELETED
} from '../actions/types';

const INITIAL_STATE = {
  tracks: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRACK_ADDED:
      return {
        ...state,
        tracks: [...state.tracks, action.payload]
      };
    case TRACK_CHANGED: {
      const { artist, album, genre } = action.payload;
      
      return {
        ...state,
        tracks: state.tracks.map(track => {
          if (track.title === action.payload.title) {
            return {
              ...track,
              artist,
              album,
              genre
            };
          }
          return track;
        })
      };
    }
    case TRACK_DELETED:
      return {
        ...state,
        tracks: state.tracks.filter(track => {
          return track.title !== action.payload.title;
        })
      };
    default:
      return state;
  }
};
