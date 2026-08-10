import { ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "Personal Portfolio Website",
      description: "My first official project: A premium, fully responsive personal portfolio website built with React and Vanilla CSS to showcase my skills and services.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "CSS", "JavaScript"],
      liveLink: "#home"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Starting my journey with this portfolio. I'm currently looking for new opportunities to build amazing things!</p>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              className="project-card effect-card animate-fade-up"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.liveLink} className="overlay-btn" aria-label="View Live">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-id">Project {project.id}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  <span className="tech-label">Tech:</span>
                  <div className="tech-list">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-item">{t}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-actions">
                  <a href={project.liveLink} className="btn btn-primary" style={{padding: '0.5rem 1rem', fontSize: '0.875rem'}}>
                    View Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
