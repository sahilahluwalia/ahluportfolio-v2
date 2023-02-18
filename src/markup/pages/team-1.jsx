import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ClientSlider1 from '../element/clientSlider1';

const bg = require('../../images/banner/bnr4.jpg')

class Team1 extends Component {


    render() {
        return (
            <>
                <Header/>
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle bg-pt"  style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Team</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to="/">Home</Link></li>
                                        <li>Team</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="content-block">
                        <div className="section-full content-inner">
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
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="dlab-box m-b30 dlab-team1">
                                            <div className="dlab-media">
                                                <Link to="#">
                                                    <img width="358" height="460" alt="" src={require("../../images/our-team/pic5.jpg")}/>
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
                                                    <img width="358" height="460" alt="" src={require("../../images/our-team/pic6.jpg")}/>
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
                                                    <img width="358" height="460" alt="" src={require("../../images/our-team/pic7.jpg")}/>
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
                                                    <img width="358" height="460" alt="" src={require("../../images/our-team/pic8.jpg")}/>
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
                        
                        <div className="section-full content-inner bg-gray">
                            <div className="container">
                                <ClientSlider1
                                hideBorder
                                allowPadding
                                />
                            </div>
                        </div>
                    </div>
                </div>                
                <Footer/>                
            </>
        )
    }
}
export default Team1;