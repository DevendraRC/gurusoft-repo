import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HeroSection.css';
import ParticlesComponent from './ParticlesComponent';
import heroRight from '../assets/hero-right.png';
import {  useNavigate } from 'react-router-dom';


const HeroSection = () => {
  const navigate = useNavigate();

  const goToContact =() => {
    navigate('/contact');
  };
  return (
    <div className="hero-container">
      {/* Only one particles instance inside its own layer */}
      <div className="particles-wrapper">
        <ParticlesComponent id="tsparticles" />
      </div>

      <motion.div
        className="hero-content-row"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="hero-text">
          <h1 className="hero-title">
            Discover our journey, values, and future vision.
          </h1>
          <p className="hero-description">
            "To be a global leader in digital transformation by providing
            innovative, high-quality, and scalable IT solutions that empower
            businesses and individuals to achieve success in the digital era."
          </p>
          <button className="cta-button" onClick={goToContact}>Contact us</button>
        </div>

        <div className="hero-image">
          <img src={heroRight} alt="Illustration" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
