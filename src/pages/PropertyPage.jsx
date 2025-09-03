import './propertypage.css';
import Images from '../assets/index';
import React, { useState } from 'react';

const galleryImages = Images;

function PropertyPage() {
  const [mainIndex, setMainIndex] = useState(0);

  const handleThumbnailClick = (idx) => {
    setMainIndex(idx);
  };

  return (
    <div className="propertypage-container">
      <div className="property-gallery">
        <div className="main-image">
          <img src={galleryImages[mainIndex]} alt="Property" className="main-property-img" />
        </div>
        <div className="gallery-thumbnails">
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="thumbnail-img"
              onClick={() => handleThumbnailClick(idx)}
              style={{ cursor: 'pointer', border: mainIndex === idx ? '2px solid var(--color-primary)' : undefined }}
            />
          ))}
        </div>
      </div>
      <div className="property-info-card">
        <div className="property-info-main">
          <h1>Family home for Sale (Family home)</h1>
          <div className="property-location">
            <span className="location-icon">📍</span>
            <span>Ntahbang Mile 5 Nkwen , Bamenda - Northwest</span>
          </div>
          <div className="property-price">19000000 FCFA</div>
          <div className="property-rooms">Family home has 4 Rooms</div>
          <div className="property-description">
            <p>
              A beautiful Apartment house for sale at Ntahbang mile five Nkwen Value at 19 million FRS Displacement fee 10,000 FRS This property has the following features
            </p>
            <ul className="features-list">
              <li>✅ House of 4 bedrooms</li>
              <li>✅ 4 toilets</li>
              <li>✅ A parlour</li>
              <li>✅ A dinning</li>
              <li>✅ internal and external kitchen</li>
              <li>✅ external bathroom and toilet</li>
              <li>✅ outer store</li>
              <li>✅ clean forage water 3000 liter tank built to supply the compound</li>
              <li>✅ With 18 by 22m empty land for further construction 19 million FRS Displacement fee 10,000 frs</li>
            </ul>
          </div>
        </div>
        <div className="property-contact">
          <h1>Contact Owner</h1>
          <div className="owner-name">Fonbah Elias</div>
          <div className="contact-buttons contact-grid">
            <button className="contact-btn call">📞 Call</button>
            <button className="contact-btn message">💬 Message</button>
            <button className="contact-btn email">✉️ Email</button>
            <button className="contact-btn whatsapp">🟢 Whatsapp</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyPage;