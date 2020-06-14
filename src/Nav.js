import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Nav } from 'reactstrap';
import LambdaSchool from './components/lambdaSchool/LambdaSchool';
import Home from './Home';
import aw from './img/aw.png';
import IndependentProjects from './components/independentProject/IndependentProjects';

export default function NavBar() {
    const awStyle = {
        width: '75px',
        height: '100px'
    }
    const linkStyle = {
        textDecoration: 'none',
        color: 'orangered'
    }

    return (
        <div>
            <nav className='navBar'>
                <div className='navBarNameAndLogo'>
                    <img src={aw} alt='AW Logo' style={awStyle} />
                    <h2>Anthony Ware Portfolio</h2>
                </div>
                <div className='navBarLinks'>
                    <Link to='/' style={linkStyle}>Home</Link>
                    <Link to='/lambda-school' style={linkStyle}>Lambda School</Link>
                    <Link to='/independent-projects' style={linkStyle}>Independent Projects</Link>
                </div>
            </nav>
            <Switch>
                <Route path='/lambda-school'>
                    <LambdaSchool />
                </Route>
                <Route path='/independent-projects'>
                    <IndependentProjects />
                </Route>
                <Route path='/' component={Home} />
            </Switch>
        </div>
    )
}