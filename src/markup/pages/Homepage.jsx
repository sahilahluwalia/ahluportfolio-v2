import React, { Component } from "react";
import { Link } from "react-router-dom";

import LogoSlider from "../../components/Homepage/LogoSlider";
import BlogSlider1 from "../element/blogSlider1";
import { blogContent3, servicesContent4 } from "../element/SliderContent";
import ServicesSlider1 from "../element/servicesSlider1";
import Testimonial12 from "../element/testimonial12";
//import HomeSlider from '../element/homeslider1'
import { Parallax } from "react-parallax";
import CounterSection from "../element/counterSection";
import Team1 from "../element/team1";
import ServicesSlider4 from "../element/servicesSlider4";
import "../../css/plugins.css";
import "../../css/style.css";
import "../../css/skin/skin-1.css";
import "../../css/templete.min.css";
import ScrollToTop from "../element/scrollToTop";
import bg from "asserts/bg.jpg";
import { Accordion } from "react-bootstrap";
import { companyDetails } from "data/websiteData";
import ProductSlider from "components/Homepage/ProductSlider";
import Testmonial from "components/Homepage/Testmonial";

const faqContent = [
  {
    question: "1. Innovation need",
    answer:
      "We constantly strive to incorporate new technology and develop innovative solutions for our clients.",
  },
  {
    question: "2. Responsibility concern",
    answer:
      "We hold ourselves accountable for our actions and take ownership of our work to ensure the best possible outcomes for our clients.",
  },
  {
    question: "3. Attention to detail ability",
    answer:
      "We are committed to providing the highest level of quality and precision in our work, with a focus on meeting and exceeding our clients' expectations.",
  },
  {
    question: "4. Dignity with Time",
    answer:
      "We value respect, trust, and care for our clients, employees, and partners, and aim to build lasting relationships based on mutual respect and trust.",
  },
  {
    question: "5. Customer focus/Accountability",
    answer:
      "Our clients are at the heart of everything we do, and we work closely with them to ensure that we fully understand their needs and provide solutions that exceed their expectations.",
  },
  {
    question: "6. Continuous improvement",
    answer:
      "We believe in constantly improving our processes, technologies, and services to provide the best possible solutions for our clients and stay ahead of the competition.",
  },
  {
    question: "7. Teamwork values",
    answer:
      "We work collaboratively with our clients, partners, and employees to achieve shared goals and build a strong, supportive community.",
  },
];

// const bg = require("../../images/background/bg2.jpg");
const bg2 = require("../../images/background/bg4.jpg");
const bg3 = require("../../images/background/map-bg.png");
const bg4 = require("../../images/main-slider/slide8.jpg");

const whyToAutomate = [
  {
    name: "Data Collection and Analysis",
    description:
      "We provides real-time data on production, enabling data-driven decisions to optimize processes.",
  },
  {
    name: "Increased Efficiency",
    description:
      "We improves manufacturing efficiency by reducing cycle times, minimizing downtime, and increasing throughput.",
  },
  {
    name: "Scalability",
    description:
      "Automated systems can scale production to meet changing demands, adapting to market and customer changes",
  },
  {
    name: "Competitive Advantage",
    description:
      "We gives companies a competitive edge by improving efficiency, reducing costs.",
  },
];

