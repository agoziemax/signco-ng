import React, { useState, useEffect } from 'react';
import signCo from '../assets/sigco-removebg.png';
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
    <header className='header'>
      <div className='logo'>
        <img src={signCo} alt='logo' className='signCo-logo img-fluid' />
      </div>
      <div className='animated-text'>
        {texts.map((text, index) => (
          <span key={index} className={`animated-text-item ${index === activeIndex ? 'active' : ''}`}>
            {text}
          </span>
        ))}
      </div>
    </header>
  );
};

export default Header;
