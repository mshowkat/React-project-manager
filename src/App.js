import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./component/layout/navbar"
import Dashboard from "./component/dashboard/dashboard.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' component={Dashboard}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
