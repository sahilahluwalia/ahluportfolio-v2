import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('../../images/banner/bnr2.jpg')

class Services2 extends Component {


    render() {
        return (
            <>
                <Header/>
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle bg-pt"  style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Services 2</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to="/">Home</Link></li>
                                        <li>Services 2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="content-block">
                        <div className="section-full content-inner-2 bg-primary overlay-primary-middle">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 service-main-title text-white text-center">
                                        <h3 className="title max-w700 m-auto">To others what may appear the impossible, becomes possible with Uncode.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-full">
                            <div className="row spno about-industry">
                                <div className="col-lg-8">
                                    <img src={require("../../images/our-work/oilgas/pic1.jpg")} alt="" className="img-cover"/>
                                </div>
                                <div className="col-lg-4 bg-white">
                                    <div className="service-box style2">
                                        <div>
                                            <h2 className="title text-black"><span>Mechanical</span> <br/>Works</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <Link to="#" className="site-button outline outline-2">ABOUT US</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <img src={require("../../images/our-work/oilgas/pic2.jpg")} alt="" className="img-cover"/>
                                </div>
                                <div className="col-lg-4 bg-secondry text-white">
                                    <div className="service-box style2">
                                        <div>
                                            <h2 className="title"><span>Power &  </span> <br/>Energy.</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <Link to="#" className="site-button outline white outline-2">ABOUT US</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <img src={require("../../images/our-work/oilgas/pic3.jpg")} alt="" className="img-cover"/>
                                </div>
                                <div className="col-lg-4 bg-primary text-white">
                                    <div className="service-box style2">
                                        <div>
                                            <h2 className="title"><span>Petroleum  </span> <br/>Refinery.</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <Link to="#" className="site-button outline white outline-2">ABOUT US</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <img src={require("../../images/our-work/oilgas/pic4.jpg")} alt="" className="img-cover"/>
                                </div>
                                <div className="col-lg-4 bg-primary text-white">
                                    <div className="service-box style2">
                                        <div>
                                            <h2 className="title"><span>Oil & Gas  </span> <br/>Industry.</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <Link to="#" className="site-button outline white outline-2">ABOUT US</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 bg-white">
                                    <div className="service-box style2">
                                        <div>
                                            <h2 className="title text-black"><span>Automative  </span> <br/>Manufacturing.</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <Link to="#" className="site-button outline outline-2">ABOUT US</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <img src={require("../../images/our-work/oilgas/pic5.jpg")} alt="" className="img-cover"/>
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
export default Services2;