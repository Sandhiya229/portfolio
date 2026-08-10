import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Build WhatsApp message text
    const text = `Hello Sandhiya! 👋%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A%0A*Message:*%0A${encodeURIComponent(message)}`;
    const whatsappURL = `https://wa.me/919790278254?text=${text}`;

    // Use anchor click to avoid popup blockers
    const anchor = document.createElement('a');
    anchor.href = whatsappURL;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    setSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

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

              <a href="https://wa.me/919790278254" target="_blank" rel="noreferrer" className="contact-link-item">
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
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                {sent ? '✅ Sent! Check WhatsApp' : (
                  <><Send size={16} style={{ marginRight: '0.5rem' }} /> Send via WhatsApp</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
