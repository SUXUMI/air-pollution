import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import MapScreen from './screens/MapScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ShowScreen from './screens/ShowScreen';
import { store } from './store';

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
