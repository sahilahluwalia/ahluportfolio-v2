import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Testimonial1 from "../element/testimonial1";
import parse from "html-react-parser";
import ChooseAhluEngineers from "components/About/ChooseAhluEngineers";
import {
  storyImage,
  visionImage,
  missionImage,
  bannerImage,
} from "data/imagesData";
var bnr3 = require("./../../images/banner/bnr3.jpg");
var bg1 = require("./../../images/background/bg-video.png");
var bg2 = require("./../../images/background/bg1.jpg");

const timeLineData = [
  {
    year: "1 Year",
    yearNumber: "2017-18",
    title: "Visual Art & Design",
    description:
      "Finally Incorporated as a Private Limited firm to build & integrate technological advanced projects to a next level <span> with a vision in building a systematic portfolio</span> to strengthen Indian Manufactures.",
  },
  {
    year: "1 Year",
    yearNumber: "2018-19",
    title: "Visual Art & Design",
    description:
      "Designed, Build & Successfully <span> commissioned 2 Axis Servo based Transfer system for a Tier 1 Automobile compoennt manufacturer</span> as a made in India product.",
  },
  {
    year: "1 Year",
    yearNumber: "2019-20",
    title: "Visual Art & Design",
    description:
      "Apart from SPMs & Press Automation solutions, <span>started delivering  Assembly machines & Vision System solutions</span> in Electrical industry respectively.",
  },
  {
    year: "2 Years",
    yearNumber: "2020-22",
    title: "Visual Art & Design",
    description:
      "Majorly involved in <span> Complete line setup </span> for Sheetmetal products starting <span> from Raw material to Finished </span> goods for Pharma & Electrical products.",
  },
  {
    year: "1 Year",
    yearNumber: "2022-23",
    title: "Visual Art & Design",
    description:
      "Designed & Successfully commisioned <span> Multi Press Transfer System </span> as a Made in India Product",
  },
];

