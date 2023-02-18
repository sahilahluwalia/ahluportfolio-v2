import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const bg = require('../../images/background/bg16.jpg' )

const Footer12 = ()=>{
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
                <div className="footer-top overlay-black-light" style={{ backgroundImage: "url(" + bg + ")" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xl-5 col-lg-4 col-sm-8 footer-col-4">
                                <div className="widget">
                                    <h5 className="m-b30 text-white">Subscribe To Our Newsletter</h5>
                                    <p className="text-capitalize m-b20">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the..</p>
                                    <div className="subscribe-form m-b20">
                                        <form className="dzSubscribe" ref={form} onSubmit={sendEmail}>
                                            <div className="dzSubscribeMsg"></div>
                                            <div className="input-group">
                                                <input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email"/>
                                                <span className="input-group-btn">
                                                    <button name="submit" value="Submit" type="submit" className="site-button btnhover20 radius-xl">Subscribe</button>
                                                </span> 
                                            </div>
                                        </form>
                                    </div>
                                    <ul className="list-inline m-a0">
                                        <li><Link to="#" className="site-button btnhover20 facebook circle "><i className="fa fa-facebook"></i></Link></li>
                                        <li><Link to="#" className="site-button btnhover20 google-plus circle "><i className="fa fa-google-plus"></i></Link></li>
                                        <li><Link to="#" className="site-button btnhover20 linkedin circle "><i className="fa fa-linkedin"></i></Link></li>
                                        <li><Link to="#" className="site-button btnhover20 instagram circle "><i className="fa fa-instagram"></i></Link></li>
                                        <li><Link to="#" className="site-button btnhover20 twitter circle "><i className="fa fa-twitter"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-5 col-xl-2 col-lg-2 col-sm-4 footer-col-4">
                                <div className="widget widget_services border-0">
                                    <h5 className="m-b30 text-white">Company</h5>
                                    <ul>
                                        <li><Link to="/about-1">About Us</Link></li>
                                        <li><Link to="/blog-grid-2">Blog</Link></li>
                                        <li><Link to="/services-1">Services</Link></li>
                                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link to="/portfolio-details">Projects </Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-7 col-xl-2 col-lg-3 col-sm-6 footer-col-4">
                                <div className="widget widget_services border-0">
                                    <h5 className="m-b30 text-white">Useful Link</h5>
                                    <ul>
                                        <li><Link to="/help-desk">Help Desk </Link></li>
                                        <li><Link to="/shop">Shop</Link></li>
                                        <li><Link to="/contact-1">Contact</Link></li>
                                        <li><Link to="/portfolio-details">Portfolio</Link></li>
                                        <li><Link to="/team-1">Team</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3 col-lg-3 col-sm-6 footer-col-4">
                                <div className="widget widget_getintuch">
                                    <h5 className="m-b30 text-white ">Contact us</h5>
                                    <ul>
                                        <li><i className="ti-location-pin"></i><strong>address</strong> demo address #8901 Marmora Road Chi Minh City, Vietnam </li>
                                        <li><i className="ti-mobile"></i><strong>phone</strong>0987-123456 (24/7 Support Line)</li>
                                        <li><i className="ti-email"></i><strong>email</strong>info@example.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 text-left "> <span>Copyright © 2022 DexignZone</span> </div>
                            <div className="col-md-6 col-sm-6 text-right "> 
                                <div className="widget-link "> 
                                    <ul>
                                        <li><Link to="/about-2"> About</Link></li> 
                                        <li><Link to="/help-desk"> Help Desk</Link></li> 
                                        <li><Link to="/privacy-policy"> Privacy Policy</Link></li> 
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
export default Footer12;