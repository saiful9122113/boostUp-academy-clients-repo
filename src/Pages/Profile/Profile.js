import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase/firebase.config';

const Profile = () => {
    const {currentUser} = getAuth(app);
    
    return (
        <div className='text-center mt-4'>
            <img src={currentUser.photoURL} alt="" />
            <h6>Name : {currentUser.displayName}</h6>
            <h6>Email : {currentUser.email}</h6>
        </div>
    );
};

export default Profile;