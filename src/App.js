import React from 'react';
import {Router } from '@reach/router';
import './App.css';
import Home from './Components/Home';
import SingleProp from './Components/SingleProp';
import TripleProp from './Components/TripleProp';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/home'>Home</Home>
        <SingleProp path='/:prop'>Number</SingleProp>
        <TripleProp path='/:word/:color1/:color2'>Hello</TripleProp>
      </Router>
    </div>
  );
}

export default App;
