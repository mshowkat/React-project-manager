import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavBar from "./component/layout/navbar"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