const Homepage = () => {
  return (
    <div className='skin-1'>
      <Parallax bgImage={bg} strength={20}>
        <div
          style={{
            padding: "5rem 0rem",
          }}
          className='hero-section home-bnr1'
        >
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-12 col-md-12 '>
                <div className='hero-content'>
                  <h1 className='title'>
                    Transform Your Manufacturing with Ahlu Engineers' Custom
                    Machines & Automation Solutions
                  </h1>

                  <div className='description'>
                    "Automation is cost cutting by tightening the corners and
                    not cutting them"
                  </div>

                  <div >
                    <Link className='site-button outline outline-2 white m-r15 radius-xl' to='products#products'>Products</Link>
                    <Link className='site-button outline outline-2 white m-r15 radius-xl' to='about'>About Us</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
      <ProductSlider />
      <div className='section-full' id='choose-us'>
        <div className='row m-lr0'>
          <div
            // style={{
            //   padding: "30px 30px 0px 50px",
            // }}
            className='col-xl-6 col-lg-12 p-lr0 d-flex dis-tbl latest-project-info style1 bg-secondry wow fadeInLeft'
            data-wow-duration='2s'
            data-wow-delay='0.3s'
          >
            <div className='align-self-center text-white'>
              <div className='section-head text-white'>
                <h2 className='title'>Why choose us</h2>
                <p>
                  Choose us to experience unparalleled expertise, innovative
                  solutions, and exceptional service in the world of
                  manufacturing automation.
                </p>
              </div>
              <ul className='list-check white list-2 rounded border'>
                {whyToAutomate.map((item, index) => {
                  return (
                    <li key={index}>
                      <h4 className='m-b10'>{item.name}</h4>
                      <p
                        style={{
                          margin: "0px",
                        }}
                      >
                        {item.description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div
            className='col-xl-6 col-lg-12 p-lr0 wow fadeInRight'
            data-wow-duration='2s'
            data-wow-delay='0.3s'
          >
            <div className='row spno'>
              <div className='col-lg-6 col-md-6 col-sm-6 bg-primary align-items-center d-flex'>
                <div className='dlab-services-box text-white'>
                  <h2 className='service-year'>
                    7<small>years</small>
                  </h2>
                  <h3 className='title m-b0'>
                    We are Building the Future of Manufacturing
                  </h3>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6'>
                <img
                  className='img-cover'
                  src={require("../../images/our-work/car/pic3.jpg")}
                  alt=''
                />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6'>
                <div className='video-bx radius-no h100'>
                  <img
                    src={require("../../images/our-work/car/pic4.jpg")}
                    alt='Signature'
                    className='img-cover'
                  />
                  <div className='video-play-icon'>
                    <Link
                      to='https://www.youtube.com/channel/UCPhDoFi0nlojklbst-BT-LA'
                      target='_blank'
                      className='popup-youtube video bg-primary'
                    >
                      <i className='fa fa-play'></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 pt-2 col-sm-6 bg-secondry align-items-center d-flex'>
                <div className='dlab-services-box text-white'>
                  <h3 className='title text-white m-b15'>
                    {/* suggest title for this section */}
                    Think Smart, Think Ahlu
                  </h3>
                  <p>
                    Driving Growth and Innovation for Your Manufacturing
                    Business
                  </p>
                  <Link
                    to={{ pathname: "/about", hash: "#whyus" }}
                    className='site-button btnhover19 outline white outline-2'
                  >
                    WHY US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-3'></div>
      <div className='page-content bg-white'>
        <div className='content-block'>
          <div
            className='section-full bg-img-fix content-inner-2 overlay-black-dark contact-action style2'
            style={{ backgroundImage: "url(" + bg + ")" }}
          >
            <div className='container'>
              <div className='row relative'>
                <div
                  className='col-md-12 col-lg-8 wow fadeInLeft'
                  data-wow-duration='2s'
                  data-wow-delay='0.2s'
                >
                  <div className='contact-no-area'>
                    <h2 className='title'>
                      A company involved in SPM and Press Automation Solutions
                    </h2>
                    <div className='contact-no'>
                      <div className='contact-left'>
                        <h3 className='no'>
                          <i className='sl-call-in'></i>
                          {companyDetails.phone.trim()}
                        </h3>
                      </div>
                      <div className='contact-right'>
                        <Link
                          to='/quote#quote'
                          className='site-button appointment-btn btnhover13'
                        >
                          Get Free Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='col-md-12 col-lg-4 contact-img-bx wow fadeInRight relative'
                  data-wow-duration='2s'
                  data-wow-delay='0.2s'
                >
                  <img src={require("../../images/pic1.png")} alt='' />
                </div>
              </div>
            </div>
          </div>

          <div className='content-block'>
            <div className='section-full overlay-white-middle content-inner'>
              <div className='container'>
                <div className='section-head text-black text-center'>
                  <h3 className='title'>Values We Hold</h3>
                  <p>
                    Our connected stream of businesses are an extension of our
                    family, and as such, we hold ourselves to the highest
                    ethical standards and common values across all endeavors.
                  </p>
                </div>
                <div className='row'>
                  <div className='col-lg-6 col-md-12 m-b30'>
                    <div className='faq-video'>
                      <Link
                        className='play-btn popup-youtube'
                        to='/https://www.youtube.com/watch?v=_FRZVScwggM'
                      >
                        <i className='flaticon-play-button text-white'></i>
                      </Link>
                      <img
                        src={require("../../images/about/pic5.jpg")}
                        alt=''
                        className='img-cover radius-sm'
                      />
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-12 m-b30'>
                    {/* <Accordion className="accordian dlab-accordion faq-1 box-sort-in m-b30 faq" defaultActiveKey='-1'>
                                            {
                                                faqContent.map((faq, i) =>(
													<div className="panel">
														<div  className="acod-head" >
															<h6 className="acod-title">
																<Accordion.Toggle as={Link} eventKey={`${i}`}
																	className={`${ activeDefault === i ? '' : 'collapsed' }`}
																	onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}
																>
																	{faq.question} 
																</Accordion.Toggle>
															</h6>
														</div>  		
														<Accordion.Collapse className='acod-body' eventKey={`${i}`}>
															<div className='acod-content'>{faq.answer}</div>
														</Accordion.Collapse>
													</div> 													
                                                ))
                                            }
                                        </Accordion>*/}
                    <Accordion className='dlab-accordion faq-1 box-sort-in m-b30 faq'>
                      {faqContent.map((faq, i) => (
                        <div className='panel'>
                          <Accordion.Item eventKey={`${i}`}>
                            <Accordion.Header as='h6'>
                              {faq.question}
                            </Accordion.Header>
                            <Accordion.Body eventKey={`${i}`}>
                              <div>{faq.answer}</div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </div>
                      ))}
                    </Accordion>
                  </div>
                </div>

                {/* <div className='row'>
                    <div className='col-lg-4 col-md-6 m-b30'>
                      <div className='icon-bx-wraper bx-style-1 bg-white p-a30 left'>
                        <div className='icon-md text-primary m-b20'>
                          <Link to='#' className='icon-cell'>
                            <i className='flaticon-factory'></i>
                          </Link>
                        </div>
                        <div className='icon-content'>
                          <h5 className='dlab-tilte'>Make it Simple</h5>
                          <p>
                            Web design aorem apsum dolor dolore magna aliquam
                            erat volutpat.Claritas est etiam processus.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6 m-b30'>
                      <div className='icon-bx-wraper bx-style-1 bg-white p-a30 left'>
                        <div className='icon-md text-primary m-b20'>
                          <Link to='#' className='icon-cell'>
                            <i className='flaticon-worker'></i>
                          </Link>
                        </div>
                        <div className='icon-content'>
                          <h5 className='dlab-tilte'>Unique design</h5>
                          <p>
                            Web design aorem apsum dolor dolore magna aliquam
                            erat volutpat.Claritas est etiam processus.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-12 m-b30'>
                      <div className='icon-bx-wraper bx-style-1 bg-white p-a30 left'>
                        <div className='icon-md text-primary m-b20'>
                          <Link to='#' className='icon-cell'>
                            <i className='flaticon-settings'></i>
                          </Link>
                        </div>
                        <div className='icon-content'>
                          <h5 className='dlab-tilte'>True Responsiveness</h5>
                          <p>
                            Web design aorem apsum dolor dolore magna aliquam
                            erat volutpat.Claritas est etiam processus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
              </div>
            </div>
          </div>

          <div className='section-full bg-gray content-inner-2'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='sort-title clearfix text-center'>
                    <h4>Our Testmonials</h4>
                  </div>
                </div>
              </div>
              <div className='section-content'>
                <Testmonial />
              </div>
            </div>
          </div>

          <div
            className='section-full dlab-we-find bg-img-fix p-t20 p-b20 bg-white wow fadeIn'
            data-wow-duration='0.51s'
            data-wow-delay='0.1s'
          >
            <div className='container'>
              <div className='section-content'>
                <LogoSlider hideBorder />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTop className='icon-up' />
    </div>
  );
};
export default Homepage;
