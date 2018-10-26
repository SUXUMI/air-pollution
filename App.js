import React, { Component} from 'react';
import { View } from 'react-native';
import MapScreen from './screens/MapScreen';
import WelcomeScreen from './screens/WelcomeScreen'
import { createBottomTabNavigator} from 'react-navigation';

export default class App extends Component {

  render() {

    const MainNavigator = createBottomTabNavigator({
      welcome: WelcomeScreen,
      map: MapScreen
    }, {
      navigationOptions: {
        tabBarVisible: false
      }
    });

    return (
        <View style={{flex:1}}>
          <MainNavigator/>
        </View>
    );
  }
}
