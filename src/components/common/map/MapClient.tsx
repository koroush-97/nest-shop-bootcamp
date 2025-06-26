"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState } from "react";

// آیکن سفارشی
const customIcon = new L.Icon({
  iconRetinaUrl: "/leaflet/marker-icon-2x-gold.png",
  iconUrl: "/leaflet/marker-icon-2x-red.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapClient() {
  const [position, setPosition] = useState<[number, number]>([35.6892, 51.389]);

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom
      className="h-full w-full rounded-lg z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker
        position={position}
        icon={customIcon}
        eventHandlers={{
          dragend(e) {
            const marker = e.target;
            const newPos = marker.getLatLng();
            setPosition([newPos.lat, newPos.lng]);
          },
        }}
      >
        <Popup>موقعیت فعلی</Popup>
      </Marker>
    </MapContainer>
  );
}
