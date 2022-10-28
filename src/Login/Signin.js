import React from "react";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";

export const auth = getAuth(app);

const Signin = () => {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // console.log(user);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  };

  return (
    <>
      <form onSubmit={handleRegister}>
        <input type="email" id="" name="email" placeholder="Email" />
        <br />
        <input type="password" id="" name="password" placeholder="Password" />
        <br />
        <button type="submit">Register</button>
      </form>
      <div>
        {user.uid ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            <button onClick={handleGithubSignIn}>Github Sign In</button>
          </>
        )}
        {user.uid && (
          <div>
            <h5>User name: {user.displayName}</h5>
            <p>Email address: {user.email}</p>
            <img src={user.photoURL} alt="" />
          </div>
        )}
      </div>
    </>
  );
};

export default Signin;
