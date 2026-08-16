import React from 'react';
import { ArrowRight, MessageCircle, Globe, Share2 } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <div className="container">
          <div className="cta-content glass-panel">
            <h2>Ready to dominate your market?</h2>
            <p>Join the world's fastest-growing brands and scale your revenue with our data-driven strategies.</p>
            <button className="btn-primary">Get Your Free Strategy Audit <ArrowRight size={18} /></button>
          </div>
        </div>
      </div>
      
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo mb-4">
                <span className="logo-text">SAVE<span className="text-gradient">DIGITAL</span></span>
              </div>
              <p className="footer-desc">
                Premium digital marketing agency driving explosive growth for international brands.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Social 1"><MessageCircle size={20} /></a>
                <a href="#" aria-label="Social 2"><Globe size={20} /></a>
                <a href="#" aria-label="Social 3"><Share2 size={20} /></a>
              </div>
            </div>
            
            <div className="footer-links">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Search Engine Optimization</a></li>
                <li><a href="#">Google Ads Management</a></li>
                <li><a href="#">Social Media Advertising</a></li>
                <li><a href="#">Conversion Optimization</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h3>Contact</h3>
              <p>New York | London | Dubai</p>
              <a href="mailto:hello@savedigital.com" className="email-link">hello@savedigital.com</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Save Digital Marketing. All rights reserved.</p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
