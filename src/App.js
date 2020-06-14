import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Nav';

function App() {
  return (
    <div>
      <Router>
        <header>
        <NavBar /> 
        </header>
      </Router>
    </div>
  );
}

export default App;