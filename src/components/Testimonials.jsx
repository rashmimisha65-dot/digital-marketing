import React from 'react';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Save Digital didn't just improve our SEO, they completely restructured our acquisition funnel. We've seen a 3x return on ad spend within 6 months.",
      author: "Sarah Jenkins",
      role: "CMO, NexusCorp",
      rating: 5
    },
    {
      quote: "The level of data analysis and transparency is unmatched. They act as a true extension of our internal marketing team.",
      author: "David Chen",
      role: "Founder, TechNova",
      rating: 5
    },
    {
      quote: "Their international SEO strategy helped us break into the European market seamlessly. A premium agency that delivers premium results.",
      author: "Elena Rodriguez",
      role: "VP Marketing, GlobalScale",
      rating: 5
    }
  ];

  return (
    <section className="testimonials section-padding">
      <div className="container">
        <h2 className="section-title text-center mb-5">Client <span className="text-gradient">Endorsements</span></h2>
        
        <div className="testimonials-grid">
          {testimonials.map((test, index) => (
            <div key={index} className="testimonial-card glass-panel">
              <Quote className="quote-icon" size={40} />
              <div className="stars">
                {[...Array(test.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">"{test.quote}"</p>
              <div className="testimonial-author">
                <h4>{test.author}</h4>
                <p>{test.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
