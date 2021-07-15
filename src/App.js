import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Departments from "./components/Departments/Departments";
import Header from "./components/Header";
import Projects from "./components/Projects/Projects";



const useStyles = makeStyles(theme => ({
  toolbar : theme.mixins.toolbar,

}))

function App() {
  
  const classes = useStyles()
    
  return (
    <>
      <Header />
      <div className={classes.toolbar} />

      <Switch>
        <Route path="/" exact>
          <About />
          <Departments />
          <Projects />
        </Route>
      </Switch>
      

      
    </>
  );
}

export default App;
