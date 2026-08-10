import { CheckCircle2, Layout, Users, Zap } from 'lucide-react';
import './WhyWorkWithMe.css';

const WhyWorkWithMe = () => {
  const reasons = [
    {
      title: "Modern & Responsive Design",
      icon: <Layout size={24} />
    },
    {
      title: "Clean UI/UX",
      icon: <Zap size={24} />
    },
    {
      title: "Client-Focused Development",
      icon: <Users size={24} />
    },
    {
      title: "Reliable & Professional Communication",
      icon: <CheckCircle2 size={24} />
    }
  ];

  return (
    <section className="why-work-with-me">
      <div className="container">
        <h2 className="section-title">Why Work With Me</h2>
        
        <div className="reasons-grid">
          {reasons.map((reason, idx) => (
            <div 
              key={idx} 
              className="reason-card glass animate-fade-up"
              style={{ animationDelay: `\${idx * 0.1}s` }}
            >
              <div className="reason-icon">
                {reason.icon}
              </div>
              <h3 className="reason-title">{reason.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
