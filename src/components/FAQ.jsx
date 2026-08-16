import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How is Save Digital different from other agencies?",
      answer: "We are purely ROI-focused. We don't report on vanity metrics; we report on revenue growth, customer acquisition costs, and lifetime value. Our team consists of senior specialists, not junior account managers."
    },
    {
      question: "What is your typical onboarding process?",
      answer: "Our onboarding takes 2-3 weeks. It includes a comprehensive technical audit, competitive analysis, tracking verification, and the development of your custom 6-12 month strategic roadmap."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes. Over 60% of our clients operate across multiple regions including the US, UK, Europe, and Asia. We specialize in international SEO and multi-lingual paid campaigns."
    },
    {
      question: "What is the minimum budget requirement?",
      answer: "To ensure we can deliver the aggressive growth our clients expect, we typically partner with brands that have a minimum monthly media spend of $10,000, excluding our management fees."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section-padding">
      <div className="container faq-container">
        <div className="faq-header">
          <h2 className="section-title">Common <br/><span className="text-gradient">Questions</span></h2>
          <p className="section-subtitle">Everything you need to know about partnering with Save Digital.</p>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item glass-panel ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <span className="faq-icon">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
