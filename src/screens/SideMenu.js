import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class SideMenu extends Component {
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
              name={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
              size={30}
              color='#2f8c35'
              style={styles.drawerItemIcon}
            />
            <Text style={styles.drawerItemText}>Cadastrar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onLogout}>
          <View style={styles.drawerItem}>
            <Icon
              name={Platform.OS === 'android' ? 'md-search' : 'ios-search'}
              size={30}
              color='#2f8c35'
              style={styles.drawerItemIcon}
            />
            <Text style={styles.drawerItemText}>Consultar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onLogout}>
          <View style={styles.drawerItem}>
            <Icon
              name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
              size={30}
              color='#2f8c35'
              style={styles.drawerItemIcon}
            />
            <Text style={styles.drawerItemText}>Alterar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onLogout}>
          <View style={styles.drawerItem}>
            <Icon
              name={Platform.OS === 'android' ? 'md-filing' : 'ios-filing'}
              size={30}
              color='#2f8c35'
              style={styles.drawerItemIcon}
            />
            <Text style={styles.drawerItemText}>Listar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onLogout}>
          <View style={styles.drawerItem}>
            <Icon
              name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
              size={30}
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
    backgroundColor: 'black',
    flex: 1
  },
  drawerItemFirst: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8'
  },
  drawerItemText: {
    color: 'white'
  },
  drawerItemIcon: {
    marginRight: 10
  }
});

export default SideMenu;
