import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.scss';
import Layer from './layer';
import data from "../data.json";
import layers from "../mapStyle.json"

export default function Map(props) {
  //Initialize state

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(80);
  const [lat] = useState(24);
  const [zoom] = useState(4);
  var layerList = [];


  //Generating list of layer objects

  function traverse(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].type === "parent") {
        traverse(arr[i].children);
      }
      else {
        layerList.push(arr[i]);
      };
    };
  };

  traverse(data.data);
  





  useEffect(() => {
    if (map.current) {


      map.current.on('idle', () => {

        //Toggle Fuctionality for custom data
        for (var i = 0; i < layerList.length; i++) {

          if (props.checked.includes(layerList[i].value)) {
            map.current.setLayoutProperty(layerList[i].value, 'visibility', 'visible');

          }
          else {
            map.current.setLayoutProperty(layerList[i].value, 'visibility', 'none');
          };


        };

        //Toggle functionality for basemap data

        for (var i = 0; i < layers.layers.length; i++) {

          if (props.checkedBase.includes(layers.layers[i].id)) {
            map.current.setLayoutProperty(layers.layers[i].id, 'visibility', 'visible');

          }
          else {
            map.current.setLayoutProperty(layers.layers[i].id, 'visibility', 'none');
          };


        }
      }

      );



      return;
    }; //stops map from intializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
      center: [lng, lat],
      zoom: zoom
    });
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    //Generating layers

    for (var i = 0; i < layerList.length; i++) {
      Layer(map.current, layerList[i].id, layerList[i].type, layerList[i].source, "", {}, 0, layerList[i].paint, layerList[i].layout, layerList[i].filter);
    };

    for (var i = 0; i < layers.layers.length; i++) {
      props.checkedBase.push(layers.layers[i].id)
    }
  }, [props.checked, props.checkedBase]);
  //Set baseMap layers checked by default







  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />


    </div>
  );
}