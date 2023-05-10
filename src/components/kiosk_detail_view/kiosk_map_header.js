import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

var svgIcon = null;

if (typeof window !== 'undefined') {
  svgIcon = L.divIcon({
    html: `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"> <path stroke-width="0" fill="#e9b11b" d="m482,870q-12,0 -21,-7t-13,-18q-24,-73 -60,-121t-70,-92q-34,-44 -58,-91.5t-24,-118.5q0,-103 71.5,-174.5t174.5,-71.5q103,0 174.5,71.5t71.5,174.5q0,71 -24,118.5t-58,91.5q-34,44 -70,92t-60,121q-4,11 -13,18t-21,7z" id="svg_1" stroke="#e9b11b"/> <path fill="#ffffff" stroke-width="0" id="svg_2" d="m479.00119,495.49981c-33.9779,0 -61.5,-27.5221 -61.5,-61.5c0,-33.9779 27.5221,-61.5 61.5,-61.5c33.9779,0 61.5,27.5221 61.5,61.5c0,33.9779 -27.5221,61.5 -61.5,61.5z" opacity="undefined" stroke="#e9b11b"/></svg>`,
    className: '',
    iconSize: [34, 44],
  });
}

const KioskHeaderMap = ({ lat, long }) => (
  <MapContainer
    style={{ height: '250px' }}
    center={[lat, long]}
    zoom={16}
    scrollWheelZoom={false}
  >
    <TileLayer
      attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      ext='png'
      url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
    />

    <Marker position={[lat, long]} icon={svgIcon}></Marker>
  </MapContainer>
);

export default KioskHeaderMap;
