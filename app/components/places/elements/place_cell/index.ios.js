'use strict';

var React = require('react-native');

var {
  Text,
  View,
  TouchableHighlight,
  Image,
} = React;

var styles = require("./style");

var PlaceCell = React.createClass({
  render: function() {
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
      <View style={styles.container}>
        <View style={styles.leftPanel}>
          <Image
            style={styles.image}
            source={require('../../../../images/aeropress.png')}
            />
        </View>
        <View style={styles.placeDetailsContainer}>
          <Text style={styles.placeTitle}>
            {this.props.place.name}
          </Text>
          <Text style={styles.waterTemp}>
          </Text>
        </View>
      </View>
      </TouchableHighlight>
    );
  }
});

module.exports = PlaceCell;
