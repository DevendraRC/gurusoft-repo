import React from 'react';
import '../styles/FocusSection.css';

const FocusSection = () => {
  return (
    <div className="focus-section">
      <h2 className="focus-title">Our Focus on</h2>
      <div className="focus-layout">
        {/* Left column */}
        <div className="column">
          <div className="image-wrapper">
            <img src="/assets/Python.webp" alt="IOT" />
            <span className="label">Python</span>
          </div>
          <div className="image-wrapper">
            <img src="/assets/full stack development.gif" alt="5G" />
            <span className="label">Full Stack Development</span>
          </div>
        </div>

        {/* Center vertical image */}
        <div className="center-image">
          <div className="image-wrapper vertical">
            <img src="/assets/robo.avif" alt="AI/ML" />
            <span className="label">OpenAI & Artificial Intelligence</span>
          </div>
        </div>

        {/* Right column */}
        <div className="column">
          <div className="image-wrapper">
            <img src="/assets/java.png" alt="Blockchain" />
            <span className="label">Java</span>
          </div>
          <div className="image-wrapper">
            <img src="/assets/Android.jpg" alt="Data Science" />
            <span className="label">Android</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusSection;
