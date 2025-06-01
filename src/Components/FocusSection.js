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
            <img src={`${process.env.PUBLIC_URL}/assets/Python.webp`} alt="python" />
          
            <span className="label">Python</span>
          </div>
          <div className="image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/assets/full stack development.gif`} alt="FSD" />

            <span className="label">Full Stack Development</span>
          </div>
        </div>

        {/* Center vertical image */}
        <div className="center-image">
          <div className="image-wrapper vertical">
          <img src={`${process.env.PUBLIC_URL}/assets/robo.avif`} alt="AI" />
            <span className="label">OpenAI & Artificial Intelligence</span>
          </div>
        </div>

        {/* Right column */}
        <div className="column">
          <div className="image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/assets/java.png`} alt="Java" />
            <span className="label">Java</span>
          </div>
          <div className="image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/assets/Android.jpg`} alt="Android" />
            <span className="label">Android</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusSection;
