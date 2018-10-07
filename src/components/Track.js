import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert
  // LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';

import { selectTrack, trackDeleted } from '../store/actions';

import CardSection from './UI/CardSection';
import TrackDetails from './TrackDetails';
import EditModal from './EditModal';

class TrackDetail extends Component {
  state = {
    isModalVisible: false
  }

  onTrackSelect = () => {
    this.props.onTrackSelect(this.props.track.id);
  }

  onTrackLongPress = () => {
    Alert.alert(
      'Aviso',
      `Deseja realmente deletar ${this.props.track.title}?`,
      [
        { text: 'Cancelar' },
        {
          text: 'Deletar', 
          onPress: () =>
            this.props.onTrackDelete(this.props.track.id)
        }
      ]
    );
  }

  showEditModal = () => {
    this.setState({
      isModalVisible: true
    });
  }

  editTrackHandler = () => {
    this.setState({
      isModalVisible: false
    });
  }

  render() {
    const { id, title, artist, album, genre } = this.props.track;
    return (
      <TouchableWithoutFeedback
        onPress={this.onTrackSelect}
        onLongPress={this.onTrackLongPress}
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
          </CardSection>
          {
            id === this.props.selectedTrack
              ? <TrackDetails
                id={id}
                artist={artist}
                album={album}
                genre={genre}
                editTrack={this.showEditModal}
              />
              : null
          }
          {
            <EditModal
              isVisible={this.state.isModalVisible}
              editTrackHandler={this.editTrackHandler}
              id={id}
              title={title}
              artist={artist}
              album={album}
              genre={genre}
            />
          }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 2
  }
});

const mapStateToProps = state => {
  return {
    selectedTrack: state.selectedTrack.selectedTrack
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTrackSelect: title =>
      dispatch(selectTrack(title)),
    onTrackDelete: id =>
      dispatch(trackDeleted(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackDetail);
