import React from 'react';
import "./Touch.scss"
import { Link } from 'react-router-dom';

const Touch = () => {
    return (
        <div className="touch" data-aos-duration="1300" data-aos="zoom-in">
        <div className="touch__wrapper">
        <h1 className="touch__heading">Get In Touch</h1>
        <p className="touch__text">My inbox is always open, feel free to ask me anything, I'll try my best to answer your email!</p>
        <Link to="/contact" className="touch__button">Get In Touch</Link>
        </div>
        </div>
    );
}

export default Touch;
