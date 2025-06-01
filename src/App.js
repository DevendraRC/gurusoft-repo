import React from 'react';
import './App.css';
import MyNavbar from './Components/MyNavbar'; 
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import FocusSection from './Components/FocusSection';
import FeatureCards from './Components/FeatureCards';
import CardSection from './Components/CardSection';
import Footer from './Components/Footer';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Career from './Components/Career';
import WebDevelopment from './Components/WebDevelopment';
import MobileAppDevelopment from './Components/MobileAppDevelopment';
import DataAnalytics from './Components/DataAnalytics';
import SEO from'./Components/SEO';
import CloudServices from './Components/CloudService';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ITConsulting from './Components/ITConsulting';
import Clients from './Components/Clients';
import WhatsappButton from './Components/WhatsappButton';
import ScrollToTop from './Components/ScrollToTop';


function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FocusSection />
      <FeatureCards />
      <CardSection />
      <Clients />
      <WhatsappButton/>
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <MyNavbar />
      <ScrollToTop />

      <Routes>
        
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/webDevelopment" element={<WebDevelopment />} />
        <Route path="/mobileAppDevelopment" element={<MobileAppDevelopment/>}/>
        <Route path="/dataAnalytics" element={<DataAnalytics/>}/>
        <Route path="/sEO" element={<SEO/>}/>
        <Route path="/cloudServices" element={<CloudServices/>}/>
        <Route path="/itConsulting" element={<ITConsulting/>}/>
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
