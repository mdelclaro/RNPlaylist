import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import Home from './screens/Home';
import Biblioteca from './screens/Biblioteca';

import configureStore from './store/configureStore';

const store = configureStore();

const registerScreens = () => {
  Navigation.registerComponentWithRedux('pdm.Home', () => Home, Provider, store);  
  Navigation.registerComponentWithRedux('pdm.Biblioteca', () => Biblioteca, Provider, store);
};

export default registerScreens;
