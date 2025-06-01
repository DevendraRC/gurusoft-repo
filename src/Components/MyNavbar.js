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
          <NavbarBrand href="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </NavbarBrand>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>

              <Dropdown nav inNavbar isOpen={servicesOpen} toggle={toggleServices} className="hover-dropdown">
                <DropdownToggle nav caret >
                  Services
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a" href="/webDevelopment">Web Development</DropdownItem>
                  <DropdownItem tag="a" href="/mobileAppDevelopment">Mobile App Development</DropdownItem>
                  <DropdownItem tag="a" href="/dataAnalytics">Data Analytics</DropdownItem>
                  <DropdownItem tag="a" href="/sEO">Search Engine Optimization (SEO)</DropdownItem>
                  <DropdownItem tag="a" href="/cloudServices">Cloud Services</DropdownItem>
                  <DropdownItem tag="a" href="/itConsulting">IT Consulting</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <NavItem>
                <NavLink href="/blog">Blog</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/career">Career</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
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
