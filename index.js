import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { getImageSource } from 'react-native-vector-icons/Ionicons';

import registerScreens from './src/App';

registerScreens();

Promise.all([
  getImageSource(Platform.OS === 'android' ? 'md-home' : 'ios-home', 35, 'white'),
  getImageSource(Platform.OS === 'android' ? 'md-filing' : 'ios-paper-filing', 35, 'white')
]).then(icons => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        right: {
          component: {
            id: 'rightDrawer',
            name: 'pdm.SideMenu',
          },
        },
        center: {
          bottomTabs: {
            id: 'bottomTabs',
            options: {
              topbar: {
                visible: true,
                id: 'topBar',
                title: {
                  text: 'Playlist'
                }
              }
            },
            children: [
              {
                stack: {
                  id: 'tab1',
                  children: [
                    {
                      component: {
                        id: 'Home',
                        name: 'pdm.Home',
                        options: {
                          topbar: {
                            visible: true
                          },
                          bottomTab: {
                            text: 'Home',
                            textColor: 'white',
                            selectedTextColor: 'white',
                            icon: icons[0],
                          }
                        }
                      },
                    },
                  ]
                }
              },
              {
                stack: {
                  id: 'tab2',
                  children: [
                    {
                      component: {
                        id: 'Biblioteca',
                        name: 'pdm.Biblioteca',
                        options: {
                          bottomTab: {
                            text: 'Biblioteca',
                            textColor: 'white',
                            icon: icons[1],
                            iconColor: 'white',
                          }
                        }
                      },
                    },
                  ]
                }
              },
            ],
          },
        }
      }
    }
  });
});
