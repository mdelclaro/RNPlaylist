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
        tracks: [...state.tracks, action.payload.track]
      };
    case TRACK_CHANGED:
      return {
        ...state,
        tracks: action.payload.track
      };
    case TRACK_DELETED:
      return {
        ...state,
        tracks: state.tracks.filter(track => {
          return track.title !== action.payload;
        })
      };
    default:
      return state;
  }
};
