import React from 'react';
import './PropertyCard.css';
import { ReactComponent as HeartIcon } from '../icons/heart.svg';

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <div className="property-card-img">
        {/* Placeholder image */}
        <img src="https://placehold.co/320x180?text=Property" alt={property.title} />
      </div>
      <div className="property-card-body">
        <div className="property-card-title">{property.title}</div>
        <div className="property-card-location">{property.location}</div>
        <div className="property-card-details">
          <span className="property-card-type">{property.type}</span>
          <span className={`property-card-status ${property.status}`}>{property.status}</span>
        </div>
        <div className="property-card-price">{property.price}</div>
        <div className="property-card-actions">
          <button className="property-card-like" title="Like">
            <HeartIcon />
          </button>
          <button className="property-card-info">View Info</button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
