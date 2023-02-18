import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr3 = require('./../../images/banner/bnr3.jpg');

class About2 extends Component {


    render() {
        return (
            <>
                <Header/>
                
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bnr3 + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">About us 2</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to={"/"}>Home</Link></li>
                                        <li>About us 2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="content-block">
                        <div className="section-full content-inner bg-white">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12 m-b30">
                                        <div className="our-story">
                                            <span>OUR STORY</span>
                                            <h2 className="title">Running a <br/>successful business <br/><span className="text-primary">since 1955</span></h2>
                                            <h4 className="title">Industrial engineering is a branch of engineering which deals with the optimization.</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting Factory. Lorem Ipsum has been the Factory's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting Factory.</p>
                                            <Link to={"/#"} className="site-button">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 m-b30 our-story-thum">
                                        <img src={require("../../images/about/pic6.jpg")} className="radius-sm" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-full box-about-list">
                            <div className="row spno">
                                <div className="col-lg-6 col-md-12"> 
                                    <img src={require("../../images/about/pic3.jpg")} alt="" className="img-cover"/> 
                                </div>
                                <div className="col-lg-6 col-md-12 bg-primary">
                                    <div className="max-w700 m-auto p-tb50 p-lr20">
                                        <div className="text-white">
                                            <h2>We're thriving and building <br/>better products</h2>
                                        </div>
                                        <div className="icon-bx-wraper m-b30 left">
                                            <div className="icon-md"> 
                                                <Link to={"/#"} className="icon-cell text-white">
                                                    <i className="flaticon-factory"></i>
                                                </Link> 
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-tilte">Material Engineering</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                            </div>
                                        </div>
                                        <div className="icon-bx-wraper m-b30 left">
                                            <div className="icon-md"> 
                                                <Link to={"/#"} className="icon-cell text-white">
                                                    <i className="flaticon-settings"></i>
                                                </Link> 
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-tilte">Chemical Research</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                            </div>
                                        </div>
                                        <div className="icon-bx-wraper left">
                                            <div className="icon-md"> 
                                                <Link to={"/#"} className="icon-cell text-white">
                                                    <i className="flaticon-worker"></i>
                                                </Link> 
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dlab-tilte">Petroleum Engineering</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-full bg-gray content-inner">
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="title"> Our Services</h2>
                                    <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                                </div>
                                <div className="section-content row">
                                    <div className="col-xl-4 col-md-6 col-sm-12 service-box style3">
                                        <div className="icon-bx-wraper" data-name="01">
                                            <div className="icon-lg">
                                                <Link to={"/#"} className="icon-cell"><i className="flaticon-robot-arm"></i></Link>
                                            </div>
                                            <div className="icon-content">
                                                <h2 className="dlab-tilte">Mechanical Works</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 service-box style3">
                                        <div className="icon-bx-wraper" data-name="02">
                                            <div className="icon-lg">
                                                <Link to={"/#"} className="icon-cell"><i className="flaticon-factory-1"></i></Link>
                                            </div>
                                            <div className="icon-content">
                                                <h2 className="dlab-tilte">Power & Energy</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 service-box style3">
                                        <div className="icon-bx-wraper" data-name="03">
                                            <div className="icon-lg">
                                                <Link to={"/#"} className="icon-cell"><i className="flaticon-fuel-station"></i></Link>
                                            </div>
                                            <div className="icon-content">
                                                <h2 className="dlab-tilte">Petroleum Refinery</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 service-box style3">
                                        <div className="icon-bx-wraper" data-name="04">
                                            <div className="icon-lg">
                                                <Link to={"/#"} className="icon-cell"><i className="flaticon-fuel-truck"></i></Link>
                                            </div>
                                            <div className="icon-content">
                                                <h2 className="dlab-tilte">Oil & Gas Industry</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 service-box style3">
                                        <div className="icon-bx-wraper" data-name="05">
                                            <div className="icon-lg">
                                                <Link to={"/#"} className="icon-cell"><i className="flaticon-conveyor-1"></i></Link>
                                            </div>
                                            <div className="icon-content">
                                                <h2 className="dlab-tilte">Automative Manufacturing</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 service-box style3">
                                        <div className="icon-bx-wraper" data-name="06">
                                            <div className="icon-lg">
                                                <Link to={"/#"} className="icon-cell"><i className="flaticon-engineer-1"></i></Link>
                                            </div>
                                            <div className="icon-content">
                                                <h2 className="dlab-tilte">Chemical Research</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-full about-progress">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-7 col-md-12 bg-white">
                                        <div className="max-w700  m-auto content-inner">
                                            <div className="section-head">
                                                <h2 className="title">We provide the exceptional service we'd want to experience ourselves</h2>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                                            </div>
                                            <div className="about-progress-box">
                                                <h6 className="text-primary">Web Development<span className="progress-num pull-right">85%</span></h6>
                                                <div className="about-progress-bar bg-gray-dark">
                                                    <div className="about-progress bg-primary wow slideInLeft" data-wow-delay="0.2s" data-wow-duration="2s" style={{width:"85%"}}></div>
                                                </div>
                                            </div>
                                            <div className="about-progress-box">
                                                <h6 className="text-primary">Web Designer<span className="progress-num pull-right">80%</span></h6>
                                                <div className="about-progress-bar bg-gray-dark">
                                                    <div className="about-progress bg-primary wow slideInLeft" data-wow-delay="0.4s" data-wow-duration="2s" style={{width:"85%"}}></div>
                                                </div>
                                            </div>
                                            <div className="about-progress-box">
                                                <h6 className="text-primary">Performance<span className="progress-num pull-right">75%</span></h6>
                                                <div className="about-progress-bar bg-gray-dark">
                                                    <div className="about-progress bg-primary wow slideInLeft" data-wow-delay="0.6s" data-wow-duration="2s" style={{width:"85%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-12 p-a0">
                                        <img src={require("../../images/about/pic5.jpg")} alt="" className="img-cover "/> 
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
export default About2;