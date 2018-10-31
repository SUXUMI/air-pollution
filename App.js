import React, { Component} from 'react';
import { View } from 'react-native';
import MapScreen from './screens/MapScreen';
import WelcomeScreen from './screens/WelcomeScreen'
import { createBottomTabNavigator} from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers/index';

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

    const store = createStore(
        reducers,
        composeWithDevTools(applyMiddleware(thunk)),
    );

    return (
        <Provider store={store}>
        <View style={{flex:1}}>
          <MainNavigator/>
        </View>
        </Provider>
    );
  }
}
