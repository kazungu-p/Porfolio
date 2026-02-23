import React from "react";

import "../assets/styles/projects.css";
import projectsData from "../assets/data/projectsData.js";


function Projects() {
    return (
        <div className="portfolio" id="portfolio">
            <div className="portfolio-heading">
                <h2>My latest projects</h2>
            </div>
            <div className="portfolio-container">
                {projectsData.map((project, index) => {
                    return <img key={index} src={project.projectImage} alt="" />
                })}
            </div>
        </div>
    )
}
export default Projects;