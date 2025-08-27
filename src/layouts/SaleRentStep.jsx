import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./SelectPropertyType.css";

function SaleRentStep() {
  const location = useLocation();
  const propertyType = location.state?.propertyType || "";
  const navigate = useNavigate();

  const handleSelect = (saleOrRent) => {
    navigate("/add-property/info", {
      state: { propertyType, saleOrRent }
    });
  };

  return (
    <div className="profile-layout">
      <Header />
      <div className="profile-content">
        <Sidebar activeStep={2} />
        <main className="profile-main">
          <h1 className="profile-title">Sale or rent property?</h1>
          <div className="property-type-list">
            <button
              className="property-type-btn"
              onClick={() => handleSelect("rent")}
            >
              This property is for rent
            </button>
            <button
              className="property-type-btn"
              onClick={() => handleSelect("sale")}
            >
              This property is for sale
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SaleRentStep;