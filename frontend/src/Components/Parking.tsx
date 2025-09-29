import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { Popup } from 'leaflet'
import { LatLng } from 'leaflet'
const Parking = () => {
  return (
    <div>
      <MapContainer center={[  19.198499 ,  72.95409269999999]} //
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "600px", width: "100%" }} // 19.198499
      
      >
         <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                >
                </TileLayer>

      </MapContainer>
    </div>
  )
}

export default Parking
//19.1988117   and 72.9539231