import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles';
import Teacher from './Teacher/Teacher';
const AssisTeachers = () => {
  const classes = useStyles();
  const [teachers, setTeachers] = useState([])
   
     useEffect(() =>{
      fetch('https://rocky-bastion-51540.herokuapp.com/getTeachers')
      .then(response => response.json())
      .then(data => setTeachers(data))
     },[0])
  return (
    !teachers.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {teachers?.map((teacher) => (
          <Grid key={teacher._id} item xs={12} sm={12} md={6} lg={3}>
            <Teacher teacher={teacher}/>
          </Grid>
        ))}
      </Grid>
    )
  );
};


export default AssisTeachers;