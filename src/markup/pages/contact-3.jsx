import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('../../images/banner/bnr1.jpg')

class Contact3 extends Component {


    render() {
        return (
            <>
                <Header/>
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Contact Us 3</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to="/index">Home</Link></li>
                                        <li>Contact Us 3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full content-inner bg-white contact-style-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 d-flex m-b30">
                                    <div className="p-a30 border contact-area border-1 align-self-stretch radius-sm">
                                        <h3 className="m-b5">Quick Contact</h3>
                                        <p>If you have any questions simply use the following contact details.</p>
                                        <ul className="no-margin">
                                            <li className="icon-bx-wraper left m-b30">
                                                <div className="icon-bx-xs border-1"> <Link to="/#" className="icon-cell"><i className="ti-location-pin"></i></Link> </div>
                                                <div className="icon-content">
                                                    <h6 className="text-uppercase m-tb0 dlab-tilte">Address:</h6>
                                                    <p>123 West Street, Melbourne Victoria 3000 Australia</p>
                                                </div>
                                            </li>
                                            <li className="icon-bx-wraper left  m-b30">
                                                <div className="icon-bx-xs border-1"> <Link to="/#" className="icon-cell"><i className="ti-email"></i></Link> </div>
                                                <div className="icon-content">
                                                    <h6 className="text-uppercase m-tb0 dlab-tilte">Email:</h6>
                                                    <p>info@example.com</p>
                                                </div>
                                            </li>
                                            <li className="icon-bx-wraper left">
                                                <div className="icon-bx-xs border-1"> <Link to="/#" className="icon-cell"><i className="ti-mobile"></i></Link> </div>
                                                <div className="icon-content">
                                                    <h6 className="text-uppercase m-tb0 dlab-tilte">PHONE</h6>
                                                    <p>+61 3 1234 6789</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="m-t20">
                                            <ul className="dlab-social-icon border dlab-social-icon-lg">
                                                <li><Link to="/#" className="fa fa-facebook bg-primary"></Link></li>
                                                <li><Link to="/#" className="fa fa-twitter bg-primary"></Link></li>
                                                <li><Link to="/#" className="fa fa-linkedin bg-primary"></Link></li>
                                                <li><Link to="/#" className="fa fa-pinterest-p bg-primary"></Link></li>
                                                <li><Link to="/#" className="fa fa-google-plus bg-primary"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6  mb-4 m-b30 mb-md-0">
                                    <div className="p-a30 bg-gray clearfix radius-sm">
                                        <h3 className="m-b10">Send Message Us</h3>
                                        <div className="dzFormMsg"></div>
                                        <form method="post" className="dzForm" action="script/contact.php">
                                        <input type="hidden" value="Contact" name="dzToDo" />
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <input name="dzName" type="text" required className="form-control" placeholder="Your Name"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <div className="input-group"> 
                                                            <input name="dzEmail" type="email" className="form-control" required  placeholder="Your Email Id" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <textarea name="dzMessage" rows="4" className="form-control" required placeholder="Your Message..."></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                                            <input className="form-control d-none" style={{display:"none"}} data-recaptcha="true" required data-error="Please complete the Captcha"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <button name="submit" type="submit" value="Submit" className="site-button "> <span>Submit</span> </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 d-flex m-b30">
                                    <iframe title="map2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1500819483219" className="align-self-stretch radius-sm" style={{border:"0",width:"100%",minHeight:"100%"}} allowfullscreen></iframe>
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
export default Contact3 ;