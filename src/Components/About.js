import React from 'react';
import '../styles/About.css';
import aboutImage from '../assets/about-banner.jpg';

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <img src={aboutImage} alt="About GSIPL" className="about-banner" />
        <h1>About Guru Software Solutions</h1>
      </header>

      <section className="about-content">
        <h2>About Us</h2>
        <p>
               Guru Software Solution is a premier IT solutions provider
 based in Pune, specializing in Web Designing, Web
 Development, Software Development, SEO, and Training.
 With a strong commitment to innovation, quality, and
 customer satisfaction, we deliver cutting-edge digital
 solutions at competitive prices.
        </p>  
           <p>  Our company is a hub of creativity, technology, and expertise,
 offering customized solutions tailored to meet business
 needs. Backed by a team of skilled professionals, we have
 gained the trust of leading brands and 100+ reputed
 establishments in City Vista and beyond. Our goal is to
 empower enterprises worldwide with smart, scalable, and
 secure technology solutions.
        </p>

        <h2>Our Vision</h2>
        <p>
        "To be a global leader in digital transformation by
 providing innovative, high-quality, and scalable IT
 solutions that empower businesses and individuals to
 achieve success in the digital era."</p>

 <h2>Our Mission</h2>
        <ul>
          <li>∎ To deliver exceptional IT services that drive business growth and efficiency.</li>
          <li>∎ To empower individuals with cutting-edge technical skills through high-quality training programs</li>
          <li>∎ To stay ahead of technological advancements and incorporate the latest innovations into our solutions</li>
          <li>∎ To build long-term partnerships with clients through trust, transparency, and customer satisfaction.</li>
          <li>∎ To contribute to a smarter digital world by offering intelligent, data-driven solutions.</li>
        </ul>

 

        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ 10+ Years of Industry Experience</li>
          <li>✔ Dedicated Team of Experts</li>
          <li>✔ End-to-End Development Services</li>
          <li>✔ Agile and Scalable Solutions</li>
          <li>✔ Proven Track Record with 100+ Clients</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
