import { MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3 className="footer-logo">Sandhiya V</h3>
            <p className="footer-role">Freelance Web Developer</p>
          </div>
          
          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-social">
            <a href="tel:9790278254" aria-label="WhatsApp"><MessageCircle size={20} /></a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Sandhiya V. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
