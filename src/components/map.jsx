import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.scss';
import Layer from './layer';
import data from "../data.json";


export default function Map(props) {
  //Initialize state

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(72.8311);
  const [lat] = useState(21.1702);
  const [zoom] = useState(10);
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
        for (var i = 0; i < layerList.length; i++) {

          if (props.checked.includes(layerList[i].value)) {
            map.current.setLayoutProperty(layerList[i].value, 'visibility', 'visible');

          }
          else {
            map.current.setLayoutProperty(layerList[i].value, 'visibility', 'none');
          };


        };
      });


      return;
    }; //stops map from intializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "/mapStyle.json",
      center: [lng, lat],
      zoom: zoom
    });
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    //Generating layers

    for (var i = 0; i < layerList.length; i++) {
      Layer(map.current, layerList[i].id, layerList[i].type, layerList[i].source, "", {}, 0, layerList[i].paint, layerList[i].layout, layerList[i].filter);
    };
  }, [props.checked]);




  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />


    </div>
  );
}