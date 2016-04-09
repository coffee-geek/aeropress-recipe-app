'use strict';

var React = require('react-native');

var {
  Text,
  TextInput,
  View,
  ListView,
  Image,
} = React;

var styles = require("./style");
var PlacesView = require("./places");
var OriginsView = require("./origins");
var StepListView = require("./steps");

var RecipeView = React.createClass({
  getInitialState: function() {
    return {
      recipe: Object.assign({}, this.props.recipe),
    };
  },
  selectPlace: function(){
    let route = require("../../router.js").getPlacesRoute({
        recipe: this.state.recipe,
        setPlace: (place) => this.setPlace(place),
    });
    this.props.navigator.push(route);
  },
  selectOrigin: function(){
    let route = require("../../router.js").getOriginsRoute({
        recipe: this.state.recipe,
        setOrigin: (origin) => this.setOrigin(origin),
    });
    this.props.navigator.push(route);
  },
  setPlace: function(place) {
    var recipe = this.state.recipe;
    recipe.place_id = place.id;
    recipe.store_name = place.name;
    this.setState({
      recipe: recipe,
    })
  },
  setOrigin: function(origin) {
    var recipe = this.state.recipe;
    recipe.origin_id = origin.id;
    recipe.origin_name = origin.name;
    this.setState({
      recipe: recipe,
    })
  },
  addNewStep: function() {
    let route = require("../../router.js").getNewStepRoute();
    this.props.navigator.push(route);
  },
  renderStepListView: function() {
    return (
      <StepListView
        navigator={this.props.navigator}
        steps={this.state.recipe.steps}/>
    );
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.inputLabel}>
            PLACE:
          </Text>
          <Text
            style={styles.selectableText}
            onPress={() => this.selectPlace()}>
            {this.state.recipe.store_name}
          </Text>
        </View>
        <View style={styles.underline}></View>

        <View style={styles.row}>
          <Text style={styles.inputLabel}>
            ORIGIN:
          </Text>
          <Text
            style={styles.selectableText}
            onPress={() => this.selectOrigin()}>
            {this.state.recipe.origin_name}
          </Text>
        </View>
        <View style={styles.underline}></View>

        <View style={styles.row}>
          <Text style={styles.inputLabel}>
            METHOD:
          </Text>
          <Text
            style={styles.selectableText}>
            STANDARD
          </Text>
        </View>
        <View style={styles.underline}></View>

        {this.renderStepListView()}

        <View style={styles.row_center}>
          <View style={styles.button}>
            <Text
              style={styles.button_text}
              onPress={() => this.addNewStep()}>＋ ADD A STEP</Text>
          </View>
        </View>

      </View>
    );
  }
});

module.exports = RecipeView;
