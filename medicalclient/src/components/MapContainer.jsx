import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

const Pin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path
      fill="#FF0000"
      d="M12 0C8.15 0 5 3.15 5 7c0 5.25 7 17 7 17s7-11.75 7-17c0-3.85-3.15-7-7-7z"
    />
  </svg>
);

const MapContainer = ({
  onClose: onClose,
  isFromCreate,
  center = { lat: 59.95, lng: 30.33 },
  zoom = 11,
  setLongitude: setLongitude,
  setLatitude: setLatitude,
}) => {
  const [marker, setMarker] = useState(null);

  const handleClick = ({ lat, lng }) => {
    if (isFromCreate) {
      setMarker({ lat, lng });

      setLongitude(lng);
      setLatitude(lat);
    }
  };
  useEffect(() => {
    // Set the marker's position when the component mounts
    const initialPosition = { lat: 59.95, lng: 30.33 };
    setMarker(initialPosition);
  }, []);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "YOUR_GOOGLE_MAPS_API_KEY",
        }}
        defaultCenter={center}
        defaultZoom={zoom}
        onClick={handleClick}
      >
        {marker && <Pin lat={marker.lat} lng={marker.lng} />}
      </GoogleMapReact>
      {marker && (
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          Latitude: {marker.lat}, Longitude: {marker.lng}
        </div>
      )}
      <div className="text-center">
        {!isFromCreate && (
          <button className="btn btn-danger" onClick={onClose}>
            Fermer
          </button>
        )}
      </div>
    </div>
  );
};

export default MapContainer;
