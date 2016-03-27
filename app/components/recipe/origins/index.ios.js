'use strict';

var React = require('react-native');

var {
  Text,
  View,
  ListView,
} = React;

var styles = require("./style");

//View Elements
var OriginCell = require("./elements/origin_cell");

var ViewReactClass = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false,
    };
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
    var responseData = [
      {
        name: 'KENYA',
      },
      {
        name: 'ETHIOPIA',
      },
      {
        name: 'COSTARICA',
      },
      {
        name: 'BRAZIL',
      }
    ];
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(responseData),
      loaded: true
    });
  },
  render: function() {
    if(!this.state.loaded){
      return(
        <View style={styles.container}>
        <Text style={styles.loadingText}>
          Fetching Origins...
        </Text>
      </View>
      );
    }
    return (
      this.renderListView()
    );
  },
  renderListView: function(){
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderOriginCell}
        style={styles.placesListView}/>
    );
  },
  renderOriginCell: function(place, sectionID, rowID){
    return(
      <OriginCell
        onSelect={() => this.selectOrigin(place)}
        rowID={rowID}
        sectionID={sectionID}
        place={place}/>
    );
  },
  selectOrigin: function(place){
    this.props.navigator.pop();
  },

});
module.exports = ViewReactClass;
