import React from 'react';
import '../styles/MobileAppDevelopment.css';
import mobDevBanner from '../assets/mob-AppDev-banner.jpg'; 

const MobileAppDevelopment = () => {
  return (
    <div className="mobdev-page">
      <header className="mobdev-header">
        <img src={mobDevBanner} alt="mob Development Banner" className="mobdev-banner" />
      
      </header>

      <section className="mobdev-content">
      <h1 className="mobdev-title">Mobile Application Development</h1>
        <p>
        At GSS, our Xamarin mobile app development services are
 designed to help businesses create high-quality, cross-platform
 apps that deliver tangible results. Whether you need a new app
 developed from scratch or an existing app updated and improved,
 we have the expertise and experience to deliver outstanding
 results using Xamarin.
        </p>

        <p style={{ textDecoration: 'underline' }}>
        We develop custom mobile applications for Android and iOS, focusing on:
        </p>

        <ul>
          <li> Native & Hybrid Apps – Scalable and feature-rich mobilevapplications.</li>
          <li> E-commerce Apps – Secure and seamless shopping experiences.</li>
          <li> Enterprise Mobility Solutions – Custom apps to improve workflow and productivity.</li>
          <li> On-Demand Apps – Tailored solutions for food delivery, taxi services, healthcare, and more.</li>
        </ul>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;
