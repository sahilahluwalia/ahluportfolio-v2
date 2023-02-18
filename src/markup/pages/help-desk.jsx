import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('../../images/banner/bnr1.jpg')

class HelpDesk extends Component {


    render() {
        return (
            <>
                <Header/>
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Help Desk</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to="/">Home</Link></li>
                                        <li>Help Desk</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="content-block">
                        <div className="section-full content-inner bg-gray">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-7 col-sm-12 inner-text">
                                        <h2 className="title">Help Desk</h2>
                                        <p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</strong></p>
                                        <h4 className="title">Emergency Service</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                            text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is 
                                            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                            text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        <h4 className="title">Tips </h4>
                                        <ul className="list-check primary">
                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</li>
                                            <li>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</li>
                                            <li>Printer took a galley of type and scrambled it to make a type specimen book. </li>
                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</li>
                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy book. </li>
                                            <li>Eorem ipsum dolor sit amete printing and typesetting industry. </li>
                                        </ul>
                                        <h4  className="title">Health Care</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                            text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply 
                                            dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  when an 
                                            unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                                            the industry's standard dummy text ever since the  when an unknown printer took a galley of type and 
                                            scrambled it to make a type specimen book. </p>
                                        <h4 className="title">Our Help </h4>
                                        <ul className="list-check primary">
                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</li>
                                            <li>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</li>
                                            <li>Printer took a galley of type and scrambled it to make a type specimen book. </li>
                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</li>
                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy book. </li>
                                            <li>Eorem ipsum dolor sit amete printing and typesetting industry. </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 col-md-5 col-sm-12 m-b30">
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box m-b30 bg-white">
                                            <div className="icon-sm m-b20"> <Link to="#" className="icon-cell"><i className="ti-headphone-alt"></i></Link> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Unique design</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                                                <Link to="#" className="site-button">View More</Link>
                                            </div>
                                        </div>
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box m-b30 bg-white">
                                            <div className="icon-sm m-b20"> <Link to="#" className="icon-cell"><i className="ti-ruler-pencil"></i></Link> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Make it Simple</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                                                <Link to="#" className="site-button">View More</Link>
                                            </div>
                                        </div>
                                        <div className="icon-bx-wraper bx-style-1 p-a30 center fly-box bg-white">
                                            <div className="icon-sm m-b20"> <Link to="#" className="icon-cell text-primary"><i className="ti-desktop"></i></Link> </div>
                                            <div className="icon-content">
                                                <h5 className="dlab-tilte text-uppercase">Different Layout</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                                                <Link to="#" className="site-button">View More</Link>
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
export default HelpDesk;