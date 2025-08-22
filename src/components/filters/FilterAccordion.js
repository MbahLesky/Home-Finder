import React, { useState } from 'react';
import './FilterAccordion.css';

function FilterAccordion({ label, options }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="filter-accordion">
      <button className="filter-accordion-header" onClick={() => setOpen((o) => !o)}>
        {label}
        <span className={`filter-accordion-arrow${open ? ' open' : ''}`}>▼</span>
      </button>
      {open && (
        <div className="filter-accordion-options">
          {options.map((opt) => (
            <label key={opt} className="filter-accordion-option">
              <input type="checkbox" name={label} value={opt} /> {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterAccordion;
