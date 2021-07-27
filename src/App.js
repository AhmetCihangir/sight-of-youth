import { Grid, makeStyles,Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Route, Switch,Link,useLocation } from "react-router-dom";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import EachBlog from "./components/Blogs/EachBlog";
import Departments from "./components/Departments/Departments";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects/Projects";
import Signup from "./components/Signup/Signup"

const inputs = {
  signUp: [
    { id: "name", placeholder: "Adınız", type: "text", required: true },
    { id: "surname", placeholder: "Soyadınız", type: "text", required: true },
    { id: "email", placeholder: "Emailiniz", type: "email", required: true },
    {
      id: "password",
      placeholder: "Şifreniz",
      type: "password",
      required: true,
    },
    {
      id: "avatar",
      placeholder: "Profil Resminiz ( Lütfen Url Olarak Giriniz )",
      type: "url",
      required: false,
    },
  ],
  login: [
    {
      id: "email",
      placeholder: "Emailiniz",
      type: "email",
      required: true,
      autoComplete: false,
    },
    {
      id: "password",
      placeholder: "Şifreniz",
      type: "password",
      required: true,
      autoComplete: false,
    },
  ],
};

const useStyles = makeStyles(theme => ({
  toolbar : theme.mixins.toolbar,
  btnStyle : {
    width : theme.spacing(30),
    height : theme.spacing(6),
    backgroundColor :"rgba(249,181,192,1)",
    "&:hover" : {
        backgroundColor :"rgba(249,181,192,.7)",
    }
  },
  inputAllStyles : {
    margin : "1rem 3.5rem"
  },
  loginInputAllStyles : {
    width : "100%"
  }

}))

const AttendUs = () => {
  const classes = useStyles()
  return (
    <Grid container xs={12} justify="space-around" style={{margin : "3rem 0"}}>
      <Grid item container xs={8} justify="center">
        <Button className={classes.btnStyle} variant="contained" component={Link} to="/signup"> 
          Aramıza Katılın
        </Button>
      </Grid>

    </Grid>
  )
}



function App() {
  
  const classes = useStyles()

  const location = useLocation()

  

  return (
    <>
      <Header />
      <div className={classes.toolbar} />

      <Switch>
        <Route path="/" exact>
          <About />
          <Departments />
          <Projects />
          <AttendUs />

        </Route>
        <Route path="/login">
          <Signup inputs={inputs.login} inputSize={12} sendBtn="Gİrİş Yap" inputStyles={classes.loginInputAllStyles} cardWidth={3} />
        </Route>
        <Route path="/signup">
          <Signup inputs={inputs.signUp} inputAllStyles={classes.inputAllStyles} />
        </Route>
        <Route path="/blogs" exact>
          <Blogs />
        </Route>
        <Route path="/blogs/:id" exact>
          <EachBlog />
        </Route>
      </Switch>

      { !(location.pathname.match("/signup") || location.pathname.match("/login")) && <Footer />   }

      

      
    </>
  );
}

export default App;
