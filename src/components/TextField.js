import React from 'react';
import './TextField.css';

function TextField({ label, name, type = 'text', placeholder }) {
  return (
    <div className="textfield-container">
      <label className="textfield-label" htmlFor={name}>{label}</label>
      <input
        className="textfield-input"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
