import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./PropertyInfoStep.css";

function PropertyInfoStep({ propertyType, saleOrRent, onBack }) {
  const location = useLocation();
  const propertyType = location.state?.propertyType || "";

  const [form, setForm] = useState({
    rooms: "",
    region: "",
    city: "",
    installment: "",
    price: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.rooms || !form.region || !form.city || !form.installment || !form.price) {
      setMessage("Please input all required fields.");
    } else {
      setMessage("All values are correct. You can move to the next step.");
    }
  };

  return (
    <div className="profile-layout">
      <div className="profile-content">
        <main className="profile-main">
          <h1 className="profile-title">
            <span style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  color: "#8a5be6",
                  fontSize: "2rem",
                  marginRight: "1rem",
                  cursor: "pointer"
                }}
                onClick={onBack}
                title="Back"
              >
                &#8592;
              </span>
              Information about the property
            </span>
          </h1>
          <form className="property-info-form" onSubmit={handleSubmit}>
            <div className="property-info-left">
              <div className="input-box input-row">
                <div>
                  <label>Name</label>
                  <input type="text" value={propertyType} readOnly />
                </div>
                <div>
                  <label>No of Rooms</label>
                  <input
                    type="number"
                    name="rooms"
                    value={form.rooms}
                    onChange={handleChange}
                    placeholder="Enter number of rooms"
                  />
                </div>
              </div>
              <div className="input-box">
                <label style={{ fontWeight: "bold" }}>Location</label>
                <div className="location-row">
                  <div>
                    <label>Region</label>
                    <select name="region" value={form.region} onChange={handleChange}>
                      <option value="">Select region</option>
                      <option value="Adamawa">Adamawa</option>
                      <option value="Centre">Centre</option>
                      <option value="East">East</option>
                      <option value="Far North">Far North</option>
                      <option value="Littoral">Littoral</option>
                      <option value="North">North</option>
                      <option value="Northwest">Northwest</option>
                      <option value="South">South</option>
                      <option value="Southwest">Southwest</option>
                      <option value="West">West</option>
                    </select>
                  </div>
                  <div>
                    <label>City</label>
                    <select name="city" value={form.city} onChange={handleChange}>
                      <option value="">Select city</option>
                      {/* Add city options here */}
                    </select>
                  </div>
                </div>
                <label>Address</label>
                <input type="text" placeholder="Enter address" />
                <label style={{ fontWeight: "bold" }}>Map coordinates (optional)</label>
                <div className="location-row">
                  <div>
                    <label>Latitude</label>
                    <input type="text" placeholder="Enter latitude" />
                  </div>
                  <div>
                    <label>Longitude</label>
                    <input type="text" placeholder="Enter longitude" />
                  </div>
                </div>
              </div>
            </div>
            <div className="property-info-right">
              <div className="input-box input-row">
                <div>
                  <label>Installment</label>
                  <select name="installment" value={form.installment} onChange={handleChange}>
                    <option value="">Select installment</option>
                    <option value="hourly">hourly</option>
                    <option value="daily">daily</option>
                    <option value="weekly">weekly</option>
                    <option value="monthly">monthly</option>
                    <option value="yearly">yearly</option>
                  </select>
                </div>
                <div>
                  <label>Price</label>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="number"
                      name="price"
                      value={form.price}
                      onChange={handleChange}
                      placeholder="Enter amount per installm"
                    />
                    <span className="currency-label">FCFA</span>
                  </div>
                </div>
              </div>
              <div className="input-box">
                <label>Additional Information</label>
                <textarea placeholder="Additional Information"></textarea>
              </div>
              {message && (
                <div style={{ color: message.includes("correct") ? "green" : "red", marginBottom: 10, textAlign: 'center' }}>
                  {message}
                </div>
              )}
              <button type="submit" className="next-btn">
                Next
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default PropertyInfoStep;