import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header14'
import Footer from '../layout/footer14'
import Testimonial1 from './../element/testimonial1';
import {blogContent7} from '../element/SliderContent'
import BlogSlider1 from '../element/blogSlider1'
//import HomeSlider from '../element/homeSlider2' 
import ScrollToTop from '../element/scrollToTop';
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';
import Team3 from '../element/team3'

const bg = require('../../images/gallery/car/pic1.jpg' )
const bg2 = require('../../images/gallery/car/pic2.jpg' )
const bg3 = require('../../images/gallery/car/pic3.jpg' )
const bg4 = require('../../images/background/bg19.jpg' )
const bg5 = require('../../images/main-slider/slide29.jpg' )


class Index14 extends Component {

    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
        }
    }

    openModal = (event) => {
        event.preventDefault()
        this.setState({isOpen: true})
    }

    closeModal = () => {
        this.setState({isOpen: false})
    }

    render() {
        return (
            <>
                <Header/>

                {/* <HomeSlider 
                data={homeSliderContent10}
                btnText="Our Services"
                /> */}

                <div className="hero-section home-slider-14" id="home" style={{ backgroundImage: "url(" + bg5 + ")" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 relative">
                                <div className="content-wrapper full-height">
                                    <div className="hero-content content-center">
                                        <h1 className="title style2">Auto Mobile industry</h1>
                                        <div className="description style2">With 19+ years’ experience in combining traditions and innovations, Arty creates settings to inspire the way people live, learn, heal, work and play.</div>
                                        <Link to={"./"}>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-content bg-white">	
                    <div className="content-block">
                        <div className="section-full content-inner bg-white" id="about">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                                <div className="dlab-box-bg m-b30 box-hover style3" style={{ backgroundImage: "url(" + bg3 + ")" }}>
                                                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                                                        <div className="text-primary m-b20"> 
                                                            <span className="icon-cell icon-md"><i className="ti-user"></i></span> 
                                                        </div>
                                                        <div className="icon-content">
                                                            <h5 className="dlab-tilte">Largest Dealership</h5>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
                                                        </div>
                                                    </div>
                                                    <div className="icon-box-btn text-center">
                                                        <Link to="/services-details" className="site-button btn-block">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                                <div className="dlab-box-bg m-b30 box-hover style3" style={{ backgroundImage: "url(" + bg2 + ")" }}>
                                                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                                                        <div className="text-primary m-b20"> 
                                                            <span className="icon-cell icon-md"><i className="ti-settings"></i></span> 
                                                        </div>
                                                        <div className="icon-content">
                                                            <h5 className="dlab-tilte">Lower Car Prices</h5>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
                                                        </div>
                                                    </div>
                                                    <div className="icon-box-btn text-center">
                                                        <Link to="/services-details" className="site-button btn-block">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.3s">
                                                <div className="dlab-box-bg m-b30 box-hover style3" style={{ backgroundImage: "url(" + bg + ")" }} >
                                                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                                                        <div className="text-primary m-b20"> 
                                                            <span className="icon-cell icon-md"><i className="ti-support"></i></span> 
                                                        </div>
                                                        <div className="icon-content">
                                                            <h5 className="dlab-tilte">Multipoint Safety</h5>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
                                                        </div>
                                                    </div>
                                                    <div className="icon-box-btn text-center">
                                                        <Link to="/services-details" className="site-button btn-block">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div className="request-form dezPlaceAni">
                                            <div className="request-form-header">
                                                <i className="flaticon-message"></i>
                                                <p>Don’t Hesitate To Ask</p>
                                                <h2>Request A Quote</h2>
                                            </div>
                                            <form>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="dzName" type="text" required="" className="form-control" placeholder="Your Name"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="dzName" type="text" required="" className="form-control" placeholder="Email"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="dzName" type="text" required="" className="form-control" placeholder="Phone"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <textarea className="form-control" placeholder="Quote Details"></textarea>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <button className="site-button btnhover19 button-md btn-block w-100">Submit Inquiry</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-full" id="choose-us">
                            <div className="row m-lr0">
                                <div className="col-xl-6 col-lg-12 p-lr0 d-flex dis-tbl latest-project-info style1 bg-secondry wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="align-self-center text-white">
                                        <div className="section-head text-white">
                                            <h2 className="title">Why choose us</h2>
                                            <p>We’re continually working to change the way people think about and engage with our products.</p>
                                        </div>
                                        <ul className="list-check white list-2 rounded border">
                                            <li>
                                                <h4 className="m-b10">Vehicle Inspection</h4>
                                                <p>We understand you need a building that works for you and your organisation.</p>
                                            </li>
                                            <li>
                                                <h4 className="m-b10">Transmission Checkup</h4>
                                                <p>We understand you need a building that works for you and your organisation.</p>
                                            </li>
                                            <li>
                                                <h4 className="m-b10">Auto Repairing</h4>
                                                <p>We understand you need a building that works for you and your organisation.</p>
                                            </li>
                                            <li>
                                                <h4 className="m-b10">High Performance</h4>
                                                <p>We understand you need a building that works for you and your organisation.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 p-lr0 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="row spno">
                                        <div className="col-lg-6 col-md-6 col-sm-6 bg-primary align-items-center d-flex">
                                            <div className="dlab-services-box text-white">
                                                <h2 className="service-year">32<small>year</small></h2>
                                                <h3 className="title m-b0">We are Building  the  Future and Restoring</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <img className="img-cover" src={require("../../images/our-work/car/pic3.jpg")} alt=""/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="video-bx radius-no h100">
                                                <img src={require("../../images/our-work/car/pic4.jpg")} alt="Signature" className="img-cover"/>
                                                <div className="video-play-icon">
                                                    <Link to="#" onClick={this.openModal} className="popup-youtube video bg-primary">
                                                        <i className="fa fa-play"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 bg-secondry align-items-center d-flex">
                                            <div className="dlab-services-box text-white">
                                                <h3 className="title text-white m-b15">Renting Tips & Articles</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <Link to="/about-1" className="site-button btnhover19 outline white outline-2">ABOUT US</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ModalVideo 
                        channel='youtube'
                        allowFullScreen 
                        isOpen={this.state.isOpen} 
                        videoId='_FRZVScwggM' 
                        onClose={this.closeModal} 
                        />
                        
                        <div className="section-full content-inner bg-gray" id="services">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2 className="title">Our Services</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box bg-white">
                                            <div className="icon-lg m-b20"> <Link to="/services-details" className="icon-cell"><img src={require("../../images/icon/car/icon-1.png")} alt=""/></Link> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Air Conditioning</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                                                <Link to="/services-details" className="site-button btnhover19">Site Button</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box bg-white">
                                            <div className="icon-lg m-b20"> <Link to="/services-details" className="icon-cell"><img src={require("../../images/icon/car/icon-2.png")} alt=""/></Link> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Brake Repair</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                                                <Link to="/services-details" className="site-button btnhover19">Site Button</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.9s">
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box bg-white">
                                            <div className="icon-lg m-b20"> <Link to="/services-details" className="icon-cell text-primary"><img src={require("../../images/icon/car/icon-3.png")} alt=""/></Link> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Lube, Oil And Filters</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                                                <Link to="/services-details" className="site-button btnhover19">Site Button</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.9s">
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box bg-white">
                                            <div className="icon-lg m-b20"> <Link to="/services-details" className="icon-cell"><img src={require("../../images/icon/car/icon-4.png")} alt=""/></Link> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Belts And Hoses</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                                                <Link to="/services-details" className="site-button btnhover19">Site Button</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box bg-white">
                                            <div className="icon-lg m-b20"> <Link to="/services-details" className="icon-cell"><img src={require("../../images/icon/car/icon-5.png")} alt=""/></Link> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Engine Diagnostics</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                                                <Link to="/services-details" className="site-button btnhover19">Site Button</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box bg-white">
                                            <div className="icon-lg m-b20"> <Link to="/services-details" className="icon-cell text-primary"><img src={require("../../images/icon/car/icon-6.png")} alt=""/></Link> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Tire – Wheel Services</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                                                <Link to="/services-details" className="site-button btnhover19">Site Button</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-full content-inner bg-white" id="latestnews">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2 className="title">Latest News</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>

                                <BlogSlider1 
                                data={blogContent7} 
                                />

                            </div>
                        </div>
                        
                        <div className="section-full bg-gray content-inner overlay-primary-dark bg-img-fix" id="team" style={{ backgroundImage: "url(" + bg4 + ")" }}>
                            <div className="container">
                                <div className="section-head text-center text-white">
                                    <h2 className="title"> Meet The Team</h2>
                                    <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been.</p>
                                </div>
                                <Team3 />
                            </div>
                        </div>
                        
                        <div className="section-full content-inner-2 bg-gray" id="client">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2 className="title">Happy Customers Said</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>

                                <Testimonial1 />

                            </div>
                        </div>
                        
                        <div className="section-full call-action bg-primary wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9 text-white">
                                        <h2 className="title">Amazing things happen to your business </h2>
                                        <p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                    <div className="col-lg-3 d-flex">
                                        <Link to="/contact-3" className="site-button btnhover19 white align-self-center outline ms-auto outline-2">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
                <Footer/>  
                <ScrollToTop className="style3 radius"/>               
            </>
        )
    }
}
export default Index14;