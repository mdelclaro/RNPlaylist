import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

import Input from './UI/Input';
import ButtonWithBackground from './UI/ButtonWithBackground';

class EditModal extends Component {
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
      >
        <View>
          <Input />
          <ButtonWithBackground
            color='#2f8c35'
            onPress={this.props.editTrackHandler}
          >
            Editar
          </ButtonWithBackground>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center'
  }
});

export default EditModal;
