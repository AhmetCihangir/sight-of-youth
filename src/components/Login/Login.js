import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Signup/Input'

import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useDispatch } from 'react-redux'
import { login as LG } from "../../actions/index"
import { useHistory } from 'react-router'

const useStyles = makeStyles(theme => ({
    loginInputAllStyles : {
        width : "100%"
      },
}))



const Login = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const schema = Yup.object().shape({
        email : Yup.string()
        .required(true)
        .max(35,true)
        .email(true),
        password : Yup.string()
        .required(true)
        .min(6,true)
        .max(20,true)
    })

    const { register,handleSubmit, formState : {errors} } = useForm({resolver : yupResolver(schema) })

    const login = [
        {
          id: "email",
          placeholder: "Emailiniz",
          type: "email",
          autoComplete: false,
          register : register("email",{required : {value : true , message : true}}),
        },
        {
          id: "password",
          placeholder: "Şifreniz",
          type: "password",
          autoComplete: false,
          register: register("password"),
        },
      ]
      
      

    const onSubmit = data => {
      dispatch(LG(data))

      history.replace("/")
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input inputs={login} inputSize={12} errors={errors} sendBtn="Gİrİş Yap" inputStyles={classes.loginInputAllStyles} cardWidth={3} />
        </form>
    )
}

export default Login
