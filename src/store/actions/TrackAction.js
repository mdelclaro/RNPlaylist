import { 
  TRACK_ADDED,
  TRACK_UPDATED,
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

export const trackUpdated = (id, title, artist, album, genre) => {
  return {
    type: TRACK_UPDATED,
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
