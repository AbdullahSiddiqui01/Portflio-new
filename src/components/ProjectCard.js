import React from 'react';
import "../styles/ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={require(`../assets/images/${project.image}`)} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
