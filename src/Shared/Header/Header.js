import { getAuth } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../images/icon.png';
import {logout} from "../../Auth/logout"
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Header = () => {
  const [userInfo, setUserInfo] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleModeChange = () => {
    setDarkMode(pre => !pre);
  }

  useEffect(() => {
    if(currentUser){
      setUserInfo(currentUser)
    }
  }, [currentUser])

  const handleRoute = (path) => {
    navigate(path);
  }

  const handleLogout = () => {
    logout(navigate);
  }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#title"><img className='w-14 md:w-14 rounded rounded-full me-2' src={image} alt="main-logo"></img>BoostUp Academy</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/courses">Courses</Link></Nav.Link>
              <Nav.Link><Link to="/blogs">Blogs</Link></Nav.Link>
              <Nav.Link><Link to="/faq">FAQ</Link></Nav.Link>
            </Nav>
            <Nav>
              {userInfo && userInfo.accessToken ? <Button onClick={handleLogout}>Logout</Button> : <>
                <Nav.Link onClick={() => handleRoute("/login")}>Login</Nav.Link>
                <Nav.Link onClick={() => handleRoute("/register")}>Register</Nav.Link>
              </>}
              {userInfo && userInfo?.accessToken ? <div title={userInfo?.displayName} onClick={() => handleRoute("/profile")}>
                <img src={userInfo?.photoURL} alt="" style={{width: "40px", height: "40px", borderRadius: "50%", cursor: 'pointer'}} />
              </div> : <Nav.Link eventKey={2} onClick={() => handleRoute("/profile")}>
                Profile
              </Nav.Link>}
              <Nav.Link>
              <Form.Check 
                checked={darkMode}
                type="switch"
                id="custom-switch"
                label={darkMode ? "dark mode" : "light mode"}
                onChange={handleModeChange}
              />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;