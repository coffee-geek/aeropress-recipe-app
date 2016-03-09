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
        </View>
        <View style={styles.recipeDetailsContainer}>
          <Text style={styles.recipeTitle}>
            {this.props.recipe.stote_name}
          </Text>
          <Text style={styles.originName}>
            <Text style={styles.bold}>Origin: </Text>
            {this.props.recipe.origin_name}
          </Text>
          <Text style={styles.beanAmount}>
            <Text style={styles.bold}>Beans: </Text>
            {this.props.recipe.beans_amount}g
          </Text>
          <Text style={styles.recipeWaterAmount}>
            <Text style={styles.bold}>HOT WATER: </Text>
            {this.props.recipe.water_amount}ML
            - {this.props.recipe.water_temp}℃
          </Text>
          <Text style={styles.waterTemp}>
          </Text>
        </View>
      </View>
      </TouchableHighlight>
    );
  }
});

module.exports = RecipeCell;
