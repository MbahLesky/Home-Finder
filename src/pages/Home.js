import React from 'react';
import './Home.css';
import HomeHeader from '../components/HomeHeader';
import SidebarFilters from '../components/filters/SidebarFilters';
import PropertyCard from '../components/PropertyCard';
import './Home.css';

const dummyProperties = [
  {
    title: 'Modern Family Home',
    location: 'Yaoundé, Centre',
    type: 'family home',
    status: 'for sale',
    price: '35,000,000 XAF',
  },
  {
    title: 'Luxury Villa',
    location: 'Bonapriso, Douala',
    type: 'villa',
    status: 'for rent',
    price: '1,200,000 XAF/mo',
  },
  {
    title: 'Downtown Apartment',
    location: 'Bafoussam, West',
    type: 'apartment',
    status: 'for sale',
    price: '18,000,000 XAF',
  },
  {
    title: 'Commercial Warehouse',
    location: 'Bamenda, North West',
    type: 'warehouse',
    status: 'for rent',
    price: '500,000 XAF/mo',
  },
];

function Home() {
  return (
    <div className="home-container">
      <HomeHeader />
      <div className="home-main-layout">
        <SidebarFilters />
        <main className="home-main-section">
          <div className="property-cards-grid">
            {dummyProperties.map((property, idx) => (
              <PropertyCard key={idx} property={property} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
