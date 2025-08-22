import React, { useState } from 'react';
import './Profile.css';
import { ReactComponent as AvatarIcon } from '../icons/avatar.svg';
import PropertyCard from '../components/PropertyCard';

const user = {
  name: 'Jean Paul Ngong',
  email: 'jean.ngong@example.com',
  phone: '+237650123456',
  region: 'Centre',
  city: 'Yaoundé',
  address: 'Carrefour Bastos, Rue 12',
};

const myProperties = [
  {
    title: 'Modern Family Home',
    location: 'Yaoundé, Centre',
    type: 'family home',
    status: 'for sale',
    price: '35,000,000 XAF',
  },
  {
    title: 'Downtown Apartment',
    location: 'Bafoussam, West',
    type: 'apartment',
    status: 'for sale',
    price: '18,000,000 XAF',
  },
];

const likedProperties = [
  {
    title: 'Luxury Villa',
    location: 'Bonapriso, Douala',
    type: 'villa',
    status: 'for rent',
    price: '1,200,000 XAF/mo',
  },
];

function Profile() {
  const [tab, setTab] = useState('profile');

  return (
    <div className="profile-container">
      <div className="profile-tabs">
        <button className={tab === 'profile' ? 'active' : ''} onClick={() => setTab('profile')}>My Profile</button>
        <button className={tab === 'properties' ? 'active' : ''} onClick={() => setTab('properties')}>My Properties</button>
        <button className={tab === 'likes' ? 'active' : ''} onClick={() => setTab('likes')}>Likes</button>
        <button className={tab === 'add' ? 'active' : ''} onClick={() => setTab('add')}>Add New Property</button>
      </div>

      {tab === 'profile' && (
        <>
          <div className="profile-header">
            <div className="profile-avatar">
              <AvatarIcon />
            </div>
            <div className="profile-info">
              <div className="profile-name">{user.name}</div>
              <div className="profile-email">{user.email}</div>
            </div>
            <button className="profile-edit-btn">Edit Profile</button>
          </div>
          <div className="profile-details">
            <div className="profile-detail-row">
              <span className="profile-detail-label">Phone:</span>
              <span>{user.phone}</span>
            </div>
            <div className="profile-detail-row">
              <span className="profile-detail-label">Region:</span>
              <span>{user.region}</span>
            </div>
            <div className="profile-detail-row">
              <span className="profile-detail-label">City:</span>
              <span>{user.city}</span>
            </div>
            <div className="profile-detail-row">
              <span className="profile-detail-label">Address:</span>
              <span>{user.address}</span>
            </div>
          </div>
        </>
      )}

      {tab === 'properties' && (
        <div className="profile-properties-list">
          {myProperties.length === 0 ? (
            <div className="profile-empty">No properties yet.</div>
          ) : (
            <div className="property-cards-grid">
              {myProperties.map((property, idx) => (
                <PropertyCard key={idx} property={property} />
              ))}
            </div>
          )}
        </div>
      )}

      {tab === 'likes' && (
        <div className="profile-properties-list">
          {likedProperties.length === 0 ? (
            <div className="profile-empty">No liked properties yet.</div>
          ) : (
            <div className="property-cards-grid">
              {likedProperties.map((property, idx) => (
                <PropertyCard key={idx} property={property} />
              ))}
            </div>
          )}
        </div>
      )}

      {tab === 'add' && (
        <form className="profile-add-form">
          <h3>Add New Property</h3>
          <input className="profile-add-input" type="text" placeholder="Title" required />
          <input className="profile-add-input" type="text" placeholder="Location" required />
          <input className="profile-add-input" type="text" placeholder="Type" required />
          <input className="profile-add-input" type="text" placeholder="Status" required />
          <input className="profile-add-input" type="text" placeholder="Price" required />
          <button className="profile-add-btn" type="submit">Add Property</button>
        </form>
      )}
    </div>
  );
}

export default Profile;
