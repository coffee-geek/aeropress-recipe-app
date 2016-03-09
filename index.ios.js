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
  NavigatorIOS
} from 'react-native';

var RecipesList = require('./app/components/recipes');

class coffeeLog extends Component {
  render() {
    return (
      <NavigatorIOS
        ref='nav'
        style={styles.container}
        tintColor='#FF6600'
        initialRoute={{
          title: 'AREROPRESS',
          component: RecipesList,
        }}/>
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
