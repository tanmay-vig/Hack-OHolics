import React from 'react'
import { Button } from './Button'
import './Hero.css';
import video from '../videos/fraud.mp4';
function Hero() {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted></video>
            <h1>Comapny Name / Tag Line</h1>
            <p>Tag line</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Polar bear</Button>
                <br></br>
                <br></br>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>OM FO</Button>
            </div>
        </div>
    );
};

export default Hero;