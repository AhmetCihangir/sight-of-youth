import React from 'react'
import { Grid,Card,makeStyles,CardContent,CardActions,TextField,Typography,Button,Select,MenuItem, InputLabel, Avatar } from "@material-ui/core"
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



const Input = ({ inputs,sendBtn = "Kayıt Ol",inputSize = 5, inputAllStyles,inputStyles,cardWidth = 5,errors,avatarChoice  }) => {
    const classes = useStyles()


    return (
        <Grid container className={classes.mainStyles} justify="center" alignContent="center" >
            <Grid item xs={10} sm={cardWidth}>
                <Card>
                    <Grid item xs={12}>
                        <Logo classes={classes.logoStyles} />
                    </Grid>
                    <Typography variant="h5" style={{textAlign : "center"}}>
                        Sight Of Youth
                    </Typography>
                    <CardContent style={{display : "flex",justifyContent : "center"}}>
                        <Grid container item className={inputAllStyles} justify="center" xs={10} spacing={2}>
                            { inputs.map(hold => (
                                <Grid item xs={11} sm={inputSize}>
                                    <TextField key={hold.id} className={inputStyles} {...hold.register} name={hold.id} id={hold.id} placeholder={hold.placeholder} type={hold.type} error={errors[hold.id] && errors[hold.id].message}  required={hold.required} />
                                </Grid>
                            )) }
                            { avatarChoice && (
                                <Grid item xs={11} sm={inputSize}>
                                    <InputLabel id="avatar-id" shrink >Avatar</InputLabel>
                                    <Select id={avatarChoice.id} labelId="avatar-id" style={{width : "100%"}} {...avatarChoice.register}>
                                        {avatarChoice.menuItem.map(item => (
                                            <MenuItem key={item} value={item}>
                                                <Avatar src={item} />
                                            </MenuItem>
                                        ))}
                                    </Select>                                    
                                </Grid>
                            ) }
                        </Grid>
                    </CardContent>
                    <CardActions style={{justifyContent : "flex-end"}}>
                        <Button>
                            İptal
                        </Button>
                        <Button variant="contained" color="primary" type="submit" >
                            { sendBtn }
                        </Button>
                    </CardActions>

                </Card>
            </Grid>

        </Grid>
    )
}

export default Input
