import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sandharImage } from "data/imagesData";
const Testimonial1_content = [
  {
    image: sandharImage,
    author: "Mr. Vipin Rawat",
    designation: "Unit Head",
    description: `Our System is working satisfactorily and running fine. We are now very confident on our die and our Transfer system.
    We are totally satisfied with their technical commitments and have faith on their financial commitments. We not only trust his commitments but also have faith on their efforts for its fulfilment.
    We will definitely take services from them in future.`,
    location:'Sandhar Components Behrampur, Gurgaon.'
  },
];

class Testmonial6 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
    };
    return (
      <>
        <Slider
          {...settings}
          className='client-carousel dots-theme dots-theme primary dots-long d-primary btn-style-2 btn-color '
        >
          {Testimonial1_content.map((item, id) => (
            <div className='item'>
              <div className='testimonial-1'>
                <div>
                  <img
                    src={item.image}
                    style={{
                      margin: "auto",
                    }}
                    width='300'
                    height='300'
                    alt=''
                  />
                </div>
                {/* <div className='testimonial-pic quote-left radius shadow'>
                  <img src={item.image} width='100' height='100' alt='' />
                </div> */}

                <div className='testimonial-text '>
                  <p>{item.description}</p>
                </div>

                <div className='testimonial-detail '>
                  <span className='testimonial-position '>
                    {item.designation}
                  </span>
                  <strong className='testimonial-name'>{item.author}</strong>
                  <strong className='testimonial-position '>{item.location}</strong>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </>
    );
  }
}
export default Testmonial6;
