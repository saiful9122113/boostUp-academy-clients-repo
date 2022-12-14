import React,{useContext,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub, } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
const Log = () => {
    const [error, setError] = useState('');
    const naviGate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/';
    console.log(from)

    const {signIn,googleSignIn,githubSignIn} =useContext(AuthContext)

    // console.log(from)

    const googleSign = ()=>{
        googleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('')
            naviGate(from,{replace:true})
        })
        .catch((error)=>{
            console.log(error);
            setError(error.message)
        })
    }
    const githubSign = ()=>{
        githubSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('')
            naviGate(from,{replace:true})
        })
        .catch((error)=>{
            console.log(error)
            setError(error.message);
        })
        
    }
    const handleLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('')
            naviGate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
        })
    }
    return (
        <Form className=' w-50 mx-auto' onSubmit={handleLogin}>
       <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary" type="submit">
            Login
        </Button>
        <p>You dont't have an account? <Link to='/register'>Register</Link></p>
        <Button onClick={googleSign} className='d-block mt-2'><FaGoogle></FaGoogle> Login with Google</Button>
        <Button onClick={githubSign} className='d-block mt-2'><FaGithub></FaGithub> Login with Gihub</Button>
        <Form.Text className="text-danger">
            {error}
        </Form.Text>
    </Form>
   
    );
};

export default Log;