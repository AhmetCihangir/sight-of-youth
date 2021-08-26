import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import Logo from "./Logo"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logout } from '../actions'

const useStyles = makeStyles(theme => ({
    root : {
        flexGrow : 1,
    },
    bgPattern : {
        backgroundColor: "#f7f7f7",

    },
    text : {
        color : "#303030",
        // color : "#f835d7",
        fontWeight : "600",
        fontSize : theme.spacing(2.1),
        textShadow : `.05rem .05rem #837c83`,
        fontFamily : "'Bebas Neue', cursive;",
        textDecoration : "none",
        [theme.breakpoints.down("sm")]: {
            fontSize : theme.spacing(1.6),
            fontWeight : "400"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize : theme.spacing(1.1)
        }

    },
    btns : {
        marginRight : theme.spacing(4),
        [theme.breakpoints.down("sm")]: {
            marginRight : theme.spacing(3)
        },
        [theme.breakpoints.down("xs")]: {
            marginRight : theme.spacing(.5)
        }
    },
    soyStyles : {
        [theme.breakpoints.down("xs")]: {
            display : "none" 
        }
    },
    image : {
        width : theme.spacing(7),
        height : theme.spacing(7)
    }
}))

const Header = () => {
    
    const classes = useStyles()
    const user = useSelector(state => state.users)
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
    }
    
    
    
    return (
        <AppBar className={classes.bgPattern} style={{display : "flex",justifyContent : "space-between"}} >
            <Toolbar>
                {/* <img className={classes.image} src="/logosoy.png" alt="" /> */}
                <Logo classes={classes.image} />
                
                <Typography component={Link} to={"/"} variant="h6" style={{color : "#F9B5C0"}} className={`${classes.text} ${classes.root} ${classes.soyStyles}`}> 
                    Sight Of Youth
                </Typography>
                <Button component={Link} to={"/ourteam"} className={`${classes.text} ${classes.btns}`}> 
                    Ekİbİmİz
                </Button>
                <Button component={Link} to={"/blogs"} className={`${classes.text} ${classes.btns}`}> 
                    Blog'umuz
                </Button>
                <Button component={Link} to={"/#footer"} className={`${classes.text} ${classes.btns}`} > 
                    İletİşİm
                </Button>
                { user.role === "admin" && (
                <Button component={Link} to={"/addBlog"} className={`${classes.text} ${classes.btns}`}> 
                    Blog Ekle
                </Button>)
                }
                {
                    user.logged ? (
                        <Button component={Link} to={"/"} onClick={onLogout} className={`${classes.text} ${classes.btns}`}> 
                            Çıkış Yap
                        </Button>
                    ) : (
                        <>
                        <Button component={Link} to={"/login"} className={`${classes.text} ${classes.btns}`}> 
                            Gİrİş Yap
                        </Button>
                        <Button component={Link} to={"/signup"} className={`${classes.text} ${classes.btns}`}> 
                            Kayıt Ol 
                        </Button>
                        </>
                    ) 
                }

            </Toolbar>
        </AppBar>
    )
}

export default Header
