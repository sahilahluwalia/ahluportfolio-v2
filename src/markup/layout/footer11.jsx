import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const bg = require('../../images/background/bg2.png' )

class Footer11 extends Component {


    render() {
        return (
            <>
            <footer className="site-footer text-uppercase bg-white">
                <div className="social-curve wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                    <div className="container">
                        <ul className="social-icon list-inline m-b0">
                            <li><span className="title">Follow Us</span></li>
                            <li><Link tp="#" className="site-button-link facebook hover"><i className="fa fa-facebook"></i></Link></li>
                            <li><Link tp="#" className="site-button-link google-plus hover"><i className="fa fa-google-plus"></i></Link></li>
                            <li><Link tp="#" className="site-button-link linkedin hover"><i className="fa fa-linkedin"></i></Link></li>
                            <li><Link tp="#" className="site-button-link instagram hover"><i className="fa fa-instagram"></i></Link></li>
                            <li><Link tp="#" className="site-button-link twitter hover"><i className="fa fa-twitter"></i></Link></li>
                        </ul>
                    </div>
                </div>
                
                <div className="footer-top" style={{"backgroundImage": "url(" + bg + ")","backgroundSize":"contain"}}>
                    <div className="container saf-footer">
                        <div className="row">
                            <div className="col-md-6 col-lg-3 col-sm-6 footer-col-4">
                                <div className="widget widget_getintuch">
                                    <h5 className="m-b30 text-white ">Contact us</h5>
                                    <ul>
                                        <li><i className="ti-location-pin"></i><strong>address</strong> demo address #8901 Marmora Road Chi Minh City, Vietnam </li>
                                        <li><i className="ti-mobile"></i><strong>phone</strong>0987-123456 (24/7 Support Line)</li>
                                        <li><i className="ti-email"></i><strong>email</strong>info@example.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-6 col-5 footer-col-4">
                                <div className="widget widget_services border-0">
                                    <h5 className="m-b30 text-white">Company</h5>
                                    <ul>
                                        <li><Link tp="/about-1">About Us</Link></li>
                                        <li><Link tp="/blog-grid-2">Blog</Link></li>
                                        <li><Link tp="/services-1">Services</Link></li>
                                        <li><Link tp="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link tp="/portfolio-details">Projects </Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-6 col-7 footer-col-4">
                                <div className="widget widget_services border-0">
                                    <h5 className="m-b30 text-white">Useful Link</h5>
                                    <ul>
                                        <li><Link tp="/help-desk">Help Desk </Link></li>
                                        <li><Link tp="/shop">Shop</Link></li>
                                        <li><Link tp="/contact-1">Contact</Link></li>
                                        <li><Link tp="/portfolio-details">Portfolio</Link></li>
                                        <li><Link tp="/team-1">Team</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-6 footer-col-4">
                                <div className="widget widget_gallery gallery-grid-4">
                                    <h5 className="m-b30 text-white">Gallery</h5>
                                    <ul className="lightgallery">
                                        <li className="img-effect2"> 
                                            <span data-exthumbimage="images/gallery/pic1.jpg" data-src="images/gallery/pic1.jpg" className="check-km" title="Title Come here 1">
                                                <img src={require("../../images/gallery/gallery-min/pic1.jpg")} alt=""/>
                                            </span>
                                        </li>
                                        <li className="img-effect2"> 
                                            <span data-exthumbimage="images/gallery/pic2.jpg" data-src="images/gallery/pic2.jpg" className="check-km" title="Title Come here 2">
                                                <img src={require("../../images/gallery/gallery-min/pic2.jpg")} alt=""/>
                                            </span>
                                        </li>
                                        <li className="img-effect2"> 
                                            <span data-exthumbimage="images/gallery/pic3.jpg" data-src="images/gallery/pic2.jpg" className="check-km" title="Title Come here 3">
                                                <img src={require("../../images/gallery/gallery-min/pic3.jpg")} alt=""/>
                                            </span>
                                        </li>
                                        <li className="img-effect2"> 
                                            <span data-exthumbimage="images/gallery/pic4.jpg" data-src="images/gallery/pic2.jpg" className="check-km" title="Title Come here 4">
                                                <img src={require("../../images/gallery/gallery-min/pic4.jpg")} alt=""/>
                                            </span>
                                        </li>
                                        <li className="img-effect2"> 
                                            <span data-exthumbimage="images/gallery/pic5.jpg" data-src="images/gallery/pic2.jpg" className="check-km" title="Title Come here 5">
                                                <img src={require("../../images/gallery/gallery-min/pic5.jpg")} alt=""/>
                                            </span>
                                        </li>
                                        <li className="img-effect2"> 
                                            <span data-exthumbimage="images/gallery/pic6.jpg" data-src="images/gallery/pic2.jpg" className="check-km" title="Title Come here 6">
                                                <img src={require("../../images/gallery/gallery-min/pic6.jpg")} alt=""/>
                                            </span>
                                        </li>
                                        <li className="img-effect2"> 
                                            <span data-exthumbimage="images/gallery/pic7.jpg" data-src="images/gallery/pic2.jpg" className="check-km" title="Title Come here 7">
                                                <img src={require("../../images/gallery/gallery-min/pic7.jpg")} alt=""/>
                                            </span>
                                        </li>
                                        <li className="img-effect2"> 
                                            <span data-exthumbimage="images/gallery/pic8.jpg" data-src="images/gallery/pic2.jpg" className="check-km" title="Title Come here 8">
                                                <img src={require("../../images/gallery/gallery-min/pic8.jpg")} alt=""/>
                                            </span>
                                        </li>
                                        <li className="img-effect2"> 
                                            <span data-exthumbimage="images/gallery/pic9.jpg" data-src="images/gallery/pic2.jpg" className="check-km" title="Title Come here 9">
                                                <img src={require("../../images/gallery/gallery-min/pic9.jpg")} alt=""/>
                                            </span>
                                        </li>
                                        <li className="img-effect2"> 
                                            <span data-exthumbimage="images/gallery/pic10.jpg" data-src="images/gallery/pic2.jpg" className="check-km" title="Title Come here 10">
                                                <img src={require("../../images/gallery/gallery-min/pic10.jpg")} alt=""/>
                                            </span>
                                        </li>
                                        <li className="img-effect2"> 
                                            <span data-exthumbimage="images/gallery/pic1.jpg" data-src="images/gallery/pic1.jpg" className="check-km" title="Title Come here 11">
                                                <img src={require("../../images/gallery/gallery-min/pic1.jpg")} alt=""/>
                                            </span>
                                        </li>
                                        <li className="img-effect2"> 
                                            <span data-exthumbimage="images/gallery/pic2.jpg" data-src="images/gallery/pic2.jpg" className="check-km" title="Title Come here 12">
                                                <img src={require("../../images/gallery/gallery-min/pic2.jpg")} alt=""/>
                                            </span>
                                        </li>
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
                                        <li><Link tp="/help-desk"> Help Desk</Link></li> 
                                        <li><Link tp="/privacy-policy"> Privacy Policy</Link></li> 
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
}
export default Footer11;