import React from 'react';
import { Col, Container, Row, Accordion } from 'react-bootstrap';
import Attendence from '../Attendence/Attendence';
import Calander from '../Calander/Calander';
import Header from '../Header/Header';
import ImportantLink from '../ImportantLink/ImportantLink';
import './Contact.css'
const Contact = () => {
    return (
      <>
      <Header/>
      <Container>
      <Row>
      <Col col={7}>
        <div className="email-section">
      <h1 className="text-center">যোগাযোগ</h1>
      <div style={{ background: "#7FABD3" }} className="d-flex justify-content-center">
        <form style={{ width: '50%' }} className=" contact-form ">
          <input className="form-control" type="hidden" name="contact_number" />
          <label style={{ color: 'white' }}>আপনার নাম </label>
          <input className="form-control" type="text" name="user_name" />
          <label style={{ color: 'white' }}>আপনার ইমেইল</label>
          <input className="form-control" type="email" name="user_email" />
          <label style={{ color: 'white' }}>বিষয়</label>
          <textarea className="form-control" name="message" />
          <label style={{ color: 'white' }}>বার্তা</label>
          <textarea className="form-control" name="message" />
          <br></br>
          <input className="button3" type="submit" value="পাঠান" />
        </form>
      </div>
    </div>
    </Col>
    <Col md={5}>
    <Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>নোটিশ বোর্ড</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.  
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>ক্লাস রুটিন</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>পাঠ পরিকল্পনা</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>পরীক্ষার রুটিন</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>রেজাল্ট</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header>অফিস আদেশ । Office Order</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </Accordion.Body>
  </Accordion.Item>
</Accordion>
  <Calander/>
  <Attendence/>
  <ImportantLink/>
    </Col>
    </Row>
    </Container>
    </>
    );
};

export default Contact;