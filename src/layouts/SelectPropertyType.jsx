
import React from "react";
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

function SelectPropertyType({ onNext }) {
  const handleSelect = (type) => {
    if (onNext) onNext(type);
  };
  return (
    <div className="profile-layout">
      <div className="profile-content">
        <main className="profile-main">
          <h1 className="profile-title">Select Property Type</h1>
          <div className="property-type-list">
            {propertyTypes.map(type => (
              <button
                key={type}
                className="property-type-btn"
                onClick={() => handleSelect(type)}
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
