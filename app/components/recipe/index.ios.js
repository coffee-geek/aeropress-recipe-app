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
var PlacesView = require("../places")

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
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.inputLabel}>
            PLACE:
          </Text>
          <TextInput style={styles.textInput}
            onFocus={this.selectPlace}
            value={this.props.recipe.store_name}></TextInput>
        </View>
        <View style={styles.underline}></View>

        <View style={styles.row}>
          <Text style={styles.inputLabel}>
            ORIGIN:
          </Text>
          <TextInput style={styles.textInput} value={this.props.recipe.origin_name}></TextInput>
        </View>
        <View style={styles.underline}></View>

        <View style={styles.row}>
          <Text style={styles.inputLabel}>
            BEANS:
          </Text>
          <TextInput style={styles.textInput} value={String(this.props.recipe.beans_amount)}></TextInput>
          <Text style={styles.inputUnit}>g</Text>
        </View>
        <View style={styles.underline}></View>

        <View style={styles.row}>
          <Text style={styles.inputLabel}>
            HOT WATER:
          </Text>
          <TextInput style={styles.textInput} value={String(this.props.recipe.water_amount)}></TextInput>
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

      </View>
    );
  }
});

module.exports = RecipeView;
