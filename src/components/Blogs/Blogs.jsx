import { Grid,makeStyles,Card,CardActions,CardContent,CardActionArea,CardMedia,Typography, Avatar, List,ListItemIcon,ListItem,ListItemText,Divider, IconButton } from '@material-ui/core'
import React from 'react'
import { Skeleton } from "@material-ui/lab"
import { useState,useEffect } from "react"
import { Star,ArrowForwardIos } from "@material-ui/icons"
import Blog from './Blog'


// const blogs = [
//     { author : "deneme 1", date : "21 Temmuz 2021" ,title : "deneme 1", description : "deniyoz lalalalalallallalalalalallala",srcImage : "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",amountOfLikes : 0,avatar : "/svg/logosoy-2.svg", comments : [ 
//       { author : "Selam 1", text : "Lorem sıdhs sdhajsdn sjaksdmskd sakdjks sasd", date : "23 Temmuz 2021" , avatar : "/svg/logosoy-2.svg" }, 
//       { author : "Selam 2", text : "Lorem sıdhs sdhajsdn asdjskdlaskd sjaksdmskd sakdjks sasd", date : "23 Temmuz 2021" , avatar : "" }, 
//       { author : "Selam 3", text : "Lorem sıdhs sdhajsdn asdjskdlaskd sjaksdmskd", date : "23 Temmuz 2021" , avatar : "/svg/logosoy-2.svg" }, 
//     ] },
//     { author : "deneme 1", date : "21 Temmuz 2021" ,title : "deneme 2", description : "deniyoz lalalalalallallalalalalallala",srcImage : "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",amountOfLikes : 1,avatar : "", comments : [ 
//       { author : "Selam 1", text : "Lorem sıdhs sdhajsdn sjaksdmskd sakdjks sasd", date : "23 Temmuz 2021" , avatar : "/svg/logosoy-2.svg" }, 
//       { author : "Selam 2", text : "Lorem sıdhs sdhajsdn asdjskdlaskd sjaksdmskd sakdjks sasd", date : "23 Temmuz 2021" , avatar : "" }, 
//       { author : "Selam 3", text : "Lorem sıdhs sdhajsdn asdjskdlaskd sjaksdmskd", date : "23 Temmuz 2021" , avatar : "/svg/logosoy-2.svg" }, 
//     ] },
//     { author : "deneme 1", date : "21 Temmuz 2021" ,title : "deneme 3", description : "deniyoz lalalalalallallalalalalallala",srcImage : "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",amountOfLikes : 0,avatar : "/svg/logosoy-2.svg", comments : [ 
//       { author : "Selam 1", text : "Lorem sıdhs sdhajsdn sjaksdmskd sakdjks sasd", date : "23 Temmuz 2021" , avatar : "/svg/logosoy-2.svg" }, 
//       { author : "Selam 2", text : "Lorem sıdhs sdhajsdn asdjskdlaskd sjaksdmskd sakdjks sasd", date : "23 Temmuz 2021" , avatar : "" }, 
//       { author : "Selam 3", text : "Lorem sıdhs sdhajsdn asdjskdlaskd sjaksdmskd", date : "23 Temmuz 2021" , avatar : "/svg/logosoy-2.svg" }, 
//     ] },
//     { author : "deneme 1", date : "21 Temmuz 2021" ,title : "deneme 4", description : "deniyoz lalalalalallallalalalalallala",srcImage : "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",amountOfLikes : 1,avatar : "", comments : [ 
//       { author : "Selam 1", text : "Lorem sıdhs sdhajsdn sjaksdmskd sakdjks sasd", date : "23 Temmuz 2021" , avatar : "/svg/logosoy-2.svg" }, 
//       { author : "Selam 2", text : "Lorem sıdhs sdhajsdn asdjskdlaskd sjaksdmskd sakdjks sasd", date : "23 Temmuz 2021" , avatar : "" }, 
//       { author : "Selam 3", text : "Lorem sıdhs sdhajsdn asdjskdlaskd sjaksdmskd", date : "23 Temmuz 2021" , avatar : "/svg/logosoy-2.svg" }, 
//     ] },
//     { author : "deneme 1", date : "21 Temmuz 2021" ,title : "deneme 5", description : "deniyoz lalalalalallallalalalalallala",srcImage : "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",amountOfLikes : 2,avatar : "/svg/logosoy-2.svg", comments : [ 
//       { author : "Selam 1", text : "Lorem sıdhs sdhajsdn sjaksdmskd sakdjks sasd", date : "23 Temmuz 2021" , avatar : "/svg/logosoy-2.svg" }, 
//       { author : "Selam 2", text : "Lorem sıdhs sdhajsdn asdjskdlaskd sjaksdmskd sakdjks sasd", date : "23 Temmuz 2021" , avatar : "" }, 
//       { author : "Selam 3", text : "Lorem sıdhs sdhajsdn asdjskdlaskd sjaksdmskd", date : "23 Temmuz 2021" , avatar : "/svg/logosoy-2.svg" }, 
//     ] },
// ]

const weeklyNews = [
  { title : "deneme 1" , id : 1 , subTitle : " deneme 1 blalalalallalaa" },
  { title : "deneme 2" , id : 2 , subTitle : " deneme 2 blalalalallalaa" },
  { title : "deneme 3" , id : 3 , subTitle : " deneme 3 blalalalallalaa" },
  { title : "deneme 4" , id : 4 , subTitle : " deneme 4 blalalalallalaa" },
] 

const Loading = ({ key,className }) => (
  <Grid item xs={12} key={key}  className={className}>
    <Skeleton variant="rect" animation="wave" width="100%" height="100%" />
  </Grid>
)

const useStyles = makeStyles((theme) => ({
  boxStyles: {
    height: theme.spacing(40),
    marginBottom: "1rem",
  },
  fullSize: {
    width: "100%",
    height: "100%",
  },
  profileStyles : {
    position : "relative",
    top : "-1rem",
    zIndex : 1,
    height : "2.5rem",
  },
  avatarStyle : {
    width : theme.spacing(6),
    height : theme.spacing(6),

  },
  weeklyNewsBtnStyles : {
    width : theme.spacing(2.2),
    height : theme.spacing(2.2),

  },
  weeklyNewsStyles : {
    backgroundColor : "rgba(189,189,189,0.4)",
    borderRadius : ".7rem",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 20.0px )",
    maxHeight : "20.5rem"
  }
}));



const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const classes = useStyles()


    
    
    
    useEffect(() => {
      fetch("http://localhost:3001/allblogs").then(res => res.json())
      .then(res => {
      })


      setBlogs(blog)
    },[]);
    // fetch("http://localhost:3001/allblogs",{
    //   method : "GET",
    // }).then(res => console.log(res.json()))

    

    return (
      <Grid container justify="center">
        <Grid container item xs={10} justify="space-between" style={{marginTop : "2rem"}}>
          <Grid container item xs={2} style={{ height : "13rem" }}>
            
            <Grid container item xs={12} alignItems="center" justify="center" style={{backgroundColor : "#F9B5C0",height : "4.5rem",borderTopLeftRadius : ".7rem",borderTopRightRadius : ".7rem"}} />
            <Grid container item xs={12} direction="row" style={{height : "8.5rem",backgroundColor : "rgba(189,189,189,0.4)",borderBottomLeftRadius : ".7rem",borderBottomRightRadius : ".7rem"}} spacing={0}>

              <Grid container item className={classes.profileStyles} justify="center">
                <Avatar className={classes.avatarStyle}>SY</Avatar>
              </Grid>

              <Grid container item style={{height : "7rem" ,marginTop : 0 }} justify="center">
                <Typography variant="h5">
                  {"{İsim}"}
                </Typography>
              </Grid>



            </Grid>
          </Grid>
          <Grid container item xs={6}>
            {blogs
              ? Array(6).fill(1).map(() => <Loading key={Math.floor(Math.random() * 10000)} className={classes.boxStyles} />)
              : blogs.map(blog => (
                <Blog author={blog.author} date={blog.date} avatar={blog.avatar} srcImage={blog.srcImage} title={blog.title} description={blog.description} amountOfLikes={blog.amountOfLikes} key={blog.title} comments={blog.comments}  />
              ))
            }
          </Grid>
          <Grid container item xs={3}>

            <List className={classes.weeklyNewsStyles}>
              <ListItem style={{justifyContent : "center"}} >
                <Typography variant="body1">
                  Haftalık Bülten
                </Typography>
              </ListItem>
              <Divider />
              { weeklyNews.map(news => (
                <ListItem key={news.id}>
                  <ListItemIcon style={{justifyContent : "center"}}>
                    <Star />
                  </ListItemIcon>
                  <ListItemText primary={news.title} secondary={news.subTitle} />
                  <ListItemIcon style={{justifyContent : "center"}}>

                    <IconButton>
                      <ArrowForwardIos className={classes.weeklyNewsBtnStyles} />

                    </IconButton>
                  </ListItemIcon>
                </ListItem>
              )) }
            </List>

          </Grid>


        </Grid>
      </Grid>
    );
}

export default Blogs


