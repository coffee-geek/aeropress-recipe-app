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

var StepView = React.createClass({
  getInitialState: function() {
    return {
      step: Object.assign({}, this.props.step),
    };
  },
  formatNumber: function(num) {
    if (num) {
      return String(num);
    }
    return String(0);
  },
  render: function() {
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.inputLabel}>
              BEANS:
            </Text>
            <TextInput
              keyboardType={"numbers-and-punctuation"}
              style={styles.textInput}
              value={this.formatNumber(this.state.step.beans_amount)}/>
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
              value={this.formatNumber(this.state.step.water_amount)}/>
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
              value={this.formatNumber(this.state.step.water_temp)}/>
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
      </TouchableHighlight>
    );
  }
});

module.exports = StepView;
