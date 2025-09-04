import React from 'react';
import Header from '../layouts/Header.jsx';
import Sidebar from '../layouts/Sidebar';
import PropertyCard from '../components/PropertyCard';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <div className="homepage-container">
        <Sidebar />
        <div className="main-content">
          <div className="card-list">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;