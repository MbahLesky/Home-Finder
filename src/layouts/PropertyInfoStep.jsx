import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./PropertyInfoStep.css";



function PropertyInfoStep({ saleOrRent, onBack, onNext }) {
  // Remove useLocation and use only props/state
  const [form, setForm] = useState({
    propertyType: "",
    rooms: "",
    region: "",
    city: "",
    installment: "",
    price: "",
    address: "",
    latitude: "",
    longitude: "",
    additionalInfo: ""
  });
  const [message, setMessage] = useState("");

  // Fill propertyType from prop on mount if not set
  React.useEffect(() => {
    if (!form.propertyType && saleOrRent) {
      setForm((prev) => ({ ...prev, propertyType: saleOrRent }));
    }
  }, [saleOrRent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.rooms || !form.region || !form.city || !form.installment || !form.price) {
      setMessage("Please input all required fields.");
           onNext();
    } else {
      setMessage("All values are correct. You can move to the next step.");
      onNext();
    }
  };

  return (
    <div className="profile-layout">
      <div className="profile-context">
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
                  <input
                    type="text"
                    name="propertyType"
                    value={form.propertyType}
                    onChange={handleChange}
                    placeholder="Property type"
                  />
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
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Enter city"
                    />
                  </div>
                </div>
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter address"
                />
                <label style={{ fontWeight: "bold" }}>Map coordinates (optional)</label>
                <div className="location-row">
                  <div>
                    <label>Latitude</label>
                    <input
                      type="text"
                      name="latitude"
                      value={form.latitude}
                      onChange={handleChange}
                      placeholder="Enter latitude"
                    />
                  </div>
                  <div>
                    <label>Longitude</label>
                    <input
                      type="text"
                      name="longitude"
                      value={form.longitude}
                      onChange={handleChange}
                      placeholder="Enter longitude"
                    />
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
                <textarea
                  name="additionalInfo"
                  value={form.additionalInfo}
                  onChange={handleChange}
                  placeholder="Additional Information"
                ></textarea>
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