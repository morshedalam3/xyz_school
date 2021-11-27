import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import HomeRightSide from '../../Common/HomeRightSide/HomeRightSide';
import Header from '../../Components/Header/Header';
import ResultQueryForm from '../../Components/ResultQueryForm/ResultQueryForm';
const ResultQuery = () => {
    return (
        <div>
  <Header/>
       <Grow in>
        <Container maxWidth="xl">
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} md={9}>
            <ResultQueryForm/>
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

export default ResultQuery;