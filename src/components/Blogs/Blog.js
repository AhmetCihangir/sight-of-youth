import { Card,CardActions,CardContent,CardMedia,CardHeader,IconButton,Typography,Grid,Avatar,Collapse,Divider, makeStyles,TextField,Button } from '@material-ui/core'
import React,{ useEffect, useState } from 'react'
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import SendIcon from '@material-ui/icons/Send';
import Comment from './Comment';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { addComment, likePost } from '../../actions';
import { MoreVert } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
    mainSide : {
        width : "100%",
        height : "100%",
    },
    gridSpacing : {
        marginBottom : "2rem",
        [theme.breakpoints.down("xs")]: {
          margin : "2rem 0"
        }
    },
    linkingBtn : {
        marginLeft: 'auto',
    },
    amountOfLikesStyles : {
        margin : ".3rem 1.5rem"
    },
    likeStyles : {
        fontSize : theme.typography.subtitle1.fontSize,
        position : "relative",
        bottom : "-2.7px",
        margin : "0 .2rem"
    },
    ani: {
        animation: `$animated .25s ${theme.transitions.easing.easeInOut} `,
      },
    aniExit: {
        animation: `$animatedExit .25s ${theme.transitions.easing.easeInOut} `,
      },
    "@keyframes animated": {
        "0%": {
          transform: "scale(0)",
        },
        "25%": {
          transform: "scale(.5)",
        },
        "50%": {
          transform: "scale(.8)",
        },
        "60%": {
          transform: "scale(1.1)",
        },
        "75%": {
          transform: "scale(1.2)",
        },
        "100%": {
          transform: "scale(1)",
        },
      },
    "@keyframes animatedExit": {
        "0%": {
          transform: "scale(0)",
        },
        "25%": {
          transform: "scale(.5)",
        },
        "50%": {
          transform: "scale(.8)",
        },
        "60%": {
          transform: "scale(1)",
        },
        "75%": {
          transform: "scale(1.2)",
        },
        "100%": {
          transform: "scale(1)",
        },
      },
}))

const Blog = ({ author,date,avatar,srcImage,title,description,amountOfLikes,comments,id }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const blogLikedProfile = useSelector(state => state.posts.filter(p => p.id === id)[0].likedProfiles)
    
    const user = useSelector(state => state.users)
    
    
    const [loaded, setLoaded] = useState(false)
    const [like, setLike] = useState(false)
    const [likeNumbers, setLikeNumbers] = useState(amountOfLikes)
    const [expended, setExpended] = useState(false)
    const [isWriting, setIsWriting] = useState(false)
    const [myComment, setMyComment] = useState(comments)
    const [value, setValue] = useState("")
    

    const handleClick = (change,lnumber) => {
      if(user.logged){
        setLike(change)
        setLikeNumbers(likeNumbers + lnumber)
        dispatch(likePost(id,user.id,lnumber))
        !loaded && setLoaded(true) 
      }



    }

    const handleComment = () => {
      const time = new Intl.DateTimeFormat("tr",{day : "numeric" , month : "long", year : "numeric"}).format(new Date())
      setMyComment([...myComment,{ author : user.name, text : value ,  date : time, avatar : user.avatar}])
      dispatch(addComment({ author : user.name, text : value ,  date : time , avatar : user.avatar },id))
    }

    useEffect(() => {
      if(user.logged){
        setLoaded(blogLikedProfile.includes(user.id))
        setLike(blogLikedProfile.includes(user.id))
      }
    },[user.logged])

    return (
      <Grid container item xs={12} className={classes.gridSpacing}>
        <Card className={classes.mainSide}>
          <CardHeader
            avatar={
              avatar ? (
                <Avatar src={avatar} />
              ) : (
                <Avatar>
                  <PersonIcon />
                </Avatar>
              )
            }
            action={
              user.role === "admin" && (
                <IconButton component={Link} to={`/updateBlog/${id}`}>
                  <MoreVert />
                </IconButton>
              )
            }
            title={author}
            subheader={date}
          />
          <CardContent>
            <Typography variant="body1" onCopy={(e) => e.preventDefault()}>
              {title}
            </Typography>
            <Typography variant="body2" onCopy={(e) => e.preventDefault()}>
              {description}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={srcImage}
            onDoubleClick={() => handleClick(true, like ? 0 : 1)}
            />

          <div className={classes.amountOfLikesStyles}>
            <Typography variant="subtitle2">
              <FavoriteIcon color="error" className={classes.likeStyles} />
              {likeNumbers}
            </Typography>
          </div>
          <Divider />
          <CardActions
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <IconButton
                className={loaded && (like ? classes.ani : classes.aniExit)}
                onClick={() => handleClick(!like, like ? -1 : 1)}
              >
                {like ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
              </IconButton>
              <IconButton onClick={() => setExpended(!expended)}>
                <CommentIcon />
              </IconButton>
            </div>
            <IconButton className={classes.linkingBtn} component={Link} to={`/blogs/${id}`}>
              <ArrowForwardIosIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expended} timeout="auto">
            <CardContent>
              {user.logged && <Grid container item xs={12}>
                <Grid container item xs={2} justify="center">
                  {user.avatar ? (
                    <Avatar src={user.avatar} />
                  ) : (
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  )}
                </Grid>
                <Grid container item xs={8}>
                  <TextField
                    variant="outlined"
                    placeholder="Bir yorum ekle. "
                    multiline
                    style={{ width: "100%" }}
                    onFocus={() => setIsWriting(true)}
                    onChange={(event) => setValue(event.target.value)}
                    value={value}
                  />
                  { isWriting && (<Grid container item xs={12} justify="flex-end">
                    <Button variant="outlined" style={{ marginTop: ".7rem",marginRight : ".7rem" }} onClick={() => setIsWriting(false)}>
                      İptal
                    </Button>
                    <Button
                      style={{ marginTop: ".7rem" }}
                      color="primary"
                      variant="contained"
                      onClick={handleComment}
                    >
                      Gönder
                    </Button>
                  </Grid>) }
                </Grid>
              </Grid>}
              {myComment.map((cmt,index) => (
                <Comment
                  author={cmt.author}
                  date={cmt.date}
                  text={cmt.text}
                  avatar={cmt.avatar}
                  key={index}
                />
              ))}
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    );
}

export default Blog
