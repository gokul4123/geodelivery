import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapComponent = ({ location, updateLocation }) => {
  const markerRef = useRef(null);

  const MapUpdater = () => {
    const map = useMap();
    useEffect(() => {
      map.setView([location.lat, location.lng], 13); 
      if (markerRef.current) {
        markerRef.current.setLatLng([location.lat, location.lng]); 
      }
    }, [location, map]);
    return null;
  };


  const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41], 
    iconAnchor: [12, 41], 
    popupAnchor: [1, -34], 
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41], 
  });

  return (
    <MapContainer center={[location.lat, location.lng]} zoom={13} className="mapco">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={[location.lat, location.lng]}
        draggable={true}
        eventHandlers={{
          dragend: (e) => {
            const marker = e.target;
            const position = marker.getLatLng();
            updateLocation(position.lat, position.lng, "Custom Location"); 
          },
        }}
        ref={markerRef}
        icon={customIcon} 
      />
      <MapUpdater />
    </MapContainer>
  );
};

export default MapComponent;
