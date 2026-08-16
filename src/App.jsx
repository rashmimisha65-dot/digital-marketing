import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import Results from './components/Results';
import CaseStudies from './components/CaseStudies';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Showreel from './components/Showreel';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth scrolling implementation could be added here, e.g. using Lenis, 
    // but we rely on standard CSS smooth scroll and GSAP for now to avoid extra dependencies 
    // unless strictly necessary.

    // Refresh ScrollTrigger on load
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);

  return (
    <div className="app-container">
      <div className="announcement-bar">
        <span>🚀 Elevate your brand to the next level. Get a free digital audit today!</span>
      </div>
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Services />
        <Results />
        <CaseStudies />
        <WhyUs />
        <Process />
        <Showreel />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
