import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core/';
import useStyles from './styles';
import { Link } from 'react-router-dom';
const Teacher = (props) => {
  const {_id, Name, email, selectedFile, designation } = props.teacher;
    const classes = useStyles();
    return (
      <>
        <Card className={classes.card}  raised elevation={6}>
        <Link to={"assisTeacher/"+_id}>
        <CardMedia className={classes.media} image={selectedFile.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}/>
        <div className={classes.overlay}>
          <Typography variant="h6">{Name}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{designation}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{email}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
        </CardActions>
        </Link>
      </Card>
      
      </>
    );
};

export default Teacher;