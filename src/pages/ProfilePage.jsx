import React, { useState } from 'react';
import MyProfile from '../layouts/MyProfile.jsx';
import LikePropertyList from '../layouts/LikePropertyList.jsx';
import MyPropertyList from '../layouts/MyPropertyList.jsx';
import AddPropertyForm from '../layouts/AddPropertyForm.jsx';
import Tab from '../components/Tab.jsx';

const tabDefs = [
    { value: 'profile', label: 'My Profile' },
    { value: 'likes', label: 'Liked Properties' },
    { value: 'myprops', label: 'My Properties' },
    { value: 'add', label: 'Add New Property' },
];

const ProfilePage = () => {
    const [tab, setTab] = useState('profile');
    return (
        <div style={{ maxWidth: 1500, margin: '0 auto', padding: 24 }}>
            <Tab tabs={tabDefs} value={tab} onChange={setTab}>
                <MyProfile />
                <LikePropertyList />
                <MyPropertyList />
                <AddPropertyForm />
            </Tab>
        </div>
    );
};

export default ProfilePage;
