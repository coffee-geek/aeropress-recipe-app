'use strict';

var React = require('react-native');

var {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Image,
  Navigator,
} = React;

var styles = require("./style");
var RecipeView = require("../recipe");
let Router = require("../../router.js");

var FooterView = React.createClass({
  createNewRecipe: function(recipe){
    let route = Router.getNewRecipeRoute({
      callback: this.props.newRecipe,
    });
    this.props.navigator.push(route)
  },
  render: function() {
    return (
      <View style={styles.footer}>
        <TouchableHighlight onPress={this.createNewRecipe}>
          <Image
            style={styles.image}
            source={require('../../images/new_recipe.png')}
            />
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = FooterView;
