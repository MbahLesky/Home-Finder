import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./PropertyInfoStep.css";

function PropertyInfoStep() {
  const location = useLocation();
  const propertyType = location.state?.propertyType || "";
  const saleOrRent = location.state?.saleOrRent || "";

  return (
    <div className="profile-layout">
      <Header />
      <div className="profile-content">
        <Sidebar activeStep={3} />
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
                onClick={() => window.history.back()}
              >
                &#8592;
              </span>
              Information about the property
            </span>
          </h1>
          <form className="property-info-form">
            <div className="property-info-left">
              <div className="input-box input-row">
                <div>
                  <label>Name</label>
                  <input type="text" value={propertyType} readOnly />
                </div>
                <div>
                  <label>No of Rooms</label>
                  <input type="number" placeholder="Enter number of rooms" />
                </div>
              </div>
              <div className="input-box">
                <label style={{ fontWeight: "bold" }}>Location</label>
                <div className="location-row">
                  <div>
                    <label>Region</label>
                    <select>
                      <option>Select region</option>
                    </select>
                  </div>
                  <div>
                    <label>City</label>
                    <select>
                      <option>Select city</option>
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
                  <select>
                    <option>Select installment</option>
                  </select>
                </div>
                <div>
                  <label>Price</label>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input type="number" placeholder="Enter amount per installm" />
                    <span className="currency-label">FCFA</span>
                  </div>
                </div>
              </div>
              <div className="input-box">
                <label>Additional Information</label>
                <textarea placeholder="Additional Information"></textarea>
              </div>
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