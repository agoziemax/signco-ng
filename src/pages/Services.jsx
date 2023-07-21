import React from 'react';
import serviceImage1 from '../assets/hero-contact.jpg';
import '../styles/services.css';
import ServiceCard from '../components/ServiceCard';

function Services() {
  const servicesData = [
    {
      title: 'Signage Design',
      description:
        'We offer professional signage design services tailored to your branding needs. Our team of experts will create eye-catching and impactful designs that effectively convey your message.',
      image: serviceImage1,
    },
    {
      title: 'Signage Fabrication',
      description:
        'With state-of-the-art facilities and skilled craftsmen, we provide top-quality signage fabrication services. From materials selection to manufacturing, we ensure durable and visually appealing signs.',
      image: serviceImage1,
    },
    {
      title: 'Signage Installation',
      description:
        'Our experienced team handles the professional installation of signs, ensuring precise placement and secure mounting. We take care of all the necessary equipment and logistics for a smooth installation process.',
      image: serviceImage1,
    },
    {
      title: 'Signage Maintenance',
      description:
        'To keep your signs in excellent condition, we offer comprehensive signage maintenance services. Our team conducts regular inspections, cleaning, and repairs to prolong the lifespan of your signages.',
      image: serviceImage1,
    }
  ];


  return (
    <section className='services'>
      <div className='container'>
        <h2 className='text-center mb-5'>Our Services</h2>
        <div className='row'>
          {servicesData.map((service, index) => (
            <div className='col-lg-3 col-md-6' key={index}>
              <ServiceCard image={service.image} title={service.title} description={service.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
