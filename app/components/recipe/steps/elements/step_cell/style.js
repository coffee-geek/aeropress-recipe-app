'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderColor: '#333',
    margin: 10,
    paddingTop: 10
  },
  leftPanel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numCircle: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 35,
    width: 30,
    height: 30,
    borderColor: '#c3c3c3',
    backgroundColor: '#c3c3c3',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  num: {
    fontSize: 16,
    color: '#fff'
  },
  rightPanel: {
    flex: 5
  }
});
