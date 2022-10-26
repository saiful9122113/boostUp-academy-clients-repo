import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import image from '../../images/icon.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#title"><img className='w-14 md:w-14 rounded rounded-full me-2' src={image} alt="main-logo"></img>BoostUp Academy</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/courses">Courses</Link></Nav.Link>
              <Nav.Link><Link to="/blogs">Blogs</Link></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link><Link to="/faq">FAQ</Link></Nav.Link>
              <Nav.Link eventKey={2} href="#profile">
                Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;