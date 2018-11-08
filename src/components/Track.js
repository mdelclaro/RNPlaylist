import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
  Platform,
  LayoutAnimation,
  UIManager
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import { selectTrack, trackDeleted, getTracks } from '../store/actions';

import CardSection from './UI/CardSection';
import TrackDetails from './TrackDetails';
import EditModal from './EditModal';

class Track extends Component {
  constructor(props) {
    super(props);
    return Platform.OS === 'android' ?
      UIManager.setLayoutAnimationEnabledExperimental
      && UIManager.setLayoutAnimationEnabledExperimental(true)
      : null;
  }
  state = {
    isModalVisible: false
  }

  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  onTrackSelect = () => {
    const { selectedTrack, track } = this.props;

    if (track.id === selectedTrack) {
      this.props.onTrackSelect(-1);
    } else {
      this.props.onTrackSelect(this.props.track.id);
    }
  }

  onTrackLongPress = () => {
    Alert.alert(
      'Aviso',
      `Deseja realmente deletar ${this.props.track.title}?`,
      [
        { text: 'Cancelar' },
        {
          text: 'Deletar',
          onPress: () => {
            this.props.onTrackDelete(this.props.track.id);
            this.props.onGetTracks();
          }
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
          <CardSection style={styles.titleContainer}>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
            <View sytle={styles.iconContainer}>
              <Icon
                name={Platform.OS === 'android' ? 'md-musical-note' : 'ios-musical-note'}
                size={25}
                color='white'
              />
            </View>
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
          <EditModal
            isVisible={this.state.isModalVisible}
            editTrackHandler={this.editTrackHandler}
            id={id}
            title={title}
            artist={artist}
            album={album}
            genre={genre}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconContainer: {
    marginLeft: 4,
    flex: 1,
    justifyContent: 'flex-end'
  },
  titleStyle: {
    flex: 1,
    fontSize: 20,
    paddingLeft: 2,
    color: 'white'
  }
});

const mapStateToProps = state => {
  return {
    selectedTrack: state.selectedTrack.selectedTrack
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTrackSelect: id =>
      dispatch(selectTrack(id)),
    onTrackDelete: id =>
      dispatch(trackDeleted(id)),
    onGetTracks: () =>
      dispatch(getTracks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Track);
