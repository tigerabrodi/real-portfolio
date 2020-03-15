import React from 'react';
import spinner from "../../assets/spinner.gif"
import "./Spinner.scss"

const Spinner = () => {
    return (
        <div className="spinner">
            <img src={spinner} alt="gif"/>
        </div>
    );
}

export default Spinner;
