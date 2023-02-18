import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import TeamSlider3 from '../element/teamSlider3';

const bg = require('../../images/banner/bnr3.jpg')
const bg2 = require('../../images/background/bg4.jpg')

class Team2 extends Component {


    render() {
        return (
            <>
                <Header/>
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Team 2</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to="/">Home</Link></li>
                                        <li>Team 2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="content-block">
                        <div className="section-full text-center bg-white content-inner">
                            <div className="container">	
                                <div className="section-head text-black text-center">
                                    <h2 className="title">Meet Our Team</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="dlab-box m-b30 dlab-team1">
                                            <div className="dlab-media">
                                                <Link to="#">
                                                    <img width="358" height="460" alt="" src={require("../../images/our-team/pic1.jpg")}/>
                                                </Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="dlab-title"><Link to="#">Nashid Martines</Link></h4>
                                                <span className="dlab-position">Director</span>
                                                <ul className="dlab-social-icon dez-border">
                                                    <li><Link className="fa fa-facebook" to="#"></Link></li>
                                                    <li><Link className="fa fa-twitter" to="#"></Link></li>
                                                    <li><Link className="fa fa-linkedin" to="#"></Link></li>
                                                    <li><Link className="fa fa-pinterest" to="#"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="dlab-box m-b30 dlab-team1">
                                            <div className="dlab-media">
                                                <Link to="#">
                                                    <img width="358" height="460" alt="" src={require("../../images/our-team/pic2.jpg")}/>
                                                </Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="dlab-title"><Link to="#">Konne Backfield</Link></h4>
                                                <span className="dlab-position">Designer</span>
                                                <ul className="dlab-social-icon dez-border">
                                                    <li><Link className="fa fa-facebook" to="#"></Link></li>
                                                    <li><Link className="fa fa-twitter" to="#"></Link></li>
                                                    <li><Link className="fa fa-linkedin" to="#"></Link></li>
                                                    <li><Link className="fa fa-pinterest" to="#"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="dlab-box m-b30 dlab-team1">
                                            <div className="dlab-media">
                                                <Link to="#">
                                                    <img width="358" height="460" alt="" src={require("../../images/our-team/pic3.jpg")}/>
                                                </Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="dlab-title"><Link to="#">Hackson Willingham</Link></h4>
                                                <span className="dlab-position">Developer</span>
                                                <ul className="dlab-social-icon dez-border">
                                                    <li><Link className="fa fa-facebook" to="#"></Link></li>
                                                    <li><Link className="fa fa-twitter" to="#"></Link></li>
                                                    <li><Link className="fa fa-linkedin" to="#"></Link></li>
                                                    <li><Link className="fa fa-pinterest" to="#"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="dlab-box m-b30 dlab-team1">
                                            <div className="dlab-media">
                                                <Link to="#">
                                                    <img width="358" height="460" alt="" src={require("../../images/our-team/pic4.jpg")}/>
                                                </Link>
                                            </div>
                                            <div className="dlab-info">
                                                <h4 className="dlab-title"><Link to="#">Konne Backfield</Link></h4>
                                                <span className="dlab-position">Manager</span>
                                                <ul className="dlab-social-icon dez-border">
                                                    <li><Link className="fa fa-facebook" to="#"></Link></li>
                                                    <li><Link className="fa fa-twitter" to="#"></Link></li>
                                                    <li><Link className="fa fa-linkedin" to="#"></Link></li>
                                                    <li><Link className="fa fa-pinterest" to="#"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-full overlay-black-dark bg-img-fix text-white content-inner" style={{ backgroundImage: "url(" + bg2 + ")" }}>
                            <div className="container">
                                <div className="section-content">
                                    <div className="row sp20">
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                            <div className="icon-bx-wraper center counter-style-5">
                                                <div className="icon-xl m-b20">
                                                    <span className="icon-cell"><i className="flaticon-worker"></i></span>
                                                </div>
                                                <div className="icon-content">
                                                    <div className="dlab-separator bg-primary"></div>
                                                    <h2 className="dlab-tilte counter">1226</h2>
                                                    <p>Happy Client</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                            <div className="icon-bx-wraper center counter-style-5">
                                                <div className="icon-xl m-b20">
                                                    <span className="icon-cell"><i className="flaticon-settings"></i></span>
                                                </div>
                                                <div className="icon-content">
                                                    <div className="dlab-separator bg-primary"></div>
                                                    <h2 className="dlab-tilte counter">1551</h2>
                                                    <p>Workers Hand</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                            <div className="icon-bx-wraper center counter-style-5">
                                                <div className="icon-xl m-b20">
                                                    <span className="icon-cell"><i className="flaticon-conveyor-1"></i></span>
                                                </div>
                                                <div className="icon-content">
                                                    <div className="dlab-separator bg-primary"></div>
                                                    <h2 className="dlab-tilte counter">1156</h2>
                                                    <p>Active Experts</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                            <div className="icon-bx-wraper center counter-style-5">
                                                <div className="icon-xl m-b20">
                                                    <span className="icon-cell"><i className="flaticon-analytics"></i></span>
                                                </div>
                                                <div className="icon-content">
                                                    <div className="dlab-separator bg-primary"></div>
                                                    <h2 className="dlab-tilte counter">1302</h2>
                                                    <p>Completed Projects</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-full text-center bg-white content-inner-2">
                            <div className="container">	
                                <div className="section-head text-black text-center">
                                    <h2 className="title">Meet Our Team</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <TeamSlider3/>
                            </div>
                        </div>
                        
                        <div className="section-full p-b80">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="text-center max-w600 m-auto ">
                                            <div className="m-b20"><i className="fa fa-quote-left font-45 text-primary"></i></div>
                                            <h4 className="text-uppercase font-weight-700 font-30">We would love to hear about start your new project?</h4>
                                            <Link to="#" className="site-button radius-xl outline outline-2"><span className="p-lr10">Start New Projects</span></Link>
                                        </div>
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
export default Team2;