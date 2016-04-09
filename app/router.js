'use strict';

var React = require('react-native');
var {
  View,
  Text,
  Image
} = React;

import ExSceneConfigs from '@exponent/react-native-navigator/ExSceneConfigs';
let RecipeView = require('./components/recipe');
var Button = require('react-native-button');
let OriginsView = require('./components/recipe/origins');
let PlacesView = require('./components/recipe/places');
let StepView = require('./components/recipe/add_step');

let Router = {
  getMainRoute() {
      return {
        getSceneClass() {
          return require('./components/main')
        }
      }
  },

  getRecipeRoute(recipe) {
      return {
        renderScene(navigator) {
          return (
            <RecipeView
              navigator={navigator}
              recipe={recipe} />
          );
        }
      }
  },

  getNewRecipeRoute() {
      return {
        renderScene(navigator) {
          return (
            <RecipeView
              navigator={navigator}
              recipe={{}} />
          );
        },
        configureScene(route) {
          return ExSceneConfigs.FloatFromBottom;
        },
        renderLeftButton(navigator) {
          return (
            <Button onPress={()=> navigator.pop()}>
              CLOSE
            </Button>
          );
        },
        renderRightButton(navigator) {
          return (
            <Button onPress={()=> navigator.pop()}>
              SAVE
            </Button>
          );
        }
      }
  },

  getOriginsRoute(passProps) {
    return {
      renderScene(navigator) {
        return (
          <OriginsView
            navigator={navigator}
            recipe={passProps.recipe}
            setOrigin={passProps.setOrigin} />
        );
      }
    }
  },

  getPlacesRoute(passProps) {
    return {
      renderScene(navigator) {
        return (
          <PlacesView
            navigator={navigator}
            recipe={passProps.recipe}
            setPlace={passProps.setPlace} />
        );
      }
    }
  },

  getNewStepRoute() {
    return {
      renderScene(navigator) {
        return (
          <StepView
            navigator={navigator}/>
        );
      },
      configureScene(route) {
        return ExSceneConfigs.FloatFromBottom;
      },
      renderLeftButton(navigator) {
        return (
          <Button onPress={()=> navigator.pop()}>
            CANCEL
          </Button>
        );
      },
      renderRightButton(navigator) {
        return (
          <Button onPress={()=> navigator.pop()}>
            ADD
          </Button>
        );
      }
    }
  },
  getEditStepRoute() {
    return {
      renderScene(navigator) {
        return (
          <StepView
            navigator={navigator}/>
        );
      },
      configureScene(route) {
        return ExSceneConfigs.FloatFromBottom;
      },
      renderLeftButton(navigator) {
        return (
          <Button onPress={()=> navigator.pop()}>
            CANCEL
          </Button>
        );
      },
      renderRightButton(navigator) {
        return (
          <Button onPress={()=> navigator.pop()}>
            EDIT
          </Button>
        );
      }
    }
  }
};

var styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleName: {
    marginLeft: 5,
    fontWeight: 'bold'
  },
  titlePhoto: {
    height: 30,
    width: 30,
    borderRadius: 15,

  }

};

module.exports = Router
