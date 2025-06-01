import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/WhatsappButton.css';

const WhatsappButton = () => {
  const phoneNumber = '+919148997729';
  const whatsappLink = `https://wa.me/${phoneNumber.replace('+', '')}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsappButton;
