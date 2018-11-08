import { AsyncStorage } from 'react-native';
import {
  TRACK_SEARCHED,
  SET_TRACKS
} from './types';

export const trackAdded = (id, title, artist, album, genre) => {
  return dispatch => {
    const track = {
      id, title, artist, album, genre
    };
    AsyncStorage.setItem(JSON.stringify(id), JSON.stringify(track));
  };
};

export const getTracks = () => {
  return dispatch => {
    const tracks = [];
    const promise = new Promise((resolve, reject) => {
      AsyncStorage.getAllKeys()
        .then((keys) => {
          keys.map(async key => {
            return await AsyncStorage.getItem(key)
              .then(item => {
                const track = JSON.parse(item);
                console.log(track);
                console.log(track.id);
                const { id, title, artist, album, genre } = track;
                tracks.push({
                  id,
                  title,
                  artist,
                  album,
                  genre
                });
              });
          });
          resolve(tracks);
        })
        .catch(() => reject());
    });
    return promise
      .then(_tracks => {
        console.log(_tracks);
        setTimeout(() => { dispatch(setTracks(_tracks)); }, 100);
      });
  };
};

export const setTracks = tracks => {
  return {
    type: SET_TRACKS,
    payload: tracks
  };
};

export const trackUpdated = (id, title, artist, album, genre) => {
  return dispatch => {
    const track = {
      id, title, artist, album, genre
    };
    AsyncStorage.setItem(JSON.stringify(id), JSON.stringify(track));
  };
};

export const trackDeleted = id => {
  return dispatch => {
    AsyncStorage.removeItem(JSON.stringify(id));
  };
};

export const trackSearched = text => {
  return {
    type: TRACK_SEARCHED,
    payload: text
  };
};
