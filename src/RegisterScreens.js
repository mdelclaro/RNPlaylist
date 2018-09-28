import { Navigation } from 'react-native-navigation';

import Home from './screens/Home';
import Biblioteca from './screens/Biblioteca';
import SideMenu from './screens/SideMenu';

const registerScreens = () => {
  Navigation.registerComponent('pdm.Home', () => Home);  
  Navigation.registerComponent('pdm.Biblioteca', () => Biblioteca);
  Navigation.registerComponent('pdm.SideMenu', () => SideMenu);
};

export default registerScreens;
