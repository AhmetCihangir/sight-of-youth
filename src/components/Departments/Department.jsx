import { Card, CardContent, CardMedia, Grid, makeStyles, Typography,Divider } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    mWidth : {
        minWidth : "240px"
    },
    headerFont : {
        fontSize : theme.spacing(2.5),
        fontFamily : "'Bebas Neue', cursive;",
    },
    textFont : {
        fontSize : theme.spacing(2),
        fontFamily : "'Bebas Neue', cursive;",
        fontWeight : "light"
    },
    imgStyles : {
        height : "100%",
        width : "100%"
    },
    fnt : {
        margin : "1rem"
    }
}))

const Department = ({dpName,dpDescription,dpImage}) => {
    const classes = useStyles()
    

    
    return (
        <Grid item xs={10} sm={5} md={2} className={classes.fnt} >
            <Card variant="outlined" className={classes.mWidth} >
                <CardMedia component="img" className={classes.imgStyles} image={dpImage} />
                <CardContent>
                    <Typography variant="h5" className={classes.headerFont} >
                        {dpName} 
                    </Typography>
                    <Divider style={{margin : ".5rem 0"}}/>
                    <Typography variant="h6" className={classes.textFont}>
                        {dpDescription} 
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

    )
}

export default Department
