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
        id: 1,
        name: 'KENYA',
      },
      {
        id: 2,
        name: 'ETHIOPIA',
      },
      {
        id: 3,
        name: 'COSTARICA',
      },
      {
        id: 4,
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
  renderOriginCell: function(origin, sectionID, rowID){
    return(
      <OriginCell
        onSelect={() => this.selectOrigin(origin)}
        rowID={rowID}
        sectionID={sectionID}
        origin={origin}/>
    );
  },
  selectOrigin: function(origin){
    this.props.setOrigin(origin);
    this.props.navigator.pop();
  },

});
module.exports = ViewReactClass;
