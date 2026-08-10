import { Monitor, Smartphone, PenTool, LayoutTemplate, Settings, Code2 } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Business Websites",
      description: "Modern websites that establish a strong online presence for businesses.",
      icon: <Monitor size={28} />
    },
    {
      title: "Landing Pages",
      description: "High-quality landing pages designed to clearly present products, services or campaigns.",
      icon: <LayoutTemplate size={28} />
    },
    {
      title: "Portfolio Websites",
      description: "Professional personal and company portfolios with modern UI.",
      icon: <PenTool size={28} />
    },
    {
      title: "Website Redesign",
      description: "Modernize outdated websites with improved UI/UX and responsive layouts.",
      icon: <Settings size={28} />
    },
    {
      title: "Responsive Web Development",
      description: "Websites optimized for desktop, tablet and mobile devices.",
      icon: <Smartphone size={28} />
    },
    {
      title: "Custom Web Solutions",
      description: "Custom website features based on the client's requirements.",
      icon: <Code2 size={28} />
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">What I Can Build For You</h2>
        <p className="section-subtitle">Delivering high-quality web solutions tailored to your needs.</p>
        
        <div className="services-grid">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="service-card effect-card animate-fade-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
