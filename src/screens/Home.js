import React, { Component } from 'react';
import { View, Platform, StyleSheet, Keyboard } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { getImageSource } from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import AddForm from '../components/AddForm';

import {
  trackAdded,
  trackChanged,
  trackDeleted,
  trackPositionChanged
} from '../store/actions/index';

const uuidV1 = require('uuid/v1');

class Home extends Component {
  static get options() {
    return {
      topBar: {
        visible: true,
        title: {
          text: 'Playlist',
          fontSize: 20
        }
      }
    };
  }

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    getImageSource(Platform.OS === 'android' ? 'md-more' : 'ios-more', 30, '#2f8c35')
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

  state = {
    option: 'add'
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
    Keyboard.dismiss();
  }

  submitHandler = (values, { resetForm }) => {
    switch (this.props.option) {
      case 'add': {
        const id = uuidV1();
        this.props.onTrackAdd(
          id,
          values.title,
          values.artist,
          values.album,
          values.genre
        );
        break;
      }
      case 'search': {
        const searchedTrack = this.props.tracks.map(track => {
          if (track.title === values.title) {
            return track;
          }
          return null;
        });
        alert(JSON.stringify(searchedTrack));
        break;
      }
      case 'change':
        this.props.onTrackChange(
          values.title,
          values.artist,
          values.album,
          values.genre
        );
        break;
      // case 'list':
      //   Navigation.mergeOptions('bottomTabs', {
      //     bottomTabs: {
      //       currentTabIndex: 'Biblioteca'
      //     }
      //   });
      //   break;
      case 'delete':
        this.props.onTrackDelete(values.title);
        break;
      default:
        break;
    }
    Keyboard.dismiss();
    resetForm({});
    // alert(JSON.stringify(this.props.tracks));
  }

  render() {
    return (
      <KeyboardAwareScrollView
        enableOnAndroid enableResetScrollToCoords={false}
        style={styles.container}
      >
        <View style={styles.container}>
          <AddForm
            submitHandler={this.submitHandler}
          />
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

const mapStateToProps = state => {
  return {
    tracks: state.tracks.tracks,
    option: state.options.option
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTrackAdd: (id, title, artist, album, genre) =>
      dispatch(trackAdded(id, title, artist, album, genre)),
    onTrackChange: (id, title, artist, album, genre) =>
      dispatch(trackChanged(id, title, artist, album, genre)),
    onTrackDelete: id =>
      dispatch(trackDeleted(id)),
    onPositionChange: position =>
      dispatch(trackPositionChanged(position))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
