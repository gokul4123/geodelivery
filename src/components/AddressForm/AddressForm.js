import React, { useState } from "react";
import "./AddressForm.css";

const AddressForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    flat: "",
    area: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategorySelect = (category) => {
    setFormData({ ...formData, category });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.category) {
      alert("Please select a category before saving the address!");
      return;
    }
    onSave(formData);
    setFormData({ flat: "", area: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        name="flat"
        placeholder="House/Flat No."
        onChange={handleInputChange}
        value={formData.flat}
        required
      />
      <input
        name="area"
        placeholder="Apartment/Road/Area"
        onChange={handleInputChange}
        value={formData.area}
        required
      />
      <div className="category-buttons">
        <button
          type="button"
          className={`category-btn ${formData.category === "Home" ? "selected" : ""}`}
          onClick={() => handleCategorySelect("Home")}
        >
          🏠 Home
        </button>
        <button
          type="button"
          className={`category-btn ${formData.category === "Office" ? "selected" : ""}`}
          onClick={() => handleCategorySelect("Office")}
        >
          🏢 Office
        </button>
        <button
          type="button"
          className={`category-btn ${formData.category === "Other" ? "selected" : ""}`}
          onClick={() => handleCategorySelect("Other")}
        >
          📍 Other
        </button>
      </div>
      <button type="submit" className="btn">
        Save Address
      </button>
    </form>
  );
};

export default AddressForm;
