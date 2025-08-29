import React, { useState } from 'react';
import './Header.css'; // Link to the CSS file

import { FaRegHeart, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Title from '../components/Title'
import TextField from '../components/TextField'



function Header() {
  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [searchResult, setSearchResult] = useState("");

  // Search handler
  const handleSearch = (e) => {
    e.preventDefault();
    // Simulate a search result
    setSearchResult(search ? `Result for "${search}"` : "No search entered.");
  };

  // Favorite handler
  const handleFavorite = () => {
    setFavorite((prev) => !prev);
    alert(favorite ? "Removed from favorites" : "Added to favorites");
    // Replace with your favorite logic
  };

  return (
    <div className="header-container">
      <div className="header-row">
        {/* Left: Logo and Welcome */}
        <div className="header-left">
          <div className="logo-welcome small-logo-welcome">
            <div className="real-estate-logo small-real-estate-logo">
              <svg width="28" height="28" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="18" width="26" height="14" rx="3" fill="#2563eb"/>
                <polygon points="19,6 5,18 33,18" fill="#60a5fa"/>
                <rect x="15" y="25" width="8" height="7" rx="1.5" fill="#fff"/>
              </svg>
            </div>
            <div className="welcome-text small-welcome-text">Welcome to Home Finder</div>
          </div>
        </div>
        {/* Center: LUXURIA (main title only) */}
        <div className="header-center">
          {/* The main LUXURIA title is rendered by <Title /> below */}
        </div>
        {/* Right: Navigation and Icons */}
        <div className="header-right">
          <nav className="nav" aria-label="Main navigation">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/properties" className="nav-link">Properties</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
          <button
            className={`icon favorite-btn${favorite ? ' active' : ''}`}
            onClick={handleFavorite}
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
            title={favorite ? "Remove from favorites" : "Add to favorites"}
          >
            <FaRegHeart />
          </button>
        </div>
      </div>
      {/* Search bar below header */}
      <div className="header-searchbar-row">
        <form className="search-box" onSubmit={handleSearch} role="search">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search properties"
          />
          <button type="submit" className="icon search-btn" aria-label="Search">
            <FaSearch />
          </button>
        </form>
      </div>
      {/* Show search result below the search bar */}
      {searchResult && (
        <div className="search-result">{searchResult}</div>
      )}
      <Title />
    </div>
  );
}


export default Header;