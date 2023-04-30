import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Caro from '../assets/bg.JPG'


function Carousel() {
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

  return (
    <div>
      <h2>Responsive Carousel</h2>
      <Slider {...settings}>
        <div>
          <img src={Caro} className='w-100 h-50' alt='Carousel Image' />
        </div>
        <div>
          <img src='https://via.placeholder.com/600x500' alt='Carousel Image' />
        </div>
        <div>
          <img src='https://via.placeholder.com/600x400' alt='Carousel Image' />
        </div>
        <div>
          <img src='https://via.placeholder.com/600x400' alt='Carousel Image' />
        </div>
        <div>
          <img src='https://via.placeholder.com/600x400' alt='Carousel Image' />
        </div>
        <div>
          <img src='https://via.placeholder.com/600x400' alt='Carousel Image' />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel
