import React from 'react'
import Carousel from '../components/Carousel';
import Services from './Services';



function Home() {
  return (
    <div>
      <Carousel />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md'>
            <Services />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
