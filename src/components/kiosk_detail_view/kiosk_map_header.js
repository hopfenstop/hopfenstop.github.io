import React from "react"
import { MapContainer, TileLayer, Marker } from "react-leaflet"

const KioskHeaderMap = ({lat, long}) => (
  <MapContainer style={{ height: '250px' }} center={[lat, long]} zoom={16} scrollWheelZoom={false}>
    <TileLayer
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          ext='png'
          url='https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}'
    />
    <Marker 
        position={[lat, long]}
    >
    </Marker>
</MapContainer>
)

export default KioskHeaderMap