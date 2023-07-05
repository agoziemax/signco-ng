import React from 'react'
import Carousel from '../components/Carousel';
import Services from './Services';
import Portfolio from './Portfolio';



function Home() {
  return (
    <div>
      <Carousel />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md p-0'>
            <Services/>
            <Portfolio/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
