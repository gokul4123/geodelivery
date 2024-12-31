import React from "react";
import "./SavedAddresses.css";

const SavedAddresses = ({ addresses, onDelete }) => (
  <div className="saved-addresses">
    <h3>Saved Addresses</h3>
    {addresses.length === 0 ? (
      <p>No addresses saved yet.</p>
    ) : (
      addresses.map((addr) => (
        <div key={addr.id} className="address-item">
          <p>
            <strong>Address:</strong> {addr.address}
          </p>
          <p>
            <strong>House/Flat No.:</strong> {addr.flat || "N/A"}
          </p>
          <p>
            <strong>Area:</strong> {addr.area || "N/A"}
          </p>
          <p>
            <strong>Category:</strong> {addr.category || "N/A"}
          </p>
          <button onClick={() => onDelete(addr.id)} className="delete-btn">
            Delete
          </button>
        </div>
      ))
    )}
  </div>
);

export default SavedAddresses;
