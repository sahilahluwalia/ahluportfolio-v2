import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Footer1 from "../layout/footer";
import Footer2 from "../layout/footer2";
import Footer3 from "../layout/footer3";
import Footer4 from "../layout/footer4";
import Footer5 from "../layout/footer5";
import Footer6 from "../layout/footer6";
import Footer7 from "../layout/footer7";
import Footer8 from "../layout/footer8";
import Footer9 from "../layout/footer9";
import Footer10 from "../layout/footer10";
import Footer11 from "../layout/footer11";
import Footer12 from "../layout/footer12";
import Footer13 from "../layout/footer13";
import Footer14 from "../layout/footer14";
import Footer15 from "../layout/footer15";
import FooterDemo from "../layout/footerdemo";
import ClientSlider1 from "../element/clientSlider1";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import BlogSlider1 from "../element/blogSlider1";
import { blogContent3, servicesContent4 } from "../element/SliderContent";
import ServicesSlider1 from "../element/servicesSlider1";
import Testimonial12 from "../element/testimonial12";
//import HomeSlider from '../element/homeslider1'
import { Parallax } from "react-parallax";
import CounterSection from "../element/counterSection";
import Team1 from "../element/team1";

import "../../css/plugins.css";
import "../../css/style.css";
import "../../css/skin/skin-1.css";
import "../../css/templete.min.css";
import ScrollToTop from "../element/scrollToTop";

const bg = require("../../images/background/bg2.jpg");
const bg2 = require("../../images/background/bg4.jpg");
const bg3 = require("../../images/background/map-bg.png");
const bg4 = require("../../images/main-slider/slide8.jpg");

