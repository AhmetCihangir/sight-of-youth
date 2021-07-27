import { IconButton,Typography,Grid,Avatar,Divider, makeStyles } from '@material-ui/core'
import React from 'react'
import PersonIcon from '@material-ui/icons/Person';



const Comment = ({ avatar,author,text,date }) => {
    return (
      <>
      <Divider variant="inset" style={{margin : "1rem 0"}} />
      <Grid container item xs={12}>
        <Grid container item xs={2} justify="center">
          {avatar ? (
            <Avatar src={avatar} />
          ) : (
            <Avatar>
              <PersonIcon />
            </Avatar>
          )}
        </Grid>
        <Grid item xs={8}>
            <Typography variant="body1" component="span" >
                {author} 
            </Typography>
            <Typography style={{opacity : ".7"}} component="span"> - {date} </Typography>   
            <Typography variant="body2" >
                {text}
            </Typography>
        </Grid>
      </Grid>
      </>
    );
}

export default Comment
