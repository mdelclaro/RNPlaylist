import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
  // LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';

import { selectTrack } from '../store/actions';

import CardSection from './UI/CardSection';
import TrackDetails from './TrackDetails';
import EditModal from './EditModal';

class TrackDetail extends Component {
  state = {
    isModalVisible: false
  }

  onTrackSelected = () => {
    this.props.onTrackSelected(this.props.track.id);
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
      <TouchableWithoutFeedback onPress={this.onTrackSelected}>
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
    onTrackSelected: title =>
      dispatch(selectTrack(title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackDetail);
