import React from 'react';
import './TopBar.css'; // Make sure the path is correct

const TopBar = () => {
  return (
    <div className="top-bar-container">
      <div className="top-bar-left">
        <span className="logo">NestLink</span>
      </div>
      <div className="top-bar-center">
        <div className="search-bar">
          <i className="search-icon">🔍</i>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="top-bar-right">
        <div className="icon-wrapper">
          <i className="heart-icon">❤️</i>
        </div>
        <div className="profile-icon">
          <i className="profile-img">👤</i>
        </div>
      </div>
    </div>
  );
};

export default TopBar;