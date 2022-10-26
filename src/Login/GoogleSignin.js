import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const auth = getAuth(app);

const GoogleSignin = () => {

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log('Error: ', error);
            })
    }

    return (
        <div>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      <button>Github Sign In</button>
        </div>
    );
};

export default GoogleSignin;