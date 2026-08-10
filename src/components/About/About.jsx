import { Briefcase, Code, GraduationCap, Laptop } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          <div className="about-content animate-fade-up">
            <p className="about-text">
              I'm <strong>Sandhiya V</strong>, a freelance web developer passionate about creating modern and responsive websites. I enjoy transforming ideas into clean, functional and visually engaging digital experiences.
            </p>
            
            <div className="info-cards glass">
              <div className="info-item">
                <div className="info-icon"><Briefcase size={20} /></div>
                <div>
                  <span className="info-label">Role</span>
                  <span className="info-value">Freelance Web Developer</span>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><Code size={20} /></div>
                <div>
                  <span className="info-label">Focus</span>
                  <span className="info-value">Web Development & UI/UX</span>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><GraduationCap size={20} /></div>
                <div>
                  <span className="info-label">Education</span>
                  <span className="info-value">MCA</span>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><Laptop size={20} /></div>
                <div>
                  <span className="info-label">Work Type</span>
                  <span className="info-value">Freelance / Project Based</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual animate-fade-up" style={{animationDelay: '0.2s'}}>
            <div className="visual-card glass">
              <div className="code-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="code-body">
                <pre><code>{`const developer = {
  name: "Sandhiya V",
  role: "Web Developer",
  skills: ["React", "CSS", "JS"],
  passion: "Clean UI/UX",
  availability: "Freelance"
};

developer.buildProject();`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
