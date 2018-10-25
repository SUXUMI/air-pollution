import React, { Component} from 'react';
import { View } from 'react-native';
import Map from './components/Map';

export default class App extends Component {

  render() {
    return (
        <View style={{flex:1}}>
         <Map style={{flex:1}}/>
        </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
