import React, { useState, useEffect } from 'react';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import * as styles from './map.module.css';

import kioskData from '../data/kiosk_data.json';
import L from 'leaflet';
import { navigate } from 'gatsby';

var svgIcon = null;

if (typeof window !== 'undefined') {
  svgIcon = L.divIcon({
    html: `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"> <path stroke-width="0" fill="#e9b11b" d="m482,870q-12,0 -21,-7t-13,-18q-24,-73 -60,-121t-70,-92q-34,-44 -58,-91.5t-24,-118.5q0,-103 71.5,-174.5t174.5,-71.5q103,0 174.5,71.5t71.5,174.5q0,71 -24,118.5t-58,91.5q-34,44 -70,92t-60,121q-4,11 -13,18t-21,7z" id="svg_1" stroke="#e9b11b"/> <path fill="#ffffff" stroke-width="0" id="svg_2" d="m479.00119,495.49981c-33.9779,0 -61.5,-27.5221 -61.5,-61.5c0,-33.9779 27.5221,-61.5 61.5,-61.5c33.9779,0 61.5,27.5221 61.5,61.5c0,33.9779 -27.5221,61.5 -61.5,61.5z" opacity="undefined" stroke="#e9b11b"/></svg>`,
    className: '',
    iconSize: [34, 44],
  });
}

const createClusterCustomIcon = function (cluster) {
  return L.divIcon({
    html: `<span style="font-weight: 400; color: #e9b11b;">${cluster.getChildCount()}</span>`,
    className: styles.marker,
    iconSize: L.point(35, 35, true),
  });
};

const KioskMap = function () {
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [bbox, setBbox] = useState([]);

    const map = useMap();

    useEffect(() => {
      map.locate().on('locationfound', function (e) {
        setPosition(e.latlng);
        map.setView(e.latlng, map.getZoom(), { animate: false });
        const radius = e.accuracy;
        const circle = L.circle(e.latlng, radius);
        circle.addTo(map);
        setBbox(e.bounds.toBBoxString().split(','));
      });
    }, [map]);

    return position === null ? null : <Marker position={position}></Marker>;
  }

  return (
    <MapContainer
      className={styles.mapContainer}
      center={[50.1109, 8.6821]}
      zoom={16}
      scrollWheelZoom={true}
    >
      <LocationMarker />
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        ext='png'
        url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
      />
      <MarkerClusterGroup
        iconCreateFunction={createClusterCustomIcon}
        chunkedLoading
        maxClusterRadius={35}
        polygonOptions={{
          fillColor: 'lightgrey',
          color: 'grey',
          weight: 2,
          opacity: 1,
          fillOpacity: 0.5,
        }}
      >
        {kioskData.map(function (data) {
          return (
              <Marker
    key={data.kioskId}
    position={[data.address.geolat, data.address.geolng]}
    icon={svgIcon}
  >
    <Popup>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '4px 0' }}>{data.name}</h4>
        <p style={{ fontSize: '0.9em', margin: 0 }}>
          {data.address.street} {data.address.number}<br />
        </p>
        <button
          style={{
            marginTop: '6px',
            padding: '4px 8px',
            background: '#e9b11b',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/kiosk?id=' + data.kioskId)}
        >
          View Details
        </button>
      </div>
    </Popup>
  </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default KioskMap;
