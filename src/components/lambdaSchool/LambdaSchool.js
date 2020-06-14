import React from 'react';
import { Route, NavLink, Switch, useRouteMatch } from 'react-router-dom';
import AdvancedReact from './webApplicaionsII/AdvancedReact';

export default function LambdaSchool() {
    const moveDown = {
        marginTop: '120px'
    }
    const linkStyle = {
        textDecoration: 'none',
    }
    const { path, url } = useRouteMatch()
    return (
        <div style={moveDown}>
            <div>
            <h1>Lambda School</h1>
            <h2>Web Fundamentals</h2>

            <h2>Web Applications I</h2>

            <h2>Web Applications II</h2>
            <NavLink to={`${url}/webappII`} style={linkStyle}>Projects</NavLink>
            <h2>Web API: Node</h2>
            </div>
            <Switch>
                {/* <Route path='/lambda-school/web-fundamentals'>
                    <WebFundamentals />
                </Route>
                <Route path='/lambda-school/web-applications-I'>
                    <WebAppI />
                </Route> */}
                <Route path={`${path}/webappII`}>
                    <AdvancedReact />
                </Route>
                {/* <Route path='/lambda-school/web-api-node'>
                    <WebAPINode />
                </Route> */}
            </Switch>
        </div>
    )
}