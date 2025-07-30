import React from 'react';

import homepageImage from './assets/homepage.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="announcement">
          <h4>
          Introducing an era of new and exciting game development {' '}
          </h4>
      </div>

      <h1>
        Access the full power of <br />
        Python Game Development.
      </h1>
      <p>
        The ultimate game dev workshop for Python enthusiasts. <br />
        Learn, create, and innovate with the most versatile pl.
      </p>

      <button className="cta">Get Started →</button>

      <img class="img1"src={homepageImage} alt="image" />

    </section>
  );
};

export default Hero;
