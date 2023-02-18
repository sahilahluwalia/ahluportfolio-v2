import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('../../images/banner/bnr2.jpg')

class ServicesDetails extends Component {


    render() {
        return (
            <>
                <Header/>
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Service Details</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to="/">Home</Link></li>
                                        <li>Service</li>
                                        <li>Service Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="content-block">
                        <div className="section-full content-inner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-5">
                                        <div className="widget sidebar-widget ext-sidebar-menu widget_nav_menu">
                                            <ul className="menu">
                                                <li><Link to="#">all services</Link> </li>
                                                <li className="active"><Link to="#">engine diagnostics</Link>  </li>
                                                <li><Link to="#">lube oil and filters</Link>  </li>
                                                <li><Link to="#">belts and hoses</Link>  </li>
                                                <li><Link to="#">air conditioning</Link> </li>
                                                <li><Link to="#">brake repair</Link> </li>
                                                <li><Link to="#">tire and wheel services</Link> </li>
                                            </ul>
                                        </div>
                                        <div className="widget">
                                            <div className="download-file">
                                                <h4 className="title">Get your brochures</h4>
                                                <ul>
                                                    <li>
                                                        <Link to="#" target="_blank">
                                                            <div className="text">Company Brochures</div>
                                                            <i className="fa fa-download"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" target="_blank">
                                                            <div className="text">Company Info</div>
                                                            <i className="fa fa-download"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-9 col-lg-8 col-md-7 m-b30">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 m-b30">
                                                <div className="dlab-box">
                                                    <div className="dlab-media"> <Link to="#"><img src={require("../../images/about/pic6.jpg")} alt=""/></Link> </div>
                                                    <div className="dlab-info m-t30 ">
                                                        <h4 className="dlab-title m-t0"><Link to="#">The Initial Planning </Link></h4>
                                                        <p>There are many variations of passages of Lorem Ipsum typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                                        <p>There are many variations of passages of Lorem Ipsum typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. </p>
                                                        <p>There are many variations of passages of Lorem Ipsum typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <div className="dlab-box">
                                                    <div className="dlab-media m-b30 p-b5"> <Link to="#"><img src={require("../../images/our-services/pic2.jpg")} alt=""/></Link></div>
                                                    <div className="dlab-media"> <Link to="#"><img src={require("../../images/our-services/pic3.jpg")} alt=""/></Link></div>
                                                    <div className="dlab-info m-t30">
                                                        <h4 className="dlab-title m-t0"><Link to="#">From Start To finish</Link></h4>
                                                        <p>There are many variations of passages of Lorem Ipsum typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                                        <p>There are many variations of passages of Lorem Ipsum typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. </p>
                                                        <p>There are many variations of passages of Lorem Ipsum typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. </p>
                                                    </div>
                                                </div>
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
export default ServicesDetails;