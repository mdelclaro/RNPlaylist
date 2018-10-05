import { 
  TRACK_ADDED,
  TRACK_CHANGED,
  TRACK_DELETED
} from './types';

export const trackAdded = (id, title, artist, album, genre) => {
  return {
    type: TRACK_ADDED,
    payload: {
        id, title, artist, album, genre
    }
  };
};

export const trackChanged = (id, title, artist, album, genre) => {
  return {
    type: TRACK_CHANGED,
    payload: {
        id, title, artist, album, genre
    }
  };
};

export const trackDeleted = id => {
  return {
    type: TRACK_DELETED,
    payload: id
  };
};
