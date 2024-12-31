import React from "react";
import "./LocationModal.css";

const LocationModal = ({ setModalOpen, updateLocation }) => {
  const enableLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          updateLocation(latitude, longitude, "Fetching address...");
          setModalOpen(false);
        },
        () => alert("Failed to get location!")
      );
    } else {
      alert("Geolocation not supported!");
    }
  };

  return (
    <div className="modal">
      <h1>GEODELIVERY</h1>
      <button onClick={enableLocation} className="btn">Enable Location</button>
      <button onClick={()=>{setModalOpen(false)}} className="btn">Enter Search Manually</button>
    </div>
  );
};


export default LocationModal;
