import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header4'
import Footer from '../layout/footer4'
import {projectContent1,serviceContent2,homeSliderContent4} from '../element/SliderContent'
import Testimonial2 from '../element/testmonial2';
import ClientSlider1 from '../element/clientSlider1';
import ProjectSlider1 from '../element/projectSlider1';
import ServicesSlider3 from '../element/servicesSlider3';
import HomeSlider from '../element/homeslider1'
import DualSlider from '../element/dualSlider';
import ScrollToTop from '../element/scrollToTop';
import Team9 from '../element/team9'

// import '../../css/skin/skin-2.min.css';

const bg = require('../../images/background/cs.jpg')

class Index4 extends Component {


    render() {
        return (
            <>
                <Header/>

                <HomeSlider 
					data={homeSliderContent4}
					contentWrapperCls="sliderStyle4"
					btnCls="site-button"
					btnText="ABOUT US"
					btn2Text="OUR SERVICES"
					show2Btn
                />

                <div className="page-content bg-white">
                    <div className="content-block">
                        <div className="section-full call-action bg-primary wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9 text-white">
                                        <h2 className="title">Amazing things happen to your business </h2>
                                        <p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                    <div className="col-lg-3 d-flex">
                                        <Link to="/about-2" className="site-button white align-self-center outline ms-auto radius-xl outline-2 btnhover16 btnhover16">MARKET SECTORS </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        

                        <div className="section-full content-inner bg-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                            <div className="container">
                                <div className="on-show-slider"> 
                                    
                                    <DualSlider/>
                                
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-full content-inner bg-gray wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2 className="title">Our Services</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <ServicesSlider3 
                                        data={serviceContent2}
                                        iconWrapperCls="icon-xl m-b20 text-primary radius"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-full content-inner-2 bg-img-fix overlay-black-dark wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s" style={{ backgroundImage: "url(" + bg + ")" }}>
                            <div className="container">
                                <div className="section-head text-white text-center">
                                    <h2 className="title">Our Project</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div className="row icon-white">
                                    <div className="col-lg-12 col-md-12">
                                        <ProjectSlider1 data={projectContent1}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-full bg-white content-inner">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2 className="title text-capitalize">Meet The Team</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <Team9 />
                            </div>
                        </div>
                        
                        <div className="section-full content-inner-2 bg-gray wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s">
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
                                    <h2 className="title text-capitalize">latest blog</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div className="blog-post blog-grid blog-rounded blog-effect1 fly-box">
                                            <div className="dlab-post-media dlab-img-effect"> 
                                                <Link to="/blog-single"><img src={require("../../images/blog/grid/pic1.jpg")} alt=""/></Link>
                                            </div>
                                            <div className="dlab-info p-a20 border-1 bg-white">
                                                <div className="dlab-post-meta">
                                                    <ul>
                                                        <li className="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
                                                        <li className="post-author"> By <Link to="#">Jack</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="dlab-post-title">
                                                    <h4 className="post-title"><Link to="/blog-single">Seven Doubts You Should</Link></h4>
                                                </div>
                                                <div className="dlab-post-text">
                                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                                </div>
                                                <div className="dlab-post-readmore"> 
                                                    <Link to="/blog-single" title="READ MORE" rel="bookmark" className="site-button btnhover16">READ MORE
                                                        <i className="ti-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                        <div className="blog-post blog-grid blog-rounded blog-effect1 fly-box">
                                            <div className="dlab-post-media dlab-img-effect"> 
                                                <Link to="/blog-single"><img src={require("../../images/blog/grid/pic2.jpg")} alt=""/></Link>
                                            </div>
                                            <div className="dlab-info p-a20 border-1 bg-white">
                                                <div className="dlab-post-meta ">
                                                    <ul>
                                                        <li className="post-date"> <strong>11 Aug</strong> <span> 2016</span> </li>
                                                        <li className="post-author"> By <Link to="#">Zachary</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="dlab-post-title">
                                                    <h4 className="post-title"><Link to="/blog-single">The Shocking Revelation</Link></h4>
                                                </div>
                                                <div className="dlab-post-text">
                                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                                </div>
                                                <div className="dlab-post-readmore"> 
                                                    <Link to="/blog-single" title="READ MORE" rel="bookmark" className="site-button btnhover16">READ MORE
                                                        <i className="ti-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
                                        <div className="blog-post blog-grid blog-rounded blog-effect1 fly-box">
                                            <div className="dlab-post-media dlab-img-effect"> 
                                                <Link to="/blog-single"><img src={require("../../images/blog/grid/pic3.jpg")} alt=""/></Link>
                                            </div>
                                            <div className="dlab-info p-a20 border-1 bg-white">
                                                <div className="dlab-post-meta">
                                                    <ul>
                                                        <li className="post-date"> <strong>12 Aug</strong> <span> 2016</span> </li>
                                                        <li className="post-author"> By <Link to="#">Charlotte</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="dlab-post-title">
                                                    <h4 className="post-title"><Link to="/blog-single">The Story Of Industry</Link></h4>
                                                </div>
                                                <div className="dlab-post-text">
                                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                                </div>
                                                <div className="dlab-post-readmore"> 
                                                    <Link to="/blog-single" title="READ MORE" rel="bookmark" className="site-button btnhover16">READ MORE
                                                        <i className="ti-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-full content-inner-2 bg-gray wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                            <div className="container">		
                                <div className="section-head text-black text-center">
                                    <h2 className="title text-capitalize">We work with our partners to provide project perfection,<br/><span className="text-primary">join with our parnership.</span></h2>
                                </div>
                                <ClientSlider1/>
                            </div>
                        </div>
                    </div>
                </div>                
                <Footer/>       
                <ScrollToTop className="style1 white icon-up"/>          
            </>
        )
    }
}
export default Index4;