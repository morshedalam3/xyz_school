import { Container, Grow, Grid } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../Components/Header/Header';
import HomeRightSide from '../../../Common/HomeRightSide/HomeRightSide';

const TeacherDetails = () => {

    const {_id} = useParams();
    const [currentTeacher, setCurrentTeacher] = useState([]);
   
    useEffect(() =>{
     fetch('https://rocky-bastion-51540.herokuapp.com/getTeachers')
     .then(response => response.json())
     .then(data => setCurrentTeacher(data))
    },[])
    const teacher = currentTeacher.find(pd => pd._id === _id); 
    console.log(teacher)
    return (
        <div>
            <Header/>
            <Grow in>
        <Container maxWidth="xl">
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} md={9}>
                <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <h5><ArrowForwardIcon/>Name: {teacher?.name}</h5>
                    <h5><ArrowForwardIcon/>Designation: {teacher?.designation}</h5>
                    <h5><ArrowForwardIcon/>Email: {teacher?.email}</h5>
                    <h5><ArrowForwardIcon/>Phone: {teacher?.phone}</h5>
                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <img style={{ width: '70%', marginTop:"20px" }} src={teacher?.selectedFile.selectedFile} alt="" />
                </Grid>
            </Grid>
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

export default TeacherDetails;