const About = (props) => {
  return (
    <>
      <div className='page-content bg-white'>
        {/* <div
          className="dlab-bnr-inr overlay-black-middle text-center bg-pt"
          style={{ backgroundImage: "url(" + bnr3 + ")" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry align-m text-center">
              <h1 className="text-white">About us 1</h1>
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>About us 1</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-head text-center">
                <h2 className="title">About Us</h2>
                <div className="dlab-separator bg-primary"></div>
                <p>
                  We are the manufacturers of Special Purpose Machines (SPM) for
                  mass production. We deal with technologies of Servo systems,
                  Hydraulic & Pneumohydraulic systems, Vision Systems, I.I.O.T &
                  Factory Automation and Rejection Systems. We are the
                  manufacturers of Special Purpose Machines (SPM) for mass
                  production. We deal with technologies of Servo systems,
                  Hydraulic & Pneumohydraulic systems, Vision Systems, I.I.O.T &
                  Factory Automation and Rejection Systems.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className='content-block'>
          <div className='section-full content-inner bg-white'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-lg-6 col-md-12 m-b30'>
                  <div className='our-story'>
                    <span>OUR STORY</span>
                    <h2 className='title'>
                      Revolutionizing your mass production with our cutting-edge
                      SPM technology
                      {/* Driving Growth & Innovation in Manufacturing */}
                      {/* <br /> */}
                      {/* <span className="text-primary">since 2017</span> */}
                    </h2>
                    <h4 className='title'>
                      We are the manufacturers of{" "}
                      <span className='text-primary'>
                        Special Purpose Machines (SPM)
                      </span>{" "}
                      and{" "}
                      <span className='text-primary'>
                        Power Press Automation solutions
                      </span>{" "}
                      for mass production. We deal with technologies of Servo
                      systems, Hydraulic & Pneumohydraulic systems, Vision
                      Systems, I.I.O.T & Factory Automation and Rejection
                      systems with customized accuracy as per the requirement of
                      customers.
                    </h4>
                    <p></p>
                    {/* <Link to={"/#"} className="site-button">
                      Read More
                    </Link> */}
                  </div>
                </div>
                <div className='col-lg-6 col-md-12 m-b30 our-story-thum'>
                  <img
                    src={storyImage}
                    style={{
                      height: "800px",
                      objectFit: "cover",
                    }}
                    className='radius-sm'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-md-12 m-b30 our-story-thum'>
                <img
                  style={{
                    height: "700px",
                    objectFit: "cover",
                  }}
                  src={visionImage}
                  className='radius-sm'
                  alt=''
                />
              </div>
              <div className='col-lg-6 col-md-12 m-b30'>
                <div className='our-story'>
                  <span>OUR VISION</span>
                  <h2 className='title'>At Ahlu Engineers,</h2>
                  <h4 className='title'>
                    Our vision is to be the leading provider of{" "}
                    <span className='text-primary'>
                      cutting-edge manufacturing automation solutions
                    </span>{" "}
                    that drive growth and success for our clients
                  </h4>
                  <p>
                    <ul>
                      <li>
                        To empower our clients to stay ahead of the competition
                        and achieve long-term success
                      </li>
                      <li>
                        To drive growth and success for our clients by staying
                        at the forefront of technological advances
                      </li>
                      <li>
                        To be recognized as a trusted partner and industry
                        leader
                      </li>
                      <li>
                        To develop new technologies and techniques that push the
                        boundaries of what's possible
                      </li>
                      <li>
                        To focus on innovation, quality, and customer
                        satisfaction
                      </li>
                      <li>
                        To build a brighter future for the manufacturing
                        industry.
                      </li>
                    </ul>
                  </p>
                  {/* <Link to={"/#"} className="site-button">
                      Read More
                    </Link> */}
                </div>
              </div>
            </div>
          </div>

          <div
            id='mission'
            className='section-full content-inner bg-white video-section'

            // style={{ backgroundImage: "url(" + bg1 + ")" }}
          >
            <div className='container '>
              <div className='section-content'>
                <div className='row d-flex'>
                  <div className='col-lg-6 col-md-12 m-b30 align-self-center video-infobx'>
                    <div className='content-bx1'>
                      <span className='titlespan'>OUR MISSION</span>

                      <p className='m-b30'>
                        To equip shop floor teams with{" "}
                        <span className='strong-text'>
                          advanced automation technology{" "}
                        </span>
                        to compete globally. We design innovative solutions that{" "}
                        <span className='strong-text'> boost efficiency</span>,{" "}
                        <span className='strong-text'>cut costs</span>, and
                        <span className='strong-text'> improve safety.</span>
                      </p>
                      <h2 className='m-b15 title'>
                        A company involved in
                        <br />
                        <span className='text-primary'>
                          customized manufacturing
                        </span>{" "}
                        and
                        <span className='text-primary'>
                          {" "}
                          industrial automation solutions
                        </span>{" "}
                        provider.
                      </h2>
                      {/* <img
                        src={require("../../images/sign.png")}
                        width="200"
                        alt=""
                      />
                      <h4 className="m-b0">Tejendra Singh Ahluwalia</h4>
                      <span className="font-14">Company Director</span> */}
                      <img
                        src={require("../../images/sign.png")}
                        width='200'
                        alt=''
                      />
                      <h4 className='m-b0'>Satyam Ahluwalia</h4>
                      <span className='font-14'>Project Manager</span>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-12 m-b30'>
                    <div className='video-bx'>
                      <img src={missionImage} alt='Signature' />
                      {/* <div className='video-play-icon'>
                        <a
                          href='https://www.youtube.com/watch?v=_FRZVScwggM'
                          className='popup-youtube video bg-primary'
                        >
                          <i className='fa fa-play'></i>
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id='whyus'
            className='section-full bg-white content-inner-2'

            // style={{ backgroundImage: "url(" + bg + ")" }}
          >
            <div className='container'>
              <div className='section-head text-black text-center'>
                <h2 className='title'>Why to choose Ahlu Engineers</h2>
                <p>
                  We offer a comprehensive range of innovative and high-quality
                  engineering solutions to meet the unique needs of our clients,
                  backed by our commitment to innovation, quality, and customer
                  satisfaction.
                </p>
              </div>
              <ChooseAhluEngineers />
            </div>
          </div>
          {/* <div
            className="section-full content-inner bg-white video-section"
            // style={{ backgroundImage: "url(" + bg1 + ")" }}
          > */}
          <div
            className='container '
            style={{
              marginTop: "50px",
              paddingBottom: "50px",
            }}
          >
            <div className='section-head text-black text-center'>
              <h2 className='title'>Past Timeline</h2>
              {/* <p>Innovating Manufacuring since 2017</p> */}
            </div>
            <div className='main-timeline'>
              {timeLineData.reverse().map((item, index) => {
                return (
                  <div className='timeline text-black'>
                    <div className='icon'></div>
                    <div className='date-content'>
                      <div className='date-outer'>
                        <span className='date'>
                          <span className='month'>{item.year}</span>
                          {/* <span className="month">{item.yearNumber}</span> */}
                          <span className='year'>{item.yearNumber}</span>
                        </span>
                      </div>
                    </div>
                    <div className='timeline-content'>
                      {/* <h5 className="title">{item.title}</h5> */}
                      {parse(item.description)}
                      {/* <p className="description">{item.description}</p> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* </div> */}

          {/* <div
            className="section-full content-inner overlay-black-dark bg-img-fix"
            style={{ backgroundImage: "url(" + bg2 + ")" }}
          >
            <div className="container">
              <div className="section-content text-center text-white">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                    <div className="counter-style-5">
                      <div className="">
                        <span className="counter">6810</span>
                      </div>
                      <span className="counter-text">Passionate Employee</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                    <div className="counter-style-5">
                      <div className="">
                        <span className="counter">4060</span>
                      </div>
                      <span className="counter-text">Modern Factory</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                    <div className="counter-style-5">
                      <div className="">
                        <span className="counter">3164</span>
                      </div>
                      <span className="counter-text">Factory in Worldwide</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                    <div className="counter-style-5">
                      <div className="">
                        <span className="counter">1852</span>
                      </div>
                      <span className="counter-text">International Awards</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="text-center bg-gray content-inner">
            <div className="container">
              <div className="section-head text-black text-center">
                <h2 className="title">Our Vision</h2>

                <p>
                  At Ahlu Engineers, we strive to be the leading provider of
                  cutting-edge manufacturing solutions that exceed the
                  expectations of our clients. Our vision is to be at the
                  forefront of technological advancements, while never losing
                  sight of the importance of delivering reliable and efficient
                  products that meet the specific needs of each customer. We are
                  committed to continuous improvement, and we believe that by
                  staying ahead of the curve in terms of technology and industry
                  best practices, we can help our clients achieve success and
                  drive growth in their respective fields.
                </p>
              </div>
              <div className="text-black text-center our-story"></div>
              {/* <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="dlab-box m-b30 dlab-team1">
                    <div className="dlab-media">
                      <Link to={"#"}>
                        <img
                          width="358"
                          height="460"
                          alt=""
                          src={require("../../images/our-team/pic1.jpg")}
                        />
                      </Link>
                    </div>
                    <div className="dlab-info">
                      <h4 className="dlab-title">
                        <Link to={"#"}>Nashid Martines</Link>
                      </h4>
                      <span className="dlab-position">Director</span>
                      <ul className="dlab-social-icon dez-border">
                        <li>
                          <Link to={"#"} className="fa fa-facebook"></Link>
                        </li>
                        <li>
                          <Link to={"#"} className="fa fa-twitter"></Link>
                        </li>
                        <li>
                          <Link to={"#"} className="fa fa-linkedin"></Link>
                        </li>
                        <li>
                          <Link to={"#"} className="fa fa-pinterest"></Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="dlab-box m-b30 dlab-team1">
                    <div className="dlab-media">
                      <Link to={"#"}>
                        <img
                          width="358"
                          height="460"
                          alt=""
                          src={require("../../images/our-team/pic2.jpg")}
                        />
                      </Link>
                    </div>
                    <div className="dlab-info">
                      <h4 className="dlab-title">
                        <Link to={"#"}>Konne Backfield</Link>
                      </h4>
                      <span className="dlab-position">Designer</span>
                      <ul className="dlab-social-icon dez-border">
                        <li>
                          <Link to={"#"} className="fa fa-facebook"></Link>
                        </li>
                        <li>
                          <Link to={"#"} className="fa fa-twitter"></Link>
                        </li>
                        <li>
                          <Link to={"#"} className="fa fa-linkedin"></Link>
                        </li>
                        <li>
                          <Link to={"#"} className="fa fa-pinterest"></Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="dlab-box m-b30 dlab-team1">
                    <div className="dlab-media">
                      <Link to={"#"}>
                        <img
                          width="358"
                          height="460"
                          alt=""
                          src={require("../../images/our-team/pic3.jpg")}
                        />
                      </Link>
                    </div>
                    <div className="dlab-info">
                      <h4 className="dlab-title">
                        <Link to={"#"}>Hackson Willingham</Link>
                      </h4>
                      <span className="dlab-position">Developer</span>
                      <ul className="dlab-social-icon dez-border">
                        <li>
                          <Link to={"#"} className="fa fa-facebook"></Link>
                        </li>
                        <li>
                          <Link to={"#"} className="fa fa-twitter"></Link>
                        </li>
                        <li>
                          <Link to={"#"} className="fa fa-linkedin"></Link>
                        </li>
                        <li>
                          <Link to={"#"} className="fa fa-pinterest"></Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="dlab-box m-b30 dlab-team1">
                    <div className="dlab-media">
                      <Link to={"#"}>
                        <img
                          width="358"
                          height="460"
                          alt=""
                          src={require("../../images/our-team/pic4.jpg")}
                        />
                      </Link>
                    </div>
                    <div className="dlab-info">
                      <h4 className="dlab-title">
                        <Link to={"#"}>Konne Backfield</Link>
                      </h4>
                      <span className="dlab-position">Manager</span>
                      <ul className="dlab-social-icon dez-border">
                        <li>
                          <Link to={"#"} className="fa fa-facebook"></Link>
                        </li>
                        <li>
                          <Link to={"#"} className="fa fa-twitter"></Link>
                        </li>
                        <li>
                          <Link to={"#"} className="fa fa-linkedin"></Link>
                        </li>
                        <li>
                          <Link to={"#"} className="fa fa-pinterest"></Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> */}
          {/* </div> */}
          {/* </div>  */}
          {/* <div className="section-full content-inner-2 bg-white">
            <div className="container">
              <div className="section-head text-black text-center">
                <h2 className="title">Pricing Table</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry has been the industry's standard dummy
                  text ever since the been when an unknown printer.
                </p>
              </div>
              <div className="section-content box-sort-in button-example pricingtable-style2-area m-t80">
                <div className="pricingtable-row">
                  <div className="row max-w1000 m-auto">
                    <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                      <div className="pricingtable-wrapper style2 bg-white">
                        <div className="pricingtable-inner">
                          <div className="pricingtable-price">
                            <h4 className="font-weight-300 m-t10 m-b0">
                              Basic
                            </h4>
                            <div className="pricingtable-bx">
                              <span>Free</span>
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet adipiscing elit sed do
                            eiusmod tempors labore et dolore magna siad enim
                            aliqua
                          </p>
                          <div className="m-t20">
                            <Link to={"#"} className="site-button radius-xl">
                              <span className="p-lr30">Sign Up</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                      <div className="pricingtable-wrapper style2 bg-primary text-white active">
                        <div className="pricingtable-inner">
                          <div className="pricingtable-price">
                            <h4 className="font-weight-300 m-t10 m-b0">
                              Professional
                            </h4>
                            <div className="pricingtable-bx">
                              $ <span>29</span> / Per Installation
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet adipiscing elit sed do
                            eiusmod tempors labore et dolore magna siad enim
                            aliqua
                          </p>
                          <div className="m-t20">
                            <Link
                              to={"#"}
                              className="site-button white radius-xl"
                            >
                              <span className="p-lr30">Sign Up</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                      <div className="pricingtable-wrapper style2 bg-white">
                        <div className="pricingtable-inner">
                          <div className="pricingtable-price">
                            <h4 className="font-weight-300 m-t10 m-b0">
                              Extended
                            </h4>
                            <div className="pricingtable-bx">
                              $ <span>29</span> / Per Installation
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet adipiscing elit sed do
                            eiusmod tempors labore et dolore magna siad enim
                            aliqua
                          </p>
                          <div className="m-t20">
                            <Link to={"#"} className="site-button radius-xl">
                              <span className="p-lr30">Sign Up</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-full content-inner-2 bg-gray">
            <div className="container">
              <div className="section-head text-black text-center">
                <h2 className="title">Happy Customers Said</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry has been the industry's standard dummy
                  text ever since the been when an unknown printer.
                </p>
              </div>
              <Testimonial1 />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
