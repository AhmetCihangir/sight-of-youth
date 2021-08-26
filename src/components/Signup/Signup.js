import { makeStyles } from "@material-ui/core"
import React from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input'
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { useDispatch } from "react-redux"
import {signUp as SU} from "../../actions"
import { useHistory } from "react-router"

const useStyles = makeStyles(theme => ({
    inputAllStyles : {
      margin : "1rem 0"
    },
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



const Signup = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const schema = Yup.object().shape({
        name : Yup.string()
        .required(true)
        .min(2,true)
        .max(12,true),
        surname : Yup.string()
        .required(true)
        .min(2,true)
        .max(12,true),
        email : Yup.string()
        .required(true)
        .email(true)
        .max(35,true),
        password : Yup.string()
        .required(true)
        .min(6,true)
        .max(20,true),
        avatar : Yup.string()
        .required(true)
        

    })

    

    const {register, handleSubmit, formState : { errors}} = useForm({resolver : yupResolver(schema)})
    
    const signUp = [
        { id: "name", placeholder: "Adınız", type: "text",register : register("name") },
        { id: "surname", placeholder: "Soyadınız", type: "text",register : register("surname") },
        { id: "email", placeholder: "Emailiniz", register : register("email") },
        {
          id: "password",
          placeholder: "Şifreniz",
          type: "password",
          register : register("password")
        },
      ] 
      const avatarChoice = {
        id: "avatar",
        placeholder: "Profil Resminiz ( Lütfen Url Olarak Giriniz )",
        type: "url",
        register : register("avatar"),
        menuItem : ["/ppImages/1.svg","/ppImages/2.svg","/ppImages/3.svg","/ppImages/4.svg","/ppImages/5.svg","/ppImages/6.svg","/ppImages/7.svg","/ppImages/8.svg","/ppImages/9.svg","/ppImages/10.svg","/ppImages/11.svg","/ppImages/12.svg"]
      }

      const onSubmit = data => {
        dispatch(SU(data))

        history.replace("/")
      }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input inputs={signUp} inputAllStyles={classes.inputAllStyles} errors={errors} avatarChoice={avatarChoice} />

        </form>
    )
}

export default Signup
