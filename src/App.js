import React, { useState } from "react";
import LocationModal from "./components/LocationModal/LocationModal";
import MapComponent from "./components/MapComponent/MapComponent";
import AddressForm from "./components/AddressForm/AddressForm";
import SavedAddresses from "./components/SavedAddresses/SavedAddresses";
import LocateMeButton from "./components/LocateMeButton/LocateMeButton";
import "./App.css";



const App = () => {
  const [location, setLocation] = useState({
    lat: 12.9716,
    lng: 77.5946, 
    address: "Bengaluru, Karnataka, India",
  });

  const [savedAddresses, setSavedAddresses] = useState([]);
  const [modalOpen, setModalOpen] = useState(true);

  const updateLocation = (lat, lng, address) => {
    setLocation({ lat, lng, address });
  };

  const handleSaveAddress = (addressData) => {
    const newAddress = { id: Date.now(), ...addressData, ...location };
    setSavedAddresses([...savedAddresses, newAddress]);
    alert("Address saved!");
  };

  const handleDeleteAddress = (id) => {
    setSavedAddresses(savedAddresses.filter((addr) => addr.id !== id));
  };

  return (
    <div className="total">
      <div className="h-2"> <h2>GEO-DELIVERY</h2></div>
      {modalOpen ? (
        <LocationModal setModalOpen={setModalOpen} updateLocation={updateLocation} />
      ) : (
        <>
          <LocateMeButton updateLocation={updateLocation} className="locate" />
          <MapComponent location={location} updateLocation={updateLocation} className="mapco"/>
          <AddressForm onSave={handleSaveAddress} className="addressform"/>
          <SavedAddresses addresses={savedAddresses} onDelete={handleDeleteAddress} />
        </>
      )}
    </div>
  );
};

export default App;
