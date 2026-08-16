import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Search, Megaphone, Share2, PenTool, Globe, Target } from 'lucide-react';
import './Services.css';
import servicesAbstract from '../assets/services_bg.jpeg';

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const cards = cardsRef.current;
    
    gsap.fromTo(cards, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  const services = [
    { icon: <Search size={32} />, title: 'SEO', desc: 'Data-driven search engine optimization to dominate your industry.' },
    { icon: <Target size={32} />, title: 'Google Ads', desc: 'High-converting PPC campaigns with rigorous ROI tracking.' },
    { icon: <Megaphone size={32} />, title: 'Meta Ads', desc: 'Targeted social advertising that scales your customer acquisition.' },
    { icon: <Share2 size={32} />, title: 'Social Media', desc: 'Strategic community building and viral content creation.' },
    { icon: <PenTool size={32} />, title: 'Web Design', desc: 'Premium conversion-optimized websites and landing pages.' },
    { icon: <Globe size={32} />, title: 'Intl. SEO', desc: 'Expand your reach globally with localized search strategies.' }
  ];

  return (
    <section id="services" ref={sectionRef} className="services section-padding">
      <div className="container">
        <div className="services-header">
          <div className="services-title-wrapper">
            <h2 className="section-title">Dominate Your <br /><span className="text-gradient">Digital Landscape</span></h2>
            <p className="section-subtitle">We deploy aggressive, data-backed marketing strategies designed for one thing: explosive growth.</p>
          </div>
          <div className="services-visual">
             <img src={servicesAbstract} alt="Growth Data Visual" className="services-img" />
             <div className="services-img-overlay"></div>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} ref={addToRefs} className="service-card glass-panel">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
