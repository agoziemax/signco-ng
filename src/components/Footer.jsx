import React from 'react'
import { Link } from 'react-router-dom';



function Footer() {
 const footerLinks = [
   { label: 'Home', url: '/' },
   { label: 'Services', url: '/services' },
   { label: 'Portfolio', url: '/portfolio' },
   { label: 'About Us', url: '/about' },
   { label: 'Contact', url: '/contact' },
 ];

 const socialMediaLinks = [
   { label: 'Facebook', url: 'https://www.facebook.com/signco' },
   { label: 'Twitter', url: 'https://www.twitter.com/signco' },
   { label: 'Instagram', url: 'https://www.instagram.com/signco' },
 ];

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <ul className='footer-links'>
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-lg-6'>
            <div className='social-media-links'>
              {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.url}>
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
