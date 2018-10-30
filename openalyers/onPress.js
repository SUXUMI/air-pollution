export const onPressButton =
    `
const krakow1 = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([19.926189, 50.057678]),),
  name: 'krakow1',
});
const krakow2 = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([19.949189, 50.010575]),),
  name: 'krakow2',
});
const krakow3 = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([20.053492, 50.069308]),),
  name: 'krakow3',
});
const krakow4 = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([19.946008, 50.057447]),),
  name: 'krakow4',
});
const krakow5 = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([19.895358, 50.081197]),),
  name: 'krakow5',
});
const krakow6 = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([20.018269, 50.098508]),),
  name: 'krakow6',
});
const krakow7 = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([20.122561, 50.100569]),),
  name: 'krakow7',
});

/*krakow1.setStyle(new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Map_marker_font_awesome.svg/200px-Map_marker_font_awesome.svg.png',
  })
}));*/

const iconLayerSource = new ol.source.Vector({
  features: [krakow1, krakow2, krakow3, krakow4, krakow5, krakow6, krakow7]
});

const iconLayer = new ol.layer.Vector({
  source: iconLayerSource,
  style: new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
     src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Map_marker_font_awesome.svg/100px-Map_marker_font_awesome.svg.png',
    })
  })
});


const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
    iconLayer
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([19.926189, 50.057678]),
    zoom: 14
  })
});
    `;