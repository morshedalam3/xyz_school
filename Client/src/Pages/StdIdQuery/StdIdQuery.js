import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import HomeRightSide from '../../Common/HomeRightSide/HomeRightSide';
import Header from '../../Components/Header/Header';
import IdQueryForm from '../../Components/IdQueryForm/IdQueryForm';
const StdIdQuery = () => {
    return (
        <div>
          <Header/>
            <Container>
        <Row>
          <Col lg={7} classNameName="mt-4">
             <IdQueryForm/>
          </Col>
          <Col lg={5}>
            <HomeRightSide />
          </Col>
        </Row>
      </Container>
        </div>
    );
};

export default StdIdQuery;