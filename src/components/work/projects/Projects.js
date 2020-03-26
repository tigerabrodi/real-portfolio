import React from 'react';
import "./Projects.scss"
import {ProjectsArray} from "./ProjectsArray"
import ProjectItem from './ProjectItem';

const Projects = () => {
    return (
        <div className="projects">
        <h1 className="projects__title">Below you can find some of my projects, including Github Repository & Website.</h1>
        <div className="projects__wrapper">
            {ProjectsArray.map((project) => (
                <ProjectItem project={project} key={project.id} />
            ))}
            </div>
        </div>
    );
}

export default Projects;
