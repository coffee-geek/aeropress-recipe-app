'use strict';

var React = require('react-native');

var {
  Text,
  View,
  TouchableHighlight,
} = React;

var styles = require("./style");

var RecipeCell = React.createClass({
  render: function() {
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
      <View style={styles.container}>
        <View style={styles.leftPanel}>
          <View style={styles.numberArea}>
            <Text>
              #{Number(this.props.rowID) + 1}
            </Text>
          </View>
        </View>
        <View style={styles.recipeDetailsContainer}>
          <Text style={styles.recipeTitle}>
            {this.props.recipe.name}
          </Text>
        </View>
      </View>
      </TouchableHighlight>
    );
  }
});

module.exports = RecipeCell;
