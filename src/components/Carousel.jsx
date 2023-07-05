import React from 'react'
import '../styles/carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import Bg from '../assets/banner1.jpg';
import Bg2 from '../assets/banner3.jpg';
import Bg3 from '../assets/banner7.jpg';

function CarouselFade() {


  return (
    <div>
      <Carousel fade className='my-carousel'>
        {/* <Carousel.Item>
          <img className='d-block w-100' src={Bg2} alt='First slide' />
        </Carousel.Item> */}
        <Carousel.Item>
          <div className='overlay'>
            {/* <h1 className='headline'>Discover SignCo</h1>
            <p className='description'>Your trusted partner for stunning signs and exceptional branding solutions.</p> */}
          </div>
          <img className='d-block w-100' src={Bg2} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={Bg} alt='Second slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={Bg3} alt='Third slide' />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFade;
