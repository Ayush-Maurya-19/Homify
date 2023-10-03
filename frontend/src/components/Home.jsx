import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };

const Home = () => {

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
      <br /><br />
      <div className='text-center'>
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
        </Slider>
      </div>
      <br /><br />
      <div>
      <div className='container mx-auto row  my-3'>
      <h2>Recommended Properties in Lucknow</h2>
        <div className='col-3'>
          <div className='card p-3'>
            <img className='w-75 mx-auto' src="./Assets/Apartments1.webp" alt="Hey" />
            <div className='px-4'>
            <h4>Lucknow</h4>
            <h4>&#8377;5000</h4>
          </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='card p-3 '>
          <img className='w-75 mx-auto' src="./Assets/Apartments2.webp" alt="Hey" />
            <h4>Posh Locations</h4>
          </div>
        </div>
        <div className='col-3'>
          <div className='card p-3 '>
          <img className='w-25 p-2 mx-auto' src="./Assets/money.png" alt="Hey" />
            <h4>Zero Down Payments</h4>
          </div>
        </div>
        <div className='col-3'>
          <div className='card p-3 '>
          <img className='w-25 p-2 mx-auto' src="./Assets/money.png" alt="Hey" />
            <h4>Zero Down Payments</h4>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
