import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Testimonial1 from '../element/testimonial1';


var bnr3 = require('./../../images/banner/bnr3.jpg');
var bg1 = require('./../../images/background/bg-video.png');
var bg2 = require('./../../images/background/bg1.jpg');

class About1 extends Component {


    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr3 + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry align-m text-center">
                                <h1 className="text-white">About us 1</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to={"/"}>Home</Link></li>
                                        <li>About us 1</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-block">
                        <div className="section-full content-inner bg-white video-section"  style={{ backgroundImage: "url(" + bg1 + ")" }}>
                            <div className="container">
                                <div className="section-content">
                                    <div className="row d-flex">
                                        <div className="col-lg-6 col-md-12 m-b30">
                                            <div className="video-bx">
                                                <img src={require('../../images/about/pic5.jpg')} alt="Signature" />
                                                <div className="video-play-icon">
                                                    <a href="https://www.youtube.com/watch?v=_FRZVScwggM" className="popup-youtube video bg-primary"><i className="fa fa-play"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 m-b30 align-self-center video-infobx">
                                            <div className="content-bx1">
                                                <h2 className="m-b15 title">A company involved in<br /><span className="text-primary"> service, maintenance</span></h2>
                                                <p className="m-b30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an.</p>
                                                <img src={require('../../images/sign.png')} width="200" alt="" />
                                                <h4 className="m-b0">Jone Doe</h4>
                                                <span className="font-14">Company Director</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full content-inner overlay-black-dark bg-img-fix" style={{ backgroundImage: "url(" + bg2 + ")" }}>
                            <div className="container">
                                <div className="section-content text-center text-white">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                            <div className="counter-style-5">
                                                <div className="">
                                                    <span className="counter">6810</span>
                                                </div>
                                                <span className="counter-text">Passionate Employee</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                            <div className="counter-style-5">
                                                <div className="">
                                                    <span className="counter">4060</span>
                                                </div>
                                                <span className="counter-text">Modern Factory</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                            <div className="counter-style-5">
                                                <div className="">
                                                    <span className="counter">3164</span>
                                                </div>
                                                <span className="counter-text">Factory in Worldwide</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                            <div className="counter-style-5">
                                                <div className="">
                                                    <span className="counter">1852</span>
                                                </div>
                                                <span className="counter-text">International Awards</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full text-center bg-gray content-inner">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2 className="title">Meet Our Team</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="dlab-box m-b30 dlab-team1">
                                            <div className="dlab-media">
                                                <Link to={"#"}>
                                                    <img width="358" height="460" alt="" src={require('../../images/our-team/pic1.jpg')} />
                                                </Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="dlab-title"><Link to={"#"}>Nashid Martines</Link></h4>
                                                <span className="dlab-position">Director</span>
                                                <ul className="dlab-social-icon dez-border">
                                                    <li><Link to={"#"} className="fa fa-facebook" ></Link></li>
                                                    <li><Link to={"#"} className="fa fa-twitter" ></Link></li>
                                                    <li><Link to={"#"} className="fa fa-linkedin" ></Link></li>
                                                    <li><Link to={"#"} className="fa fa-pinterest" ></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="dlab-box m-b30 dlab-team1">
                                            <div className="dlab-media">
                                                <Link to={"#"}>
                                                    <img width="358" height="460" alt="" src={require('../../images/our-team/pic2.jpg')} />
                                                </Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="dlab-title"><Link to={"#"}>Konne Backfield</Link></h4>
                                                <span className="dlab-position">Designer</span>
                                                <ul className="dlab-social-icon dez-border">
                                                    <li><Link to={"#"} className="fa fa-facebook" ></Link></li>
                                                    <li><Link to={"#"} className="fa fa-twitter" ></Link></li>
                                                    <li><Link to={"#"} className="fa fa-linkedin"></Link></li>
                                                    <li><Link to={"#"} className="fa fa-pinterest"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="dlab-box m-b30 dlab-team1">
                                            <div className="dlab-media">
                                                <Link to={"#"}>
                                                    <img width="358" height="460" alt="" src={require('../../images/our-team/pic3.jpg')} />
                                                </Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="dlab-title"><Link to={"#"}>Hackson Willingham</Link></h4>
                                                <span className="dlab-position">Developer</span>
                                                <ul className="dlab-social-icon dez-border">
                                                    <li><Link to={"#"} className="fa fa-facebook" ></Link></li>
                                                    <li><Link to={"#"} className="fa fa-twitter"  ></Link></li>
                                                    <li><Link to={"#"} className="fa fa-linkedin" ></Link></li>
                                                    <li><Link to={"#"} className="fa fa-pinterest"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="dlab-box m-b30 dlab-team1">
                                            <div className="dlab-media">
                                                <Link to={"#"}>
                                                    <img width="358" height="460" alt="" src={require('../../images/our-team/pic4.jpg')} />
                                                </Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="dlab-title"><Link to={"#"}>Konne Backfield</Link></h4>
                                                <span className="dlab-position">Manager</span>
                                                <ul className="dlab-social-icon dez-border">
                                                    <li><Link to={"#"} className="fa fa-facebook" ></Link></li>
                                                    <li><Link to={"#"} className="fa fa-twitter"  ></Link></li>
                                                    <li><Link to={"#"} className="fa fa-linkedin" ></Link></li>
                                                    <li><Link to={"#"} className="fa fa-pinterest"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-full content-inner-2 bg-white">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2 className="title">Pricing Table</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div className="section-content box-sort-in button-example pricingtable-style2-area m-t80">
                                    <div className="pricingtable-row">
                                        <div className="row max-w1000 m-auto">
                                            <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                <div className="pricingtable-wrapper style2 bg-white">
                                                    <div className="pricingtable-inner">
                                                        <div className="pricingtable-price">
                                                            <h4 className="font-weight-300 m-t10 m-b0">Basic</h4>
                                                            <div className="pricingtable-bx"><span>Free</span></div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
                                                        <div className="m-t20">
                                                            <Link to={"#"} className="site-button radius-xl"><span className="p-lr30">Sign Up</span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                <div className="pricingtable-wrapper style2 bg-primary text-white active">
                                                    <div className="pricingtable-inner">
                                                        <div className="pricingtable-price">
                                                            <h4 className="font-weight-300 m-t10 m-b0">Professional</h4>
                                                            <div className="pricingtable-bx"> $ <span>29</span> /  Per Installation </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
                                                        <div className="m-t20">
                                                            <Link to={"#"} className="site-button white radius-xl"><span className="p-lr30">Sign Up</span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                <div className="pricingtable-wrapper style2 bg-white">
                                                    <div className="pricingtable-inner">
                                                        <div className="pricingtable-price">
                                                            <h4 className="font-weight-300 m-t10 m-b0">Extended</h4>
                                                            <div className="pricingtable-bx"> $  <span>29</span> /  Per Installation </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
                                                        <div className="m-t20">
                                                            <Link to={"#"} className="site-button radius-xl"><span className="p-lr30">Sign Up</span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-full content-inner-2 bg-gray">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2 className="title">Happy Customers Said</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <Testimonial1/>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        )
    }
}

export default About1;