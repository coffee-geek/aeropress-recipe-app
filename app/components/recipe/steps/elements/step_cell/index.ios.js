'use strict';

var React = require('react-native');

var {
  Text,
  View,
  TouchableHighlight,
  Image,
} = React;

var styles = require("./style");

var StepCell = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>      
      </View>
    );
  }
});

module.exports = StepCell;
