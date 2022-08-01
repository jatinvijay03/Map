import maplibregl from 'maplibre-gl';

function Layer(Map, id, type, data, paint) {

  Map.on('load', () => {

    Map.addLayer({
      'id': id,
      'type': type,
      'source': {
        'type': 'geojson',
        'data': data
      },

      'paint': paint,
      'layout':{
        'visibility':'none'
      }
      
    });


    Map.on('click', id, (e) => {
      new maplibregl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("<p> Name: " + e.features[0].properties.Name_1 + "</p>"+
        "<p>No: " + e.features[0].properties.No + "</p>")
        .addTo(Map);
    });
  });



}

export default Layer;