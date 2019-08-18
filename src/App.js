import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./component/layout/navbar"
import Dashboard from "./component/dashboard/dashboard.js";
import ProjectDetails from "./component/projects/projectDetails.js";
import SignIn from './component/auth/signIn.js'
import SignUp from './component/auth/signUp.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/project/:id' component={ProjectDetails}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
