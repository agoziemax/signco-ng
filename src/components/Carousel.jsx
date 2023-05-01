import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Bg from '../assets/banner1.jpg';
import Bg2 from '../assets/banner3.jpg';
import Bg3 from '../assets/banner7.jpg';
function CarouselFade() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
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