import React from 'react';
import capture from '../assets/bg.JPG';


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
            <img
              src={capture} // Replace with the URL of your about image
              alt='About Us'
              className='about-image'
            />
          </div>
          <div className='col-lg-12'>
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit felis odio, at sagittis eros
              scelerisque nec. Suspendisse potenti. Maecenas vitae nunc quis mi volutpat convallis vel non lacus.
            </p>
            <p>
              Vestibulum venenatis mauris sed magna aliquet, in tincidunt erat euismod. Nulla sit amet fermentum justo,
              eget venenatis dolor. Nam sit amet arcu eu mi malesuada volutpat vel vel purus.
            </p>
            <p>
              Duis at orci in tellus fermentum ultrices. Suspendisse tempus felis vel elit posuere, eget aliquam quam
              ullamcorper. Nulla eu lectus at metus tincidunt tincidunt.
            </p>
          </div>
          <div className='col-lg-12'>
            <h3>Our Accomplishments</h3>
            <ul>
              {accomplishments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='col-lg-12'>
            <img
              src='https://example.com/about-image.jpg' // Replace with the URL of your about image
              alt='About Us'
              className='about-image'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
