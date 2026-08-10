import { ArrowRight, MessageSquare } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Background Elements */}
      <div className="hero-bg">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content animate-fade-up">
          <div className="badge">
            <span className="dot"></span>
            Available for Freelance Projects
          </div>
          
          <h1 className="hero-title">
            Building Modern Websites <br/>That Make Businesses <span>Stand Out.</span>
          </h1>
          
          <p className="hero-description">
            I design and develop modern, responsive and user-friendly websites with a strong focus on clean UI/UX and functionality.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Talk <MessageSquare size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
