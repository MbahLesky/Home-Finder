import React, { useState } from 'react';
import './PropertyCard.css'; // This is where we'll put the CSS
import ApartmentImage from '../image/apartment.png.jpg';

const PropertyCard = () => {
  const [liked, setLiked] = useState(false);
  const handleLike = () => setLiked(!liked);
  return (
    <div className="rental-card">
      <div className="image-container">
        <div className="for-rent-label">FOR RENT</div>
  <img src={ApartmentImage} alt="Apartment" className="apartment-image" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
        
      </div>
      <div className="content-container">
        <div className="title-section">
          <span className="house-icon">🏠</span>
          <h3>Appartment</h3>
        </div>
        <p className="room-count">3 Rooms</p>
        <p className="price">
          150000 <span>/ monthly</span>
        </p>
        <p className="description">
          Modern Apartments at Up Station Bamenda.
          <span className="bullet-point">■</span> rooms with storage.
          <span className="bullet-point">■</span> Living room with balcony.
        </p>
        <div className="action-section">
          <button className="view-details-btn">View Details</button>
          <span
            className="heart-icon"
            style={{ color: liked ? 'red' : 'gray', cursor: 'pointer', fontSize: '1.5em' }}
            onClick={handleLike}
            role="button"
            aria-label={liked ? 'Unlike' : 'Like'}
          >
            {liked ? '❤️' : '🤍'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
