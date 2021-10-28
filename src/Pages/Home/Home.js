import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeRightSide from "../../Common/HomeRightSide/HomeRightSide";
import MidBody from "../../Components/MidBody/MidBody";
const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={7} classNameName="mt-4">
            <MidBody />
          </Col>
          <Col lg={5}>
            <HomeRightSide />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
