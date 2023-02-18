import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Testimonial1 from '../element/testimonial1';

const bg = require('../../images/banner/bnr2.jpg')
const bg2 = require('../../images/background/bg1.jpg')
const bg3 = require('../../images/background/bg1.jpg')

class Services1 extends Component {


    render() {
        return (
            <>
                <Header/>
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Services 1</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to="/">Home</Link></li>
                                        <li>Services 1</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="content-block">
                        <div className="section-full content-inner bg-gray">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="section-head text-black">
                                            <h4 className="text-gray-dark font-weight-300 m-b10">Expertise</h4>
                                            <h2 className="title">Completely customizable high-quality robust websites</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                        <div className="section-content row">
                                            <div className="col-lg-6 col-md-6 service-box style3">
                                                <div className="icon-bx-wraper" data-name="01">
                                                    <div className="icon-lg">
                                                        <Link to="#" className="icon-cell"><i className="flaticon-robot-arm"></i></Link>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h2 className="dlab-tilte">Mechanical Works</h2>
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 service-box style3">
                                                <div className="icon-bx-wraper" data-name="02">
                                                    <div className="icon-lg">
                                                        <Link to="#" className="icon-cell"><i className="flaticon-factory-1"></i></Link>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h2 className="dlab-tilte">Power &amp; Energy</h2>
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 service-box style3">
                                                <div className="icon-bx-wraper" data-name="03">
                                                    <div className="icon-lg">
                                                        <Link to="#" className="icon-cell"><i className="flaticon-fuel-station"></i></Link>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h2 className="dlab-tilte">Petroleum Refinery</h2>
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 service-box style3">
                                                <div className="icon-bx-wraper" data-name="04">
                                                    <div className="icon-lg">
                                                        <Link to="#" className="icon-cell"><i className="flaticon-fuel-truck"></i></Link>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h2 className="dlab-tilte">Oil &amp; Gas Industry</h2>
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 service-box style3">
                                                <div className="icon-bx-wraper" data-name="05">
                                                    <div className="icon-lg">
                                                        <Link to="#" className="icon-cell"><i className="flaticon-conveyor-1"></i></Link>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h2 className="dlab-tilte">Automative Manufacturing</h2>
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 service-box style3">
                                                <div className="icon-bx-wraper" data-name="06">
                                                    <div className="icon-lg">
                                                        <Link to="#" className="icon-cell"><i className="flaticon-engineer-1"></i></Link>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h2 className="dlab-tilte">Chemical Research</h2>
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="sticky-top m-b30">
                                            <form className="inquiry-form inner">
                                                <h3 className="title m-t0 m-b10">Let's Convert Your Idea into Reality</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <span className="input-group-addon"><i className="ti-user text-primary"></i></span>
                                                                <input name="dzName" type="text" required className="form-control" placeholder="First Name"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <span className="input-group-addon"><i className="ti-mobile text-primary"></i></span>
                                                                <input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Phone"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <div className="form-group">
                                                            <div className="input-group"> 
                                                                <span className="input-group-addon"><i className="ti-email text-primary"></i></span>
                                                                <input name="dzEmail" type="email" className="form-control" required  placeholder="Your Email Id" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <span className="input-group-addon"><i className="ti-check-box text-primary"></i></span>
                                                                <input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Upload File"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <span className="input-group-addon"><i className="ti-file text-primary"></i></span>
                                                                <input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Upload File"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <span className="input-group-addon"><i className="ti-agenda text-primary"></i></span>
                                                                <textarea name="dzMessage" rows="4" className="form-control" required placeholder="Tell us about your project or idea"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <button name="submit" type="submit" value="Submit" className="site-button button-lg"> <span>Get A Free Quote!</span> </button>
                                                    </div>
                                                </div>
                                            </form>	
                                        </div>	
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-full content-inner-1 overlay-black-dark about-8-service bg-img-fix" style={{ backgroundImage: "url(" + bg2 + ")" }}>
                            <div className="container">
                                <div className="section-head text-white text-center">
                                    <h2 className="title-box m-tb0 max-w800 m-auto">Amazing things happen to your business when we connect those dots of utility and value <span className="bg-primary"></span></h2>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over</p>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row text-white">
                                    <div className="col-lg-4 col-md-4 m-b30">
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center">
                                            <div className="icon-lg text-white m-b20"> <Link to="#" className="icon-cell text-white"><i className="flaticon-factory"></i></Link> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Mechanical Works</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-b30">
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center">
                                            <div className="icon-lg text-white m-b20"> <Link to="#" className="icon-cell text-white"><i className="flaticon-engineer"></i></Link> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Power & Energy</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-b30">
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center">
                                            <div className="icon-lg text-white m-b20"> <Link to="#" className="icon-cell text-white"><i className="flaticon-factory-1"></i></Link> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Petroleum Refinery</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="choses-info text-white">
                                <div className="container-fluid">
                                    <div className="row choses-info-content">
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6 p-a30 wow zoomIn" data-wow-delay="0.2s">
                                            <h2 className="m-t0 m-b10 font-weight-400 font-45"><i className="flaticon-alarm-clock m-r10"></i><span className="counter">15</span>+</h2>
                                            <h4 className="font-weight-300 m-t0">Years in Business</h4>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6 p-a30 wow zoomIn" data-wow-delay="0.4s">
                                            <h2 className="m-t0 m-b10 font-weight-400 font-45"><i className="flaticon-worker m-r10"></i><span className="counter">700</span>+</h2>
                                            <h4 className="font-weight-300 m-t0">Happy Clients</h4>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6 p-a30 wow zoomIn" data-wow-delay="0.6s">
                                            <h2 className="m-t0 m-b10 font-weight-400 font-45"><i className="flaticon-settings m-r10"></i><span className="counter">50</span>+</h2>
                                            <h4 className="font-weight-300 m-t0">Technical Experts</h4>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6 p-a30 wow zoomIn" data-wow-delay="0.8s">
                                            <h2 className="m-t0 m-b10 font-weight-400 font-45"><i className="flaticon-presentation m-r10"></i><span className="counter">200</span>+</h2>
                                            <h4 className="font-weight-300 m-t0">Apps Delivered</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-full content-inner wow fadeIn" data-wow-delay="0.4s">
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="title">Our Testimonials</h2>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                                </div>
                                <div className="section-content m-b30">
                                    <Testimonial1/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-full overlay-black-dark bg-img-fix" style={{ backgroundImage: "url(" + bg3 + ")" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-5 col-md-12 content-inner chosesus-content text-white">
                                        <h2 className="title-box font-weight-300 m-b15 wow fadeInLeft" data-wow-delay="0.2s">Let's get in touch <span className="bg-primary"></span></h2>
                                        <p className="font-16 op8 wow fadeInLeft" data-wow-delay="0.4s">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.</p>
                                        <h3 className="font-weight-300 m-b50 op6 wow fadeInLeft" data-wow-delay="0.6s">By 700+ customers for 3200+ Web and Mobile App development projects.</h3>
                                        <h4 className="font-weight-300 wow fadeInLeft" data-wow-delay="0.8s">& What you will get:</h4>
                                        <ul className="list-checked primary wow fadeInLeft" data-wow-delay="1s">
                                            <li><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
                                            <li><span>Random text. It has roots in a piece of classical Latin literature</span></li>
                                            <li><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-7 col-md-12 m-b30">
                                        <form className="inquiry-form contact-project bg-white box-shadow wow fadeInUp" data-wow-delay="0.2s">
                                            <h3 className="title-box font-weight-300 m-t0 m-b10">Let's Convert Your Idea into Reality <span className="bg-primary"></span></h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                            <div className="row">
                                                <div className="col-lg-6 col-sm-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-user text-primary"></i></span>
                                                            <input name="dzName" type="text" required className="form-control" placeholder="First Name"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-mobile text-primary"></i></span>
                                                            <input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Phone"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-sm-12">
                                                    <div className="form-group">
                                                        <div className="input-group"> 
                                                            <span className="input-group-addon"><i className="ti-email text-primary"></i></span>
                                                            <input name="dzEmail" type="email" className="form-control" required  placeholder="Your Email Id" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-check-box text-primary"></i></span>
                                                            <input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Upload File"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-file text-primary"></i></span>
                                                            <input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Upload File"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-sm-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-agenda text-primary"></i></span>
                                                            <textarea name="dzMessage" rows="4" className="form-control" required placeholder="Tell us about your project or idea"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-sm-12">
                                                    <button name="submit" type="submit" value="Submit" className="site-button button-lg"> <span>Get A Free Quote!</span> </button>
                                                </div>
                                            </div>
                                        </form>	
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
                <Footer/>                
            </>
        )
    }
}
export default Services1;