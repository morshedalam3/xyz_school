import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import HomeRightSide from '../../Common/HomeRightSide/HomeRightSide';
import ResultQueryForm from '../../Components/ResultQueryForm/ResultQueryForm';
const ResultQuery = () => {
    return (
        <div>
        <Container>
    <Row>
      <Col lg={7} classNameName="mt-4">
          <ResultQueryForm/>
      </Col>
      <Col lg={5}>
          <HomeRightSide/>
      </Col>
    </Row>
  </Container>
    </div>
    );
};

export default ResultQuery;