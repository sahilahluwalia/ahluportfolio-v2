import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';



const Footer6 = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		//emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
		emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'd9b2e0f5fc72cb94792110e8ff2028f3-us16')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset()
	};	
    return (
        <>
            <footer className="site-footer">
                <div className="section-full p-t50 p-b20 bg-primary text-white overlay-primary-dark footer-info-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                                    <div className="icon-content">
                                        <h5 className="dlab-tilte">
                                            <span className="icon-sm"><i className="ti-location-pin"></i></span> 
                                            Company Address
                                        </h5>
                                        <p className="op7">Demo address #8901 Marmora Road Chi Minh City, Vietnam</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                                    <div className="icon-content">
                                        <h5 className="dlab-tilte">
                                            <span className="icon-sm"><i className="ti-email"></i></span> 
                                            E-mail
                                        </h5>
                                        <p className="m-b0 op7">info@example.com</p>
                                        <p className="op7">company@example.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 m-b30 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.3s">
                                <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                                    <div className="icon-content">
                                        <h5 className="dlab-tilte">
                                            <span className="icon-sm"><i className="ti-mobile"></i></span> 
                                            Phone Numbers
                                        </h5>
                                        <p className="m-b0 op7">Mobile : +00 123 456 7890</p>
                                        <p className="op7">Phone : +0 1234 5678 90</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                                    <div className="icon-content">
                                        <h5 className="dlab-tilte">
                                            <span className="icon-sm"><i className="ti-alarm-clock"></i></span> 
                                            Office Hours
                                        </h5>
                                        <p className="m-b0 op7">Mon To Sat - 08.00-18.00</p>
                                        <p className="op7">Sunday - Close</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeIn" data-wow-delay="0.2s">
                                <div className="widget border-0">
                                    <h6 className="m-b20 text-white font-weight-300 text-uppercase">Quick Links</h6>
                                    <ul className="list-2">
                                        <li><Link to="/about-1">About Us</Link></li>
                                        <li><Link to="/blog-grid-2">Blog</Link></li>
                                        <li><Link to="/services-1">Services</Link></li>
                                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link to="/portfolio-details">Projects </Link></li>
                                        <li><Link to="/help-desk">Help Desk </Link></li>
                                        <li><Link to="/shop">Shop</Link></li>
                                        <li><Link to="/contact-1">Contact</Link></li>
                                        <li><Link to="/portfolio-details">Portfolio</Link></li>
                                        <li><Link to="/team-1">Team</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeIn" data-wow-delay="0.4s">
                                <div className="widget">
                                    <h6 className="text-white font-weight-300 text-uppercase">Newsletter</h6>
                                    <div className="subscribe-form m-b20 m-t15">
                                        <form className="dzSubscribe" ref={form} onSubmit={sendEmail}>
                                            <div className="dzSubscribeMsg"></div>
                                            <div className="input-group">
                                                <input name="dzEmail" required="required" className="form-control radius-no" placeholder="Your Email Address" type="email"/>
                                                <span className="input-group-btn">
                                                    <button name="submit" value="Submit" type="submit" className="site-button btnhover15 radius-no">SEND</button>
                                                </span> 
                                            </div>
                                        </form>
                                    </div>
                                    <h6 className="m-b10 text-white font-weight-300 text-uppercase">Connect with us</h6>
                                    <ul className="list-inline m-a0">
                                        <li><Link to="#" className="site-button facebook sharp"><i className="fa fa-facebook"></i></Link></li>
                                        <li><Link to="#" className="site-button google-plus sharp"><i className="fa fa-google-plus"></i></Link></li>
                                        <li><Link to="#" className="site-button linkedin sharp"><i className="fa fa-linkedin"></i></Link></li>
                                        <li><Link to="#" className="site-button instagram sharp"><i className="fa fa-instagram"></i></Link></li>
                                        <li><Link to="#" className="site-button twitter sharp"><i className="fa fa-twitter"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12 wow fadeIn" data-wow-delay="0.6s">
                                <div className="icon-bx-wraper bx-style-1 m-b15 p-a30 radius-sm br-col-w1 bg-tpw1">
                                    <h5 className="text-white font-weight-300">Serving in 70+ countries for web, software and mobile app development</h5>
                                    <p>United States (USA), United Kingdom (UK), Singapore, Kenya, South Africa Germany, Canada, Australia, Netherlands, Norway, United Arab Emirates (UAE) , Finland etc. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 text-left "> <span>Copyright © 2022 DexignZone. all rights reserved.</span> </div>
                            <div className="col-md-6 col-sm-6 text-right "> 
                                <div className="widget-link "> 
                                    <ul>
                                        <li><Link to="/help-desk"> Help Desk</Link></li>
                                        <li><Link to="/privacy-policy">  Refund Policy</Link></li> 
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>                
        </>
    )
}
export default Footer6;