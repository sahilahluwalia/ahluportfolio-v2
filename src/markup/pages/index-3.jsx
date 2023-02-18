import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header3'
import Footer from '../layout/footer3';
// Sliders
import Testimonial1 from './../element/testimonial1';
import BlogSlider1 from '../element/blogSlider1'
import {blogContent3,projectContent1,homeSliderContent3} from '../element/SliderContent'
import ProjectSlider1 from '../element/projectSlider1'
import HomeSlider from '../element/homeslider1'
import ScrollToTop from '../element/scrollToTop';

// import '../../css/skin/skin-2.min.css';

const bg = require('../../images/background/map-bg.png')

class Index3 extends Component {


    render() {
        return (
            <>
                <Header />

                <HomeSlider 
					data={homeSliderContent3}
					contentWrapperCls="sliderStyle3"
					hideBtn
                />

                <div className="page-content bg-white">
                    <div className="content-block">
                        <div className="section-full content-inner bg-gray">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div className="dlab-box service-box-2">
                                            <div className="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect rotate">
                                                <Link to="/services-details"><img src={require("../../images/our-work/steelplant/pic1.jpg")} alt="" /></Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="title"><Link to="/services-details">Machine Welding</Link></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <Link to="/services-details" className="site-button btnhover14">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                        <div className="dlab-box service-box-2">
                                            <div className="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect rotate">
                                                <Link to="/services-details"><img src={require("../../images/our-work/steelplant/pic2.jpg")} alt="" /></Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="title"><Link to="/services-details">Flanging & Advanced</Link></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <Link to="/services-details" className="site-button btnhover14">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
                                        <div className="dlab-box service-box-2">
                                            <div className="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect rotate">
                                                <Link to="/services-details"><img src={require("../../images/our-work/steelplant/pic3.jpg")} alt="" /></Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="title"><Link to="/services-details">Metal Sheet Cutting</Link></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <Link to="/services-details" className="site-button btnhover14">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div className="dlab-box service-box-2">
                                            <div className="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect rotate">
                                                <Link to="/services-details"><img src={require("../../images/our-work/steelplant/pic4.jpg")} alt="" /></Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="title"><Link to="/services-details">Structural Steel</Link></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <Link to="/services-details" className="site-button btnhover14">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                        <div className="dlab-box service-box-2">
                                            <div className="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect rotate">
                                                <Link to="/services-details"><img src={require("../../images/our-work/steelplant/pic5.jpg")} alt="" /></Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="title"><Link to="/services-details">Pipe & Pipeline</Link></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <Link to="/services-details" className="site-button btnhover14">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
                                        <div className="dlab-box service-box-2">
                                            <div className="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect rotate">
                                                <Link to="/services-details"><img src={require("../../images/our-work/steelplant/pic6.jpg")} alt="" /></Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="title"><Link to="/services-details">Structural Fabrication</Link></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <Link to="/services-details" className="site-button btnhover14">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-full content-inner-2 bg-primary wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s" style={{ backgroundImage: "url(" + bg + ")" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 text-center service-info">
                                        <h2 className="title text-white">Amazing things happen to your business when we connect those dots of utility and value.</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-full content-inner bg-white">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div className="our-story">
                                            <span>OUR STORY</span>
                                            <h2 className="title">Commited to High <br /> Quality <span className="text-primary">  Service </span></h2>
                                            <h4 className="title">Amazing things happen to your business when we connect those dots of utility and value.</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting Factory. Lorem Ipsum has been the Factory's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting Factory.</p>
                                            <Link to="/about-2" className="site-button btnhover14">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                        <img src={require("../../images/about/pic6.jpg")} className="radius-sm" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-full call-action style1 bg-primary wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9 text-white">
                                        <h2 className="title">Amazing things happen to your business </h2>
                                    </div>
                                    <div className="col-lg-3 d-flex">
                                        <Link to="/contact-1" className="site-button black align-self-center ms-auto btnhover14">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-full content-inner-2 bg-gray wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2 className="title">Our Project</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <ProjectSlider1 data={projectContent1}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-full bg-white content-inner">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2 className="title">Our team</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div className="row dlab-team10-area">
                                    <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                        <div className="dlab-box m-b30 dlab-team10">
                                            <div className="dlab-media">
                                                <Link to="/team-1">
                                                    <img alt="" src={require("../../images/our-team/pic1.jpg")} />
                                                </Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="dlab-title"><Link to="/team-1">Nashid Martines</Link></h4>
                                                <span className="dlab-position">Director</span>
                                                <ul className="dlab-social-icon">
                                                    <li><Link className="site-button fa fa-facebook facebook" to="#"></Link></li>
                                                    <li><Link className="site-button fa fa-twitter twitter" to="#"></Link></li>
                                                    <li><Link className="site-button fa fa-linkedin linkedin" to="#"></Link></li>
                                                    <li><Link className="site-button fa fa-pinterest pinterest" to="#"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                                        <div className="dlab-box m-b30 dlab-team10">
                                            <div className="dlab-media">
                                                <Link to="/team-1">
                                                    <img alt="" src={require("../../images/our-team/pic2.jpg")} />
                                                </Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="dlab-title"><Link to="/team-1">Konne Backfield</Link></h4>
                                                <span className="dlab-position">Designer</span>
                                                <ul className="dlab-social-icon">
                                                    <li><Link className="site-button fa fa-facebook facebook" to="#"></Link></li>
                                                    <li><Link className="site-button fa fa-twitter twitter" to="#"></Link></li>
                                                    <li><Link className="site-button fa fa-linkedin linkedin" to="#"></Link></li>
                                                    <li><Link className="site-button fa fa-pinterest pinterest" to="#"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                        <div className="dlab-box m-b30 dlab-team10">
                                            <div className="dlab-media">
                                                <Link to="/team-1">
                                                    <img alt="" src={require("../../images/our-team/pic3.jpg")} />
                                                </Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="dlab-title"><Link to="/team-1">Hackson Willingham</Link></h4>
                                                <span className="dlab-position">Developer</span>
                                                <ul className="dlab-social-icon">
                                                    <li><Link className="site-button fa fa-facebook facebook" to="#"></Link></li>
                                                    <li><Link className="site-button fa fa-twitter twitter" to="#"></Link></li>
                                                    <li><Link className="site-button fa fa-linkedin linkedin" to="#"></Link></li>
                                                    <li><Link className="site-button fa fa-pinterest pinterest" to="#"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
                                        <div className="dlab-box m-b30 dlab-team10">
                                            <div className="dlab-media">
                                                <Link to="/team-1">
                                                    <img alt="" src={require("../../images/our-team/pic4.jpg")} />
                                                </Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="dlab-title"><Link to="/team-1">Konne Backfield</Link></h4>
                                                <span className="dlab-position">Manager</span>
                                                <ul className="dlab-social-icon">
                                                    <li><Link className="site-button fa fa-facebook facebook" to="#"></Link></li>
                                                    <li><Link className="site-button fa fa-twitter twitter" to="#"></Link></li>
                                                    <li><Link className="site-button fa fa-linkedin linkedin" to="#"></Link></li>
                                                    <li><Link className="site-button fa fa-pinterest pinterest" to="#"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-full content-inner-2 bg-gray wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2 className="title">Happy Customers Said</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <Testimonial1 />
                            </div>
                        </div>

                        <div className="section-full content-inner bg-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2 className="title">Industry News</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <BlogSlider1 
                                        data={blogContent3} 
                                        imgEffect="rotate"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-full call-action bg-primary wow fadeIn" data-wow-duration="2s" data-wow-delay="0.9s">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9 text-white">
                                        <h2 className="title">Amazing things happen to your business </h2>
                                        <p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                    <div className="col-lg-3 d-flex">
                                        <Link to="/contact-2" className="site-button white align-self-center outline ms-auto outline-2 btnhover14">Get In Touch</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <ScrollToTop className="style1 radius white"/> 
            </>
        )
    }
}
export default Index3;