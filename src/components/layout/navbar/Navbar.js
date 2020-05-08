import React, { Fragment } from 'react';
import "./Navbar.scss"
import { Link } from 'react-router-dom';

const Navbar = () => {

    const unCheck = () => {
        let check = document.getElementsByClassName("navigation__checkbox")[0]
        check.checked = false;
    }

    return (
        <nav className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
        
        
        <div className="navigation__background"></div>
        
        <ul className="navigation__list">
        <Link to="/" className="navigation__item navigation__item--1" onClick={() => unCheck()}>Home</Link>
        <Link to="/work" className="navigation__item navigation__item--2" onClick={() => unCheck()}>Work</Link>
        </ul>
        
        <label htmlFor="navi-toggle" className="navigation__hamburger">
        <span className="navigation__hamburger__line navigation__hamburger__line-1"></span>
        <span className="navigation__hamburger__line navigation__hamburger__line-2"></span>
        <span className="navigation__hamburger__line navigation__hamburger__line-3"></span>
        </label>
        
        
        </nav>
    
    );
}

export default Navbar;
