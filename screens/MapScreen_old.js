import React, { Component } from 'react';
import { View as ViewReactNative, WebView } from 'react-native';
import { Button } from 'react-native-elements';

import { endHtml } from '../utils/end';
import { beginHtml } from '../utils/begin';
import { initialMap } from '../openalyers/initialMap';
import { onPressButton } from '../openalyers/onPress';

class MapScreen extends Component {

  render() {
    const html1 = `${beginHtml}${initialMap}${endHtml}`;
    const html = `${beginHtml}${onPressButton}${endHtml}`;

    return (
       <ViewReactNative style={{flex: 1}}>
          <WebView
              style={{flex: 1}}
              ref={webview => { this.webview = webview; }}
              source={{html}}
              /* onMessage={this.onMessage}*/
              /*useWebKit*/
          />
          <ViewReactNative style={styles.buttonContainer}>
            <Button
                large
                title="Search This Area"
                backgroundColor="#009688"
                icon={{name: 'search'}}
                onPress={() => {}}
            />
          </ViewReactNative>
        </ViewReactNative>
    );
  }
}

const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
};

export default MapScreen;