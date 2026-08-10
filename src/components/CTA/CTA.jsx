import { ArrowRight } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-box glass animate-fade-up">
          <div className="cta-glow"></div>
          <div className="cta-content">
            <h2 className="cta-title">Have a Website Idea? Let's Build It.</h2>
            <p className="cta-text">
              Whether you need a new website, a landing page or a complete redesign, let's turn your idea into a modern digital experience.
            </p>
            <a href="#contact" className="btn btn-primary cta-btn">
              Start a Conversation <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
