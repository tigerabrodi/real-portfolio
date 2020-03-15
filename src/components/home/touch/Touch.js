import React from 'react';
import "./Touch.scss"
import { Link } from 'react-router-dom';

const Touch = () => {
    return (
        <div className="touch">
        <h1 className="touch__heading">Get In Touch</h1>
        <p className="touch__text">I am currently looking for a part-time remote position. My inbox is always open, feel free to ask me anything, I'll try my best to answer your email!</p>
        <Link to="/contact" className="touch__button">Get In Touch</Link>
        </div>
    );
}

export default Touch;
