'use strict';

var React = require('react-native');

let {
  Text,
  TextInput,
  View,
  ListView,
  Image,
  ScrollView,
  Dimensions,
} = React;
import Picker from 'react-native-picker'

let styles = require("./style");
let PlacesView = require("./places");
let OriginsView = require("./origins");
let StepListView = require("./steps");


let RecipeView = React.createClass({
  getInitialState() {
    return {
      recipe: Object.assign({}, this.props.recipe),
    };
  },
  selectPlace(){
    let route = require("../../router.js").getPlacesRoute({
        recipe: this.state.recipe,
        setPlace: (place) => this.setPlace(place),
    });
    this.props.navigator.push(route);
  },
  selectOrigin(){
    let route = require("../../router.js").getOriginsRoute({
        recipe: this.state.recipe,
        setOrigin: (origin) => this.setOrigin(origin),
    });
    this.props.navigator.push(route);
  },
  setPlace(place) {
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
  toggleMethodPicker: function() {
    this.picker.toggle();
  },
  renderMethodPicker: function() {
    return (
      <Picker
        ref={picker => this.picker = picker}
        style={{height: 320}}
        selectedValue={this.state.recipe.method_name}
        onValueChange={(name) => console.log(name) }
        pickerData={['STANDARD', 'INVERTED']}
        onPickerDone={(val)=> {
          this.state.recipe.method_name = val;
          this.setState({
            recipe: this.state.recipe
          })
        }}>
      </Picker>
    );
  },
  render: function() {
    return (
      <View style={{flex:1}}>
        <ScrollView style={styles.container}>
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
              style={styles.selectableText}
              onPress={() => this.toggleMethodPicker()}>
              {this.state.recipe.method_name}
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
        </ScrollView>

          {this.renderMethodPicker()}
      </View>
    );
  }
});

module.exports = RecipeView;
