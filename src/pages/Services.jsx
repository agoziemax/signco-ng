import React from 'react';
import serviceImage1 from '../assets/hero-contact.jpg';
import '../styles/services.css';

function Services() {
  return (
    <section className='services'>
      <div className='container'>
        <h2 className='text-center mb-5'>Our Services</h2>
        <div className='row'>
          <div className='col-lg-3 col-md-6'>
            <div className='service  animated fadeIn'>
              <div className='card'>
                <img src={serviceImage1} alt='Signage Design' className='glow-on-hover' />

                <div className='card-boder'>
                  <div className='card-content'>
                    <h3>Signage Design</h3>
                    <p>
                      We offer professional signage design services tailored to your branding needs. Our team of experts
                      will create eye-catching and impactful designs that effectively convey your message.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='service'>
              <img src={serviceImage1} alt='Signage Fabrication' className='glow-on-hover' />
              <h3>Signage Fabrication</h3>
              <p>
                With state-of-the-art facilities and skilled craftsmen, we provide top-quality signage fabrication
                services. From materials selection to manufacturing, we ensure durable and visually appealing signs.
              </p>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='service'>
              <img src={serviceImage1} alt='Signage Installation' className='glow-on-hover' />
              <h3>Signage Installation</h3>
              <p>
                Our experienced team handles the professional installation of signs, ensuring precise placement and
                secure mounting. We take care of all the necessary equipment and logistics for a smooth installation
                process.
              </p>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='service'>
              <img src={serviceImage1} alt='Signage Maintenance' className='glow-on-hover' />
              <h3>Signage Maintenance</h3>
              <p>
                To keep your signs in excellent condition, we offer comprehensive signage maintenance services. Our team
                conducts regular inspections, cleaning, and repairs to prolong the lifespan of your signage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
