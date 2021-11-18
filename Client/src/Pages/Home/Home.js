import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeRightSide from "../../Common/HomeRightSide/HomeRightSide";
import Header from "../../Components/Header/Header";
import MidBody from "../../Components/MidBody/MidBody";
const Home = () => {
  return (
    <div>
      <Header/>
      <Container maxWidth="lg">
        <Row>
          <Col lg={8} classNameName="mt-4">
            <MidBody />
          </Col>
          <Col lg={4}>
            <HomeRightSide />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
