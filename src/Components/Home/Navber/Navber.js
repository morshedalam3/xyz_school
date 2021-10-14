import React from 'react';

import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
       
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <li class="nav-link active " Link to="/">Home</li>
          <li class="nav-link active " to="/About">About Us</li>
          <li class="nav-link active  " to="/service">Service</li>
          <li class="nav-link active " to="/contact">Contacts</li>
          </Nav>
          <Button variant="outline-info">GET No </Button>
          </Navbar.Collapse>
        </Navbar>
        
    );
};

export default Navber;
