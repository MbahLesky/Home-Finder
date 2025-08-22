import React, { useState } from 'react';
import './SidebarFilters.css';
import FilterAccordion from './FilterAccordion';

const filterOptions = {
  type: ['family home', 'apartment', 'villa', 'land', 'condo', 'resort', 'warehouse', 'sports-arena', 'commercial', 'vehicle'],
  status: ['for sale', 'for rent', 'sold', 'rented out'],
  price: ['< 10M', '10M - 50M', '50M - 100M', '> 100M'],
  region: ['Centre', 'Littoral', 'West', 'North West', 'South', 'Adamawa', 'Extreme-Nord', 'North'],
};

function SidebarFilters() {
  return (
    <aside className="sidebar-filters">
      <h3 className="sidebar-title">Filters</h3>
      {Object.entries(filterOptions).map(([key, options]) => (
        <FilterAccordion key={key} label={key.charAt(0).toUpperCase() + key.slice(1)} options={options} />
      ))}
    </aside>
  );
}

export default SidebarFilters;
