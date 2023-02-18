import React, {  } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Footer15 = () => {
	//const form = useRef();
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
            <footer className="site-footer footer-gray-1">
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
                                    <h6 className="m-b20 text-white font-weight-300 text-uppercase">Newsletter</h6>
                                    <div className="subscribe-form m-b20 m-t30">
                                        <form className="dzSubscribe" onSubmit={sendEmail}>
                                            <div className="dzSubscribeMsg"></div>
                                            <div className="input-group">
                                                <input name="dzEmail" required="required" className="form-control radius-no" placeholder="Your Email Id" type="email"/>
                                                <span className="input-group-btn">
                                                    <button name="submit" value="Submit" type="submit" className="site-button btnhover20 radius-no">SEND</button>
                                                </span> 
                                            </div>
                                        </form>
                                    </div>
                                    <h6 className="m-b10 text-white font-weight-300 text-uppercase">Connect with us</h6>
                                    <ul className="list-inline m-a0">
                                        <li><Link to="#" className="site-button btnhover20 facebook sharp"><i className="fa fa-facebook"></i></Link></li>
                                        <li><Link to="#" className="site-button btnhover20 google-plus sharp"><i className="fa fa-google-plus"></i></Link></li>
                                        <li><Link to="#" className="site-button btnhover20 linkedin sharp"><i className="fa fa-linkedin"></i></Link></li>
                                        <li><Link to="#" className="site-button btnhover20 instagram sharp"><i className="fa fa-instagram"></i></Link></li>
                                        <li><Link to="#" className="site-button btnhover20 twitter sharp"><i className="fa fa-twitter"></i></Link></li>
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
export default Footer15;