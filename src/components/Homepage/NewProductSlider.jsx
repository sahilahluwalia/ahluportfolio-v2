import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
//import responsive from './slider-resonsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  specialPurposeProductList,
  powerPressAutomationProductList,
} from "data/productsData";
import parse from "html-react-parser";

// add products/power-press-automation/ to every item.link
const forHomePowerPress = powerPressAutomationProductList.map((item) => {
  return {
    ...item,
    link: `/products/power-press-automation/${item.link}`,
  };
});
const forHomeSpecialPurpose = specialPurposeProductList.map((item) => {
  return {
    ...item,
    link: `/products/special-purpose-machines/${item.link}`,
  };
});

function fisherYates(array) {
  var count = array.length,
    randomnumber,
    temp;
  while (count) {
    randomnumber = (Math.random() * count--) | 0;
    temp = array[count];
    array[count] = array[randomnumber];
    array[randomnumber] = temp;
  }
  return array;
}

// console.log(forHomePowerPress);

const content = fisherYates([...forHomePowerPress, ...forHomeSpecialPurpose]);
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
        <Slider {...settings} className='about-ser-carousel btn-style-1'>
          {content.map((item, id) => {
            return (
              <div
                style={{
                  display: "flex",
                  backgroundColor: "red",
                }}
                className='item wow fadeInUp '
                data-wow-duration='2s'
                data-wow-delay='0.3s'
              >
                <div className='dlab-box service-media-bx'>
                  <div className='dlab-media dlab-img-effect zoom'>
                    <Link to={item.link}>
                      <img
                        style={{
                          height: "400px",
                          // width: "350px",
                          objectFit: item.cover ? "cover" : "contain",
                        }}
                        src={item.image}
                        alt=''
                      />
                    </Link>
                  </div>
                  <div className='dlab-info text-center'>
                    <h2
                      style={{
                        height: "50px",
                      }}
                      className='dlab-title'
                    >
                      <Link to={item.link}>{parse(item.name)}</Link>
                    </h2>
                    {/* <p>{item.description}</p> */}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </>
    );
  }
}
export default ServicesSlider1;
