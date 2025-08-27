
import React from 'react';
import './MyProfile.css'; 


const userData = {
  fullName: 'Geh Veginel',
  email: 'veginelgeh@gmail.com',
  phone: '653714839',
  stateRegion: 'Northwest',
  city: 'Bamenda',
  address: 'Gratitude Entrance mile3',
  initials: 'ML'
};

const MyProfile = () => {
  const handleEdit = () => {
    console.log("Edit button clicked!");
    alert("This would enable form editing.");
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-content">
        <div className="profile-avatar">
          <span>{userData.initials}</span>
        </div>

        <div className="profile-details">
          <div className="detail-row">
            <label>FULLNAME*</label>
            <p>{userData.fullName}</p>
          </div>
          <div className="detail-row">
            <label>EMAIL*</label>
            <p>{userData.email}</p>
          </div>
          <div className="detail-row">
            <label>PHONE*</label>
            <p>{userData.phone}</p>
          </div>
          <div className="detail-row">
            <label>STATE/REGION</label>
            <div className="dropdown-display">
              {userData.stateRegion} <span className="arrow-down">▼</span>
            </div>
          </div>
          <div className="detail-row">
            <label>CITY</label>
            <div className="dropdown-display">
              {userData.city} <span className="arrow-down">▼</span>
            </div>
          </div>
          <div className="detail-row">
            <label>ADDRESS</label>
            <p>{userData.address}</p>
          </div>
        </div>

        <button className="edit-button" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
