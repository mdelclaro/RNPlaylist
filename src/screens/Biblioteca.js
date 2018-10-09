import React, { Component } from 'react';
import { View, FlatList, Platform, } from 'react-native';
import { connect } from 'react-redux';
import { getImageSource } from 'react-native-vector-icons/Ionicons';
import { Navigation } from 'react-native-navigation';

import Track from '../components/Track';
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

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    getImageSource(Platform.OS === 'android' ? 'md-search' : 'ios-search', 30, '#2f8c35')
      .then(icon => {
        Navigation.mergeOptions('Biblioteca', {
          topBar: {
            rightButtons: [
              {
                id: 'searchButton',
                icon
              }
            ]
          },
        });
      });
  }

  state = {
    isModalVisible: false
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === 'searchButton') {
      this.setState({
        isModalVisible: true
      });
    }
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
      <View style={{ flex: 1, flexGrow: 1, backgroundColor: '#121212', }}>
        <FlatList
          data={this.props.tracks}
          renderItem={this.renderItem}
          keyExtractor={(track) => track.id}
          contentContainerStyle={{ paddingBottom: 60 }}
          style={{ padding: 10 }}
        />
        <SearchModal
          isVisible={this.state.isModalVisible}
          searchTrackHandler={this.searchTrackHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    tracks: state.tracks.tracks
  };
};

export default connect(mapStateToProps)(Biblioteca);

