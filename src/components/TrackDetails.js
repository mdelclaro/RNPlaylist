import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Platform,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TrackDetails = props => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.text}>
            {`Artista: ${props.artist}`}
          </Text>
          <Text style={styles.text}>
            {`Album: ${props.album}`}
          </Text>
          <Text style={styles.text}>
            {`Genero: ${props.genre}`}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={props.editTrack}>
            <Icon
              name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
              size={25}
              color='#2f8c35'
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#303030',
    justifyContent: 'flex-start',
    borderColor: '#ddd',
    position: 'relative',
    marginBottom: 5,
    padding: 4
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    flex: 1,
    color: 'white'
  }
});

export default TrackDetails;
