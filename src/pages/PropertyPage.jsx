
import React, { useState } from 'react';
import './propertypage.css';
import propertyImages from './propertyImages';
import OutlineButton from '../components/OutlineButton';

function PropertyPage() {
  const [selectedImg, setSelectedImg] = useState(0);

  return (
    <div className="propertypage-container">
      {/* Image Carousel */}
      <div className="propertypage-carousel">
        <img
          src={propertyImages[selectedImg]}
          alt="Property"
          className="propertypage-main-image"
        />
        <div className="propertypage-thumbnails">
          {propertyImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className={`propertypage-thumbnail${selectedImg === idx ? ' selected' : ''}`}
              onClick={() => setSelectedImg(idx)}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr style={{ margin: '40px 0 32px 0', border: 'none', borderTop: '2px solid #eee' }} />

      {/* Details Section */}
      <div className="propertypage-details">
        <div className="propertypage-info">
          <div className="propertypage-title" style={{ textAlign: 'center', fontWeight: 700, fontSize: '2.3rem', marginBottom: 10 }}>
            Family home for Sale (Family home)
          </div>
          <div className="propertypage-location" style={{ justifyContent: 'center', display: 'flex', fontSize: '1.15rem', marginBottom: 8 }}>
            <span role="img" aria-label="location">📍</span>
            Ntahbang Mile 5 Nkwen , Bamenda - Northwest
          </div>
          <div className="propertypage-price" style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.5rem', color: '#222', marginBottom: 8 }}>
            19000000 FCFA
          </div>
          <div className="propertypage-summary" style={{ textAlign: 'center', color: '#444', marginBottom: 8 }}>
            Family home has 4 Rooms
          </div>
          <div className="propertypage-description" style={{ marginBottom: 10, textAlign: 'center' }}>
            A beautiful Apartment house for sale at Ntahbang mile five Nkwen Value at 19 million FRS Displacement fee 10,000 FRS This property has the following features
          </div>
          <div className="propertypage-features" style={{ justifyContent: 'center' }}>
            <span className="propertypage-feature">✅ House of 4 bedrooms</span>
            <span className="propertypage-feature">✅ 4 toilets</span>
            <span className="propertypage-feature">✅ A parlour</span>
            <span className="propertypage-feature">✅ A dinning</span>
            <span className="propertypage-feature">✅ internal and external kitchen</span>
            <span className="propertypage-feature">✅ external bathroom and toilet</span>
            <span className="propertypage-feature">✅ outer store</span>
            <span className="propertypage-feature">✅ clean forage water 3000 liter tank built to supply the compound</span>
            <span className="propertypage-feature">✅ With 18 by 22m empty land for further construction</span>
            <span className="propertypage-feature">19 million FRS Displacement fee 10,000 frs</span>
          </div>
        </div>
        <div className="propertypage-contact" style={{ boxShadow: '0 2px 16px rgba(141,90,227,0.10)' }}>
          <div className="propertypage-contact-title" style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 4, textAlign: 'center' }}>Contact Owner</div>
          <div className="propertypage-contact-owner" style={{ fontWeight: 600, color: '#222', marginBottom: 18, textAlign: 'center' }}>Fonbah Elias</div>
          <div className="propertypage-contact-buttons">
            <OutlineButton startElement={<span>📞</span>}>Call</OutlineButton>
            <OutlineButton startElement={<span>💬</span>}>Message</OutlineButton>
            <OutlineButton startElement={<span>✉️</span>}>Email</OutlineButton>
            <OutlineButton startElement={<span>🟢</span>}>Whatsapp</OutlineButton>
          </div>
        </div>
      </div>
      </div>
      );
}

      export default PropertyPage;