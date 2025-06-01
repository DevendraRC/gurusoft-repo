// src/Components/AboutSection.js
import React from 'react';
import '../styles/AboutSection.css';
import aboutscreenLeft from '../assets/about-left.jpg';

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutscreenLeft} alt="About visual" />
        </div>
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We are a team of passionate developers and designers focused on creating professional digital experiences.
            Our mission is to transform businesses through creativity, technology, and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
