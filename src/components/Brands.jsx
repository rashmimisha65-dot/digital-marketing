import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Brands.css';

const Brands = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Infinite marquee animation using GSAP
    const marquee = scrollRef.current;
    
    gsap.to(marquee, {
      xPercent: -50,
      ease: 'none',
      duration: 20,
      repeat: -1
    });
  }, []);

  const logos = [
    "TechNova", "GlobalScale", "NexusCorp", "AuraDigital", "QuantumShift",
    "VertexMedia", "PulseMarketing", "StellarLabs"
  ];

  return (
    <section className="brands">
      <div className="container">
        <p className="brands-title">TRUSTED BY INNOVATIVE BRANDS WORLDWIDE</p>
      </div>
      
      <div className="marquee-container">
        <div className="marquee-track" ref={scrollRef}>
          {/* Double the logos for infinite scroll effect */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="brand-logo">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
