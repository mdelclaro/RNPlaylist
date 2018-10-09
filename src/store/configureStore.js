import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import TrackReducer from './reducers/TrackReducer';
import SelectTrackReducer from './reducers/SelectTrackReducer';

const rootReducer = combineReducers({
    tracks: TrackReducer,
    selectedTrack: SelectTrackReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
