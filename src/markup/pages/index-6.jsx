import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header6'
import Footer from '../layout/footer6'
import {projectContent2,servicesContent3,homeSliderContent6} from '../element/SliderContent'
import Testmonial4 from '../element/testmonial4';
import ProjectSlider1 from '../element/projectSlider1';
import ServicesSlider1 from '../element/servicesSlider1';
import ServicesSlider2 from '../element/servicesSlider2';
import HomeSlider from '../element/homeslider1'
import ScrollToTop from '../element/scrollToTop';

// import '../../css/skin/skin-4.min.css';

const bg = require('../../images/overlay/brilliant.png' )

class Index6 extends Component {


    render() {
        return (
            <>
            
            <HomeSlider 
            data={homeSliderContent6}
			contentWrapperCls="sliderStyle4"
            btnCls="site-button"
            btnText="ABOUT US"
            btn2Text="SERVICES"
            show2Btn
            />

            <Header/>

            <div className="page-content bg-white">	
                <div className="content-block">
                    <div className="section-full content-inner bg-white">
                        <div className="container">
                            <div className="section-head text-black text-center">
                                <h2 className="title">Quality With Dedication</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="dlab-box service-box-3">
                                        <div className="dlab-media radius-sm dlab-img-overlay1 zoom dlab-img-effect"> 
                                            <Link to="/services-details"><img src={require("../../images/our-work/solarplant/pic1.jpg")} alt=""/></Link> 
                                        </div>
                                        <div className="dlab-info">
                                            <h4 className="title"><Link to="/services-details">Solar Panels</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.6s">
                                    <div className="dlab-box service-box-3"> 
                                        <div className="dlab-media radius-sm dlab-img-overlay1 zoom dlab-img-effect"> 
                                            <Link to="/services-details"><img src={require("../../images/our-work/solarplant/pic6.jpg")} alt=""/></Link> 
                                        </div>
                                        <div className="dlab-info">
                                            <h4 className="title"><Link to="/services-details">Wind Turbines</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="dlab-box service-box-3">
                                        <div className="dlab-media radius-sm dlab-img-overlay1 zoom dlab-img-effect"> 
                                            <Link to="/services-details"><img src={require("../../images/our-work/solarplant/pic3.jpg")} alt=""/></Link> 
                                        </div>
                                        <div className="dlab-info">
                                            <h4 className="title"><Link to="/services-details">Green Equipment</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="dlab-box service-box-3">
                                        <div className="dlab-media radius-sm dlab-img-overlay1 zoom dlab-img-effect"> 
                                            <Link to="/services-details"><img src={require("../../images/our-work/solarplant/pic4.jpg")} alt=""/></Link> 
                                        </div>
                                        <div className="dlab-info">
                                            <h4 className="title"><Link to="/services-details">Installation</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                    <div className="dlab-box service-box-3">
                                        <div className="dlab-media radius-sm dlab-img-overlay1 zoom dlab-img-effect"> 
                                            <Link to="/services-details"><img src={require("../../images/our-work/solarplant/pic5.jpg")} alt=""/></Link> 
                                        </div>
                                        <div className="dlab-info">
                                            <h4 className="title"><Link to="/services-details">Maintenance</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="dlab-box service-box-3">
                                        <div className="dlab-media radius-sm dlab-img-overlay1 zoom dlab-img-effect"> 
                                            <Link to="/services-details"><img src={require("../../images/our-work/solarplant/pic2.jpg")} alt=""/></Link> 
                                        </div>
                                        <div className="dlab-info">
                                            <h4 className="title"><Link to="/services-details">Monitoring</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full call-action bg-primary wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 text-white">
                                    <h2 className="title">Go Solar & Save 10-30%* on Your Energy Rate</h2>
                                    <p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className="col-lg-3 d-flex">
                                    <Link to="/contact-1" className="site-button btnhover15 white align-self-center outline ms-auto radius-xl outline-2">Contact Us </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full content-inner-2 bg-gray wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div className="container">
                            <div className="section-head text-black text-center">
                                <h2 className="title">Why Solar Energy is Best</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <ServicesSlider2/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full bg-white content-inner">
                        <div className="container">
                            <div className="section-head text-center">
                                <h2 className="title">Our Crew Team</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeftBig" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="our-team m-b30">
                                        <div className="dlab-media radius-sm  zoom dlab-img-effect">
                                            <img src={require("../../images/our-team/pic1.jpg")} alt=""/>
                                        </div>
                                        <div className="team-title-bx text-center">
                                            <h2 className="title"><Link to="/team-1">Philip Demarco</Link></h2>
                                            <span>founder of agency</span>
                                            <ul className="social-list">
                                                <li><Link to="#" className="site-button-link facebook fa fa-facebook"></Link></li>
                                                <li><Link to="#" className="site-button-link twitter fa fa-twitter"></Link></li>
                                                <li><Link to="#" className="site-button-link google-plus fa fa-google"></Link></li>
                                                <li><Link to="#" className="site-button-link youtube fa fa-youtube-play"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUpBig" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="our-team m-b30">
                                        <div className="dlab-media radius-sm zoom dlab-img-effect">
                                            <img src={require("../../images/our-team/pic2.jpg")} alt=""/>
                                        </div>
                                        <div className="team-title-bx text-center">
                                            <h2 className="title"><Link to="/team-1">Angelina Johnson</Link></h2>
                                            <span>founder of agency</span>
                                            <ul className="social-list">
                                                <li><Link to="#" className="site-button-link facebook fa fa-facebook"></Link></li>
                                                <li><Link to="#" className="site-button-link twitter fa fa-twitter"></Link></li>
                                                <li><Link to="#" className="site-button-link google-plus fa fa-google"></Link></li>
                                                <li><Link to="#" className="site-button-link youtube fa fa-youtube-play"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInDownBig" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="our-team m-b30">
                                        <div className="dlab-media radius-sm zoom dlab-img-effect">
                                            <img src={require("../../images/our-team/pic3.jpg")} alt=""/>
                                        </div>
                                        <div className="team-title-bx text-center">
                                            <h2 className="title"><Link to="/team-1">Philip Demarco</Link></h2>
                                            <span>founder of agency</span>
                                            <ul className="social-list">
                                                <li><Link to="#" className="site-button-link facebook fa fa-facebook"></Link></li>
                                                <li><Link to="#" className="site-button-link twitter fa fa-twitter"></Link></li>
                                                <li><Link to="#" className="site-button-link google-plus fa fa-google"></Link></li>
                                                <li><Link to="#" className="site-button-link youtube fa fa-youtube-play"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInRightBig" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="our-team m-b30">
                                        <div className="dlab-media radius-sm zoom dlab-img-effect">
                                            <img src={require("../../images/our-team/pic4.jpg")} alt=""/>
                                        </div>
                                        <div className="team-title-bx text-center">
                                            <h2 className="title"><Link to="/team-1">Philip Demarco</Link></h2>
                                            <span>founder of agency</span>
                                            <ul className="social-list">
                                                <li><Link to="#" className="site-button-link facebook fa fa-facebook"></Link></li>
                                                <li><Link to="#" className="site-button-link twitter fa fa-twitter"></Link></li>
                                                <li><Link to="#" className="site-button-link google-plus fa fa-google"></Link></li>
                                                <li><Link to="#" className="site-button-link youtube fa fa-youtube-play"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full bg-gray content-inner-2 about-carousel-ser">
                        <div className="container">
                            <div className="section-head text-center">
                                <h2 className="title">Our Services</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <ServicesSlider1 data={servicesContent3}/>
                        </div>	
                    </div>
                    
                    <div className="section-full content-inner-2 bg-white">
                        <div className="container">
                            <div className="section-head text-center">
                                <h2 className="title">Our Project</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <ProjectSlider1 data={projectContent2}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full content-inner-2 bg-gray">
                        <div className="container">
                            <div className="section-head text-center">
                                <h2 className="title">Testimonials</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <Testmonial4/>
                        </div>
                    </div>
                    
                    <div className="section-full content-inner bg-white">
                        <div className="container">
                            <div className="section-head text-black text-center">
                                <h2 className="title text-capitalize">latest from blog</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 wow bounceInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="blog-post blog-grid blog-rounded blog-effect1">
                                        <div className="dlab-post-media dlab-img-effect zoom"> 
                                            <Link to="/blog-single"><img src={require("../../images/blog/grid/pic1.jpg")} alt=""/></Link> 
                                        </div>
                                        <div className="dlab-info p-a20 border-1 bg-white">
                                            <div className="dlab-post-meta">
                                                <ul>
                                                    <li className="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
                                                    <li className="post-author"> By <Link to="#">Jack</Link> </li>
                                                </ul>
                                            </div>
                                            <div className="dlab-post-title">
                                                <h4 className="post-title"><Link to="/blog-single">Seven Doubts You Should</Link></h4>
                                            </div>
                                            <div className="dlab-post-text">
                                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                            </div>
                                            <div className="dlab-post-readmore"> 
                                                <Link to="/blog-single" title="READ MORE" rel="bookmark" className="site-button btnhover15">READ MORE
                                                    <i className="ti-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="blog-post blog-grid blog-rounded blog-effect1">
                                        <div className="dlab-post-media dlab-img-effect zoom" > 
                                            <Link to="/blog-single"><img src={require("../../images/blog/grid/pic2.jpg")} alt=""/></Link> 
                                        </div>
                                        <div className="dlab-info p-a20 border-1 bg-white">
                                            <div className="dlab-post-meta ">
                                                <ul>
                                                    <li className="post-date"> <strong>11 Aug</strong> <span> 2016</span> </li>
                                                    <li className="post-author"> By <Link to="#">Zachary</Link> </li>
                                                </ul>
                                            </div>
                                            <div className="dlab-post-title">
                                                <h4 className="post-title"><Link to="/blog-single">The Shocking Revelation</Link></h4>
                                            </div>
                                            <div className="dlab-post-text">
                                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                            </div>
                                            <div className="dlab-post-readmore"> 
                                                <Link to="/blog-single" title="READ MORE" rel="bookmark" className="site-button btnhover15">READ MORE
                                                    <i className="ti-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="blog-post blog-grid blog-rounded blog-effect1">
                                        <div className="dlab-post-media dlab-img-effect zoom"> 
                                            <Link to="/blog-single"><img src={require("../../images/blog/grid/pic3.jpg")} alt=""/></Link> 
                                        </div>
                                        <div className="dlab-info p-a20 border-1 bg-white">
                                            <div className="dlab-post-meta">
                                                <ul>
                                                    <li className="post-date"> <strong>12 Aug</strong> <span> 2016</span> </li>
                                                    <li className="post-author"> By <Link to="#">Charlotte</Link> </li>
                                                </ul>
                                            </div>
                                            <div className="dlab-post-title">
                                                <h4 className="post-title"><Link to="/blog-single">The Story Of Industry</Link></h4>
                                            </div>
                                            <div className="dlab-post-text">
                                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                            </div>
                                            <div className="dlab-post-readmore"> 
                                                <Link to="/blog-single" title="READ MORE" rel="bookmark" className="site-button btnhover15">READ MORE
                                                    <i className="ti-arrow-right"></i>
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
            <Footer/>        
            <ScrollToTop className="style2 radius"/>       
            </>
        )
    }
}
export default Index6;