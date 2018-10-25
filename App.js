import React, { Component} from 'react';
import { Text, ScrollView } from 'react-native';
import { data1 } from './data/data1';

export default class App extends Component {

  renderData() {
    return data1.map(name => <Text key={name.id}>{name.stationName}</Text>);
  };

  render() {
    return (
        <ScrollView>
         {this.renderData()}
        </ScrollView>
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
