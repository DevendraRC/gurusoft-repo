import React from 'react';
import '../styles/WebDevelopment.css';
import webDevBanner from '../assets/web-dev-banner.jpg'; 

const WebDevelopment = () => {
  return (
    <div className="webdev-page">
      <header className="webdev-header">
        <img src={webDevBanner} alt="Web Development Banner" className="webdev-banner" />
      
      </header>

      <section className="webdev-content">
      <h1 className="webdev-title">Web Development</h1>
        <p>
          At our company, we specialize in website development services that utilize a range of
          cutting-edge technologies to deliver customized solutions to our clients. We work with CMS
          systems, Dotnet, and Angular to develop websites that are visually stunning, highly functional,
          and user-friendly.
        </p>

        <p style={{ textDecoration: 'underline' }}>
           Our team creates stunning, functional, and responsive websites tailored to business goals:
        </p>

        <ul>
          <li> Corporate Websites – Professional websites for branding and business presence.</li>
          <li> E-commerce Platforms – Scalable solutions for online stores.</li>
          <li> Custom Web Applications – Web-based platforms for business process automation.</li>
          <li> Content Management Systems (CMS) – WordPress, Joomla, and custom CMS solutions.</li>
          <li> Web Portals – Dynamic portals for industries like education, healthcare, and finance.</li>
        </ul>
      </section>
    </div>
  );
};

export default WebDevelopment;
