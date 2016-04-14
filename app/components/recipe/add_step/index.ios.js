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
              value={this.state.step.beans_amount}
              onChangeText={(val) => this.setState({state: Object.assign(this.state.step, {beans_amount: val})})}/>
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
              value={this.state.step.water_amount}
              onChangeText={(val) => this.setState({state: Object.assign(this.state.step, {water_amount: val})})}/>
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
              value={this.state.step.water_temp}
              onChangeText={(val) => this.setState({state: Object.assign(this.state.step, {water_temp: val})})}/>
            <Text style={styles.inputUnit} >℃</Text>
          </View>
          <View style={styles.underline}></View>

          <View style={styles.row}>
            <TextInput
              style={styles.note}
              multiline={true}
              placeholder={"NOTE"}
              value={this.state.step.note}
              onChangeText={(val) => this.setState({state: Object.assign(this.state.step, {note: val})})}></TextInput>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
});

module.exports = StepView;
