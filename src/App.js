import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Nav';

// import AdvancedReact from './components/lambdaSchool/webApplicaionsII/AdvancedReact';

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