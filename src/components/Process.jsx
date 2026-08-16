import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Process.css';

const Process = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.to(lineRef.current, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: ".process-steps",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true
      }
    });
  }, []);

  const steps = [
    { number: '01', title: 'Discovery & Audit', desc: 'Deep dive into your current digital footprint and competitor analysis.' },
    { number: '02', title: 'Strategy Architecture', desc: 'Developing a bespoke, multi-channel blueprint for growth.' },
    { number: '03', title: 'Execution & Launch', desc: 'Aggressive implementation of campaigns and technical optimizations.' },
    { number: '04', title: 'Scale & Optimize', desc: 'Data-driven refinements to maximize ROI and market share.' }
  ];

  return (
    <section id="process" className="process section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Our <span className="text-gradient">Methodology</span></h2>
          <p className="section-subtitle mx-auto" style={{maxWidth: '600px', margin: '0 auto 4rem auto', textAlign: 'center'}}>A proven framework designed to turn your marketing budget into a high-yield investment.</p>
        </div>

        <div className="process-timeline">
          <div className="timeline-line-bg">
            <div className="timeline-line-fill" ref={lineRef}></div>
          </div>
          
          <div className="process-steps">
            {steps.map((step, index) => (
              <div key={index} className={`process-step ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="step-content glass-panel">
                  <div className="step-number text-gradient">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
