import React from 'react';
import sprite from "../../../assets/sprite.svg"
import "./SideIcons.scss"

const SideIcons = () => {
    return (
        <div className="side">
            <a href="https://github.com/tigerabrodi" target="_blanket" className="side__link">
            <svg className="side__icon">
                <use href={sprite + "#icon-github"}  />
            </svg>
            </a>

            <a href="https://www.linkedin.com/in/tiger-abrodi-467695195/" target="_blanket" className="side__link">
            <svg className="side__icon">
                <use href={sprite + "#icon-linkedin"}  />
            </svg>
            </a>

        </div>
    );
}

export default SideIcons;
