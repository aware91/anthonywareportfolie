import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import AdvancedReact from './webApplicaionsII/AdvancedReact';

export default function LambdaSchool() {
    return (
        <div>
            <h1>Lambda School</h1>
            <h2>Web Fundamentals</h2>

            <h2>Web Applications I</h2>

            <h2>Web Applications II</h2>
            <Link path='/web-applications-II'>Web Applications II Projects</Link>
            <h2>Web API: Node</h2>
            <Switch>
                {/* <Route path='/lambda-school/web-fundamentals'>
                    <WebFundamentals />
                </Route>
                <Route path='/lambda-school/web-applications-I'>
                    <WebAppI />
                </Route> */}
                <Route path='/web-applications-II'>
                    <AdvancedReact />
                </Route>
                {/* <Route path='/lambda-school/web-api-node'>
                    <WebAPINode />
                </Route> */}
            </Switch>
        </div>
    )
}