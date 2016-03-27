'use strict';

var React = require('react-native');

var {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Image,
} = React;

var styles = require("./style");
var RecipeView = require("../recipe")

var FooterView = React.createClass({
  createNewRecipe: function(recipe){
    this.props.navigator.push({
      title: 'NEW RECIPE',
      component: RecipeView,
      passProps: {
        recipe: {},
      },
      leftButtonTitle: 'CLOSE',
      onLeftButtonPress: () => this.props.navigator.pop(),
      rightButtonTitle: 'SAVE',
      onRightButtonPress: () => {
        // TODO save recipe
        this.props.navigator.pop();
      },
    });
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
