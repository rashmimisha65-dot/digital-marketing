import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Results.css';

const Results = () => {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);
  countersRef.current = [];

  const addToRefs = (el) => {
    if (el && !countersRef.current.includes(el)) {
      countersRef.current.push(el);
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    
    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      onEnter: () => {
        countersRef.current.forEach((counter) => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const suffix = counter.getAttribute('data-suffix') || '';
          
          gsap.to(counter, {
            innerHTML: target,
            duration: 2,
            snap: { innerHTML: 1 },
            ease: "power2.out",
            onUpdate: function() {
              counter.innerHTML = Math.round(this.targets()[0].innerHTML) + suffix;
            }
          });
        });
      },
      once: true
    });
  }, []);

  const stats = [
    { label: 'Revenue Generated', value: '150', suffix: 'M+' },
    { label: 'Average ROI', value: '450', suffix: '%' },
    { label: 'Client Retention', value: '98', suffix: '%' },
    { label: 'Awards Won', value: '24', suffix: '' }
  ];

  return (
    <section ref={sectionRef} className="results">
      <div className="container">
        <div className="results-grid">
          {stats.map((stat, index) => (
            <div key={index} className="result-item">
              <h3 
                ref={addToRefs} 
                className="result-value text-gradient"
                data-target={stat.value}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </h3>
              <p className="result-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
