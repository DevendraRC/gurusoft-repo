import React, { useEffect } from 'react';
import '../styles/Clients.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Autoplay } from 'swiper/modules';
import ekveera from '../assets/clients/ekveera.png';
import littlec from '../assets/clients/littleChamps.jpeg';
import mmpoly from '../assets/clients/mmPoly.jpeg';
import sai from '../assets/clients/sai.jpeg';
import rentopaa from '../assets/clients/rentopia.jpg';
import spm from '../assets/clients/spm.png';
import krushi from '../assets/clients/krushiGaurav.jpeg';
import crayons from '../assets/clients/crayons.jpg';
import  jspm from '../assets/clients/jspm.png';

const clients = [
  { name: 'Ekveera Rosary School', logo: ekveera },
  { name: 'Little Champs Preschool', logo: littlec },
  { name: 'M.M Poly (Marathwada Mitra Mandal)', logo: mmpoly },
  { name: 'Sai Laundry', logo: sai },
  { name: 'Rentopiaa (Europe)', logo: rentopaa },
  { name: 'Satchikitsa Parasaran Mandal', logo: spm },
  { name: 'Krushi Gaurav', logo: krushi },
  { name: 'Crayons Preschool', logo: crayons },
  { name: 'JSPM Engineering College', logo: jspm },
];

const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="clients-section" data-aos="fade-up">
      <h2 className="clients-title">Our Trusted Clients</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 2500 }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="clients-carousel"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="client-card">
              <img
                src={client.logo || '/assets/placeholder-logo.png'}
                alt={client.name}
                className="client-logo"
              />
              <p className="client-name">{client.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Clients;

