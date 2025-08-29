import React, { useState } from 'react';
import './MyProfile.css';
import FilledButton from '../components/FilledButton'; // Import the button
import TextField from '../components/TextField';
import SelectField from '../components/SelectField';
import { countryData } from '../temp/country_data';

const initialUserData = {
  fullName: 'Geh Veginel',
  email: 'veginelgeh@gmail.com',
  phone: '653714839',
  stateRegion: '',
  city: 'Bamenda',
  address: 'Gratitude Entrance mile3',
  initials: 'ML'
};


const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(initialUserData);

  const address = countryData.states;

  const regions = address.map(state => state.name)

  const handleEdit = () => setIsEditing(true);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    alert(JSON.stringify(userData, null, 2));
    setIsEditing(false);
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
            {isEditing ? (
              <input
                name="fullName"
                value={userData.fullName}
                onChange={handleChange}
              />
            ) : (
              <p>{userData.fullName}</p>
            )}
          </div>
          <div className="detail-row">
            <label>EMAIL*</label>
            {isEditing ? (
              <input
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            ) : (
              <p>{userData.email}</p>
            )}
          </div>
          <div className="detail-row">
            <label>PHONE*</label>
            {isEditing ? (
              <input
                name="phone"
                value={userData.phone}
                onChange={handleChange}
              />
            ) : (
              <p>{userData.phone}</p>
            )}
          </div>
          <div className="detail-row">
            <label>STATE/REGION</label>
            {isEditing ? (
              <SelectField 
                name="stateRegion" 
                value={userData.stateRegion} 
                onChange={handleChange} 
                placeholder='Select Region'
              >
               {regions.map(region => <option value={region}>{region}</option>)}
              </SelectField>
            ) : (
              <div className="dropdown-display">
                {userData.stateRegion} <span className="arrow-down">▼</span>
              </div>
            )}
          </div>
          <div className="detail-row">
            <label>CITY</label>
            {isEditing ? (
              <input
                name="city"
                value={userData.city}
                onChange={handleChange}
              />
            ) : (
              <div className="dropdown-display">
                {userData.city} <span className="arrow-down">▼</span>
              </div>
            )}
          </div>
          <div className="detail-row">
            <label>ADDRESS</label>
            {isEditing ? (
              <input
                name="address"
                value={userData.address}
                onChange={handleChange}
              />
            ) : (
              <p>{userData.address}</p>
            )}
          </div>
        </div>

        {isEditing ? (
          <FilledButton onClick={handleSave}>
            Save
          </FilledButton>
        ) : (
          <FilledButton onClick={handleEdit}>
            Edit
          </FilledButton>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
