import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LambdaSchool from './components/lambdaSchool/LambdaSchool';
import Home from './Home';
import aw from './img/aw.png';
import IndependentProjects from './components/independentProject/IndependentProjects';
import WebFund from './components/lambdaSchool/webFundamentals/WebFund';
import WebAppI from './components/lambdaSchool/webApplicationsI/WebAppI';
import WebAppII from './components/lambdaSchool/webApplicaionsII/WebAppII';

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
                <Route path='/lambda-school/webfund' component={WebFund} />
                <Route path='/lambda-school/webappI' component={WebAppI} />
                <Route path='/lambda-school/webappII' component={WebAppII} />
                <Route exact path='/lambda-school'>
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