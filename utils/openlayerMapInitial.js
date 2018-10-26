export const html =
    `<html>
      <head>
        <title>Simple Map</title>
        <link rel="stylesheet" href="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.2.0/css/ol.css" type="text/css">
    <script src="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.2.0/build/ol.js"></script>
    <title>OpenLayers example</title>
      </head>
      <body>
        <div id="map" class="map"></div>
        <script type="text/javascript">
      const map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([19.926189, 50.057678]),
          zoom: 16,
        })
      });
    </script>
      </body>
    </html>`;