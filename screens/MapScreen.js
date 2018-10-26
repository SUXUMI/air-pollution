import React, { Component } from 'react';
import { View, WebView } from 'react-native';
import { Button } from 'react-native-elements';
import { html } from '../utils/openlayerMapInitial';

class MapScreen extends Component {

  render() {
    return (
        <View style={{flex: 1}}>
          <WebView
              style={{flex:1}}
              source={{html}}
              useWebKit
              />
          <View style={styles.buttonContainer}>
            <Button
                large
                title="Search This Area"
                backgroundColor="#009688"
                icon={{name: 'search'}}
                onPress={()=>{}}
            />
          </View>
        </View>
    );
  }
}

const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  }
};

export default MapScreen;