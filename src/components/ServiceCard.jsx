import React from 'react'
import '../styles/services.css';

function ServiceCard({ title, description, image }) {
  return (
    <div className='service animated fadeIn'>
      <div className='card' style={{}}>
        <img src={image} alt={title} className='glow-on-hover' />
        <div className='card-border'>
          <div className='card-content'>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard
