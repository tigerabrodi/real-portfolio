import React from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <section className="header">
        <div className="header__wrapper">
            <div className="header__heading">
                <span className="header__heading__span">Hi, my name is</span>
                <h1 className="header__heading__title">Tiger Abrodi.</h1>
                <h3 className="header__heading__subtitle">I build things for the web</h3>
            </div>
            <div className="header__paragraph">
                        <p className="header__paragraph__text">I'm a Fullstack Javascript Developer based in Germany. My passion lies in creating beautiful User Interfaces & making the User Experience great.</p>
            </div>
            <Link to="/work" className="header__button">See My Work</Link>
        </div>
        </section>
    );
}

export default Header;
