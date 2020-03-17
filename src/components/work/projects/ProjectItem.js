import React, {useState} from 'react';
import "./ProjectItem.scss"



const ProjectItem = ({project: {title, description, github, website, image, onHover}}) => {

    const [hover, setHover] = useState(false);

    return (
        <div className="project" onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img className="project__image" src={hover ? onHover : image} alt="project"/>
            <h1 className="project__title"> {title} </h1>
            <p className="project__description">{description}</p>
            <div className="project__buttons">
            <a href={github} target="_blanket" className="project__buttons__link project__buttons__link-git"> Github </a>
            <a href={website} target="_blanket" className="project__buttons__link project__buttons__link-web"> Website </a>
            </div>
        </div>
    );
}

export default ProjectItem;
