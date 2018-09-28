import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class Menu extends Component {
  render() {
    return (
      <View
        style={[
          styles.container,
          { width: Dimensions.get('window').width * 0.8 }
        ]}
      >
        <TouchableOpacity onPress={this.props.onLogout}>
          <View style={styles.drawerItemFirst}>
            <Icon
              name={Platform.OS === 'android' ? 'md-add-circle' : 'ios-add-circle'}
              size={30}
              color='#aaa'
              style={styles.drawerItemIcon}
            />
            <Text>Cadastrar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onLogout}>
          <View style={styles.drawerItemFirst}>
            <Icon
              name={Platform.OS === 'android' ? 'md-search' : 'ios-search'}
              size={30}
              color='#aaa'
              style={styles.drawerItemIcon}
            />
            <Text>Consultar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onLogout}>
          <View style={styles.drawerItem}>
            <Icon
              name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
              size={30}
              color='#aaa'
              style={styles.drawerItemIcon}
            />
            <Text>Alterar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onLogout}>
          <View style={styles.drawerItemFirst}>
            <Icon
              name={Platform.OS === 'android' ? 'md-filing' : 'ios-filing'}
              size={30}
              color='#aaa'
              style={styles.drawerItemIcon}
            />
            <Text>Listar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onLogout}>
          <View style={styles.drawerItem}>
            <Icon
              name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
              size={30}
              color='#aaa'
              style={[styles.drawerItemIcon, { color: '#fc6f6f' }]}
            />
            <Text style={{ color: '#fc6f6f' }}>Excluir</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: 'white',
    flex: 1
  },
  drawerItemFirst: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8'
  },
  drawerItemIcon: {
    marginRight: 10
  }
});

export default Menu;
