import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Footer8 extends Component {


    render() {
        return (
            <>
            <footer className="site-footer frame-box ">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-lg-5">
                                <div className="widget widget_getintuch">
                                    <h4 className="footer-title">Registered Office Address: </h4>
                                    <ul className="info-contact">
                                        <li>
                                            <span>
                                                <i className="fa fa-map-marker"></i> Demo address #8901 marmora road chi minh city, vietnam demo address #8901 marmora road chi minh city, vietnam
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-3">
                                <div className="widget">
                                    <h4 className="footer-title">Contact Info</h4>
                                    <ul className="ft-contact">
                                        <li>Telephone: <span>+91 123 456 7890</span></li>
                                        <li>Mobile: <span>+91 123 456 7890</span></li>
                                        <li>E Email: <Link to="#">exemple@gmail.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-4">
                                <div className="widget">
                                    <h4 className="footer-title">Follow Us</h4>
                                    <ul className="ft-social">
                                        <li><Link to="#" className="site-button facebook sharp"><i className="fa fa-facebook"></i></Link></li>
                                        <li><Link to="#" className="site-button linkedin sharp"><i className="fa fa-linkedin"></i></Link></li>
                                        <li><Link to="#" className="site-button twitter sharp"><i className="fa fa-twitter"></i></Link></li>
                                        <li><Link to="#" className="site-button instagram sharp"><i className="fa fa-instagram"></i></Link></li>
                                        <li><Link to="#" className="site-button whatsapp sharp"><i className="fa fa-whatsapp"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">Copyright © All rights reserved. 2022</div>
                        </div>
                    </div>
                </div>
            </footer>                
            </>
        )
    }
}
export default Footer8;