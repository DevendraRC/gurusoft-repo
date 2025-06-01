import React from 'react';
import '../styles/SEO.css';
import seoBanner from '../assets/SEO-banner.jpg'; 

const SEO = () => {
  return (
    <div className="seo-page">
      <header className="seo-header">
        <img src={seoBanner} alt="seo Banner" className="seo-banner" />
      
      </header>

      <section className="seo-content">
      <h1 className="seo-title">Search Engine Optimization (SEO) </h1>
        <p>
        SEO involves making sure that the website is structured in a way
 that search engines can easily crawl and index the site’s pages,
 and that the site is optimized for performance and user
 experience. Technical SEO includes Site Structure, Page Speed,
 Mobile responsiveness, HTTPS & Security.
        </p>

        <p style={{ textDecoration: 'underline' }}>
        We enhance online visibility and brand awareness through:
        </p>

        <ul>
          <li> On-Page SEO – Optimizing website content for better rankings.</li>
          <li> Off-Page SEO – Building high-quality backlinks and domainvauthority.</li>
          <li> Technical SEO – Improving website structure and performance.</li>
          <li> Local SEO – Optimizing Google My Business and local search presence.</li>
        </ul>
      </section>
    </div>
  );
};

export default SEO;
