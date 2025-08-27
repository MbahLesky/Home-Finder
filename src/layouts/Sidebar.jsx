import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [propertyTypeOpen, setPropertyTypeOpen] = useState(true);
  const [propertyStatusOpen, setPropertyStatusOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar-section ad-property-section">
        <a href="#" className="ad-link">Advertise Your Property</a>
      </div>
      
      <div className="sidebar-section search-section">
        <div className="search-bar">
          <span>🔍</span>
          <input type="text" placeholder="Find properties near me" />
        </div>
      </div>
      
      <div className="sidebar-section filters-section">
        <h3>Filters</h3>
        
        {/* Property Type Filter */}
        <div className="filter-group">
          <div className="filter-header" onClick={() => setPropertyTypeOpen(!propertyTypeOpen)}>
            <h4>Property Type</h4>
            <span>{propertyTypeOpen ? '∧' : '∨'}</span>
          </div>
          {propertyTypeOpen && (
            <ul>
              <li><label><input type="checkbox" /> House</label></li>
              <li><label><input type="checkbox" /> Appartment</label></li>
              <li><label><input type="checkbox" /> Villa</label></li>
              <li><label><input type="checkbox" /> Commercial</label></li>
              <li><label><input type="checkbox" /> Land</label></li>
            </ul>
          )}
        </div>
        
        {/* Property Status Filter */}
        <div className="filter-group">
          <div className="filter-header" onClick={() => setPropertyStatusOpen(!propertyStatusOpen)}>
            <h4>Property Status</h4>
            <span>{propertyStatusOpen ? '∧' : '∨'}</span>
          </div>
          {propertyStatusOpen && (
            <ul>
              <li><label><input type="checkbox" /> Sale</label></li>
              <li><label><input type="checkbox" /> Rent</label></li>
              <li><label><input type="checkbox" /> Sold</label></li>
            </ul>
          )}
        </div>
        
        {/* Size Filter */}
        <div className="filter-group">
          <div className="filter-header" onClick={() => setSizeOpen(!sizeOpen)}>
            <h4>Size</h4>
            <span>{sizeOpen ? '∧' : '∨'}</span>
          </div>
          {sizeOpen && (
            <ul>
              <li><label><input type="checkbox" /> Less than 1000 sq m</label></li>
              <li><label><input type="checkbox" /> 1000 - 5000 sq m</label></li>
              <li><label><input type="checkbox" /> 5000 - 15000 sq m</label></li>
              <li><label><input type="checkbox" /> 15000 + sq m</label></li>
            </ul>
          )}
        </div>
        
        {/* Price Filter */}
        <div className="filter-group">
          <div className="filter-header" onClick={() => setPriceOpen(!priceOpen)}>
            <h4>Price</h4>
            <span>{priceOpen ? '∧' : '∨'}</span>
          </div>
          {priceOpen && (
            <ul>
              <li><label><input type="checkbox" /> (Less than 10000FCFA)</label></li>
               <li><label><input type="checkbox" /> (10000FCFA - 25000FCFA)</label></li>
                <li><label><input type="checkbox" /> (25000FCFA - 50000FCFA)</label></li>
                 <li><label><input type="checkbox" /> (50000FCFA - 100000FCFA)</label></li>
                  <li><label><input type="checkbox" /> (100000FCFA - 250000FCFA)</label></li>
                   <li><label><input type="checkbox" /> (250000FCFA)</label></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;