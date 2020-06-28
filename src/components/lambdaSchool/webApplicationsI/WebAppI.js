import React from 'react';
import '../webApplicaionsII/webAppII.css';
import testimg from '../../../img/test-img.jpg';


const WebAppI = () => {
    const moveDown = {
        marginTop: '120px'
    }
    return (
        <div style={moveDown} className='units'>
            <h1>Web Applications I</h1>
            <h3>Advanced React</h3>
            <section className='sprints'>
                <div className='modules'>
                    <div>
                        <h4>Class Components</h4>
                        {/* <a href="#">React Todo</a> */}
                        <p>Link</p>
                        <p>We learned about classes in React. </p>
                        <time>May 5, 2020</time>
                    </div>
                    <img src={testimg} alt=''/>
                </div>
                <div className='modules'>
                    <div>
                        <h4>The React LifeCycle</h4>
                        {/* <a href="#">React Github User Card</a> */}
                        <p>Link</p>
                        <p>Class Example </p>
                        <time>May 7, 2020</time>
                    </div>
                    <img src={testimg} alt=''/>
                </div>
                <div className='modules'>
                    <div>
                        <h4>Composing & Sharing Non-Visual Behavior</h4>
                        {/* <a href="#">Dark Mode</a> */}
                        <p>Link</p>
                        <p>Class Example </p>
                        <time>May 11, 2020</time>
                    </div>
                    <img src={testimg} alt=''/>
                </div>
                <div className='modules'>
                    <div>
                        <h4>Testing Web Applications</h4>
                        {/* <a href="#">React Testing-Contact Form</a> */}
                        <p>Link</p>
                        <p>Class Example </p>
                        <time>May 13, 2020</time>
                    </div>
                    <img src={testimg} alt=''/>
                </div>
            </section>
            <div className='sprint'>
                <h4>Sprint Challenge - React Plants</h4>
                {/* <a href="#">Web Sprint Challenge Advanced React</a> */}
                        <p>Link</p>
                <p>Class Example </p>
                <time>May 15, 2020</time>
            </div>
            <h3>Advanced State Management</h3>
            <section className='sprints'>
                <div className='modules'>
                    <div>
                        <h4>The Reducer Pattern</h4>
                        {/* <a href="#">Reducer Todo</a> */}
                        <p>Link</p>
                        <p>Class Example </p>
                        <time>May 19, 2020</time>
                    </div>
                    <img src={testimg} alt=''/>
                </div>
                <div className='modules'>
                    <div>
                        <h4>Redux</h4>
                        {/* <a href="#">Car Sales</a> */}
                        <p>Link</p>
                        <p>Class Example </p>
                        <time>May 21, 2020</time>
                    </div>
                    <img src={testimg} alt=''/>
                </div>
                <div className='modules'>
                    <div>
                        <h4>Async Redux</h4>
                        {/* <a href="#">React-Redux App</a> */}
                        <p>Link</p>
                        <p>Class Example </p>
                        <time>May 25, 2020</time>
                    </div>
                    <img src={testimg} alt=''/>
                </div>
                <div className='modules'>
                    <div>
                        <h4>Context API</h4>
                        {/* <a href="#">React Shopping Cart</a> */}
                        <p>Link</p>
                        <p>Class Example </p>
                        <time>May 27, 2020</time>
                    </div>
                    <img src={testimg} alt=''/>
                </div>
            </section>
            <div className='sprint'>
                <h4>Sprint Challenge - State Management - Smurfs</h4>
                {/* <a href="#">Sprint Challenge State Management Smurfs</a> */}
                        <p>Link</p>
                <p>Class Example </p>
                <time>May 29, 2020</time>
            </div>
            <h3>Advanced Web Applications</h3>
            <section className='sprints'>
                <div className='modules'>
                    <div>
                        <h4>Testing React</h4>
                        {/* <a href="#"></a> */}
                        <p>Link</p>
                        <p>Class Example </p>
                        <time>May 5, 2020</time>
                    </div>
                    <img src={testimg} alt=''/>
                </div>
                <div className='modules'>
                    <div>
                        <h4>Client-Side Authentications</h4>
                        {/* <a href="#"></a> */}
                        <p>Link</p>
                        <p>Class Example </p>
                        <time>May 5, 2020</time>
                    </div>
                    <img src={testimg} alt=''/>
                </div>
                <div className='modules'>
                    <div>
                        <h4>HTTP/AJAX II</h4>
                        {/* <a href="#"></a> */}
                        <p>Link</p>
                        <p>Class Example </p>
                        <time>May 5, 2020</time>
                    </div>
                    <img src={testimg} alt=''/>
                </div>
                <div className='modules'>
                    <div>
                        <h4>Deploying Web Apps</h4>
                        {/* <a href="#"></a> */}
                        <p>Link</p>
                        <p>Class Example </p>
                        <time>May 5, 2020</time>
                    </div>
                    <img src={testimg} alt=''/>
                </div>
            </section>
            <div className='sprint'>
                <h4>Sprint Challenge - React Plants</h4>
                {/* <a href="#">Web Sprint Challenge Advanced React</a> */}
                        <p>Link</p>
                <p>Class Example </p>
                <time>May 13, 2020</time>
            </div>
        </div>
    )
}

export default WebAppI;