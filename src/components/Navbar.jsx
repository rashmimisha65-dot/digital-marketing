import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <span className="logo-text">SAVE<span className="text-gradient">DIGITAL</span></span>
        </div>
        
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQ</a>
        </nav>
        
        <div className="nav-actions">
          <button className="btn-primary btn-small">Get Free Audit</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
