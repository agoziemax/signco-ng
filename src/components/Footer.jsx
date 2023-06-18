import React from 'react'
import { Link } from 'react-router-dom';
import signCo from '../assets/signco_new.png';
import '../styles/footer.css';
import { FaHome, FaFacebook, FaTwitter } from 'react-icons/fa';
import { EnvelopeFill, Instagram, TelephoneFill } from 'react-bootstrap-icons';


function Footer() {

  const currentYear = new Date().getFullYear();
 const footerLinks = [
   { label: 'Home', url: '/' },
   { label: 'Services', url: '/services' },
   { label: 'Portfolio', url: '/portfolio' },
   { label: 'About Us', url: '/about' },
   { label: 'Contact', url: '/contact' },
 ];

 const socialMediaLinks = [
   { label: <FaFacebook className='m-3' style={{ fontSize: '1.5rem' }} />, url: 'https://www.facebook.com/signco' },
   { label: <FaTwitter className='m-3' style={{ fontSize: '1.5rem' }} />, url: 'https://www.twitter.com/signco' },
   { label: <Instagram className='m-3' style={{ fontSize: '1.5rem' }} />, url: 'https://www.instagram.com/signco' },
 ];

  return (
    <footer className='footer pt-5 pb-5 h-100'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='mb-3'>
              <img src={signCo} alt='logo' className='signCo-logo ' /> <br />
              <small className='mt-n5 text-white'>LED SIGNS | DISPLAYS</small>
            </div>
            <div className='text-white'>
              <p>&copy; {currentYear} SIGNco. All rights reserved.</p>
            </div>
          </div>
          <div className='col-md-3'>
            <h3>Contact Us</h3>
            <div className='d-flex'>
              <FaHome className='me-2 mt-1'  color='#fb7116' />{' '}
              <div className=''>
                No 2 Aba Road <br /> Port harcourt
              </div>
            </div>
            <TelephoneFill color='#fb7116'  /> <span>0703-598-787</span>
            <div>
              <EnvelopeFill color='#fb7116' /> <span>uche@signco.ng</span>
            </div>
          </div>
          <div className='col-md-3'>
            <ul className='footer-links  list-unstyled'>
              {footerLinks.map((link, index) => (
                <li key={index} className=' text-white'>
                  <Link to={link.url} className='text-decoration-none text-white'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-md-3'>
            <div className='social-media-links d-flex flex-lg-column text-white '>
              {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.url} style={{ color: '#fb7116' }}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
