import React from 'react';
import { Col, Container, Row ,Accordion} from 'react-bootstrap';
import Attendence from '../Attendence/Attendence';
import Calander from '../Calander/Calander';
import ImportantLink from '../ImportantLink/ImportantLink';
const Administration = () => {
    return (
        <div>
            <Container>
            <Row>
                <Col md={7}>
                    <div>
                        <div className="heading"> <h5>প্রধান শিক্ষক</h5></div>
                        <Row>
                            <Col md={2}className="imgbox col-md-5">
                                <img style={{height:"300px", width:"200px"}} src="https://i.ibb.co/FJ1MLDt/Headmaster-ggbhs.jpg"></img>
                            </Col>
                            <Col md={4}>
                            <div className="heading"> <h5>SHAHANA BANU</h5></div>
                            </Col>
                        </Row>
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
        </div>
    );
};

export default Administration;