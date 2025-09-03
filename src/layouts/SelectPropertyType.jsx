import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import "./SelectPropertyType.css";
const propertyTypes = [
  "Family home",
  "Apartment",
  "Villa",
  "Commercial",
  "Land",
  "Condo",
  "Warehouse",
  "Sports-arena",
  "Resorts",
  "Church",
];

function SelectPropertyType() {
  const navigate = useNavigate();
  const handleSelect = (type) => {
    //Navigate to sale/rent step, passing property type
    navigate("/add-property/sale-rent", { state: { propertyType: type } });
  };
  return (
    <div className="profile-layout">
      <Header />
      <div className="profile-content">
        <Sidebar activeStep={1} />
        <main className="profile-main">
          <h1 className="profile-title">Select Property Type</h1>
          <div className="property-type-list">
            {propertyTypes.map(type => (
              <button
                key={type}
                className="property-type-btn"
                onClick={() => handleSelect(`Selected: ${type}`)}
              >
                {type}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default SelectPropertyType;
