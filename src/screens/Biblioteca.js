import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import Track from '../components/Track';

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

