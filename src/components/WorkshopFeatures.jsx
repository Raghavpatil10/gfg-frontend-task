import React from "react";
import "../components/WorkshopFeatures.css";
import gameMechanicsImg from "../assets/image.png"; 
import visualEffectsImg from "../assets/frame.png"; 
import gameBalancingImg from "../assets/frame1.png"; 
import crossPlatformImg from "../assets/frame2.png"; 

const features = [
  {
    title: "Game Mechanics",
    desc: "Master physics, collision detection, AI, and game loops.",
    className: "feature red-orange",
    img: gameMechanicsImg,
  },
  {
    title: "Visual Effects",
    desc: "Create 2D/3D graphics and animations.",
    className: "feature blue",
    img: visualEffectsImg,
  },
  {
    title: "Game Balancing",
    desc: "Balance difficulty and progression.",
    className: "feature yellow",
    img: gameBalancingImg,
  },
  {
    title: "Cross-Platform Dev",
    desc: "Deploy games on PC, web, and mobile.",
    className: "feature purple",
    img: crossPlatformImg,
  },
];

const WorkshopFeatures = () => {
  return (
    <section className="workshop-section">
      <h2>Workshop Features</h2>
      <div className="features-grid">
        {features.map((f, idx) => (
          <div key={idx} className={f.className}>
            {f.img ? (
              <div className="art-image">
                <img src={f.img} alt={f.title} />
              </div>
            ) : (
              <div className="art" />
            )}
            <div className="text-content">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkshopFeatures;
