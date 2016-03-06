'use strict';

var React = require('react-native');

var {
  Text,
  View,
  TouchableHighlight,
  Image,
} = React;

var styles = require("./style");

var RecipeCell = React.createClass({
  render: function() {
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
      <View style={styles.container}>
        <View style={styles.leftPanel}>
          <Image
            style={styles.image}
            source={require('../../../../images/aeropress.png')}
            />
          <View style={styles.numberArea}>
            <Text>
              #{Number(this.props.rowID) + 1}
            </Text>
          </View>
        </View>
        <View style={styles.recipeDetailsContainer}>
          <Text style={styles.recipeTitle}>
            {this.props.recipe.stote_name}
          </Text>
          <Text style={styles.recipeTitle}>
            {this.props.recipe.origin_name}
          </Text>
          <Text style={styles.recipeTitle}>
            {this.props.recipe.beans_amount}g
          </Text>
          <Text style={styles.recipeTitle}>
            {this.props.recipe.water_amount}ML
          </Text>
          <Text style={styles.recipeTitle}>
            {this.props.recipe.water_temp}℃
          </Text>
        </View>
      </View>
      </TouchableHighlight>
    );
  }
});

module.exports = RecipeCell;
