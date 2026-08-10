import { Blocks, Database, Layout, Server } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: <Layout size={24} />,
      skills: ["HTML", "CSS", "MERN Stack", "Web Development"]
    },
    {
      title: "Programming & Databases",
      icon: <Database size={24} />,
      skills: ["Java", "Python", "C#", "SQL"]
    },
    {
      title: "Tools & Others",
      icon: <Blocks size={24} />,
      skills: ["Git", "VS Code", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">Technologies I use to build modern digital experiences.</p>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="skill-card effect-card animate-fade-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="skill-icon-wrapper">
                {category.icon}
              </div>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
