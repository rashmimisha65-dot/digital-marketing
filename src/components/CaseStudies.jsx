import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CaseStudies.css';
import caseStudyImg1 from '../assets/case_study_1.jpeg';
import caseStudyImg2 from '../assets/case_study_2.jpeg';

const CaseStudies = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    // We only want to animate horizontally on desktop
    const mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", () => {
      const track = trackRef.current;
      const trackWidth = track.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      
      gsap.to(track, {
        x: -(trackWidth - containerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + trackWidth
        }
      });
    });

    return () => mm.revert();
  }, []);

  const cases = [
    { client: 'TechNova', result: '+340% Traffic', desc: 'Complete SEO & Content overhaul leading to industry dominance.', img: caseStudyImg1 },
    { client: 'AuraRetail', result: '12x ROAS', desc: 'Performance max campaigns scaled internationally.', img: caseStudyImg2 },
    { client: 'NexusSaaS', result: '-40% CPA', desc: 'Conversion rate optimization and landing page redesign.', img: caseStudyImg1 }
  ];

  return (
    <section id="case-studies" className="case-studies" ref={containerRef}>
      <div className="container case-studies-header">
        <h2 className="section-title">Featured <span className="text-gradient">Case Studies</span></h2>
        <p className="section-subtitle">Real numbers. Real growth. See how we've transformed businesses.</p>
      </div>

      <div className="case-studies-track" ref={trackRef}>
        {cases.map((cs, index) => (
          <div key={index} className="case-card glass-panel">
            <div className="case-img-container">
              <img src={cs.img} alt={`Case Study ${cs.client}`} className="case-img" />
              <div className="case-result-badge">{cs.result}</div>
            </div>
            <div className="case-content">
              <h3>{cs.client}</h3>
              <p>{cs.desc}</p>
              <button className="btn-secondary btn-small">Read Study</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
