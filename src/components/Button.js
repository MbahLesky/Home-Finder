import React from 'react';
import './Button.css';

function Button({ text, type = 'button', onClick }) {
  return (
    <button className="custom-button" type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
