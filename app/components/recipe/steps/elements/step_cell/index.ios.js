'use strict';

var React = require('react-native');

var {
  Text,
  View,
  TouchableHighlight,
  Image,
} = React;

let styles = require("./style");

let StepView = React.createClass({
  getInitialState() {
    return {
      step: Object.assign({}, this.props.step),
    };
  },
  formatNumber(num) {
    if (num) {
      return String(num);
    }
    return String(0);
  },
  renderBeanAmount() {
    if (! this.state.step.beans_amount) {
      return null;
    }
    return (
      <View>
        <View style={styles.row}>
          <Text style={styles.inputLabel}>
            BEANS:
          </Text>
          <Text style={styles.inputUnit}>{this.formatNumber(this.state.step.beans_amount)} g</Text>
        </View>
        <View style={styles.underline}></View>
      </View>
    );
  },
  renderWaterAmount() {
    if (! this.state.step.water_amount) {
      return null;
    }
    return (
      <View>
        <View style={styles.row}>
          <Text style={styles.inputLabel}>
            HOT WATER:
          </Text>
          <Text style={styles.inputUnit}>{this.formatNumber(this.state.step.water_amount)} ml</Text>
        </View>
        <View style={styles.underline}></View>
      </View>
    );
  },
  renderWaterTemp() {
    if (! this.state.step.water_temp) {
      return null;
    }
    return (
      <View>
        <View style={styles.row}>
          <Text style={styles.inputLabel}>
            WATER TEMP:
          </Text>
          <Text style={styles.inputUnit} >{this.formatNumber(this.state.step.water_temp)} ℃</Text>
        </View>
        <View style={styles.underline}></View>
      </View>
    );
  },
  renderNote() {
    if (! this.state.step.note) {
      return null;
    }
    return (
      <View style={styles.row}>
        <Text
          style={styles.note}
          multiline={true}>{this.state.step.note}</Text>
      </View>
    );
  },
  render() {
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
        <View style={styles.container}>
          <View style={styles.leftPanel}>
            <View style={styles.numCircle}>
              <Text style={styles.num}>{this.props.rowID}</Text>
            </View>
          </View>
          <View style={styles.rightPanel}>
            {this.renderBeanAmount()}
            {this.renderWaterAmount()}
            {this.renderWaterTemp()}
            {this.renderNote()}
          </View>
        </View>
      </TouchableHighlight>
    );
  }
});

module.exports = StepView;
