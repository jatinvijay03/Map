import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.scss';
import Layer from './layer';
import data from "../data.json";






export default function Map() {
  //Initialize state

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(72.8311);
  const [lat] = useState(21.1702);
  const [zoom] = useState(10);

  //List of Theme Colors

  var colorList = ["red", "blue", "green", "brown", "orange", "pink"];



  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
      center: [lng, lat],
      zoom: zoom
    });
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    var layerList = [];


    //DFS Function

    function traverse(arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].type === "parent") {
          traverse(arr[i].children);
        }
        else {
          layerList.push(arr[i]);
        }
      }
    }

    traverse(data.data);
    console.log(layerList);
    
    //Generating layers

    for (var i = 0; i < layerList.length; i++) {

      if (layerList[i].type === "line")
        Layer(map.current, layerList[i].id, layerList[i].type, layerList[i].data, { "line-color": colorList[i] });
      else if (layerList[i].type === "fill")
        Layer(map.current, layerList[i].id, layerList[i].type, layerList[i].data, {
          "fill-color": colorList[i],
          "fill-opacity": 0.2
        });

    }




  });

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}