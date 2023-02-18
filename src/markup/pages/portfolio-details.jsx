import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('../../images/banner/bnr4.jpg')

class PortfolioDetails extends Component {


    render() {
        return (
            <>
                <Header/>
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Portfolio Detail</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to="/">Home</Link></li>
                                        <li>Portfolio</li>
                                        <li>Portfolio Detail</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="content-block">
                        <div className="section-full content-inner bg-white">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 m-b30">
                                        <h2 className="text-black font-weight-600 m-b15">Project Information</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.</p>
                                        <div className="row widget widget_getintuch widget_getintuch-pro-details m-lr0">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                                                <div className="pro-details">
                                                    <i className="ti ti-user"></i>
                                                    <strong>CLIENT</strong> Martin Stewart
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                                                <div className="pro-details">
                                                    <i className="ti ti-location-pin"></i>
                                                    <strong>LOCATION</strong>London, UK
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                                                <div className="pro-details">
                                                    <i className="ti ti-ruler-alt-2"></i>
                                                    <strong>SIZE</strong>1,200m<sup>2</sup>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                                                <div className="pro-details">
                                                    <i className="ti ti-home"></i>
                                                    <strong>TYPE</strong>Residential Project
                                                </div>
                                            </div>
                                        </div>
                                        <h2 className="text-black font-weight-600 m-b15">Scoope Of Work</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.</p>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="icon-bx-wraper m-b30 left">
                                                    <div className="icon-md"> 
                                                        <Link to="#" className="icon-cell text-primary">
                                                            <i className="flaticon-factory"></i>
                                                        </Link> 
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="dlab-tilte">Material Engineering</h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                                    </div>
                                                </div>
                                                <div className="icon-bx-wraper m-b30 left">
                                                    <div className="icon-md"> 
                                                        <Link to="#" className="icon-cell text-primary">
                                                            <i className="flaticon-settings"></i>
                                                        </Link> 
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="dlab-tilte">Chemical Research</h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                                    </div>
                                                </div>
                                                <div className="icon-bx-wraper left">
                                                    <div className="icon-md"> 
                                                        <Link to="#" className="icon-cell text-primary">
                                                            <i className="flaticon-worker"></i>
                                                        </Link> 
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="dlab-tilte">Petroleum Engineering</h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="row">
                                            <div className="col-lg-12 m-b30">
                                                <img alt="" src={require("../../images/about/pic3.jpg")}/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                                <img alt="" src={require("../../images/our-services/pic2.jpg")}/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                                <img alt="" src={require("../../images/our-services/pic3.jpg")}/>
                                            </div>
                                            <div className="col-lg-12 m-b30">
                                                <img alt="" src={require("../../images/about/about2.jpg")}/>
                                            </div>
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
export default PortfolioDetails;