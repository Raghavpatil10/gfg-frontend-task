import React from 'react';
import './Footer.css';
import footerImage from './assets/Footer.png';
import logo2 from './assets/logo2.png';
import socials from './assets/socials.png';
import borderbottom from './assets/borderbottom.png';
import borderbottom2  from './assets/borderbottom2.png';
import borderbottom3  from './assets/borderbottom3.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo2} alt="Logo" className="logo2" />
            <img src={footerImage} alt="Website Footer" className="full-footer-image" />
          </div>
          <p className="footer-description">
            PyHack provides a wide range of resources and hands-on experience to help you
            master Python-based game development. Explore new techniques, share your
            creations, and collaborate with fellow developers. Whether you’re looking to build indie
            games or start a career in the gaming industry, PyHack is the place to begin.
          </p>
          <img src={socials} alt="Social Logos" className="socail" />
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#brand">Brand</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#help-support">Help & Support</a></li>
              <li><a href="#governance">Governance</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Developers</h3>
            <ul>
              <li><a href="#technical-paper">Technical Paper</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#game-design">Game Design</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#privacy-policy">Privacy Policy</a></li>
              <li><a href="#terms-of-use">Terms of Use</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-social">
        {/* Replace with Font Awesome, React Icons, or custom SVGs */}
        <a href="#instagram" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#twitter" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#github" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <img src={borderbottom} alt="bar1" className="bottom1" />
      <img src={borderbottom2} alt="bar2" className="bottom2" />
      <img src={borderbottom3} alt="bar3" className="bottom3" />
    </footer>
  );
};

export default Footer;
