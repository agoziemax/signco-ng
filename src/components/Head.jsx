import React, { useState, useEffect } from 'react';
import signCo from '../assets/signco_new.png';
import '../styles/head.css';

const Header = () => {
  const texts = ['Indoor', 'Bold', 'Creative', 'Bright'];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

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
      <div className='animated-text'>
        {texts.map((text, index) => (
          <span key={index} className={`animated-text-item ${index === activeIndex ? 'active' : ''}`}>
            {text}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Header;
