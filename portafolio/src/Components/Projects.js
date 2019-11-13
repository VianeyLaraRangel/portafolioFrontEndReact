import React, { Component } from 'react';
import ProjectCard from './Card/ProyectCard';

class Projects  extends Component {
    render() {
        return(
            <div className="project-box">
                <ProjectCard />
            </div>
        );
    }
}

export default Projects;