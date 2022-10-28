import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from'firebase/auth';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();

// const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [currentUser, setCurrentUser] = useState(null);
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(auth.currentUser) {
            setCurrentUser(auth.currentUser)
        }
    }, [auth.currentUser])

const GoogleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const googleSignIn =()=>{
    setLoading(true)
 return  signInWithPopup(auth,GoogleProvider)
}
const githubSignIn =()=>{
    setLoading(true)
 return  signInWithPopup(auth,githubProvider)
}
const signIn =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
const logOut=()=>{
    setLoading(true)
   return signOut(auth)
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    });
    return ()=>{
        unsubscribe();
    }
})
    const authInfo= {
        user,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        githubSignIn,
        loading,
        currentUser
    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;