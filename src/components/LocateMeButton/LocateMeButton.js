import React from "react";

const LocateMeButton = ({ updateLocation }) => {
  const handleLocateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const address = "Current Location"; 
          updateLocation(latitude, longitude, address); 
        },
        (error) => {
          console.error("Error getting location: ", error.message);
          alert("Unable to retrieve your location. Please try again.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <button onClick={handleLocateMe} className="btn">
      Locate Me
    </button>
  );
};

export default LocateMeButton;
