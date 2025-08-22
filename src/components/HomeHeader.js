import React from 'react';
import './HomeHeader.css';
import { ReactComponent as HeartIcon } from '../icons/heart.svg';
import { ReactComponent as AvatarIcon } from '../icons/avatar.svg';

function HomeHeader() {
  return (
    <header className="home-header">
      <div className="home-logo">HomeFinder</div>
      <form className="home-header-search">
        <input
          className="home-header-search-input"
          type="text"
          placeholder="Search by city, address, or ZIP code"
        />
      </form>
      <div className="home-header-actions">
        <button className="icon-btn" title="Favourites">
          <HeartIcon />
        </button>
        <button className="icon-btn" title="Profile">
          <AvatarIcon />
        </button>
      </div>
    </header>
  );
}

export default HomeHeader;
