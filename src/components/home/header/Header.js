import React from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <section className="header" data-aos="fade-down" data-aos-duration="1200">
        <div className="header__wrapper">
            <div className="header__heading">
                <span className="header__heading__span">Hi, my name is</span>
                <h1 className="header__heading__title">Tiger Abrodi.</h1>
                <h3 className="header__heading__subtitle">I build things for the web</h3>
            </div>
            <div className="header__paragraph">
                        <p className="header__paragraph__text">I'm a Software Developer based in Germany. My passion lies in developing Web Applications with beautiful User Interfaces & great User Experiences.</p>
            </div>
            <Link to="/work" className="header__button">See My Work</Link>
        </div>
        </section>
    );
}

export default Header;
