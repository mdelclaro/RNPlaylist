import React from 'react';
import { 
  View, 
  TouchableOpacity, 
  Text,
  Platform, 
  StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import CardSection from './UI/CardSection';

const TrackDetails = props => {
  return (
    <CardSection style={{ flexDirection: 'column', }}>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={{ flex: 1 }}>
            {`Artista: ${props.artist}`}
          </Text>
          <Text style={{ flex: 1 }}>
            {`Album: ${props.album}`}
          </Text>
          <Text style={{ flex: 1 }}>
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
    </CardSection>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default TrackDetails;
