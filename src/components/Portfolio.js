import React from 'react';
import './Portfolio.css'; // Optionnel pour styles spécifiques

function Portfolio() {
  const projects = [
    { id: 1, title: 'Projet 1', description: 'Un projet génial.', link: '#' },
    { id: 2, title: 'Projet 2', description: 'Un autre projet intéressant.', link: '#' },
    { id: 3, title: 'Projet 3', description: 'Encore un projet innovant.', link: '#' },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h2>Mes Projets</h2>
      <div className="projects">
        {projects.map(project => (
          <div key={project.id} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>Voir le projet</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
