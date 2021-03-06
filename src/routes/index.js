import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import TimeSheetCalander from "../components/TimeSheet_Calander"
import CreateNewRequest from "../components/CreateNewRequest";
import Employee from "../components/Employee/List";
import Project from "../components/ProjectDetails";
import Signup from "../components/Sign Up";
import Search from "../components/Search";
import AddEmployee from "../components/AddEmployee";
import MTSA from "../components/MTSA";
export default () => {
  return (



    <BrowserRouter>
      <Switch>
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/signup" render={props => <Signup {...props} />} />
        <Route exact path="/home" render={props => <Home {...props} />} />
        <Route exact path="/createNewRequest" render={props => <CreateNewRequest {...props} />} />
        <Route exact path="/TimeSheetCalander" render={props => <TimeSheetCalander {...props} />} />
        <Route exact path="/Project" render={props => <Project {...props} />} />
        <Route exact path="/Employee" render={props => <Employee {...props} />} />
        <Route exact path="/search" render={props => <Search {...props} />} />
        <Route exact path="/addEmployee" render={props => <AddEmployee {...props} />} />
        <Route exact path="/mTSA" render={props => <MTSA {...props} />} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};