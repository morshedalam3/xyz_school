import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Button, Nav, Navbar, Container, NavDropdown, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import Login from '../Login/Login';
import Commit from '../Commit/Commit';
import './Navber.css';
import { faFacebook, faLinkedinIn, faTwitter, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../hooks/useAuth';

const Navber = () => {

  const {user, logout} = useAuth();
  console.log(user)
    const[isAdmin,setIsAdmin]=useState(false);
    console.log(isAdmin);
    useEffect(()=>{
        fetch('http://localhost:8000/posts/isAdmin',{
            method:"POST",
            headers:{'content-type' : 'application/json'},
            body:JSON.stringify({ email: user.email })
        })
        .then(res=>res.json())
        .then(data=>setIsAdmin(data))
    },[])

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
    <div className="">
      {
        isClicked ? <Commit /> : ""
      }
      {
        isShow ? <Login /> : ""
      }

      <div className="top_header d-flex justify-content-end">
        <button onClick={showComponent} className="btn btn-danger"> মন্তব্য </button>
        {!user.email?<button onClick={show} className="btn btn-danger"> লগ ইন </button>: <button onClick={logout} className="btn btn-danger">logout</button>}
      </div>
      </div>
      <Container>
      <Row>
       
        <Col md={7}>
         <Link className="navLink" to ="/home">
          {/* <img className="branding img-fluid" src={logo} alt="logo" /> */}
          <h1>পরমানু কিন্টারগার্ডেন স্কুল </h1>
          </Link>
        </Col>
        <Col className="d-flex" md={5}>
          <ul className="d-flex p-2">
            <li><FontAwesomeIcon icon={faRss} /> </li>
            <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
            <li><FontAwesomeIcon icon={faYoutubeSquare} /></li>
            <li><FontAwesomeIcon icon={faTwitter} /></li>
            <li><FontAwesomeIcon icon={faFacebook} /></li>
          </ul>
          <InputGroup style={{ height: "20px", width: "350px", marginTop: "4px" }}>
            <FormControl
              className="border border-primary"
              placeholder="Search Here.."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button className="border border-primary" variant="light" id="button-addon2">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroup>
        </Col>
      </Row>
      </Container>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav">
              <Nav.Link href="#features" className="nav-item">হোম পেজ</Nav.Link>
              <NavDropdown className="nav-item" title="স্কুল প্রশাসন" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/principle">প্রধান শিক্ষক</NavDropdown.Item>
                <NavDropdown.Item href="/assisTeacher">সহকারী শিক্ষকবৃন্দ</NavDropdown.Item>
                <NavDropdown.Item href="/assisTeacher">শ্রেনী শিক্ষকবৃন্দ</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">কর্মকর্তা কর্মচারীবৃন্দ</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">পিটিএ</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">প্রাক্তন প্রধান শিক্ষকবৃন্দ </NavDropdown.Item>
                {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
              <NavDropdown title="প্রাতিষ্ঠানিক কার্যক্রম" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">ক্লাস কার্যক্রম</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">বাৎসরিক কার্যক্রম</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">পাঠ্যক্রম</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">কোর্স সমূহ</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">পরীক্ষার ফল </NavDropdown.Item>
                {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>

              <Nav.Link className="nav-item"> <Link className="navLink" to="gallery">গ্যালারী</Link></Nav.Link>
              <NavDropdown title="অন্যান্য তথ্য" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">স্কুল ইতিহাস </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">বিগত বছর গুলোর বোর্ড পরীক্কার ফলাফল</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">নিয়ম কানুন </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">পাঠাগার </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">ছাত্রাবাস </NavDropdown.Item>
                {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
              <Nav.Link className="nav-item "><Link className="navLink" to="/contact">যোগাযোগ</Link></Nav.Link>
              <Nav.Link className="nav-item"><Link className="navLink" to="/student_result"> [[রেজাল্ট অনুসন্ধান]]</Link></Nav.Link>
              <Nav.Link className="nav-item" ><Link className="navLink" to="/student_id_Query">[[স্টুডেন্ট আইডি অনুসন্ধান]]</Link> </Nav.Link>
              <Nav.Link className="nav-item" href="#pricing">[[ভর্তি তথ্য শিক্ষাবর্ষ-২০২১]] </Nav.Link>
              <Nav.Link className="nav-item" href="#pricing">শিওর ক্যাশ </Nav.Link>
              <Nav.Link className="nav-item" href="#pricing">অনলাইন স্কুল পাঠদান কার্যক্রম </Nav.Link>
              {isAdmin && <Nav.Link className="nav-item" href="/dashboard">Admin_Panel</Nav.Link>}
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  );
};

export default Navber;