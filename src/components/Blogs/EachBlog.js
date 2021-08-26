import { Grid, makeStyles, Typography, Divider,Collapse,IconButton,Button,Avatar, TextField, } from '@material-ui/core'
import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Comment from './Comment'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
import PersonIcon from '@material-ui/icons/Person';
import { useDispatch,useSelector } from "react-redux";
import { addComment,likePost } from '../../actions'



const useStyles = makeStyles(theme => ({
    resimCoverStyles : {
        width : "100%",
        height : "10rem",
        overflow : "hidden",
        backgroundSize : "cover",
        backgroundPosition : "center",
        borderBottomLeftRadius : "1rem",
        borderBottomRightRadius : "1rem",
    },
    titleStyles : {
        fontSize : theme.typography.h3.fontSize,
    },
    dateStyles : {
        textAlign : "center",    
    },
    textStyles : {
        margin : ".9rem 0",
        fontSize : theme.typography.h6.fontSize,
        [theme.breakpoints.down("sm")]: {
            fontSize : "1rem"
        }
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


const EachBlog = () => {
    const { id } = useParams()
    const blog = useSelector( state => state.posts.filter(b => parseInt(b.id) === parseInt(id))[0] )
    const user = useSelector(state => state.users)

    const classes = useStyles()
    const [expended, setExpended] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [like, setLike] = useState(false)
    const [isWriting, setIsWriting] = useState(false)
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
        
    const [myComment, setMyComment] = useState(blog.comments)
    const [likeNumbers, setLikeNumbers] = useState(blog.amountOfLikes)

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
        setMyComment([...myComment,{ author : user.name, text : value ,  date : time , avatar : user.avatar }])
        dispatch(addComment({ author : user.name, text : value ,  date : time , avatar : user.avatar },id))
  
    }

     if(user.logged){
       setLoaded(blogLikedProfile.includes(user.id))
       setLike(blogLikedProfile.includes(user.id))
     }
    
    return (
        <>  
            <div className={classes.resimCoverStyles} style={{backgroundImage : `url(${blog.srcImage})`}} />

            <Grid container justify="center">
                <Grid item container xs={8}>
                    <div style={{width : "100%",display : "flex", justifyContent : "space-between",margin : "1.5rem 0 .7rem 0"}}>
                        <Typography variant="h1" className={classes.titleStyles}>
                            { blog.title }
                        </Typography>
                        <Typography variant="body2" className={classes.dateStyles}>
                            {blog.date}
                        </Typography>
                    </div>
                    <Divider style={{width : "100%"}} />
                    <Typography variant="body1"  className={classes.textStyles}>
                        <div dangerouslySetInnerHTML={{__html : blog.text}} />                        
                    </Typography>
                    <Divider style={{width : "100%"}} />
                    <Grid item container>
                        <Typography variant="subtitle2" style={{margin : "1rem"}}>
                            {likeNumbers}
                        </Typography>
                        <IconButton
                            className={`${loaded && (like ? classes.ani : classes.aniExit)}`}
                            onClick={() => handleClick(!like, like ? -1 : 1)}
                        >
                            {like ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                        </IconButton>
                        <IconButton onClick={() => setExpended(!expended)}>
                            <CommentIcon />
                        </IconButton>
                    </Grid>
                    <Collapse in={expended && user.logged} timeout="auto" style={{width : "100%"}}>
                        <Divider style={{width : "100%"}} />
                        <Grid container item xs={12} style={{margin : "1rem 0" }}>
                            <Grid container item xs={2} justify="center">
                            {blog.avatar ? (
                                <Avatar src={blog.avatar} />
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
                        </Grid>                    
                    </Collapse>
                    <Grid container item style={{marginBottom : "1rem"}}>
                        { myComment.map((cmt,index) => (
                            <Grid container>
                                <Comment
                                author={cmt.author}
                                date={cmt.date}
                                text={cmt.text}
                                avatar={cmt.avatar}
                                key={index}
                                />
                            </Grid>

                        )) }
                    </Grid>

                </Grid>  
            </Grid>
            
        </>
    )
}

export default EachBlog
