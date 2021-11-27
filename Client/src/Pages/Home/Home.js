import React from "react";
import { Container, Grow, Grid } from '@material-ui/core';
import HomeRightSide from "../../Common/HomeRightSide/HomeRightSide";
import Header from "../../Components/Header/Header";
import MidBody from "../../Components/MidBody/MidBody";
const Home = () => {
  return (
    <div>
      <Header/>
       <Grow in>
        <Container maxWidth="xl">
          <Grid container justify="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={6} md={9}>
            <MidBody />
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

export default Home;
