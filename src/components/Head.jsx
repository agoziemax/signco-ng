import React, { useState, useEffect } from 'react';
import signCo from '../assets/signco_new.png';
import '../styles/head.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  const texts = ['Indoor', 'Bold', 'Creative', 'Bright'];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 9000);

    return () => {
      clearInterval(interval);
    };
  }, [texts.length]);

  return (
    <nav className='header'>
      <div className='logo d-flex'>
        <div className='orange'></div>
        <div className=''>
          <img src={signCo} alt='logo' className='signCo-logo ' /> <br />
          <small className='mt-n5'>LED SIGNS | DISPLAYS</small>
        </div>
      </div>
      <Navbar bg='' expand='md' className='text-white'>
        <Navbar.Toggle aria-controls='navbarTogglerDemo01' />
        <Navbar.Collapse id='navbarTogglerDemo01'>
          <div className='animated-text'>
            {texts.map((text, index) => (
              <span key={index} className={`animated-text-item ${index === activeIndex ? 'active' : ''}`}>
                {text}
              </span>
            ))}
          </div>
          <Nav className='me-auto mb-2 mb-lg-0 gap-3 pe-4'>
            <NavLink to='/' activeClassName='act' className='text-white text-decoration-none pt-2'>
              Home
            </NavLink>
            <NavLink to='/About' className='text-white text-white text-decoration-none pt-2'>
              About Us
            </NavLink>
            <NavLink to='Services' className='text-white text-white text-decoration-none pt-2'>
              Services
            </NavLink>
            <NavLink to='Portfolio' className='text-white text-white text-decoration-none pt-2'>
              Portfolio
            </NavLink>
            <NavLink to='/Contact' className='text-white text-white text-decoration-none pt-2'>
              Contact Us
            </NavLink>
          </Nav>
          <div className='sliding-text-container'>{/* Sliding text animation */}</div>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default Header;
