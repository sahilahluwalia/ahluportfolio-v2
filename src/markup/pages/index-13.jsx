import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header13'
import Footer from '../layout/footer13'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';

import {blogContent8} from '../element/SliderContent'
import BlogSlider1 from '../element/blogSlider1'
import Testimonial2 from '../element/testmonial2';
import ServicesSlider4 from '../element/servicesSlider4';
import CounterSection2 from '../element/counterSection2';
import ScrollToTop from '../element/scrollToTop';
import Team9 from '../element/team9'

// import '../../css/skin/skin-2.min.css';


const bg = require('../../images/background/bg11.jpg' )
const bg2 = require('../../images/background/bg17.jpg' )
const bg3 = require('../../images/main-slider/slide27.jpg' )
const boxBg1 = require('../../images/main-slider/box-bg1.png' )
const boxBg2 = require('../../images/main-slider/box-bg2.png' )

class Index13 extends Component {

    constructor(props){
        super(props)
        this.state = {
            isOpen: false
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

                <div className="hero-section relative home-slider-13" style={{ backgroundImage: "url(" + bg3 + ")" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content-wrapper full-height">
                                    <div className="hero-content text-center ">
                                        <img src={boxBg1} className="worker-pic bottom" alt=""/>
                                        <img src={boxBg2} className="worker-frame bottom" alt=""/>
                                        <h2 className="big-text bottom">Mining</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-content bg-white">	
                    <div className="content-block">
                        <div className="section-full bg-white content-inner-2" id="about-us" style={{ backgroundImage: "url(" + bg + ")" }}>
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2 className="title">Simple Cost-Efficient Mining Solutions</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                                </div>
                                <ServicesSlider4/>
                                <div className="text-center">
                                    <Link to="/services-1" className="site-button btnhover13 button-md">See all Services</Link> 
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-full content-inner bg-gray">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2 className="title">Quality With Dedication</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div className="dlab-box service-box-3">
                                            <div className="dlab-media radius-sm dlab-img-overlay1"> 
                                                <Link to="/services-details"><img src={require("../../images/our-work/mining/pic1.jpg")} alt=""/></Link> 
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="title"><Link to="/services-details">Mining Engineering</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div className="dlab-box service-box-3">
                                            <div className="dlab-media radius-sm dlab-img-overlay1"> 
                                                <Link to="/services-details"><img src={require("../../images/our-work/mining/pic6.jpg")} alt=""/></Link> 
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="title"><Link to="/services-details">Exploration Management</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div className="dlab-box service-box-3">
                                            <div className="dlab-media radius-sm dlab-img-overlay1"> 
                                                <Link to="/services-details"><img src={require("../../images/our-work/mining/pic3.jpg")} alt=""/></Link> 
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="title"><Link to="/services-details">Engineering Services</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div className="dlab-box service-box-3">
                                            <div className="dlab-media radius-sm dlab-img-overlay1"> 
                                                <Link to="/services-details"><img src={require("../../images/our-work/mining/pic4.jpg")} alt=""/></Link> 
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="title"><Link to="/services-details">Maintenance & Repair</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div className="dlab-box service-box-3">
                                            <div className="dlab-media radius-sm dlab-img-overlay1"> 
                                                <Link to="/services-details"><img src={require("../../images/our-work/mining/pic5.jpg")} alt=""/></Link> 
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="title"><Link to="/services-details">Engineering Services</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div className="dlab-box service-box-3">
                                            <div className="dlab-media radius-sm dlab-img-overlay1"> 
                                                <Link to="/services-details"><img src={require("../../images/our-work/mining/pic2.jpg")} alt=""/></Link> 
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="title"><Link to="/services-details">Maintenance & Repair</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-full">
                            <div className="row m-lr0">
                                <div className="col-xl-6 col-lg-12 p-lr0 d-flex dis-tbl latest-project-info bg-primary wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="text-white align-self-center ">
                                        <h2>Talk to us about solving your mining problems</h2>
                                        <p>Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse ullamcorper <span className="text-white">metus in erat viverra</span>, vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus malesuada vel. Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse ullamcorper <span className="text-white">metus in erat viverra</span>, vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus malesuada vel.</p>
                                        <Link to="/portfolio-details" className="site-button btnhover13 white">View Project</Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 p-lr0 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="dlab-box overlay-gallery-bx1 lightgallery">
                                        <div className="dlab-thum dlab-img-overlay1 primary"> 
                                            <Link to="#"> <img className="img-cover" src={require("../../images/gallery/pic10.jpg")}  alt=""/> </Link>
                                            <div className="overlay-bx">
                                                <div className="overlay-icon"> 
                                                    <Link to="#"  onClick={this.openModal}> 
                                                        <i className="fa fa-play icon-bx-xs"></i> 
                                                    </Link>
                                                    <span data-exthumbimage="images/gallery/pic10.jpg" data-src="images/gallery/pic10.jpg" className="check-km" title="Solar Panels">		
                                                        <i className="fa fa-search icon-bx-xs"></i> 
                                                    </span>
                                                </div>
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
                        
                        <div className="section-full bg-gray content-inner">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2 className="title">Our Team</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <Team9 />
                            </div>
                        </div>
                        
                        <CounterSection2 backgroundImage={bg2}/>
                        
                        <div className="section-full content-inner bg-gray">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2 className="title">Testimonials</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>

                                <Testimonial2/>
                                
                            </div>
                        </div>
                        
                        <div className="section-full content-inner bg-white">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2 className="title">Latest News</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>

                                <BlogSlider1 
                                data={blogContent8} 
                                />

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
                                        <Link to="/contact-1" className="site-button btnhover13 white align-self-center outline ms-auto outline-2">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
                <Footer/>  
                <ScrollToTop className="style1 radius"/>              
            </>
        )
    }
}
export default Index13;