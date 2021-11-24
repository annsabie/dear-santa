import React from 'react';
import Wishlist from '../../components/wishlist/Wishlist.js';
import './profile.css';

const Profile = () => {
    return (
        <div
            style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '90vh'
        }}
    >
      <h1>Profile</h1>
      <Wishlist />
    </div>
    );
};

export default Profile;