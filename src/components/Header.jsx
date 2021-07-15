import { AppBar, Box, Button, makeStyles, Paper, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import Logo from "./Logo"
import { Link } from "react-router-dom"

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
        fontSize : theme.spacing(2.3),
        textShadow : `.1rem .1rem #837c83`,
        fontFamily : "'Bebas Neue', cursive;"

    },
    btns : {
        marginRight : theme.spacing(4)
    },
    image : {
        width : theme.spacing(7),
        height : theme.spacing(7)
    }
}))

const Header = () => {
    
    const classes = useStyles()
    
    
    
    return (
        <AppBar className={classes.bgPattern} style={{display : "flex",justifyContent : "space-between"}} >
            <Toolbar>
                {/* <img className={classes.image} src="/logosoy.png" alt="" /> */}
                <Logo classes={classes.image} />
                
                <Typography variant="h6" style={{color : "#F9B5C0"}} className={`${classes.text} ${classes.root}`}> 
                    Sight Of Youth
                </Typography>
                <Button component={Link} to={"#about"} className={`${classes.text} ${classes.btns}`}> 
                    Bİz Kİmİz?
                </Button>
                <Button className={`${classes.text} ${classes.btns}`}> 
                    Projelerİmİz
                </Button>
                <Button className={`${classes.text} ${classes.btns}`}> 
                    İletİşİm
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
