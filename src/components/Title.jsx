import React from 'react';
import './Title.css';


function Title({ text, subtitle }) {
  return (
    <div className="title-block">
      <h2 className="title">{text}</h2>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </div>
  );
}

export default Title;
