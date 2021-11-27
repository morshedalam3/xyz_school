import React from 'react';
// import { Col, Container, Row } from "react-bootstrap";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import HomeRightSide from '../../../Common/HomeRightSide/HomeRightSide';
import AssisTeachers from '../../../Components/AssisTeachers/AssisTeachers';
import Header from '../../../Components/Header/Header';

const AssistantHead = () => {
    return (
        <div>
        <Header/>
          {/* <Container>
      <Row>
        <Col lg={7} classNameName="mt-4">
           <AssisTeachers/>
        </Col>
        <Col lg={5}>
          <HomeRightSide />
        </Col>
      </Row>
    </Container> */}
     <Grow in>
        <Container maxWidth="xl">
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} md={9}>
            <AssisTeachers/>
            </Grid>
            <Grid item xs={12} sm={3}>
            <HomeRightSide />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      </div>
    );
};

export default AssistantHead;