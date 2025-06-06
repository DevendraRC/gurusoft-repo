import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';
import '../styles/MyNavbar.css';
import logo from '../assets/logo.png';
import instagramIcon from '../assets/instagram.png';
import { Link } from 'react-router-dom';


function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  const toggle = () => setIsOpen(!isOpen);

  // Scroll effect to toggle navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar
        expand="md"
        light
        fixed="top"
        className={`my-navbar fade-navbar ${isScrolled ? 'shrink-navbar' : ''}`}
      >
        <Container>
          <NavbarBrand tag={Link} to="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </NavbarBrand>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem>
              <NavLink tag={Link} to="/home">Home</NavLink>
              </NavItem>
              <NavItem>
              <NavLink tag={Link} to="/about">About</NavLink>
              </NavItem>

              <Dropdown nav inNavbar isOpen={servicesOpen} toggle={toggleServices} className="hover-dropdown">
                <DropdownToggle nav caret >
                  Services
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag={Link} to="/webDevelopment">Web Development</DropdownItem>
                  <DropdownItem tag={Link} to="/mobileAppDevelopment">Mobile App Development</DropdownItem>
                  <DropdownItem tag={Link} to="/dataAnalytics">Data Analytics</DropdownItem>
                  <DropdownItem tag={Link} to="/sEO">Search Engine Optimization (SEO)</DropdownItem>
                  <DropdownItem tag={Link} to="/cloudServices">Cloud Services</DropdownItem>
                  <DropdownItem tag={Link} to="/itConsulting">IT Consulting</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <NavItem>
                <NavLink tag={Link} to="/blog">Blog</NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={Link} to="/career">Career</NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={Link} to="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
