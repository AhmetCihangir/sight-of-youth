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
    },
    textStyles : {
        color : "#000000",
        fontSize : theme.typography.h4.fontSize,
        fontFamily : "'Bebas Neue', cursive;"
    },
    altTextStyles : {
        fontSize : theme.typography.h6.fontSize,
        fontFamily : "'Bebas Neue', cursive;"

    }
     
}))



const About = () => {
    const classes = useStyles()
    
    return (
        <Grid container item className={classes.mainSide} justify="space-around" id="about" >
            <Grid container item xs={8}>
                <Grid item xs={4} style={{margin:"auto 0"}}>
                    <Logo classes={classes.logoLength} shadowClass={true} />
                </Grid>
                <Grid item xs={6} style={{margin:"auto 3rem"}}>
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
