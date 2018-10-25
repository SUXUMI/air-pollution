import React, { Component } from 'react';
import { View, WebView } from 'react-native';
import { Button } from 'react-native-elements';

class Map extends Component {

  state = {
    mapLoaded: false,
    region: {
      latitude: 50.057678,
      longitude: 19.926189,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04,
    },
  };

  render() {
    const html =
        `<!DOCTYPE html>
    <html>
      <head>
        <title>Simple Map</title>
        <link rel="stylesheet" href="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.2.0/css/ol.css" type="text/css">
    <script src="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.2.0/build/ol.js"></script>
    <title>OpenLayers example</title>
      </head>
      <body>
        <div id="map" class="map"></div>
        <script type="text/javascript">
      let map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([19.926189, 50.057678]),
          zoom: 15
        })
      });
    </script>
      </body>
    </html>`;

    return (
        <View style={{flex: 1}}>
          <WebView
              style={{flex: 1}}
              ref={webview => { this.webview = webview; }}
              source={{html}}
              onMessage={this.onMessage}/>
          <View style={styles.buttonContainer}>
            <Button
                large
                title="Search This Area"
                backgroundColor="#009688"
                icon={{name: 'search'}}
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
  },
};

export default Map;