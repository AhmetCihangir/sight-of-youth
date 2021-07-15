import React from 'react'
import { Button, Grid,makeStyles,Typography,Divider } from "@material-ui/core"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(theme => ({
    mainSide : {
        backgroundColor : "#F9B5C0",
        borderTopLeftRadius : "1rem",
        borderTopRightRadius : "1rem",
    },
    titleStyles : {
        fontSize : theme.spacing(4),
        fontWeight : 100,
        fontFamily : "'Bebas Neue', cursive;"

    },
    btnStyle : {
        backgroundColor :"rgba(233, 6, 137, 1)",

    }
}))




const Projects = () => {
    const classes = useStyles()
    
    return (
        <Grid container id="blog" justify="space-around" className={classes.mainSide} >
            <Grid container item xs={8}>

                <Grid item xs={12} style={{marginTop : "4.5rem"}} justify="center">
                    <Typography variant="h2" className={classes.titleStyles}  >
                        Şimdiye Kadar Yaptığımız Çalışmaları Görmek İster Misiniz?
                    </Typography>
                </Grid>
                <Grid container item xs={12} style={{margin : "3rem"}} >
                    <Grid item xs={8}>
                        <Divider style={{margin : "1rem"}} />
                    </Grid>



                    <Grid item xs={4}>
                        <Button variant="contained" className={classes.btnStyle}>
                            Blogumuz <ArrowForwardIosIcon />
                        </Button>
                    </Grid>

                </Grid>
                
            </Grid>



        </Grid>
    )
}

export default Projects
