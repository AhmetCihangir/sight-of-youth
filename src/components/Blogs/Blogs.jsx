import { Grid,makeStyles,Typography, Avatar,} from '@material-ui/core'
import React from 'react'
import { Skeleton } from "@material-ui/lab"
import Blog from './Blog'
import { useSelector } from 'react-redux'

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
    // const [blogs, setBlogs] = useState([])
    const classes = useStyles()

    const blogs = useSelector(state => state.posts)
    const user = useSelector(state => state.users)

    // useEffect(()=> {
    //   setBlogs(posts)
    // },[])


    return (
      <Grid container justify="center">
        <Grid container item xs={10} justify="space-around" style={{marginTop : "2rem"}}>
          <Grid container item xs={10} sm={2} style={{ height : "13rem" }}>

            <Grid container item xs={12} alignItems="center" justify="center" style={{backgroundColor : "#F9B5C0",height : "4.5rem",borderTopLeftRadius : ".7rem",borderTopRightRadius : ".7rem"}} />
            <Grid container item xs={12} direction="row" style={{height : "8.5rem",backgroundColor : "rgba(189,189,189,0.4)",borderBottomLeftRadius : ".7rem",borderBottomRightRadius : ".7rem"}} spacing={0}>

              <Grid container item className={classes.profileStyles} justify="center">
                {user.logged ? (
                  <Avatar className={classes.avatarStyle} src={user.avatar} />
                  ) : (
                    <Avatar className={classes.avatarStyle}>SOY</Avatar>
                )}
              </Grid>

              <Grid container item style={{height : "7rem" ,marginTop : 0 }} justify="center">
                <Typography variant="h5">
                  {user.logged ? user.name : "Yorum yapmak ve beğenmek için giriş yapın"}
                </Typography>
              </Grid>



            </Grid>
          </Grid>
          <Grid container item xs={10} sm={6}>
            {!blogs
              ? [1,2,3,4,5,6].map((i) => <Loading key={i} className={classes.boxStyles} />)
              : blogs.map(blog => (
                <Blog author={blog.author} date={blog.date} avatar={blog.avatar} srcImage={blog.srcImage} title={blog.title} description={blog.description} amountOfLikes={blog.amountOfLikes} key={blog.title} comments={blog.comments} id={blog.id} />
              ))
            }
          </Grid>
          <Grid container item xs={10} sm={2} style={{ height : "13rem",marginBottom : "1rem" }}>

            <Grid container item xs={12} alignItems="center" justify="center" style={{backgroundColor : "#F9B5C0",height : "4.5rem",borderTopLeftRadius : ".7rem",borderTopRightRadius : ".7rem"}} />
            <Grid container item xs={12} direction="row" style={{height : "8.5rem",backgroundColor : "rgba(189,189,189,0.4)",borderBottomLeftRadius : ".7rem",borderBottomRightRadius : ".7rem"}} spacing={0}>

              <Grid container item className={classes.profileStyles} justify="center">
                {user.logged ? (
                  <Avatar className={classes.avatarStyle} src={user.avatar} />
                  ) : (
                    <Avatar className={classes.avatarStyle}>SOY</Avatar>
                )}
              </Grid>

              <Grid container item style={{height : "7rem" ,marginTop : 0 }} justify="center">
                <Typography variant="h5" >
                  {user.logged ? user.name : "Yorum yapmak ve beğenmek için giriş yapın"}
                </Typography>
              </Grid>



            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
}

export default Blogs


