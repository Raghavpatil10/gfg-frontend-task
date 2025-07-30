import React, { useState } from 'react';
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
      <div className="faq-question" onClick={toggleOpen}>
        <h3>{question}</h3>
        <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
      </div>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is PyHack?",
      answer:
        "PyHack is a dynamic, community-driven workshop designed to teach game development using Python. It's an immersive experience for aspiring developers to learn, build, and innovate.",
    },
    {
      question: "Where will the workshops be held?",
      answer:
        "The workshops will be held virtually, allowing participants from anywhere to join. Specific platform details and access links will be shared closer to the event date.",
    },
    {
      question: "What will I learn at PyHack?",
      answer:
        "You will learn the fundamentals of Python programming for game development, including game loops, sprite animation, collision detection, and user input handling, using popular libraries like Pygame.",
    },
    {
      question: "Do I need prior Python experience?",
      answer:
        "While some basic programming knowledge is beneficial, PyHack is designed to accommodate participants with varying levels of experience. We will start with fundamentals and build up from there.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h1>FAQs</h1>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <a href="#all-faqs" className="see-more-link">
        See More <span>→</span>
      </a>
    </section>
  );
};

export default FAQ;
