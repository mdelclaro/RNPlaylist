import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
);

const styles = {
  containerStyle: {
    padding: 5,
    backgroundColor: '#303030',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export default CardSection;
