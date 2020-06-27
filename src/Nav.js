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
                {/* WebApp2 Links */}
                {/* <Route path='react-todo-5wbbsqggm.vercel.app' /> */}
                {/* <Route path='/lambda-school/webappII/react-life-cycle' component={ReactLife} />
                <Route path='/lambda-school/webappII/composing-and-sharing' component={ComAndShare} />
                <Route path='/lambda-school/webappII/testing-web-app' component={TestingWebApp} /> */}
                {/* Lambda School Links */}
                <Route exact path='/lambda-school/webfund' component={WebFund} />
                <Route exact path='/lambda-school/webappI' component={WebAppI} />
                <Route exact path='/lambda-school/webappII' component={WebAppII} />
                {/* Nav Links */}
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
