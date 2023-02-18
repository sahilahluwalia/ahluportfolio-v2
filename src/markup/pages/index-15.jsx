import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header15'
import Footer from '../layout/footer15'
import Testimonial11 from '../element/testimonial11';
import BlogSlider1 from '../element/blogSlider1'
import {blogContent9} from '../element/SliderContent'
import ProjectSlider6 from '../element/projectSlider6';
import { Parallax } from 'react-parallax';
import ScrollToTop from '../element/scrollToTop';
import Team8 from '../element/team8'

const bg = require('../../images/background/bg18.jpg' )
const bg2 = require('../../images/main-slider/slide19.jpg' )

class Index15 extends Component {
    render() {
        return (
            <>           
            <Header/>
            <Parallax bgImage={bg2} strength={400} >
                <div className="hero-section overlay relative home-slider-15" id="para" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content-wrapper full-height">
                                    <div className="hero-content text-center content-center">
                                        <div className="subtitle text-primary style2">Value Creation Form Waste </div>
                                        <h1 className="title text-center">Plastic Waste <br/> Managment & Recycling</h1>
                                        <div className="subtitle">Powering Progress Through Plastic</div>
                                        <Link to="#" className="style2 bg-primary">our services</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>

            <div className="page-content bg-white">	
                <div className="content-block">
                    <div className="section-full content-inner bg-white">
                        <div className="container">
                            <div className="section-head text-center">
                                <h2 className="title">Our Services</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="icon-bx-wraper bx-style-2 m-l40 p-a30 left bg-gray icon-bx-ho">
                                        <div className="icon-bx-sm bg-primary m-b20"><span className="icon-cell"><i className="flaticon-robot-arm"></i></span> </div>
                                        <div className="icon-content p-l40">
                                            <h5 className="dlab-tilte">Plastics Institute</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="icon-bx-wraper bx-style-2 m-l40 p-a30 left bg-gray icon-bx-ho">
                                        <div className="icon-bx-sm bg-primary m-b20"><Link to="#" className="icon-cell"><i className="flaticon-factory-1"></i></Link> </div>
                                        <div className="icon-content p-l40">
                                            <h5 className="dlab-tilte">Institute of Packaging</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="icon-bx-wraper bx-style-2 m-l40 p-a30 left bg-gray icon-bx-ho">
                                        <div className="icon-bx-sm bg-primary m-b20"><Link to="#" className="icon-cell"><i className="flaticon-fuel-station"></i></Link> </div>
                                        <div className="icon-content p-l40">
                                            <h5 className="dlab-tilte">Merchant's Chamber</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="icon-bx-wraper bx-style-2 m-l40 p-a30 left bg-gray icon-bx-ho">
                                        <div className="icon-bx-sm bg-primary m-b20"><Link to="#" className="icon-cell"><i className="flaticon-conveyor-1"></i></Link> </div>
                                        <div className="icon-content p-l40">
                                            <h5 className="dlab-tilte">Chemical Council</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="icon-bx-wraper bx-style-2 m-l40 p-a30 left bg-gray icon-bx-ho">
                                        <div className="icon-bx-sm bg-primary m-b20"><Link to="#" className="icon-cell"><i className="flaticon-engineer-1"></i></Link> </div>
                                        <div className="icon-content p-l40">
                                            <h5 className="dlab-tilte">Association of Industries</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="icon-bx-wraper bx-style-2 m-l40 p-a30 left bg-gray icon-bx-ho">
                                        <div className="icon-bx-sm bg-primary m-b20"><Link to="#" className="icon-cell"><i className="flaticon-robot-arm"></i></Link> </div>
                                        <div className="icon-content p-l40">
                                            <h5 className="dlab-tilte">Industries Association</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full bg-gray content-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="blog-post blog-grid blog-rounded blog-effect1">
                                        <div className="dlab-post-media dlab-img-effect rotate"> <Link to="#"><img src={require("../../images/our-work/plastic/pic1.jpg")} alt=""/></Link> </div>
                                        <div className="dlab-info p-a20 border-1">
                                            <div className="dlab-post-title">
                                                <h4 className="post-title"><Link to="/blog-single">Plastics Institute</Link></h4>
                                            </div>
                                            <div className="dlab-post-text">
                                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                            </div>
                                            <div className="dlab-post-readmore"> 
                                                <Link to="/blog-single" title="READ MORE" rel="bookmark" className="site-button btnhover20">READ MORE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                    <div className="blog-post blog-grid blog-rounded blog-effect1">
                                        <div className="dlab-post-media dlab-img-effect rotate"> <Link to="#"><img src={require("../../images/our-work/plastic/pic2.jpg")} alt=""/></Link> </div>
                                        <div className="dlab-info p-a20 border-1">
                                            <div className="dlab-post-title">
                                                <h4 className="post-title"><Link to="/blog-single">Institute Of Packaging</Link></h4>
                                            </div>
                                            <div className="dlab-post-text">
                                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                            </div>
                                            <div className="dlab-post-readmore"> 
                                                <Link to="/blog-single" title="READ MORE" rel="bookmark" className="site-button btnhover20">READ MORE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.9s">
                                    <div className="dlab-box m-b30"> 
                                        <div className="dlab-media dlab-img-overlay1 dlab-img-effect on rotate no-hover"> <img src={require("../../images/about/pic14.jpg")} alt=""/>
                                            <div className="dlab-info-has p-a20 no-hover ">
                                                <Link to="#" className="site-button btnhover20 button-sm m-b10">Packaging</Link>
                                                <div className="dlab-post-meta text-white">
                                                    <ul>
                                                        <li className="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
                                                        <li className="post-author"> By <Link to="#">demongo</Link> </li>
                                                    </ul>
                                                </div>
                                                <div className="dlab-post-title">
                                                    <h5 className="post-title"><Link to="/blog-single">Merchant's Chamber.</Link></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="blog-post blog-grid blog-rounded blog-effect1">
                                        <div className="dlab-post-media dlab-img-effect rotate"> <Link to="#"><img src={require("../../images/our-work/plastic/pic2.jpg")} alt=""/></Link> </div>
                                        <div className="dlab-info p-a20 border-1">
                                            <div className="dlab-post-title">
                                                <h4 className="post-title"><Link to="/blog-single">Chemical Council</Link></h4>
                                            </div>
                                            <div className="dlab-post-text">
                                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                            </div>
                                            <div className="dlab-post-readmore"> 
                                                <Link to="/blog-single" title="READ MORE" rel="bookmark" className="site-button btnhover20">READ MORE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                    <div className="blog-post blog-grid blog-rounded blog-effect1">
                                        <div className="dlab-post-media dlab-img-effect rotate"> <Link to="#"><img src={require("../../images/our-work/plastic/pic3.jpg")} alt=""/></Link> </div>
                                        <div className="dlab-info p-a20 border-1">
                                            <div className="dlab-post-title">
                                                <h4 className="post-title"><Link to="/blog-single">Association Of Industries</Link></h4>
                                            </div>
                                            <div className="dlab-post-text">
                                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                            </div>
                                            <div className="dlab-post-readmore"> 
                                                <Link to="/blog-single" title="READ MORE" rel="bookmark" className="site-button btnhover20">READ MORE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.9s">
                                    <div className="blog-post blog-grid blog-rounded blog-effect1">
                                        <div className="dlab-post-media dlab-img-effect rotate"> <Link to="#"><img src={require("../../images/our-work/plastic/pic4.jpg")} alt=""/></Link> </div>
                                        <div className="dlab-info p-a20 border-1">
                                            <div className="dlab-post-title">
                                                <h4 className="post-title"><Link to="/blog-single">Industries Association</Link></h4>
                                            </div>
                                            <div className="dlab-post-text">
                                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.</p>
                                            </div>
                                            <div className="dlab-post-readmore"> 
                                                <Link to="/blog-single" title="READ MORE" rel="bookmark" className="site-button btnhover20">READ MORE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full bg-img-fix content-inner-3 overlay-black-dark contact-action" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div className="container">
                            <div className="row relative text-center wow fadeIn" data-wow-duration="2s" data-wow-delay="0.9s">
                                <div className="col-md-12 col-lg-12 m-b30">
                                    <div className="contact-no-area">
                                        <h2 className="title">Plastic Waste Managment<br/> & Recycling</h2>
                                        <div className="contact-no justify-content-center">
                                            <div className="contact-left">
                                                <h3 className="no"><i className="sl-call-in"></i>123-456-7890</h3>
                                            </div>
                                            <div className="contact-right">
                                                <Link to="/contact-2" className="site-button btnhover20 appointment-btn">Get Appointment</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full bg-white">
                        <ProjectSlider6/>
                    </div>
                    
                    <div className="section-full content-inner bg-gray">
                        <div className="container">
                            <div className="section-head text-center">
                                <h2 className="title">Our Team</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <Team8 />
                        </div>
                    </div>
                    
                    <div className="section-full content-inner-2 bg-white wow bounceIn" data-wow-duration="2s" data-wow-delay="0.9s">
                        <div className="container">
                            <div className="section-head text-center">
                                <h2 className="title">Testimonials</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <Testimonial11/>
                        </div>
                    </div>
                    
                    <div className="section-full content-inner bg-gray">
                        <div className="container">
                            <div className="section-head text-center">
                                <h2 className="title">Latest blog post</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>

                            <BlogSlider1 
                            data={blogContent9} 
                            blogPostCls="post-style-1"
                            noDes
                            />
                            
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
export default Index15;