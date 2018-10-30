export const initialMap =
    `
    const osmSource =  new ol.source.OSM();
    const map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: osmSource
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([19.926189, 50.057678]),
          zoom: 16,
        })
      });
`;