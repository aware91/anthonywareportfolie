import React from 'react';
import { Link } from 'react-router-dom';
import './lambdaSchoolCSS.css';

export default function LambdaSchool() {
    const moveDown = {
        marginTop: '120px'
    }
    const linkStyle = {
        textDecoration: 'none',
    }
    // const { path, url } = useRouteMatch()
    return (
        <div style={moveDown} className="lambda">
            <div className="lambdaTitles">
            <h1>Lambda School</h1>
            <h3>Web Fundamentals</h3>
                <Link to={`/lambda-school/webfund`} style={linkStyle}>Projects</Link>
            <h3>Web Applications I</h3>
                <Link to={`/lambda-school/webappI`} style={linkStyle}>Projects</Link>
            <h3>Web Applications II</h3>
                <Link to={`/lambda-school/webappII`} style={linkStyle}>Projects</Link>
            <h3>Web API: Node</h3>
            </div>
            {/* <Switch> */}
                {/* <Route path='/lambda-school/web-fundamentals'>
                    <WebFundamentals />
                </Route>
                <Route path='/lambda-school/web-applications-I'>
                    <WebAppI />
                </Route> */}
                {/* <Route path={`/lambda-school/webappII`}>
                    <AdvancedReact />
                </Route> */}
                {/* <Route path='/lambda-school/web-api-node'>
                    <WebAPINode />
                </Route> */}
            {/* </Switch> */}
        </div>
    )
}