import { makeStyles,Grid,Typography,Divider } from '@material-ui/core'
import React from 'react'
import Logo from "../Logo"
const useStyles = makeStyles(theme => ({
    mainSide : {
        height : theme.spacing(50),
        backgroundColor : "#F9B5C0",
        borderBottomLeftRadius : "1rem",
        borderBottomRightRadius : "1rem"
    },
    logoLength : {
        width : "100%",
        height : theme.spacing(30),
        [theme.breakpoints.down("sm")]: {
            height : theme.spacing(15)
        }
    },
    logoCoverStyle : {
        margin:"auto 0",
        [theme.breakpoints.down("sm")]: {
            margin : "auto 0 0 0"
        }
    },

    textStyles : {
        color : "#000000",
        fontSize : theme.typography.h4.fontSize,
        [theme.breakpoints.down("sm")]: {
            fontSize : theme.typography.h5.fontSize
        },
        [theme.breakpoints.down("xs")]: {
            fontSize : theme.typography.h6.fontSize
        }
    },
    altTextStyles : {
        fontSize : theme.typography.h6.fontSize,
        [theme.breakpoints.down("sm")]: {
            fontSize : "1rem"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize : ".75rem"
        }

    }
     
}))



const About = () => {
    const classes = useStyles()
    
    return (
        <Grid container item className={classes.mainSide} justify="space-around" id="about" >
            <Grid container item xs={8}>
                <Grid container item xs={12} md={4} justify="center" className={classes.logoCoverStyle}>
                    <Logo classes={classes.logoLength} shadowClass={true} />
                </Grid>
                <Grid item xs={12} md={6} style={{margin:"auto 3rem"}}>
                    <div>
                        <div style={{paddingBottom : ".6rem"}}>
                            <Typography variant="h2" className={classes.textStyles}>
                                Biz Kimiz?
                            </Typography>
                        </div>

                        <Divider />
                        <div style={{paddingTop : "1.2rem"}}>
                            <Typography variant="h6" className={classes.altTextStyles} >
                                Fırsatı olmayan gençlerin toplumda aktif bir rol alması için çabalayan bir topluluktur.
                            </Typography>
                        </div>


                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default About
