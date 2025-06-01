import React from 'react';
import '../styles/DataAnalytics.css';
import dataBanner from '../assets/data-analytics-banner.jpg'; 

const DataAnalytics = () => {
  return (
    <div className="data-page">
      <header className="data-header">
        <img src={dataBanner} alt="data Banner" className="data-banner" />
      
      </header>

      <section className="data-content">
      <h1 className="data-title">Data Analytics</h1>
        <p>
        At GSS, we believe in the adage ‘Data is the new oil’ that helps run
 businesses effectively and efficiently. But we also believe that
 ‘Data is the new soil’ from which we can nurture and grow hitherto
 unforeseen insights. We offer a wide range of capabilities like
 Marketing Analytics, Customer Analytics, Sales Analytics,
        </p>

        <p style={{ textDecoration: 'underline' }}>
        We help businesses leverage data for smarter decision-making through:
        </p>

        <ul>
          <li> Business Intelligence (BI) – Analyzing data for actionable insights.</li>
          <li> Big Data Solutions – Processing large datasets for performance optimization.</li>
          <li> Predictive Analytics – AI-driven forecasting for business growth.</li>
          <li> Data Visualization – Interactive dashboards for better understanding of metrics.</li>
        </ul>
      </section>
    </div>
  );
};

export default DataAnalytics;
