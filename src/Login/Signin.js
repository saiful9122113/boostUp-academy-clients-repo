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

  const handleGithubSignIn=()=>{
    signInWithPopup(auth, githubProvider)
    .then(result=>{
        const user = result.user;
        setUser(user);
        console.log(user);
    })
    .catch((error)=>{
        console.log('error',error);
    })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      });
  };

  return (
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
  );
};

export default Signin;

// import React,{useContext,useState} from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { FaGoogle } from 'react-icons/fa';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthProvider/AuthProvider';

// const Signin = () => {

//     const [error, setError] = useState('');
//     const naviGate = useNavigate();
//     const location = useLocation();
//     const from = location.state?.from?.pathname || '/';
//     const {signIn,googleSignIn,githubSignIn} =useContext(AuthContext)

//     const googleSign = ()=>{
//         googleSignIn()
//         .then(result=>{
//             const user = result.user;
//             console.log(user);
//             setError('')
//             naviGate(from,{replace:true})
//         })
//         .catch((error)=>{
//             console.log(error);
//             setError(error.message)
//         })
//     }
//     const githubSign = ()=>{
//         githubSignIn()
//         .then(result=>{
//             const user = result.user;
//             console.log(user);
//             setError('')
//             naviGate(from,{replace:true})
//         })
//         .catch((error)=>{
//             console.log(error)
//             setError(error.message);
//         })

//     }
//     const handleLogin = (event)=>{
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email,password);
//         signIn(email,password)
//         .then(result=>{
//             const user = result.user;
//             console.log(user);
//             setError('')
//             naviGate(from,{replace:true})
//         })
//         .catch(error=>{
//             console.log(error)
//             setError(error.message)
//         })
//     }
//     return (
//         <Form onSubmit={handleLogin}>
//        <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email</Form.Label>
//             <Form.Control name="email" type="email" placeholder="email" required />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control name="password" type="password" placeholder="Password" required />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//             Login
//         </Button>
//         <p>You dont't have an account? <Link to='/register'>Register</Link></p>
//         <Button onClick={googleSign} className='d-block mt-2'><FaGoogle></FaGoogle> Login with Google</Button>
//         <Button onClick={githubSign} className='d-block mt-2'><FaGoogle></FaGoogle> Login with Gihub</Button>
//         <Form.Text className="text-danger">
//             {error}
//         </Form.Text>
//     </Form>

//     );
// };

// export default Signin;
