import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FAB = props => {
  const content = (
    <View style={[styles.button, props.style]}>
      {
        <Icon
          name={Platform.OS === 'android'
            ? 'md-search' : 'ios-search'}
          size={30}
          style={styles.icon}
        />
      }
    </View>
  );
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.isDisabled}>
      {content}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#2f8c35',
    backgroundColor: '#2f8c35',
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45
  },
  icon: {
    justifyContent: 'center',
    alignContent: 'center',
    color: 'white'
  }
});

export default FAB;
