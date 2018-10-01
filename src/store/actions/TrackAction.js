import { 
  TRACK_ADDED,
  TRACK_CHANGED,
  TRACK_DELETED
} from './types';

export const trackAdded = (title, artist, album, genre) => {
  return {
    type: TRACK_ADDED,
    payload: {
      track: {
        title, artist, album, genre
      }
    }
  };
};

export const trackChanged = (title, artist, album, genre) => {
  return {
    type: TRACK_CHANGED,
    payload: {
      track: {
        title, artist, album, genre
      }
    }
  };
};

export const trackDeleted = title => {
  return {
    type: TRACK_DELETED,
    payload: title
  };
};
