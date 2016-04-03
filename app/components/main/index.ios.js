'use strict';

var React = require('react-native');

var {
  Text,
  View,
  ListView,
  ScrollView,
  Navigator,
} = React;

var styles = require("./style");

//View Elements
var RecipesView = require("../recipes");
var RecipeView = require("../recipe");

var ViewReactClass = React.createClass({
  getInitialState: function() {
    return {
      isNewRecipeView: false,
    };
  },
  showNewRecipeView: function() {
    this.setState({
      isNewRecipeView: true,
    })
  },
  componentDidMount: function() {
  },
  renderNewRecipeView: function() {
    if (this.state.isNewRecipeView) {
      return (
        <RecipeView
          recipe={{}}
          styles={Navigator.SceneConfigs.FloatFromBottom}/>
      )
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <RecipesView
          navigator={this.props.navigator}
          showNewRecipeView={this.showNewRecipeView}/>
        {this.renderNewRecipeView()}
      </View>
    );
  },
});
module.exports = ViewReactClass;
