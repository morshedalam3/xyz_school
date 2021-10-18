import React from 'react';
import { Col, Container, Row, Accordion } from 'react-bootstrap';
import './MainPage.css';
import Calander from '../Calander/Calander';
import ImportantLink from '../ImportantLink/ImportantLink';
import Attendence from '../Attendence/Attendence';
import MidBody from '../Home/MidBody/MidBody';
const MainPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={7} classNameName="mt-4">
            <MidBody/>
          </Col>
           <Col lg={5}>
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
    </div>
  );
};

export default MainPage;