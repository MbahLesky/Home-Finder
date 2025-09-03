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
function TextField({ id, type = 'text', placeholder, label, errorText, value, name, onChange, startElement, endElement, ...props }) {
  return (
    <div className="input-field">
      {label && <label style={{ fontWeight: 500, marginBottom: 2 }}>{label}</label>}
      <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #cbd5e1', borderRadius: 6, background: '#fff', padding: '0 8px' }}>
        {startElement && <span style={{ marginRight: 6 }}>{startElement}</span>}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          style={{ flex: 1, border: 'none', outline: 'none', fontSize: '1.08rem', padding: '10px 0', background: 'transparent' }}
          {...props}
        />
        {endElement && <span style={{ marginLeft: 6 }}>{endElement}</span>}
      </div>
      {errorText && <p className="error-text">{errorText}</p>}
    </div>
  );
}

export default TextField;