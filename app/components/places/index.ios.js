'use strict';

var React = require('react-native');

var {
  Text,
  View,
  ListView,
} = React;

var styles = require("./style");

//View Elements
var PlaceCell = require("./elements/place_cell");

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
        name: 'Light up coffee',
      },
      {
        name: 'PNB Coffee',
      },
      {
        name: 'Light up coffee',
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
          Fetching Places...
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
        renderRow={this.renderPlaceCell}
        style={styles.placesListView}/>
    );
  },
  renderPlaceCell: function(place, sectionID, rowID){
    return(
      <PlaceCell
        onSelect={() => this.selectPlace(place)}
        rowID={rowID}
        sectionID={sectionID}
        place={place}/>
    );
  },
  selectPlace: function(place){
    this.props.navigator.pop();
  },

});
module.exports = ViewReactClass;
