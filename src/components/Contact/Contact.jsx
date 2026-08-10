import { Mail, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-subtitle">Feel free to reach out for collaborations or just a friendly hello.</p>

        <div className="contact-grid">
          {/* Contact Info Card */}
          <div className="contact-info-card animate-fade-up">
            <h3 className="contact-heading">Get In Touch</h3>
            <p className="contact-desc">
              I'm currently available for freelance projects. Let me know how I can help you!
            </p>

            <div className="contact-links">
              <a href="mailto:sandhiyaviswanathan2004@gmail.com" className="contact-link-item">
                <div className="contact-icon-wrap">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact-link-label">Email</span>
                  <span className="contact-link-value">sandhiyaviswanathan2004@gmail.com</span>
                </div>
              </a>

              <a href="tel:9790278254" className="contact-link-item">
                <div className="contact-icon-wrap">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="contact-link-label">Phone / WhatsApp</span>
                  <span className="contact-link-value">+91 9790278254</span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="contact-form-card animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Tell me about your project..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
