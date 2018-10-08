import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Track from '../components/Track';
import FAB from '../components/UI/FAB';
import SearchModal from '../components/SearchModal';

class Biblioteca extends Component {
  static get options() {
    return {
      topBar: {
        visible: true,
        title: {
          text: 'Biblioteca',
          fontSize: 20
        }
      }
    };
  }

  state = {
    isModalVisible: false
  }

  showSearchModal = () => {
    this.setState({
      isModalVisible: true
    });
  }

  searchTrackHandler = () => {
    // const searchedTrack = this.props.tracks.map(track => {
    //   if (track.title === values.title) {
    //     return track;
    //   }
    //   return null;
    // });
    this.setState({
      isModalVisible: false
    });
  }

  renderItem(track) {
    return (
      <Track track={track.item} />
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.tracks}
          renderItem={this.renderItem}
          keyExtractor={(track) => track.id}
        />
        <View style={styles.buttonContainer}>
          <FAB style={styles.button} onPress={this.showSearchModal} isVisible={!this.state.isModalVisible} />
        </View>
        <SearchModal 
          isVisible={this.state.isModalVisible}
          searchTrackHandler={this.searchTrackHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    right: 4,
    bottom: 60,
  },
  button: {
    color: '#2f8c35'
  }
});

const mapStateToProps = state => {
  return {
    tracks: state.tracks.tracks
  };
};

export default connect(mapStateToProps)(Biblioteca);

