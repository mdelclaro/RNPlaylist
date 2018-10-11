import React, { Component } from 'react';
import { View, FlatList, Platform, } from 'react-native';
import { connect } from 'react-redux';
import { getImageSource } from 'react-native-vector-icons/Ionicons';
import { Navigation } from 'react-native-navigation';

import Track from '../components/Track';
import SearchModal from '../components/SearchModal';

import { trackSearched } from '../store/actions/TrackAction';

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
    this.renderIcon();
  }

  state = {
    isModalVisible: false,
    searched: false
  }

  componentDidMount() {
    this.setState({ data: this.props.track });
  }

  componentDidUpdate() {
    this.renderIcon();
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === 'searchButton') {
      if (this.state.searched) {
        this.setState({ searched: false });
      } else {
        this.setState({
          isModalVisible: true
        });
      }
    }
  }

  searchTrackHandler = (text) => {
    if (text !== '') {
      this.props.onTrackSearch(text);
      this.setState({
        isModalVisible: false,
        searched: true
      });
    }
    this.setState({
      isModalVisible: false,
    });
  }

  renderIcon() {
    let androidIcon;
    let iosIcon;

    if (!this.state.searched) {
      androidIcon = 'md-search';
      iosIcon = 'ios-search';
    } else {
      androidIcon = 'md-close';
      iosIcon = 'ios-close';
    }
    getImageSource(
      Platform.OS === 'android' ? androidIcon : iosIcon, 30, '#2f8c35')
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

  renderItem(track) {
    return (
      <Track track={track.item} />
    );
  }

  render() {
    return (
      <View style={{ flex: 1, flexGrow: 1, backgroundColor: '#121212', }}>
        <FlatList
          data={
            !this.state.searched
              ? this.props.tracks
              : this.props.filteredTracks
          }
          renderItem={this.renderItem}
          keyExtractor={(track) => track.id}
          contentContainerStyle={{ paddingBottom: 60 }}
          keyboardShouldPersistTaps='always'
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
    tracks: state.tracks.tracks,
    filteredTracks: state.tracks.filteredTracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTrackSearch: (text) =>
      dispatch(trackSearched(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Biblioteca);

