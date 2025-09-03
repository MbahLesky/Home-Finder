
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./SelectPropertyType.css";

function SaleRentStep({ propertyType, onNext, onBack }) {
  const handleSelect = (saleOrRent) => {
    if (onNext) onNext(saleOrRent);
  };
  return (
    <div className="profile-layout">
      <div className="profile-content">
        <main className="profile-main">
          <h1 className="profile-title">
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <span
                style={{ color: '#8a5be6', fontSize: '2rem', marginRight: '1rem', cursor: 'pointer' }}
                onClick={onBack}
                title="Back"
              >&#8592;</span>
              Sale or rent property?
            </span>
          </h1>
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