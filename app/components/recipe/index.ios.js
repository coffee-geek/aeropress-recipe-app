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
var PlacesView = require("./places")
var OriginsView = require("./origins")

var RecipeView = React.createClass({
  selectPlace: function(recipe){
    this.props.navigator.push({
      title: 'PLACE',
      component: PlacesView,
      passProps: {
          recipe: recipe,
      }
    });
  },
  selectOrigin: function(recipe){
    this.props.navigator.push({
      title: 'ORIGIN',
      component: OriginsView,
      passProps: {
          recipe: recipe,
      }
    });
  },
  formatNumber: function(num) {
    if (num) {
      return String(num);
    }
    return String(0);
  },
  render: function() {
    if (this.props.styles) {
      styles.container = this.props.styles;
    }
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.inputLabel}>
            PLACE:
          </Text>
          <Text
            style={styles.selectableText}
            onPress={this.selectPlace}>
            {this.props.recipe.store_name}
          </Text>
        </View>
        <View style={styles.underline}></View>

        <View style={styles.row}>
          <Text style={styles.inputLabel}>
            ORIGIN:
          </Text>
          <Text
            style={styles.selectableText}
            onPress={this.selectOrigin}>
            {this.props.recipe.origin_name}
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
            value={this.formatNumber(this.props.recipe.beans_amount)}/>
          <Text style={styles.inputUnit}>g</Text>
        </View>
        <View style={styles.underline}></View>

        <View style={styles.row}>
          <Text style={styles.inputLabel}>
            HOT WATER:
          </Text>
          <TextInput
            style={styles.textInput}
            value={this.formatNumber(this.props.recipe.water_amount)}/>
          <Text style={styles.inputUnit}>ml</Text>
        </View>
        <View style={styles.underline}></View>

        <View style={styles.row}>
          <Text style={styles.inputLabel}>
            WATER TEMP:
          </Text>
          <TextInput style={styles.textInput} value={String(this.props.recipe.water_temp)}></TextInput>
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
