import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';

import { selectTrack } from '../store/actions/index';

import CardSection from './UI/CardSection';

class TrackDetail extends Component {
  onTrackSelected = () => {
    this.props.onTrackSelected(this.props.track.title);
  }

  renderDetails() {
    const { title, artist, album, genre } = this.props.track;
    if (title === this.props.selectedTrack) {
      return (
        <CardSection style={{ flexDirection: 'column', }}>
          <Text style={{ flex: 1 }}>
            {`Artista: ${artist}`}
          </Text>
          <Text style={{ flex: 1 }}>
            {`Album: ${album}`}
          </Text>
          <Text style={{ flex: 1 }}>
            {`Genero: ${genre}`}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    console.log(JSON.stringify(this.props.track));
    return (
      <TouchableWithoutFeedback onPress={this.onTrackSelected}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {this.props.track.title}
            </Text>
          </CardSection>
          {this.renderDetails()}
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
