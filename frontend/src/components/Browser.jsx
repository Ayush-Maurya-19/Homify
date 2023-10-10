import React, { useState } from 'react'
import laptopList from './dummydata2.0';

const Browser = () => {
    const [laptopData] = useState(laptopList);

    const displayData = () => {
      return laptopData.map((laptop) => (  
        <div className="col-md-3">
            <div className="card m-2">
                  <img src={laptop.image} alt="laptop_image" />
                  <div className='card-body'>
                      <h3>{laptop.name}</h3> 
                      <h6>{laptop.address}, {laptop.location}</h6> 
                      <h4>&#8377; {laptop.price} <button type="button" className='btn btn-primary btn-sm'>Book Now</button> </h4>
                  </div>
              </div>
          </div>
      ));
  };

  return (
    <div>
            <div className="container mx-auto row">
        <h2 className='text-center'>Hotels Near You</h2>

        <div>
          <div className="row">{displayData()}</div>
        </div>
     

    </div>
    </div>
  )
}

export default Browser