import React from 'react';
import './App.css';
import pic from './img/anthony.ware.jpg';

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
            <h1>Anthony Ware</h1>
            <p>Front End Web Dev</p>
            <img src={pic} alt='Anthony Ware Picture' style={picCSS} />
        </div>
    )
}