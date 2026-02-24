import React from "react";
import { motion } from "framer-motion";

import "../assets/styles/projects.css";
import projectsData from "../assets/data/projectsData.js";

function Projects() {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };


  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="portfolio"
      id="portfolio"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} 
    >
      <div className="portfolio-heading">
        <h2>My latest projects</h2>
      </div>

      <div className="portfolio-container">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img src={project.projectImage} alt={project.projectName} />
            <div className="project-info">
              <h3>{project.projectName}</h3>
              <p>{project.projectDescription}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="showmore">
        <p>Show more</p>
        <span>&rarr;</span>
      </div>
    </motion.div>
  );
}

export default Projects;