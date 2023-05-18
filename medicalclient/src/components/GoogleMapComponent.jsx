import React, { useState, useCallback, useRef } from "react";
import {
  GoogleMap,
  Marker,
  Autocomplete,
  LoadScript,
  LoadScriptNext,
} from "@react-google-maps/api";

const GoogleMapComponent = ({
  longitude,
  latitude,
  isFromViewLocalisation,
  onClose,
  setLongitude,
  errors,
  setLatitude,
}) => {
  const defaultCenter = {
    lat: parseFloat(latitude),
    lng: parseFloat(longitude),
  };

  const [markerPosition, setMarkerPosition] = useState(defaultCenter);
  const [mapZoom, setMapZoom] = useState(15);

  const mapRef = useRef();
  const autoCompleteRef = useRef(null);

  const handlePlaceSelected = useCallback(() => {
    const place = autoCompleteRef.current.getPlace();
    const location = place.geometry.location;

    setMarkerPosition({
      lat: location.lat(),
      lng: location.lng(),
    });

    setMapZoom(15);
  }, []);

  const onMapClick = useCallback(
    (event) => {
      setMarkerPosition({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
      setLatitude(event.latLng.lat());
      setLongitude(event.latLng.lng());
    },
    [setLatitude, setLongitude]
  );

  return (
    <LoadScriptNext
      googleMapsApiKey="AIzaSyATeoALYkOOyyAcXF0gqTgZH1zxUgAdpnU"
      libraries={["places"]}
    >
      {isFromViewLocalisation ? (
        <div className="">
          <GoogleMap
            ref={mapRef}
            id="google-map"
            mapContainerStyle={{
              width: "100%",
              height: "400px",
            }}
            zoom={mapZoom}
            center={markerPosition}
            onClick={onMapClick}
          >
            <Marker position={markerPosition} />
          </GoogleMap>
          <div className="text-center">
            <button className="btn btn-danger" onClick={onClose}>
              Fermer
            </button>
          </div>
        </div>
      ) : (
        <>
          <Autocomplete
            onLoad={(autocomplete) => (autoCompleteRef.current = autocomplete)}
            onPlaceChanged={handlePlaceSelected}
          >
            <>
              <input
                type="text"
                placeholder="Search for a city"
                style={{
                  boxSizing: `border-box`,
                  border: `1px solid transparent`,
                  width: `240px`,
                  height: `32px`,
                  marginTop: `27px`,
                  padding: `0 12px`,
                  borderRadius: `3px`,
                  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                  fontSize: `14px`,
                  outline: `none`,
                  textOverflow: `ellipses`,
                }}
              />
              {errors.Localisation && (
                <p className="text-danger">{errors.Localisation}</p>
              )}
            </>
          </Autocomplete>
          <GoogleMap
            ref={mapRef}
            id="google-map"
            mapContainerStyle={{
              width: "100%",
              height: "400px",
            }}
            zoom={mapZoom}
            center={markerPosition}
            onClick={onMapClick}
          >
            <Marker position={markerPosition} />
          </GoogleMap>
        </>
      )}
    </LoadScriptNext>
  );
};

export default GoogleMapComponent;
