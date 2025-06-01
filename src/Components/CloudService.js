import React from 'react';
import '../styles/CloudService.css';
import cloudBanner from '../assets/cloud-banner.jpg'; 

const CloudServices = () => {
  return (
    <div className="cloud-page">
      <header className="cloud-header">
        <img src={cloudBanner} alt="cloud Banner" className="cloud-banner" />
      
      </header>

      <section className="cloud-content">
      <h1 className="cloud-title">Cloud Services</h1>
        <p>
        Cloud services are infrastructure, platforms, or software that are
 hosted by third-party providers and made available to users
 through the internet through the internet, to the provider’s
 systems, and back.
        </p>

        <p style={{ textDecoration: 'underline' }}>
        We provide secure and scalable cloud solutions, including:
        </p>

        <ul>
          <li> Cloud Hosting & Storage – Secure data storage and hosting solutions.</li>
          <li> Cloud Migration – Smooth transition from traditional infrastructure to the cloud.</li>
          <li> Cloud Security – Protecting business data with advanced security protocols.</li>
          <li> SaaS Development – Building software applications on cloud platforms.</li>
        </ul>
      </section>
    </div>
  );
};

export default CloudServices;
