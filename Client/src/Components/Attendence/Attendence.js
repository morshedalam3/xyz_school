import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
 
import Chart from "react-google-charts";
import './Attendence.css'

 const Attendence = () => {
    return (
        <>
      <Container className='attendence'>
          <div className='top-Header'> <h3>Attendence </h3></div>
   <Row>
    {/* <Col >
    <p className='side-bar'>Total Student <span>1000</span></p>
    <p className='side-bar'>Today Present <span>500</span></p>
    <p className='side-bar'>Yesterday Present <span>800</span></p>
    </Col> */}
    <Col>
    <h4>Student Attendence</h4>
    <Chart
  width={'200px'}
  height={'125px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ]}
  options={{
    title: 'My Daily Activities',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
      
    </Col>
  </Row>
  </Container>
        </>
    );
};

export default Attendence;