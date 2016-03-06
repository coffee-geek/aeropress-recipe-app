'use strict';

var React = require('react-native');

var {
  Text,
  View,
  ListView,
} = React;

var styles = require("./style");

//View Elements
var RecipeCell = require("./elements/recipe_cell");

var ViewReactClass = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false,
    };
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
    var responseData = [
      {
        name: "This is test 1",
      },
      {
        name: "This is test 2",
      },
      {
        name: "This is test 3",
      }
    ];
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(responseData),
      loaded: true
    });
  },
  render: function() {
    if(!this.state.loaded){
      return(
        <View style={styles.container}>
        <Text style={styles.loadingText}>
          Fetching Recipes...
        </Text>
      </View>
      );
    }
    return (
      this.renderListView()
    );
  },
  renderListView: function(){
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRecipeCell}
        style={styles.recipesListView}/>
    );
  },
  renderRecipeCell: function(recipe, sectionID, rowID){
    return(
      <RecipeCell
        onSelect={() => this.selectRecipe(recipe)}
        rowID={rowID}
        sectionID={sectionID}
        recipe={recipe}/>
    );
  },
  selectRecipe: function(recipe){
    this.props.navigator.push({
      title: recipe.name,
      component: RecipeView,
      passProps: {
          id: recipe.id,
          name: recipe.name,
      }
    });
  },

});
module.exports = ViewReactClass;
