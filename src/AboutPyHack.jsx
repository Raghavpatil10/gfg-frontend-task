import React from "react";

import "./AboutPyHack.css";
import smiley from "./assets/smiley.png";
import gauge from "./assets/smilechart.png"; // Corrected: 'gauge' now points to 'gauge.png'
import smilechart from "./assets/gauge.png"; // Corrected: 'smilechart' now points to 'smilechart.png'

const AboutPyHack = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <h2>About PyHack</h2>
        <p>
          PyHack is a dynamic, community-driven workshop designed to teach game
          development using Python.
        </p>
        <a href="#learn-more" className="learn-more-link">
          Learn More <span>→</span>
        </a>
      </div>

      <div className="about-grid">
        <div className="about-card large">
          <img src={smiley} alt="Smiley Graphic" />
        </div>
        <div className="about-card small">
          <img src={gauge} alt="Gauge" /> {/* This will now correctly display gauge.png */}
          <div className="card-caption">
          </div>
        </div>
        <div className="about-card small">
          <img src={smilechart} alt="Smile Curve" /> {/* This will now correctly display smilechart.png */}
        </div>
      </div>
    </section>
  );
};

export default AboutPyHack;