class Homepage extends Component {
  render() {
    return (
      <div className="skin-1">
        <Header />
        <Parallax bgImage={bg4} strength={200}>
          <div className="hero-section pt-50 home-bnr1">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="hero-content">
                    <h1 className="title">we are industry factory solution</h1>
                    <div className="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the.
                    </div>
                    <div className="buttons">
                      <Link to={"#"}>Read More</Link>
                      <Link to={"#"}>About Us</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <img
                    src={require("../../images/main-slider/slide7.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Parallax>
        <div className="page-content bg-white">
          <div className="content-block">
            <div className="section-full bg-gray content-inner about-carousel-ser">
              <div className="container">
                <div className="section-head text-center">
                  <h2 className="title">
                    Why Customer Love To <br />
                    <span className="text-primary">Choose Us</span>
                  </h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    typesetting industry has been the industry's standard dummy
                    text ever since the been when an unknown printer.
                  </p>
                </div>

                {/* <ServicesSlider1 slidesToShow={3} data={servicesContent4} /> */}
              </div>
            </div>

            <div
              className="section-full bg-img-fix content-inner-2 overlay-black-dark contact-action style2"
              style={{ backgroundImage: "url(" + bg + ")" }}
            >
              <div className="container">
                <div className="row relative">
                  <div
                    className="col-md-12 col-lg-8 wow fadeInLeft"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    <div className="contact-no-area">
                      <h2 className="title">
                        A company involved in service, maintenance
                      </h2>
                      <div className="contact-no">
                        <div className="contact-left">
                          <h3 className="no">
                            <i className="sl-call-in"></i>123-456-7890
                          </h3>
                        </div>
                        <div className="contact-right">
                          <Link
                            to="/contact-4"
                            className="site-button appointment-btn btnhover13"
                          >
                            Get Appointment
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-12 col-lg-4 contact-img-bx wow fadeInRight relative"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    <img src={require("../../images/pic1.png")} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="section-full bg-gray content-inner">
              <div className="container">
                <div className="section-head text-center">
                  <h2 className="title"> Our Services</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    typesetting industry has been the industry's standard dummy
                    text ever since the been when an unknown printer.
                  </p>
                </div>
                <div className="section-content row">
                  <div
                    className="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    <div className="icon-bx-wraper" data-name="01">
                      <div className="icon-lg">
                        <Link to="#" className="icon-cell">
                          <i className="flaticon-robot-arm"></i>
                        </Link>
                      </div>
                      <div className="icon-content">
                        <h2 className="dlab-tilte">Mechanical Works</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon-bx-wraper" data-name="02">
                      <div className="icon-lg">
                        <Link to="#" className="icon-cell">
                          <i className="flaticon-factory-1"></i>
                        </Link>
                      </div>
                      <div className="icon-content">
                        <h2 className="dlab-tilte">Power & Energy</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-bx-wraper" data-name="03">
                      <div className="icon-lg">
                        <Link to="#" className="icon-cell">
                          <i className="flaticon-fuel-station"></i>
                        </Link>
                      </div>
                      <div className="icon-content">
                        <h2 className="dlab-tilte">Petroleum Refinery</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.8s"
                  >
                    <div className="icon-bx-wraper" data-name="04">
                      <div className="icon-lg">
                        <Link to="#" className="icon-cell">
                          <i className="flaticon-fuel-truck"></i>
                        </Link>
                      </div>
                      <div className="icon-content">
                        <h2 className="dlab-tilte">Oil & Gas Industry</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    <div className="icon-bx-wraper" data-name="05">
                      <div className="icon-lg">
                        <Link to="#" className="icon-cell">
                          <i className="flaticon-conveyor-1"></i>
                        </Link>
                      </div>
                      <div className="icon-content">
                        <h2 className="dlab-tilte">Automative Manufacturing</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon-bx-wraper" data-name="06">
                      <div className="icon-lg">
                        <Link to="#" className="icon-cell">
                          <i className="flaticon-engineer-1"></i>
                        </Link>
                      </div>
                      <div className="icon-content">
                        <h2 className="dlab-tilte">Chemical Research</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <CounterSection backgroundImage={bg2} /> */}

            {/* <div className="section-full bg-gray content-inner">
              <div className="container">
                <div className="section-head text-center ">
                  <h2 className="title"> Meet The Team</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    typesetting industry has been the industry's standard dummy
                    text ever since the been when an unknown printer.
                  </p>
                </div>
                <Team1 />
              </div>
            </div> */}

            {/* <div
              className="section-full overlay-black-middle bg-secondry content-inner-2 wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
              style={{ backgroundImage: "url(" + bg3 + ")" }}
            >
              <div className="container">
                <div className="section-head text-white text-center">
                  <h2 className="title">What People Are Saying</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    typesetting industry has been the industry's standard dummy
                    text ever since the been when an unknown printer.
                  </p>
                </div>
                <div className="section-content">
                  <Testimonial12 />
                </div>
              </div>
            </div> */}

            {/* <div
              className="section-full content-inner bg-gray wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="container">
                <div className="section-head text-center">
                  <h2 className="title">Latest blog post</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    typesetting industry has been the industry's standard dummy
                    text ever since the been when an unknown printer.
                  </p>
                </div>

                {/* <BlogSlider1
                  data={blogContent3}
                  blogPostCls="post-style-1"
                  imgEffect="rotate"
                  noDes
                /> */}
              {/* </div> */}
            {/* </div>  */}

            <div
              className="section-full dlab-we-find bg-img-fix p-t20 p-b20 bg-white wow fadeIn"
              data-wow-duration="0.51s"
              data-wow-delay="0.1s"
            >
              <div className="container">
                <div className="section-content">
                  <ImageSlider hideBorder />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer hideContactInfo displayNewsLetter />
        {/* <Footer1 />
        <Footer2 />
        <Footer3 />
        <Footer4 />
        <Footer5 />
        <Footer6 />
        <Footer7 />
        <Footer8 />
        <Footer9 />
        <Footer10 />
        <Footer11 />
        <Footer12 />
        <Footer13 />
        <Footer14 />
        <Footer15 />
        <FooterDemo /> */}
        <ScrollToTop className="icon-up" />
      </div>
    );
  }
}
export default Homepage;
