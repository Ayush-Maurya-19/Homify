import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import laptopList from "./dummydata";

const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 5,
  swipeToSlide: true,
  // nextArrow: <h1>Next</h1>,
  // prevArrow: <h1>Prev</h1>,
  afterChange: function (index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  }
};




const Home = () => {
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
      <div className='background'>
        <div className='opacity'>
          <div className='container text-center'>
            <h1 className='pt-4 text-white heading'>Find your home with <span class="fw-bold">Homify</span></h1>
            <div className="input-group mb-3 w-75 mx-auto">
              <input type="text" className="form-control" placeholder="Enter Your Location" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2"><button type="submit" className="btn btn-primary w-10">Submit</button></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className='container mx-auto row text-center my-3'>
        <div className='col-4'>
          <div className='card p-3 '>
            <img className='w-25 p-2 mx-auto' src="./Assets/money.png" alt="Hey" />
            <h4>Affordable Monthly Payments</h4>
          </div>
        </div>
        <div className='col-4'>
          <div className='card p-3 '>
            <img className='w-25 p-2 mx-auto' src="./Assets/overpriced.png" alt="Hey" />
            <h4>Posh Locations</h4>
          </div>
        </div>
        <div className='col-4'>
          <div className='card p-3 '>
            <img className='w-25 p-2 mx-auto' src="./Assets/money.png" alt="Hey" />
            <h4>Zero Down Payments</h4>
          </div>
        </div>
      </div>
      <br />

      {/* Here i created a slider  */}
      <div className='text-center container mx-auto row'>
        <h2>All Types of Property Available</h2>
        <Slider {...settings}>
          <div>
            <img className='w-75 p-2 mx-auto' src="./Assets/Hotels.jpeg" alt="Hey" />
            <h5>Hotels</h5>
          </div>
          <div>
            <img className='w-75 p-2 mx-auto' src="./Assets/Apartments.jpeg" alt="Hey" />
            <h5>Apartments</h5>
          </div>
          <div>
            <img className='w-75 p-2 mx-auto' src="./Assets/Hostels.jpeg" alt="Hey" />
            <h5>Hostels</h5>
          </div>
          <div>
            <img className='w-75 p-2 mx-auto' src="./Assets/Guest_Houses.jpeg" alt="Hey" />
            <h5>Guest Houses</h5>
          </div>
          <div>
            <img className='w-75 p-2 mx-auto' src="./Assets/Villas.jpeg" alt="Hey" />
            <h5>Villas</h5>
          </div>
          <div>
            <img className='w-75 p-2 mx-auto' src="./Assets/Resorts.jpeg" alt="Hey" />
            <h5>Restors</h5>
          </div>

        </Slider>
      </div>
      <br />

      {/* This is the code where i am using dummydata to input data in cards */}
      <div className="container mx-auto row">
        <h2>Recommended Properties in Lucknow</h2>
        <div>
          <div className="row">{displayData()}</div>
        </div>
      </div>
      <br />

      {/* Newsletter */}
      <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter for latest deals</p>
        <div>
          <input type="email" placeholder='Your Email id' />
          <button>Subscribe</button>
        </div>
      </div>

      <br />


      {/* Footer */}
      <div>
        <footer class="bg-dark text-center text-white">
          <div class="text-center p-3">
            This website is created for educational purposes. Please note that the images and data available on this page are not authenticated. <br />
            <a class="footer" href=" ">Homify.com </a>
            © 2023
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;