import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import TrackReducer from './reducers/TrackReducer';
import OptionReducer from './reducers/OptionReducer';
import SelectionReducer from './reducers/SelectionReducer';

const rootReducer = combineReducers({
    tracks: TrackReducer,
    options: OptionReducer,
    selectedTrack: SelectionReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
