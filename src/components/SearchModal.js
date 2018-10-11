import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';

import Input from './UI/Input';
import ButtonWithBackground from './UI/ButtonWithBackground';

class SearchModal extends Component {
  state = {
    searched: ''
  };

  searchHandler = () => {
    this.props.searchTrackHandler(this.state.searched);
  }

  cancelSearchHandler = () => {
    this.props.searchTrackHandler('');
  }

  render() {
    return (
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
        onBackdropPress={this.props.searchTrackHandler}
      >
        <View style={styles.modalContent}>
          <Input
            placeholder='Pesquisar por título...'
            onChangeText={(text) => this.setState({ searched: text })}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <ButtonWithBackground
              color='#2f8c35'
              onPress={this.searchHandler}
            >
              Pesquisar
            </ButtonWithBackground>
            <ButtonWithBackground
              color='#e86345'
              onPress={this.searchHandler}
            >
              Cancelar
            </ButtonWithBackground>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  modalContent: {
    height: Dimensions.get('window').height * 0.3,
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

export default connect()(SearchModal);
