import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import laptopList from "./dummydata";
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


const Home = () => {

  const navigate = useNavigate();
  const [laptopData] = useState(laptopList);

  const displayData = () => {
    return laptopData.map((laptop) => (
      <div className="col-md-3">
        <div className="card m-2">
          <img src={laptop.image} alt="laptop_image" />
          <div className='card-body'>
            <h3>{laptop.name}</h3>
            <h6>{laptop.address}, {laptop.location}</h6>
            <div className='justify-content-between d-flex'> 
              <h4>&#8377; {laptop.price} </h4>
              <button type="button" className='btn btn-primary btn-sm' onClick={() => navigate("/browser")}>Book Now</button>
            </div>
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
                <span className="input-group-text" id="basic-addon2"><button type="submit" className="btn btn-primary">Submit</button></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className='container mx-auto row text-center my-3'>
        <div className='col-md-4 mb-2'>
          <div className='card p-3 '>
            <img className='w-25 p-2 mx-auto' src="./Assets/money.png" alt="Hey" />
            <h4>Affordable Monthly Payments</h4>
          </div>
        </div>
        <div className='col-md-4 mb-2'>
          <div className='card p-3 '>
            <img className='w-25 p-2 mx-auto' src="./Assets/overpriced.png" alt="Hey" />
            <h4>Posh Locations</h4>
          </div>
        </div>
        <div className='col-md-4 mb-2'>
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
        <div className='row'>
          <Slider {...settings}>
            <div className='col m-2'>
              <img className='m-2 mx-auto' width={250} src="./Assets/Hotels.jpeg" alt="Hey" />
              <h5>Hostels</h5>
            </div>
            <div className='col m-2'>
              <img className='m-2 mx-auto' width={250} src="./Assets/Apartments.jpeg" alt="Hey" />
              <h5>Apartments</h5>
            </div>
            <div className='col m-2'>
              <img className='m-2 mx-auto' width={250} src="./Assets/Hostels.jpeg" alt="Hey" />
              <h5>Flats</h5>
            </div>
            <div className='col m-2'>
              <img className='m-2 mx-auto' width={250} src="./Assets/Guest_Houses.jpeg" alt="Hey" />
              <h5>Guest Houses</h5>
            </div>
            <div className='col m-2'>
              <img className='m-2 mx-auto' width={250} src="./Assets/Villas.jpeg" alt="Hey" />
              <h5>PG</h5>
            </div>
            <div className='col m-2'>
              <img className='m-2 mx-auto' width={250} src="./Assets/Resorts.jpeg" alt="Hey" />
              <h5>Hotels</h5>
            </div>

          </Slider>
        </div>
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
        <Footer/>
      </div>
    </div>
  );
}

export default Home;