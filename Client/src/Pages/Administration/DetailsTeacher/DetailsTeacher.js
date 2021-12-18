import React from 'react';
import HomeRightSide from '../../../Common/HomeRightSide/HomeRightSide';
import Header from '../../../Components/Header/Header';
import { Container, Grow, Grid } from '@material-ui/core';
import TeacherDetails from '../TeacherDetails/TeacherDetails';
const DetailsTeacher = () => {
    return (
        <div>
             <Header/>
     <Grow in>
        <Container maxWidth="xl">
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} md={9}>
            <TeacherDetails/>
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

export default DetailsTeacher;