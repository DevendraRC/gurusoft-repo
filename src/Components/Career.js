import React from 'react';
import '../styles/Career.css';
import CareerImage from '../assets/career-banner.jpg';

const Career = () => {
  return (
    <div className="career-page">
        <header className="career-header">
        <div className="career-content">

            <div className="career-banner">
                <img src={CareerImage} alt="carrer banner"/>
            </div>

        <div className="career-text">
          <h1 className="career-title">
          Join Our Visionary Team.
          </h1>
          <p className="career-description">
            "At Guru Software Solution, we believe in nurturing talent and fostering innovation. 
            Our work culture emphasizes collaboration, creativity, and a healthy work-life balance,
             empowering every team member to grow personally and professionally.."
          </p>
          </div>
        </div>
      </header>
   
      <div className="career-message">
        <p>Sorry, Currently, there are <strong>no vacancies</strong>.</p>
        <p>However, you can email us your resume at <strong>hr@gurusoftwaresolution.com</strong> for future opportunities.</p>
      </div>
    </div>
  );
};

export default Career;
