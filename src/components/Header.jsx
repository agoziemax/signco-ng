import React from 'react'
import '../styles/header.css';
import { useState } from "react";
import signCo from '../assets/sigco-removebg.png';
import { Envelope, TelephoneFill } from 'react-bootstrap-icons';
import { useNavigate, Link } from 'react-router-dom';

function Header() {
const navigate = useNavigate();
const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <nav className='navbar navbar-expand-lg main-nav pe-5'>
        <div className='container-fluid ps-lg-5 ms-lg-5 '>
          <a className='navbar-brand d-flex flex-wrap'>
            <div className='pe-3'>
              <TelephoneFill color='#fb7116' /> <span>0703-598-787</span>
            </div>
            <div>
              <Envelope color='#fb7116' /> <span>uche@signco.ng</span>
            </div>
          </a>
          <div className='navbar-collapse float-end' id='navbarText'></div>
        </div>
        <div className='d-flex'>
          <i className='bx bxl-facebook bx-md pe-3' style={{ color: '#fb7116' }}></i>
          <i className='bx bxl-instagram bx-md me-5 pe-5' style={{ color: '#fb7116' }}></i>
        </div>
      </nav>

      <div className='wrapper d-flex justify-content-center'>
        <div className=' col-sm- col-md-3'>
          <img src={signCo} alt='' className='signCo-logo' img-fluid />
        </div>
      </div>

      <nav className='navbar navbar-expand-lg' style={{ backgroundColor: '#333333' }}>
        <div className='container-fluid'>
          {/* <a className='navbar-brand' href='#'>
            Logo
          </a> */}
          <button
            className='navbar-toggler '
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={toggleNavbar}
          >
            <span className='navbar-toggler-icon text-white'></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className='navbar-nav mx-auto'>
              <li className='nav-item me-4' onClick={() => navigate('/')}>
                <a className='nav-link'>Home</a>
              </li>
              <li className='nav-item me-5' onClick={() => navigate('/About')}>
                <a className='nav-link'>About us</a>
              </li>
              <li className='nav-item me-5'>
                <a className='nav-link'>Services</a>
              </li>
              <li className='nav-item me-5'>
                <a className='nav-link' href='#'>
                  Signs
                </a>
              </li>
              <li className='nav-item me-5'>
                <a className='nav-link'>
                  <Link to='/Contact' style={{ textDecoration: 'none', color: 'white' }}>
                    Contact
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header
