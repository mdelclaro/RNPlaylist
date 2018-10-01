import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import Home from './screens/Home';
import Biblioteca from './screens/Biblioteca';
import SideMenu from './screens/SideMenu';

import configureStore from './store/configureStore';

const store = configureStore();

const registerScreens = () => {
  Navigation.registerComponentWithRedux('pdm.Home', () => Home, Provider, store);  
  Navigation.registerComponentWithRedux('pdm.Biblioteca', () => Biblioteca, Provider, store);
  Navigation.registerComponentWithRedux('pdm.SideMenu', () => SideMenu, Provider, store);
};

export default registerScreens;
