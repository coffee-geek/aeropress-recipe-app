'use strict';

var React = require('react-native');

var {
  Text,
  TextInput,
  View,
  Image,
} = React;

var styles = require("./style");
var StepCell = require("./elements/step_cell");

var StepListView = React.createClass({
  selectStep: function(step){
    let route = require("../../../router.js").getEditStepRoute(step);
    this.props.navigator.push(route);
  },
  render: function() {
    return (
      <View>
        {this.props.steps.map((step, index)=> {
          return (
            <StepCell
              key={index}
              onSelect={() => this.selectStep(step)}
              step={step}/>
          );
        })}
      </View>
    );
  }
});

module.exports = StepListView;
