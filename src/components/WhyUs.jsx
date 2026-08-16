import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Award, Zap, TrendingUp } from 'lucide-react';
import './WhyUs.css';

const WhyUs = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  itemsRef.current = [];

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.fromTo(itemsRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%"
        }
      }
    );
  }, []);

  return (
    <section className="why-us section-padding" ref={sectionRef}>
      <div className="container why-us-container">
        <div className="why-us-content">
          <h2 className="section-title">Why Choose <br/><span className="text-gradient">Save Digital</span></h2>
          <p className="section-subtitle">We don't just run campaigns; we build sustainable digital growth engines.</p>
          
          <div className="why-us-list">
            <div className="why-us-item" ref={addToRefs}>
              <div className="icon-box"><Award size={24} /></div>
              <div>
                <h3>Award-Winning Team</h3>
                <p>Industry recognized experts with decades of combined experience.</p>
              </div>
            </div>
            <div className="why-us-item" ref={addToRefs}>
              <div className="icon-box"><Zap size={24} /></div>
              <div>
                <h3>Agile Execution</h3>
                <p>Rapid deployment and continuous optimization based on real-time data.</p>
              </div>
            </div>
            <div className="why-us-item" ref={addToRefs}>
              <div className="icon-box"><TrendingUp size={24} /></div>
              <div>
                <h3>ROI Obsessed</h3>
                <p>Every strategy is strictly measured against revenue generation.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="why-us-visual">
          {/* Decorative element */}
          <div className="glass-panel decorative-card card-1">
            <p className="stat">+240%</p>
            <p className="label">Growth Q3</p>
          </div>
          <div className="glass-panel decorative-card card-2">
            <p className="stat">4.9/5</p>
            <p className="label">Client Score</p>
          </div>
          <div className="glow-orb" style={{top: '10%', right: '20%'}}></div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
