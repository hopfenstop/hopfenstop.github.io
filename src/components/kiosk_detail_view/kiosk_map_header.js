import React from "react"
import { MapContainer, TileLayer, Marker } from "react-leaflet"

const KioskHeaderMap = ({lat, long}) => (
  <MapContainer style={{ height: '300px' }} center={[lat, long]} zoom={16} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
    <Marker 
        position={[lat, long]}
    >
    </Marker>
</MapContainer>
)

export default KioskHeaderMap