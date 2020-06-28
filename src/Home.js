import React from 'react';
import './App.css';
import pic from './img/anthony.ware.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import faHtml5 from '@fortawesome/free-solid-svg-icons-svg-icons';
import html5 from './img/html5.png';
import css from './img/css.png';
import js from './img/js.png';
import react from './img/react.png';

export default function Home() {
    const moveDown = {
        marginTop: '120px'
    }
    const picCSS = {
        width: '500px',
        height: '600px',
        borderRadius: '50%'
    }
    return (
        <div style={moveDown}>
            <div className='homeTitle'>
                <h1>Anthony Ware</h1>
                <p>Front End Web Dev</p>
                <img src={pic} alt='Personal Pic' style={picCSS} />
                </div>
                <div className='homeLambda'>
                    <h2>Lambda School</h2>
                    <p>I am in Lambda School learning Front End Web Development</p>
                    <h4>What we learned:</h4>
                    <div>
                    {/* <FontAwesomeIcon icon={['fab', 'fa-html5']} /> */}
                    <img src={html5} alt='HTML5 Logo' />
                    <img src={css} alt='CSS3 Logo' />
                    <img src={js} alt='JavaScript Logo' />
                    <img src={react} alt="React Logo" />
                    </div>
                </div>
        </div>
    )
}

