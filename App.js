import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import MapScreen from './src/screens/MapScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ShowScreen from './src/screens/ShowScreen';
import { store } from './src/store';

export default class App extends Component {

  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: WelcomeScreen,
      main: createStackNavigator({
        map: MapScreen,
        show: ShowScreen,
      }),
    }, {
      navigationOptions: {
        tabBarVisible: false,
      },
    });

    return (
        <Provider store={store}>
          <View style={{flex: 1}}>
            <MainNavigator/>
          </View>
        </Provider>
    );
  }
}
