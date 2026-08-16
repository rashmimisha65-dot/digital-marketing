import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import gsap from 'gsap';
import './Hero.css';
import heroVideo from '../assets/Data_streams_moving_upwards_1080p_202608161024.mp4';

const Hero = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Split text animation would ideally use SplitText plugin, but we'll simulate with CSS lines
    tl.fromTo(headlineRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.2 }
    )
    .fromTo(subheadRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.8"
    )
    .fromTo(ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(imageRef.current,
      { scale: 1.1, opacity: 0, filter: 'blur(10px)' },
      { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power2.out' },
      "-=1.2"
    );

    // Proper ScrollTrigger cinematic effect
    gsap.to(imageRef.current, {
      yPercent: 30,
      scale: 1.15,
      opacity: 0.2,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    gsap.to('.hero-text-wrapper', {
      y: -150,
      opacity: 0,
      scale: 0.9,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

  }, []);

  return (
    <section ref={heroRef} className="hero">
      <div className="hero-bg-container">
        <div className="hero-overlay"></div>
        <video ref={imageRef} src={heroVideo} autoPlay loop muted playsInline className="hero-bg-image" />
      </div>
      
      <div className="container hero-content">
        <div className="hero-text-wrapper">
          <h1 ref={headlineRef} className="hero-title">
            We Grow Brands <br />
            <span className="text-gradient">Digitally.</span>
          </h1>
          
          <p ref={subheadRef} className="hero-subtitle">
            Award-winning digital marketing agency helping international brands 
            scale through data-driven SEO, paid advertising, and conversion optimization.
          </p>
          
          <div ref={ctaRef} className="hero-cta-group">
            <button className="btn-primary">
              Get Free Audit <ArrowRight size={18} />
            </button>
            <a href="#showreel" className="btn-secondary">
              <Play size={18} fill="currentColor" /> Watch Showreel
            </a>
          </div>
        </div>
      </div>
      
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
    </section>
  );
};

export default Hero;
