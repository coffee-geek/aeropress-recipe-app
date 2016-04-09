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
        id: 1,
        name: 'Light up coffee',
      },
      {
        id: 2,
        name: 'PNB Coffee',
      },
      {
        id: 3,
        name: 'Light up coffee',
      },
      {
        id: 4,
        name: '猿田彦コーヒー　アトリエ仙川',
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
      <View style={styles.container}>
        {this.renderListView()}
      </View>
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
    this.props.setPlace(place);
    this.props.navigator.pop();
  },

});
module.exports = ViewReactClass;
