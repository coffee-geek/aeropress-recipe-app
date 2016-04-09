'use strict';

var React = require('react-native');

var {
  Text,
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
            <Text style={styles.inputUnit}>{this.formatNumber(this.state.step.beans_amount)} g</Text>
          </View>
          <View style={styles.underline}></View>

          <View style={styles.row}>
            <Text style={styles.inputLabel}>
              HOT WATER:
            </Text>
            <Text style={styles.inputUnit}>{this.formatNumber(this.state.step.water_amount)} ml</Text>
          </View>
          <View style={styles.underline}></View>

          <View style={styles.row}>
            <Text style={styles.inputLabel}>
              WATER TEMP:
            </Text>
            <Text style={styles.inputUnit} >{this.formatNumber(this.state.step.water_temp)} ℃</Text>
          </View>
          <View style={styles.underline}></View>

          <View style={styles.row}>
            <Text
              style={styles.note}
              multiline={true}
              placeholder={"NOTE"}></Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
});

module.exports = StepView;
