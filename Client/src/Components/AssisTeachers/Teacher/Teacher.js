import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core/';
import useStyles from './styles';
const Teacher = ({teacher}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}  raised elevation={6}>
        <CardMedia className={classes.media} image={teacher.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}/>
        <div className={classes.overlay}>
          <Typography variant="h6">{teacher.Name}</Typography>
          {/* <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography> */}
        </div>
        {/* <div className={classes.overlay2}>
          <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
        </div> */}
        {/* <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div> */}
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{teacher.designation}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{teacher.email}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          {/* <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
          <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button> */}
        </CardActions>
      </Card>
    );
};

export default Teacher;