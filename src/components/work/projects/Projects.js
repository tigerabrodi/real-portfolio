import React from 'react';
import "./Projects.scss"
import {ProjectsArray} from "./ProjectsArray"
import ProjectItem from './ProjectItem';

const Projects = () => {
    return (
        <div className="projects">
            {ProjectsArray.map((project) => (
                <ProjectItem project={project} key={project.id} />
            ))}
        </div>
    );
}

export default Projects;
