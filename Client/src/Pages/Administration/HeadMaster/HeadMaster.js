import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import HomeRightSide from '../../../Common/HomeRightSide/HomeRightSide';
// import HomeRightSide from '../../Common/HomeRightSide/HomeRightSide';
import HeadTeac from '../../../Components/Adminstration/HeadTeac/HeadTeac';

const HeadMaster = () => {
    return (
        <div>
            
           
            <Container>
            <h1>Head Master</h1>
        <Row>
          <Col lg={7} classNameName="mt-4">
          <HeadTeac/>
          </Col>
          <Col lg={5}>
            <HomeRightSide />
          </Col>
        </Row>
      </Container>
        </div>
    );
};

export default HeadMaster;