import {
  TRACK_ADDED,
  TRACK_UPDATED,
  TRACK_DELETED,
  TRACK_SEARCHED
} from '../actions/types';

const INITIAL_STATE = {
  tracks: [],
  filteredTracks: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRACK_ADDED:
      return {
        ...state,
        tracks: [...state.tracks, action.payload]
      };
    case TRACK_UPDATED: {
      const { id, title, artist, album, genre } = action.payload;

      return {
        ...state,
        tracks: state.tracks.map(track => {
          if (track.id === id) {
            return {
              ...track,
              title,
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
          return track.id !== action.payload;
        })
      };
    case TRACK_SEARCHED:
      if (action.payload === '') {
        return { state };
      }
      return {
        ...state,
        filteredTracks: state.tracks.filter(item => {
          const itemData = `${item.title.toUpperCase()}`;
          const textData = action.payload.toUpperCase();

          return itemData.indexOf(textData) > -1;
        })
      };
    default:
      return state;
  }
};
