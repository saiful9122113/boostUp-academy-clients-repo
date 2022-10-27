import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import app from "../firebase/firebase.config";

export const auth=getAuth(app);

const Register = () => {
    const [passwordError, setPasswordError]=useState('');
    const [success, setSuccess]=useState(false);

    const handleRegister=(event)=>{       
        event.preventDefault();
        setSuccess(false);
        const form=event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password)
        if(!/.{6}/.test(password)){
            setPasswordError('Please provide at least 6 lengths password');
            return;
        }

        createUserWithEmailAndPassword(auth,email,password)
        .then((result)=>{
            const user=result.user;
            console.log(user);
            setSuccess(true);
            form.reset();
        })
        .catch((error)=>{
            console.error('error',error);
            setPasswordError(error.message);
        })
    }
  return (
    <div className="w-50 mx-auto">
        <h4 className="text-primary">Please Register</h4>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required/>    
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>
        <p className="text-danger">{passwordError}</p>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        {success && <p className="text-success">User created successfully</p>}
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
