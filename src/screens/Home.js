import React, { Component } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import AddForm from '../components/AddForm';

import {
  trackAdded,
  trackUpdated,
  trackDeleted
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

  submitHandler = (values, { resetForm, setFieldTouched, setSubmitting }) => {
    const id = uuidV1();
    this.props.onTrackAdd(
      id,
      values.title,
      values.artist,
      values.album,
      values.genre
    );

    Keyboard.dismiss();
    setTimeout(() => {
      setSubmitting(false);
      resetForm({ title: '', artist: '', album: '', genre: '' });
      setFieldTouched('genre', false, false);
    }, 100);

    // Keyboard.dismiss();
    // setSubmitting(false);
    // resetForm({ title: '', artist: '', album: '', genre: '' });
    // setFieldTouched('genre', false, false);

    // Navigation.mergeOptions('bottomTabs', {
    //   bottomTabs: {
    //     currentTabIndex: 1
    //   }
    // });
  }

  render() {
    return (
      <KeyboardAwareScrollView
        enableOnAndroid enableResetScrollToCoords={false}
        keyboardShouldPersistTaps='handled'
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
    backgroundColor: '#121212'
  }
});

const mapStateToProps = state => {
  return {
    tracks: state.tracks.tracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTrackAdd: (id, title, artist, album, genre) =>
      dispatch(trackAdded(id, title, artist, album, genre)),
    onTrackChange: (id, title, artist, album, genre) =>
      dispatch(trackUpdated(id, title, artist, album, genre)),
    onTrackDelete: id =>
      dispatch(trackDeleted(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
