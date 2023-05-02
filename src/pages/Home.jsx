import React from 'react'
import Carousel from '../components/Carousel';



function Home() {
  return (
    <div>
      <Carousel/>
      <div className='container-fluid'>
      <div className="row">
        <div className="col-md offset-1">
          <h3>MAKE YOUR FIRST IMPRESSION EXCEPTIONAL.</h3>
        </div>
        <div className="col-md">
          <div className='btn bg-danger'>Get quote</div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home
