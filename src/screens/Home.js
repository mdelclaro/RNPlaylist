import React, { Component } from 'react';
import { View, Platform, StyleSheet, Keyboard } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { getImageSource } from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
        });
      });
  }

  componentDidMount() {
    Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  keyboardDidShow = () => {
    Navigation.mergeOptions(this.props.componentId, {
      bottomTabs: {
        visible: false,
        animate: false
      }
    });
  }

  keyboardDidHide = () => {
    Navigation.mergeOptions(this.props.componentId, {
      bottomTabs: {
        visible: true,
        animate: false
      }
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
      <KeyboardAwareScrollView
        enableOnAndroid enableResetScrollToCoords={false}
        style={styles.container}
      >
        <View style={styles.container}>
          <Form />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Home;
