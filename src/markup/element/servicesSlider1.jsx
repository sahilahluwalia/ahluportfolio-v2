import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
//import responsive from './slider-resonsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ServicesSlider1 extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <>
        <Slider {...settings} className="about-ser-carousel btn-style-1">
          {this.props.data.map((item, id) => (
            <div
              className="item wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="dlab-box service-media-bx">
                <div className="dlab-media dlab-img-effect zoom">
                  <Link to="/services-details">
                    <img src={item.image} alt="" />
                  </Link>
                </div>
                <div className="dlab-info text-center">
                  <h2 className="dlab-title">
                    <Link to="/services-details">{item.serviceName}</Link>
                  </h2>
                  <p>{item.description}</p>
                  <Link
                    to="/services-details"
                    className="site-button btnhover15"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </>
    );
  }
}
export default ServicesSlider1;
