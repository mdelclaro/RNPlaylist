import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { getImageSource } from 'react-native-vector-icons/Ionicons';

import registerScreens from './RegisterScreens';

registerScreens();

const start = () => {
  Navigation.setDefaultOptions({
    bottomTabs: {
      backgroundColor: 'black',
      drawBehind: true
    },
    bottomTab: {
      selectedIconColor: '#2f8c35',
      textColor: '#2f8c35',
      selectedTextColor: '#2f8c35'
    },
    topBar: {
      background: {
        color: 'black',
      },
      title: {
        color: 'white'
      }
    }
  });

  Promise.all([
    getImageSource(Platform.OS === 'android' ? 'md-home' : 'ios-home', 35, 'white'),
    getImageSource(Platform.OS === 'android' ? 'md-filing' : 'ios-filing', 35, 'white')
  ]).then(sources => {
    Navigation.setRoot({
      root: {
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
                          icon: sources[0],
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
                          icon: sources[1],
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
    });
  });
};

export default start;
