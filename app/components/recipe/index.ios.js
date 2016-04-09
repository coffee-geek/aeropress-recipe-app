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
var PlacesView = require("./places");
var OriginsView = require("./origins");

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
  formatNumber: function(num) {
    if (num) {
      return String(num);
    }
    return String(0);
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
            BEANS:
          </Text>
          <TextInput
            keyboardType={"numbers-and-punctuation"}
            style={styles.textInput}
            value={this.formatNumber(this.state.recipe.beans_amount)}/>
          <Text style={styles.inputUnit}>g</Text>
        </View>
        <View style={styles.underline}></View>

        <View style={styles.row}>
          <Text style={styles.inputLabel}>
            HOT WATER:
          </Text>
          <TextInput
            keyboardType={"numbers-and-punctuation"}
            style={styles.textInput}
            value={this.formatNumber(this.state.recipe.water_amount)}/>
          <Text style={styles.inputUnit}>ml</Text>
        </View>
        <View style={styles.underline}></View>

        <View style={styles.row}>
          <Text style={styles.inputLabel}>
            WATER TEMP:
          </Text>
          <TextInput
            keyboardType={"numbers-and-punctuation"}
            style={styles.textInput}
            value={this.formatNumber(this.state.recipe.water_temp)}/>
          <Text style={styles.inputUnit} >℃</Text>
        </View>
        <View style={styles.underline}></View>

        <View style={styles.row}>
          <TextInput
            style={styles.note}
            multiline={true}
            placeholder={"NOTE"}></TextInput>
        </View>

      </View>
    );
  }
});

module.exports = RecipeView;
