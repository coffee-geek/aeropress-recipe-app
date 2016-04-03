/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import ExNavigator from '@exponent/react-native-navigator';
let Router = require('./app/router.js');

class coffeeLog extends Component {
  render() {
    return (
      <ExNavigator
        ref='nav'
        style={styles.container}
        tintColor='#FF6600'
        initialRoute={Router.getMainRoute()} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('coffeeLog', () => coffeeLog);
