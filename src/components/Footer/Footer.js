import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Grid,IconButton,Typography,Button,makeStyles,Divider } from '@material-ui/core';

import { Link } from "react-router-dom"

const pageBtns = [
    { text : "Bİz Kİmİz?" , to : "/#about" },
    { text : "Blog'umuz" , to : "/blogs" },
    { text : "Ekİbİmİz" , to : "/ourteam" },
    { text : "İletİşİm" , to : "/contact" },
]


const useStyles = makeStyles(theme => ({
    mainStyles : {
        backgroundColor :"rgba(249,181,192,1)",
        borderTopLeftRadius : "1rem",
        borderTopRightRadius : "1rem",
    },
    dividerMargin : {
        margin : ".5rem 0"
    }

}))


const Footer = () => {
    const classes = useStyles()


    return (
        <Grid container className={classes.mainStyles} justify="space-around"> 
            <Grid container item style={{ margin : "3rem 0" }} xs={8} justify="space-evenly">
                <Grid item xs={3}>
                    <Grid container item xs={12} justify="center">
                        <Typography variant="h6">
                            Sayfalarımız
                        </Typography>
                    </Grid>
                    <Divider className={classes.dividerMargin} />

                    <Grid container justify="space-evenly">
                        { pageBtns.map(btn => (
                            <Grid item xs={5}>
                                {
                                    btn.to === "/#about" ? (
                                    <Button href={btn.to}>
                                        {btn.text}
                                    </Button>
                                    ) : (
                                    <Button component={Link} to={btn.to}>
                                        {btn.text}
                                    </Button>
                                    )
                                }

                            </Grid>
                        )) }
                    </Grid>



                </Grid>

                <Grid item xs={3}>
                    <Grid container item xs={12} justify="center">
                        <Typography variant="h6">
                            Sosyal Medyalarımız
                        </Typography>
                    </Grid>

                    <Divider className={classes.dividerMargin} />

                    <Grid container justify="space-evenly">
                        <IconButton href="https://www.instagram.com/sightofyouth" >
                            <InstagramIcon />
                        </IconButton>
                        <IconButton href="https://www.linkedin.com/company/sight-of-youth/" >
                            <LinkedInIcon />
                        </IconButton>

                    </Grid>
                    

                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer
