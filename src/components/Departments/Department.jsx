import { Card, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    mWidth : {
        minWidth : "240px"
    },
    headerFont : {
        fontSize : theme.spacing(2.5),
        fontFamily : "'Bebas Neue', cursive;"

    },
    textFont : {
        fontSize : theme.spacing(2),
        fontFamily : "'Bebas Neue', cursive;"
    },
    imgStyles : {
        height : "100%",
        width : "100%"
    },
}))

const Department = ({dpName,dpDescription,dpImage}) => {
    const classes = useStyles()
    

    
    return (
        <Grid item xs={2} className={classes.fnt} >
            <Card variant="outlined" className={classes.mWidth} >
                <CardMedia component="img" className={classes.imgStyles} image={dpImage} />
                <CardContent>
                    <Typography variant="h5" className={classes.headerFont} >
                        {dpName} 
                    </Typography>
                    <Typography variant="h6" className={classes.textFont}>
                        {dpDescription} 
                    </Typography>
                </CardContent>
                <CardActions style={{
                    fontFamily : "'Bebas Neue', cursive;"
                }}>
                    Read More...
                </CardActions>
            </Card>
        </Grid>

    )
}

export default Department
