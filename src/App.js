import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './Nav';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faCheckSquare, faCoffee)


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