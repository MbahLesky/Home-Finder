import React from 'react';
import './Title.css';

function Title({ text, subtitle }) {
  return (
    <p style={{
      fontSize: '2.2rem',
      fontWeight: 800,
      color: '#222',
      letterSpacing: '2px',
      margin: 0,
      textAlign: 'center',
      fontFamily: 'Poppins, Segoe UI, Arial, sans-serif'
    }}>HOME FINDER</p>
  );
}

export default Title;
