import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';
import wavePattern from '../assets/wave-pattern.png';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Wave background */}
      <img
        src={wavePattern}
        alt="wave pattern"
        style={{ width: '100%', height: '60px', objectFit: 'cover' }}
      />

      <div className="footer-content">
        {/* Left - About GSIPL */}
        <div className="footer-column about">
          <img src={logo} alt="GSIPL Logo" className="footer-logo" />
          <p className="footer-description">
            Our IT solution company proudly stands out as the best
            service provider in the industry.
          </p>

          <div className="footer-contact-info">
            <p><FaPhoneAlt className="footer-icon" /> <a href="tel:+919148997729">+91 9148997729</a></p>
            <p><FaEnvelope className="footer-icon" /> <a href="mailto:hr@gurusoftwaresolution.com">hr@gurusoftwaresolution.com</a></p>
            <p>
              <FaMapMarkerAlt className="footer-icon" /> Office 15, 4th Floor, City Vista, A Wing, Fountain Road, <br />
              Rakshak Nagar, Kharadi, Pune, Maharashtra - 411014
            </p>
          </div>
        </div>

        {/* Middle - Quick Links and Services side-by-side */}
        <div className="footer-column links">
          <div className="footer-link-columns">
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/about">➤ About Us</Link></li>
                <li><Link to="/blog">➤ Blog</Link></li>
                <li><Link to="/career">➤ Career</Link></li>
                <li><Link to="/contact">➤ Contact Us</Link></li>
                <li><Link to="/services">➤ Services</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
              <li><Link to="/webDevelopment">➤ Web Application</Link></li>
              <li><Link to="/mobileAppDevelopment">➤ Mobile Application</Link></li>
              <li><Link to="/dataAnalytics">➤ Data Analytics</Link></li>
              <li><Link to="/sEO">➤ Search Engine Optimization (SEO)</Link></li>
              <li><Link to="/cloudServices">➤ Cloud Services</Link></li>
              <li><Link to="/itConsulting">➤IT Consulting</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right - Google Map */}
        <div className="footer-column map">
          <h4>Office Address</h4>
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.360735389642!2d73.94417487504282!3d18.509453482585115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c2f7f1b9d62b%3A0x2c23f3b099c88508!2sCity%20Vista%2C%20Fountain%20Road%2C%20Kharadi%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1716281130937!5m2!1sen!2sin"
  width="100%"
  height="250"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  title="GSIPL Office Location"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© Guru Solutions India Pvt. Ltd. | All Rights Reserved</p>
        <div className="footer-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
