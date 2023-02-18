import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Footer7 extends Component {


    render() {
        return (
            <>
            <footer className="site-footer footer-full text-white">
                <div className="p-tb60 bg-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-md-start text-center footer-logo">
                                <img src={require("../../images/logo-light.png")} alt="" width="100"/>
                                <p className="m-b0 m-t10">Copyright &copy; 2022 DexignZone</p>
                            </div>
                            <div className="col-md-6 text-md-end text-center">
                                <div className="widget-link "> 
                                    <ul>
                                        <li><Link to="/">Home</Link></li> 
                                        <li><Link to="/about-2">About us</Link></li> 
                                        <li><Link to="/help-desk">Help Desk</Link></li> 
                                        <li><Link to="/privacy-policy">Privacy Policy</Link></li> 
                                        <li><Link to="/contact-1">Contact Us</Link></li> 
                                    </ul>
                                </div>
                                <ul className="list-inline m-b0 m-t10">
                                    <li><Link to="#" className="site-button-link facebook hover"><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link to="#" className="site-button-link google-plus hover"><i className="fa fa-google-plus"></i></Link></li>
                                    <li><Link to="#" className="site-button-link linkedin hover"><i className="fa fa-linkedin"></i></Link></li>
                                    <li><Link to="#" className="site-button-link instagram hover"><i className="fa fa-instagram"></i></Link></li>
                                    <li><Link to="#" className="site-button-link twitter hover"><i className="fa fa-twitter"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>                
            </>
        )
    }
}
export default Footer7;