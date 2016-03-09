'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    margin: 5,
    borderWidth: 0.5,
    borderColor: '#333',
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'stretch'

  },
  leftPanel: {
  },
  rightPanel: {
  },
  recipeTitle: {
    fontSize: 22,
    marginTop: 10,
  },
  bold: {
    fontWeight: 'bold'
  },
  image: {
    width: 70,
    height: 70,
  },
});
