import { Grid, makeStyles,Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch,Link,useLocation,Redirect } from "react-router-dom";
import { getPosts } from "./actions";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import EachBlog from "./components/Blogs/EachBlog";
import Departments from "./components/Departments/Departments";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects/Projects";
import OurTeam from "./components/OurTeam/OurTeam"
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import CreatePost from "./components/CreatePost/CreatePost";
import UpdatePost from "./components/CreatePost/UpdatePost";



const useStyles = makeStyles(theme => ({
  toolbar : theme.mixins.toolbar,
  btnStyle : {
    width : theme.spacing(30),
    height : theme.spacing(6),
    backgroundColor :"rgba(249,181,192,1)",
    "&:hover" : {
        backgroundColor :"rgba(249,181,192,.7)",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize : ".75rem"
    }
  },


}))

const AttendUs = () => {
  const classes = useStyles()
  return (
    <Grid container item xs={12} justify="space-around" style={{margin : "3rem 0"}}>
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
  const dispatch = useDispatch()
  const user = useSelector(state => state.users)


  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  

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
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/blogs" exact>
          <Blogs />
        </Route>
        <Route path="/blogs/:id" exact>
          <EachBlog />
        </Route>
        <Route path="/ourteam" exact>
          <OurTeam />
        </Route>
        {user.role === "admin" && (
          <>
            <Route exact path="/addBlog">
              <CreatePost />
            </Route>
            <Route path="/updateBlog/:id">
              <UpdatePost  />
            </Route>
          </>
        )}
        <Route path="/*">
          <Redirect to="/" />
        </Route>


      </Switch>

      


      { !(location.pathname.match("/signup") || location.pathname.match("/login")) && <Footer />   }

      

      
    </>
  );
}

export default App;
