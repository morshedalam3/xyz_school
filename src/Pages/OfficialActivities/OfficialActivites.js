import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import HomeRightSide from '../../Common/HomeRightSide/HomeRightSide';
import Header from '../../Components/Header/Header';
const OfficialActivites = () => {
    return (
        <div>
          <Header/>
            <h1>official activites</h1>
            <Container maxWidth="lg">
        <Row>
          <Col lg={8} classNameName="mt-4">
           
          </Col>
          <Col lg={4}>
            <HomeRightSide />
          </Col>
        </Row>
      </Container>
        </div>
    );
};

export default OfficialActivites;