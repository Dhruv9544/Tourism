// import React, { useEffect } from "react";

// const HighlightRegion = () => {
//   const [map, setMap] = React.useState(null);

//   useEffect(() => {
//     const map = new ol.Map({
//       target: "map",
//     });

//     const canvasLayer = new ol.CanvasLayer({
//       canvas: document.querySelector("#canvas"),
//     });

//     const regionFeature = new ol.Feature({
//       geometry: ol.geom.createPolygon([
//         [0, 0],
//         [100, 0],
//         [100, 100],
//         [0, 100],
//         [0, 0],
//       ]),
//     });

//     const regionStyle = new ol.style.Style({
//       fill: new ol.style.Fill({
//         color: "rgba(255, 0, 0, 0.5)",
//       }),
//       stroke: new ol.style.Stroke({
//         color: "red",
//         width: 2,
//       }),
//     });

//     regionFeature.setStyle(regionStyle);

//     canvasLayer.addFeature(regionFeature);

//     map.addLayer(canvasLayer);

//     const hoverInteraction = new ol.interaction.HoverInteraction({
//       handleEvent: (event) => {
//         const feature = event.target;
//         if (feature === regionFeature) {
//           regionFeature.setStyle(
//             new ol.style.Style({
//               fill: new ol.style.Fill({
//                 color: "rgba(255, 0, 0, 1)",
//               }),
//               stroke: new ol.style.Stroke({
//                 color: "red",
//                 width: 4,
//               }),
//             })
//           );
//         } else {
//           regionFeature.setStyle(regionStyle);
//         }
//       },
//     });

//     map.addInteraction(hoverInteraction);

//     setMap(map);

//     return () => {
//       map.dispose();
//     };
//   }, []);

//   return (
//     <div>
//       <script src="https://cdn.jsdelivr.net/npm/ol@latest/dist/ol.js"></script>
//       <canvas id="canvas" style="width: 100%; height: 500px;" />
//       <div id="map" style="width: 100%; height: 500px;" />
//     </div>
//   );
// };

// export default HighlightRegion;
