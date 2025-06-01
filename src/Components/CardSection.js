import React from 'react';
import '../styles/CardSection.css';
import estLogo from '../assets/EST.jpg';
import ctsLogo from '../assets/CTS.jpeg';
import IQLogo from '../assets/IQ.jpg';

const services = [
  {
    title: ' Experienced and Skilled Team',
    description: 'The company boasts a team of skilled professionals dedicated to delivering high-quality solutions. Their expertise ensures that projects are completed efficiently and effectively.',
    image: estLogo,
  },
  {
    title: 'Client Trust and Satisfaction',
    description: 'Guru Software Solution has earned the trust of over 100 reputed establishments in City Vista and beyond, reflecting their commitment to client satisfaction and excellence in service delivery.',
    image: ctsLogo,
  },
  {
    title: 'Innovation and Quality',
    description: 'With a focus on innovation, the company continuously integrates the latest technologies and methodologies to provide cutting-edge solutions that meet evolving business needs.',
    image: IQLogo,
  },
];

const CardSection = () => {
  return (
    <div className="card-section">
      <h2 className="card-section-title">Our Services</h2>
      <div className="card-grid">
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <div className="card">
              <img src={service.image} alt={service.title} className="card-logo" />
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </div>
            {index < services.length - 1 && <div className="vertical-divider" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
