import React from 'react';
import { Text, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { marker } from './map.module.css';

import kioskData from '../data/kiosk_data.json';
import L from 'leaflet';
import { navigate } from 'gatsby';
import { useMapEvents } from 'react-leaflet';


const KioskMap = function(){
  
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [bbox, setBbox] = useState([]);

    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        const radius = e.accuracy;
        const circle = L.circle(e.latlng, radius);
        circle.addTo(map);
        setBbox(e.bounds.toBBoxString().split(","));
      });
    }, [map]);

    return position === null ? null : (
      <Marker position={position}>
      </Marker>
    );
  }

  return(
    <MapContainer
      style={{ height: '600px' }}
      center={[50.1109, 8.6821]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <LocationMarker />
      <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        ext='png'
        url='https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}'
      />
        {kioskData.map(function (data) {
          return (
            <Marker
              id={data.kioskId}
              eventHandlers={{
                click: function (event) {
                  navigate(
                    '/kiosk_detail_view?kiosk_id=' + event.target.options.id
                  );
                },
              }}
              key={data.kioskId}
              position={[data.address.geolat, data.address.geolng]}
            >
              <Popup>{data.name}</Popup>
            </Marker>
          );
        })}
    </MapContainer>
  );
}

export default KioskMap;
