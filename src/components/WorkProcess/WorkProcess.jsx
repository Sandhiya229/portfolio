import './WorkProcess.css';

const WorkProcess = () => {
  const steps = [
    {
      num: "01",
      title: "Discuss",
      description: "Understand the client's requirements."
    },
    {
      num: "02",
      title: "Design",
      description: "Plan the structure and visual experience."
    },
    {
      num: "03",
      title: "Develop",
      description: "Build the responsive and functional website."
    },
    {
      num: "04",
      title: "Deliver",
      description: "Test, refine and deliver the final website."
    }
  ];

  return (
    <section className="work-process">
      <div className="container">
        <h2 className="section-title text-center">Work Process</h2>
        
        <div className="timeline">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="timeline-item animate-fade-up"
              style={{ animationDelay: `\${idx * 0.15}s` }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <span className="step-num">{step.num}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
