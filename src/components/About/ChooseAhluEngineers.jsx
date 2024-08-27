'use client'

import React from "react";
import Link from "next/link";
import Slider from "react-slick";
//import responsive from './slider-resonsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import iotPic from "../../asserts/About Us website related/1.jpg";
import secondPic from "../../asserts/About Us website related/2.png";
import thirdPic from "../../asserts/About Us website related/3.png";
import fourthPic from "../../asserts/About Us website related/4.png";
import fifthPic from "../../asserts/About Us website related/5.png";
import sixthPic from "../../asserts/About Us website related/6.png";
import seventhPic from "../../asserts/About Us website related/7.png";
import eighthPic from "../../asserts/About Us website related/8.png";
import ninthPic from "../../asserts/About Us website related/9.png";
const contentMaster = [
  {
    image: secondPic,
    icon: "flaticon-robot-arm",
    title: "Custom Mechanical and Electrical Solutions",
    description:
      " Our in-house team of experienced designers and engineers specialize in creating customized solutions that meet the unique needs of our clients.",
  },
  {
    image: fifthPic,
    icon: "flaticon-fuel-truck",
    title: "Extensive Portfolio of Successful Projects",
    description:
      " With a diverse portfolio of successful projects across various industries and sectors, our experienced professionals demonstrate deep expertise and a commitment to delivering high-quality results.",
  },
  {
    image: ninthPic,
    icon: "flaticon-fuel-truck",
    title: " Efficient Electrical and Programming Department",
    description:
      " Our in-house electrical and programming team allows for immediate updates and changes to our systems without relying on external contractors, ensuring efficient and seamless operations.",
  },
  {
    image: eighthPic,
    icon: "flaticon-fuel-station",
    title: "Strong Vendor Network for High-Quality Materials",
    description:
      "Our extensive network of trusted vendors and suppliers allows us to source high-quality materials and components at competitive prices, ensuring accuracy in building and fabrication.",
  },
  {
    image: iotPic,
    icon: "flaticon-factory-1",
    title: "In-House IIOT Team for Future Scope Integration",
    description:
      "Our in-house Industrial Internet of Things (IIOT) team can help our clients integrate and leverage emerging technologies for greater efficiency and productivity.",
  },

  {
    image: thirdPic,
    icon: "flaticon-fuel-truck",
    title: "Dedicated 24/7 Support Team",
    description:
      "Our dedicated support team functions throughout shifts to ensure our clients' systems operate smoothly and efficiently, minimizing downtime and maximizing productivity.",
  },

  {
    image: seventhPic,
    icon: "flaticon-fuel-truck",
    title: "Commitment to Quality and Innovation",
    description:
      "Our values of innovation, responsibility, attention to detail, and dignity guide everything we do, ensuring we always deliver the highest quality solutions and services to our clients.",
  },
  {
    image: sixthPic,
    icon: "flaticon-fuel-truck",
    title: "Cutting-Edge Technologies for Greater ROI",
    description:
      "Our focus on newer, futuristic technologies with cognitive and intelligent capabilities helps our clients uncover greater ROI from their manpower and technological investments, staying ahead of the curve for greater success.",
  },

  {
    image: fourthPic,
    icon: "flaticon-fuel-station",
    title: "Support team functions",
    description:
      "Our dedicated support team is available 24/7 to ensure that our clients' systems operate smoothly and efficiently at all times.",
  },
];
const randomizeArray = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

const content = randomizeArray(contentMaster);

const ChooseAhluEngineers = ({}) => {
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
  return (
    <>
      <Slider {...settings} className='img-carousel service-box-4-area  m-b30'>
        {data.map((item, id) => (
          <div
            className='item wow fadeInUp'
            data-wow-duration='2s'
            data-wow-delay='0.2s'
          >
            <div className='service-box-4 text-center'>
              <div className='service-images m-b15'>
                <img
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "contain",
                  }}
                  src={item?.image}
                  alt=''
                />
                {/* <i class={item.icon}></i> */}
              </div>
              <div className='service-content'>
                <h6 className='title'>
                  <Link href='/services-details'>{item.title}</Link>
                </h6>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ChooseAhluEngineers;
