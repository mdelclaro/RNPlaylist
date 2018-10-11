import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { trackUpdated } from '../store/actions/index';

import Input from './UI/Input';
import ButtonWithBackground from './UI/ButtonWithBackground';

class EditModal extends Component {
  state = {
    id: '',
    title: '',
    artist: '',
    album: '',
    genre: ''
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      artist: this.props.artist,
      album: this.props.album,
      genre: this.props.genre
    });
  }

  submitHandler = () => {
    this.props.onTrackUpdate(
      this.state.id,
      this.state.title,
      this.state.artist,
      this.state.album,
      this.state.genre
    );
    this.props.editTrackHandler();
  }

  render() {
    return (
      <KeyboardAwareScrollView
        enableOnAndroid
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps='always'
      >
        <Modal
          style={styles.container}
          isVisible={this.props.isVisible}
          backdropColor={'black'}
          backdropOpacity={0.8}
          animationIn='zoomInDown'
          animationOut='zoomOutUp'
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
          onBackdropPress={this.props.editTrackHandler}
        >
          <View style={styles.modalContent}>
            <Input
              value={this.state.title}
              onChangeText={(text) => this.setState({ title: text })}
            />
            <Input
              value={this.state.artist}
              onChangeText={(text) => this.setState({ artist: text })}
            />
            <Input
              value={this.state.album}
              onChangeText={(text) => this.setState({ album: text })}
            />
            <Input
              value={this.state.genre}
              onChangeText={(text) => this.setState({ genre: text })}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <ButtonWithBackground
                color='#2f8c35'
                onPress={this.submitHandler}
              >
                Editar
              </ButtonWithBackground>
              <ButtonWithBackground
                color='#e86345'
                onPress={this.props.editTrackHandler}
              >
                Cancelar
              </ButtonWithBackground>
            </View>
          </View>
        </Modal>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  modalContent: {
    height: Dimensions.get('window').height * 0.7,
    width: Dimensions.get('window').width * 0.8,
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 15,
  },
});

const mapDispatchToProps = dispatch => {
  return {
    onTrackUpdate: (id, title, artist, album, genre) =>
      dispatch(trackUpdated(id, title, artist, album, genre))
  };
};

export default connect(null, mapDispatchToProps)(EditModal);
