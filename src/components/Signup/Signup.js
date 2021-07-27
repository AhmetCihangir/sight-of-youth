import React from 'react'
import { Grid,Card,makeStyles,CardContent,CardActions,TextField,Typography,Button } from "@material-ui/core"
import Logo from "../Logo"


const useStyles = makeStyles(theme => ({
    mainStyles : {
        backgroundColor :"rgba(249,181,192,1)",
        height : window.innerHeight - 65,
    },
    logoStyles : {
        height : theme.spacing(25),
        width : "100%",
        margin : ".5rem 0"
    },

}))



const Signup = ({ inputs,sendBtn = "Kayıt Ol",inputSize = 5, inputAllStyles,inputStyles,cardWidth = 5  }) => {
    const classes = useStyles()

    return (
        <Grid container className={classes.mainStyles} justify="center" alignContent="center" >
            <Grid item xs={cardWidth}>
                <Card>
                    <Grid item xs={12}>
                        <Logo classes={classes.logoStyles} />
                    </Grid>
                    <Typography variant="h5" style={{textAlign : "center"}}>
                        Sight Of Youth
                    </Typography>
                    <CardContent>
                        <Grid container item className={inputAllStyles} xs={12} spacing={2}>
                            { inputs.map(hold => (
                                <Grid item xs={inputSize}>
                                    <TextField key={hold.id} className={inputStyles} id={hold.id} placeholder={hold.placeholder} type={hold.type} required={hold.required} />
                                </Grid>
                            )) }
                        </Grid>
                    </CardContent>
                    <CardActions style={{justifyContent : "flex-end"}}>
                        <Button>
                            İptal
                        </Button>
                        <Button variant="contained" color="primary" >
                            { sendBtn }
                        </Button>
                    </CardActions>

                </Card>
            </Grid>

        </Grid>
    )
}

export default Signup
