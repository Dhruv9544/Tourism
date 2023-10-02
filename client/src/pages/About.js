import React, { useEffect } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import MVT from "ol/format/MVT";
import VectorTileLayer from "ol/layer/VectorTile";
import VectorTileSource from "ol/source/VectorTile";
import { Style, Fill, Stroke } from "ol/style";
import { apply } from "ol-mapbox-style";

const About = () => {
  useEffect(() => {
    const map = new Map({
      target: "map",
      layers: [
        new VectorTileLayer({
          source: new VectorTileSource({
            format: new MVT(),
            url: "https://api.maptiler.com/tiles/ee3c9cc9-0e13-4ebf-af0d-278cd7f925ce/{z}/{x}/{y}.pbf?key=zdUQMWrOvTTP0RjruJJK",
          }),
          style: function (feature) {
            // Your style function here if needed
          },
        }),
      ],
      view: new View({
        center: fromLonLat([71.332584, 22.432224]),
        zoom: 12,
      }),
    });

    // Apply MapTiler style to the map
    // apply(
    //   map,
    //   "https://api.maptiler.com/tiles/ee3c9cc9-0e13-4ebf-af0d-278cd7f925ce/style.json?key=zdUQMWrOvTTP0RjruJJK"
    // );

    return () => {
      // Clean up code if needed
      map.setTarget(null);
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
};

export default About;
