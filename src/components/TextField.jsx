import './TextField.css';
import React from 'react';

/**
 * TextField component
 * @param {string} [label] - Optional label for the input
 * @param {string} [type] - Input type (default: 'text')
 * @param {string} [placeholder] - Placeholder text
 * @param {React.ReactNode} [startElement] - Optional element to render at the start (icon, button, etc)
 * @param {React.ReactNode} [endElement] - Optional element to render at the end (icon, button, etc)
 * @param {object} [props] - Other input props
 */

function TextField({ id, type = 'text', placeholder, label, errorText, value, name, onChange, startElement, endElement, isInvalid = false, ...props }) {
  return (
    <div className={`input-element${isInvalid ? ' invalid' : ''}`}>
      {label && <label className="input-label">{label}</label>}
      <div className="input-field">
        {startElement && <span className="input-icon input-icon-start">{startElement}</span>}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          {...props}
        />
        {endElement && <span className="input-icon input-icon-end">{endElement}</span>}
      </div>
      {errorText && isInvalid && <p className="error-text">{errorText}</p>}
    </div>
  );
}

export default TextField;