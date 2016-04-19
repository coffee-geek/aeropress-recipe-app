'use strict';

let React = require('react-native');

let {
  Text,
  TextInput,
  View,
  Image,
} = React;

let styles = require("./style");
let StepCell = require("./elements/step_cell");

let StepListView = React.createClass({
  selectStep(step){
    let route = require("../../../router.js").getEditStepRoute(step);
    this.props.navigator.push(route);
  },
  render() {
    if (!this.props.steps || this.props.steps.length === 0) {
      return null;
    }
    return (
      <View>
        <Text style={styles.title}>STEPS</Text>
        {this.props.steps.map((step, index)=> {
          return (
            <StepCell
              rowID={index+1}
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
