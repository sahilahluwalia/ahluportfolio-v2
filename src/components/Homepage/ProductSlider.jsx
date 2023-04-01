import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
//import responsive from './slider-resonsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  specialPurposeProductList,
  powerPressAutomationProductList,
} from "data/productsData";

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

console.log(forHomePowerPress);

const content = [...forHomePowerPress, ...forHomeSpecialPurpose];
// const content = [
//   {
//     image: require("images/portfolio/mining/image_1.jpg"),
//     icon: "flaticon-robot-arm",
//     title: "Inhouse Designing team",
//     description:
//       " Our experienced team of designers and engineers can design and develop custom solutions to meet our clients' unique needs.",
//   },
//   {
//     image: require("images/portfolio/mining/image_4.jpg"),
//     icon: "flaticon-fuel-truck",
//     title: " Experienced professionals",
//     description:
//       "Our extensive portfolio of successful projects across different industries and sectors demonstrates our deep expertise and commitment to quality.",
//   },
//   {
//     image: require("images/portfolio/mining/image_4.jpg"),
//     icon: "flaticon-fuel-truck",
//     title: "Inhouse Electrical & Programming department",
//     description:
//       "Our in-house electrical and programming team ensures that we can quickly and efficiently make any necessary updates or changes to our systems, without relying on external contractors.",
//   },
//   {
//     image: require("images/portfolio/mining/image_3.jpg"),
//     icon: "flaticon-fuel-station",
//     title: "Strong Vendor Network",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page.",
//   },
//   {
//     image: require("images/portfolio/mining/image_2.jpg"),
//     icon: "flaticon-factory-1",
//     title: "Inhouse IIOT team",
//     description:
//       " Our in-house Industrial Internet of Things (IIOT) team can help our clients integrate and leverage emerging technologies to achieve even greater efficiency and productivity.",
//   },

//   {
//     image: require("images/portfolio/mining/image_4.jpg"),
//     icon: "flaticon-fuel-truck",
//     title: "Inhouse Electrical & Programming department",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page.",
//   },

//   {
//     image: require("images/portfolio/mining/image_3.jpg"),
//     icon: "flaticon-fuel-station",
//     title: "Support team functions",
//     description:
//       "Our dedicated support team is available 24/7 to ensure that our clients' systems operate smoothly and efficiently at all times.",
//   },
// ];

const ProductSlider = ({}) => {
  const data = content;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // console.log(content);
  return (
    <>
      <div className=' text-center '>
        <h2 className='mytitle'>Products We cater</h2>
      </div>

      <Slider
        style={{
          paddingBottom: "1rem",
        }}
        {...settings}
        className='img-carousel service-box-4-area  '
      >
        {data.map((item, id) => (
          <div
            className='item wow fadeInUp'
            data-wow-duration='2s'
            data-wow-delay='0.2s'
            key={id}
          >
            <div className='service-box-4 text-center'>
              <Link to={item.link}>
                <div className='service-images m-b15'>
                  <img
                    style={{
                      height: "200px",
                      objectFit: "contain",
                    }}
                    src={item?.image}
                    alt=''
                  />
                  {/* <i className={item.icon}></i> */}
                </div>
                <div className='service-content'>
                  <h6
                    style={{
                      fontWeight: 800,
                      fontSize: "20px",
                    }}
                    // className='title'
                  >
                    {item.name}
                  </h6>

                  {/* sdfgsg */}
                  {/* <p>{item.description}</p> */}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ProductSlider;
