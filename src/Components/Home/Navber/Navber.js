import React, { useState } from 'react';

import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../../../Assets/images/logo.png';
import { Link } from 'react-router-dom';
import './style.css';
import Login from '../../Login/Login';
import Commit from '../../Commit/Commit';

const Navber = () => {
  const [isClicked, setClicked] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const showComponent = () => {
       setClicked(!isClicked);
       setIsShow(false);
  };

  const show = () => {
    setIsShow(!isShow);
    setClicked(false);
  }


  return (
    <>
    {
      isClicked?<Login/>: ""
    }
    {
      isShow? <Commit/>: ""
    }
    
     <div className="top_header d-flex justify-content-end">
       <button onClick={showComponent} className="btn btn-danger"> মন্তব্য </button>
       <button onClick={show} className="btn btn-danger"> লগ ইন </button>
     </div>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <li class="nav-link active " Link to="/">Home</li>
            <li class="nav-link active " to="/About">About Us</li>
            <li class="nav-link active  " to="/service">Service</li>
            <li class="nav-link active " to="/contact">Contact</li>
          </Nav>
          <Button variant="outline-info">GET AN APPOINTMENT</Button>
        </Navbar.Collapse>
      </Navbar>
      <Navbar bg="light" variant="white">
        <Container>
          <Navbar.Brand href="#home"><img className="branding" src={logo} alt="Fvaly" /></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="www.facebook.com">News feed</Nav.Link>

            <Nav.Link href="#pricing">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
};

export default Navber;