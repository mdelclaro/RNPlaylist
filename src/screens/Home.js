import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { getImageSource } from 'react-native-vector-icons/Ionicons';

import Form from '../components/Form';

class Home extends Component {
	static get options() {
		return {
			topBar: {
				visible: true,
				title: {
					text: 'Playlist'
				}
			}
		};
	}

	constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    getImageSource(Platform.OS === 'android' ? 'md-more' : 'ios-more', 30, '#425cf4')
      .then(icon => {
        Navigation.mergeOptions('Home', {
          topBar: {
            rightButtons: [
              {
                id: 'menuButton',
                icon
              }
            ]
          },
          bottomTabs: {
            backgroundColor: '#32b54a'
          },
          bottomTab: {
            selectedIconColor: 'white',
            textColor: 'white',
            selectedTextColor: 'white'
          }
        });
      });
	}
	
	navigationButtonPressed({ buttonId }) {
    if (buttonId === 'menuButton') {
      Navigation.mergeOptions('Home', {
        sideMenu: {
          right: {
            visible: true,
          }
        }
      });
    }
  }

	render() {
		return (
			<View>
				<Form />
			</View>
		);
	}
}

export default Home;
