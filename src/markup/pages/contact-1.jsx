import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('../../images/background/bg5.jpg')


class Contact1 extends Component {


    render() {
        return (
            <>
                <Header/>
                <div className="page-content bg-white">
                    <div className="section-full content-inner contact-page-9 overlay-black-dark" style={{ background: "url(" + bg + ") 30% 100%" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 text-white">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 m-b30">
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary"><i className="ti-location-pin"></i></span> 
                                                        Company Address
                                                    </h5>
                                                    <p>007 Dummy Ashoka Apartment, Gautam Marg, Rani Sati Nagar,Jaipur / India </p>
                                                    <h6 className="m-b15 font-weight-400"><i className="ti-alarm-clock"></i> Office Hours</h6>
                                                    <p className="m-b0">Mon To Sat - 10.00 - 07.00</p>
                                                    <p>Sunday - Close</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 m-b30">
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary"><i className="ti-email"></i></span> 
                                                        E-mail
                                                    </h5>
                                                    <p className="m-b0">info@example.com</p>
                                                    <p className="m-b0">hr@example.com</p>
                                                    <p className="m-b0">support@example.com</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 m-b30">
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary"><i className="ti-mobile"></i></span> 
                                                        Phone Numbers
                                                    </h5>
                                                    <p className="m-b0">+91-12345-67890</p>
                                                    <p className="m-b0">+91-12345-67890</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12 m-b30">
                                    <form className="inquiry-form wow box-shadow bg-white fadeInUp" data-wow-delay="0.2s">
                                        <h3 className="title-box font-weight-300 m-t0 m-b10">Let's Convert Your Idea into Reality <span className="bg-primary"></span></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-user text-primary"></i></span>
                                                        <input name="dzName" type="text" required className="form-control" placeholder="First Name"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-mobile text-primary"></i></span>
                                                        <input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Phone"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <div className="input-group"> 
                                                        <span className="input-group-addon"><i className="ti-email text-primary"></i></span>
                                                        <input name="dzEmail" type="email" className="form-control" required  placeholder="Your Email Id" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-check-box text-primary"></i></span>
                                                        <select className="input-select form-control">
                                                            <option>Select Industry</option>
                                                            <option>Oil/Gas Plant</option>
                                                            <option>Steel Plant</option>
                                                            <option>Factory</option>
                                                            <option>Construct</option>
                                                            <option>Solar Plant</option>
                                                            <option>Food Industry</option>
                                                            <option>Agriculture</option>
                                                            <option>Ship Industry</option>
                                                            <option>Leather Industry</option>
                                                            <option>Nuclear Plant</option>
                                                            <option>Beer Factory</option>
                                                            <option>Mining Industry</option>
                                                            <option>Car Industry</option>
                                                            <option>Plastic Industry</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-file text-primary"></i></span>
                                                        <input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Upload File"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-agenda text-primary"></i></span>
                                                        <textarea name="dzMessage" rows="4" className="form-control" required placeholder="Tell us about your project or idea"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <button name="submit" type="submit" value="Submit" className="site-button button-md"> <span>Get A Free Quote!</span> </button>
                                            </div>
                                        </div>
                                    </form>	
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
export default Contact1;