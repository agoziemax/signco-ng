import React from 'react';
import capture from '../assets/bg.JPG'; // Update with actual image path

function About() {
  const accomplishments = [
    'Over 10 years of experience in the signage industry',
    'Completed 1000+ successful signage projects',
    'Recipient of the Signage Excellence Award',
    'Proud partner of renowned brands and businesses',
    'Dedicated team committed to exceptional customer service',
  ];

  return (
    <section className='about-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2>Welcome to Signco - Your Partner in Signage Excellence</h2>
            <img src={capture} alt='About Us' className='about-image' />
            <p>At Signco, we specialize in crafting premium-quality signage and branding solutions...</p>
            <h3>Our Journey</h3>
            <p>Founded with a vision to transform the signage landscape, Signco has grown into a trusted name...</p>
            <h3>What Sets Us Apart</h3>
            <ul>
              {accomplishments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3>Join Us in Crafting Your Brand's Future</h3>
            <p>Let Signco be your guide in the world of professional signage and branding...</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
