import { useState } from "react";
import MapContainer from "./MapContainer";

function MapModel(props) {

  const cabinetPosition = { lat:props.lat, lng:props.lng};
  console.log('====================================');
  console.log(cabinetPosition);
  console.log('====================================');

  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "9999",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    width: "800px",
    height: "400px",
  };

  return (
    <div className="custom-modal" style={modalStyle}>
      <MapContainer center={cabinetPosition} onClose={props.onClose}/>
    </div>
  );
}

export default MapModel;
