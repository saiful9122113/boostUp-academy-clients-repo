import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase/firebase.config';

const Profile = () => {
    const {currentUser} = getAuth(app);
    return (
        <div>
            <h3>This is for Profile</h3>
        </div>
    );
};

export default Profile;