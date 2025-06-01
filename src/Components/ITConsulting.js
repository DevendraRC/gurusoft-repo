import React from 'react';
import '../styles/ITConsulting.css';
import ITBanner from '../assets/IT-banner.jpg'; 

const ITConsulting = () => {
  return (
    <div className="IT-page">
      <header className="IT-header">
        <img src={ITBanner} alt="IT Banner" className="IT-banner" />
      
      </header>

      <section className="IT-content">
      <h1 className="IT-title">IT Consulting</h1>
        <p>
        IT consulting services help clients evaluate different technology
 strategies and align them with your business. These services
 provide strategic, operational, and architectural planning to
 support customers’ IT initiatives. Strategic planning involves
 advisory services that allow clients to gauge their IT needs before
 formulating implementation plans.
        </p>

        <p style={{ textDecoration: 'underline' }}>
        Our experts offer strategic IT consulting services to help businesses optimize their technology investments:
        </p>

        <ul>
          <li> Digital Transformation Consulting – Helping businesses embrace modern technology.</li>
          <li> IT Infrastructure Management – Enhancing security, scalability, and efficiency.</li>
          <li> Software Architecture & Design – Providing innovative software solutions.</li>
          <li> Cybersecurity Solutions – Protecting businesses from online threats and data breaches.</li>
        </ul>
      </section>
    </div>
  );
};

export default ITConsulting;
