import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr4 = require('./../../images/banner/bnr4.jpg');

const work1 = require('../../images/our-work/pic1.jpg' )
const work2 = require('../../images/our-work/pic2.jpg' )
const work3 = require('../../images/our-work/pic3.jpg' )
const work4 = require('../../images/our-work/pic4.jpg' )

class shortIconBoxStyles extends Component {


    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
								<h1 className="text-white">icon box styles</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={"./"}>Home</Link></li>
										<li>Element</li>
										<li>icon box styles</li>
									</ul>
								</div>
							</div>
                        </div>
                    </div>
					<div className="bg-white">
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>icon box style 1 aligh center</h4>
										</div>
										<div className="section-content box-sort-in button-example p-b0">
											<div className="row">
												<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div className="icon-bx-wraper bx-style-1 p-a30 center">
														<div className="icon-bx-sm bg-primary m-b20"> <Link to={"#"} className="icon-cell"><i className="ti-headphone-alt"></i></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
														</div>
													</div>
												</div>
												<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div className="icon-bx-wraper bx-style-1 p-a30 center">
														<div className="icon-bx-sm radius bg-primary m-b20"> <Link to={"#"} className="icon-cell"><i className="ti-ruler-pencil"></i></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
														</div>
													</div>
												</div>
												<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div className="icon-bx-wraper bx-style-1 p-a30 center">
														<div className="icon-bx-sm text-primary bg-white radius border-1 m-b20"> <Link to={"#"} className="icon-cell text-primary"><i className="ti-desktop"></i></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
														</div>
													</div>
												</div>
												<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div className="icon-bx-wraper bx-style-1 p-a30 center">
														<div className="icon-lg text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><i className="ti-face-smile"></i></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
														</div>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
													<div className="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
														<div className="icon-sm m-b20"> <Link to={"#"} className="icon-cell"><i className="ti-headphone-alt"></i></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase">Unique design</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
															<Link to={"#"} className="site-button">Site Button</Link>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
													<div className="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
														<div className="icon-sm m-b20"> <Link to={"#"} className="icon-cell"><i className="ti-ruler-pencil"></i></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase">Make it Simple</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
															<Link to={"#"} className="site-button">Site Button</Link>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
													<div className="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
														<div className="icon-sm m-b20"> <Link to={"#"} className="icon-cell text-primary"><i className="ti-desktop"></i></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase">Different Layout</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
															<Link to={"#"} className="site-button">Site Button</Link>
														</div>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
													<div className="icon-bx-wraper bx-style-1 p-a30 center fly-box">
														<div className="icon-sm m-b20"> <Link to={"#"} className="icon-cell"><i className="ti-headphone-alt"></i></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase">Unique design</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
															<Link to={"#"} className="site-button">Site Button</Link>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
													<div className="icon-bx-wraper bx-style-1 p-a30 center fly-box">
														<div className="icon-sm m-b20"> <Link to={"#"} className="icon-cell"><i className="ti-ruler-pencil"></i></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase">Make it Simple</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
															<Link to={"#"} className="site-button">Site Button</Link>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
													<div className="icon-bx-wraper bx-style-1 p-a30 center fly-box">
														<div className="icon-sm m-b20"> <Link to={"#"} className="icon-cell text-primary"><i className="ti-desktop"></i></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase">Different Layout</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
															<Link to={"#"} className="site-button">Site Button</Link>
														</div>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-lg-3 col-md-6 col-sm-6">
													<div className="dlab-box-bg m-b30 box-hover style3" style={{ backgroundImage: "url(" + work1 + ")" }}>
														<div className="icon-bx-wraper center p-lr20 p-tb30">
															<div className="text-primary m-b30"> 
																<span className="icon-cell icon-sm"><i className="ti-ruler-pencil"></i></span> 
															</div>
															<div className="icon-content">
																<h5 className="dlab-tilte">Unique design</h5>
																<p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
															</div>
														</div>
														<div className="icon-box-btn text-center">
															<Link to={"#"} className="site-button btn-block">Read More</Link>
														</div>
													</div>
												</div>
												<div className="col-lg-3 col-md-6 col-sm-6">
													<div className="dlab-box-bg m-b30 box-hover style3" style={{ backgroundImage: "url(" + work2 + ")" }}>
														<div className="icon-bx-wraper center p-lr20 p-tb30">
															<div className="text-primary m-b30"> 
																<span className="icon-cell icon-sm"><i className="ti-heart"></i></span> 
															</div>
															<div className="icon-content">
																<h5 className="dlab-tilte">Make it Simple</h5>
																<p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
															</div>
														</div>
														<div className="icon-box-btn text-center">
															<Link to={"#"} className="site-button btn-block">Read More</Link>
														</div>
													</div>
												</div>
												<div className="col-lg-3 col-md-6 col-sm-6">
													<div className="dlab-box-bg m-b30 box-hover active style3" style={{ backgroundImage: "url(" + work3 + ")" }}>
														<div className="icon-bx-wraper center p-lr20 p-tb30">
															<div className="text-primary m-b30"> 
																<span className="icon-cell icon-sm"><i className="ti-brush-alt"></i></span> 
															</div>
															<div className="icon-content">
																<h5 className="dlab-tilte text-white">Different Layout</h5>
																<p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
															</div>
														</div>
														<div className="icon-box-btn text-center">
															<Link to={"#"} className="site-button btn-block">Read More</Link>
														</div>
													</div>
												</div>
												<div className="col-lg-3 col-md-6 col-sm-6">
													<div className="dlab-box-bg m-b30 box-hover style3" style={{ backgroundImage: "url(" + work4 + ")" }}>
														<div className="icon-bx-wraper center p-lr20 p-tb30">
															<div className="text-primary m-b30"> 
																<span className="icon-cell icon-sm"><i className="ti-mouse-alt"></i></span> 
															</div>
															<div className="icon-content">
																<h5 className="dlab-tilte">True Responsiveness</h5>
																<p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
															</div>
														</div>
														<div className="icon-box-btn text-center">
															<Link to={"#"} className="site-button btn-block">Read More</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full bg-gray content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>icon box style 1 aligh left</h4>
										</div>
										<div className="section-content box-sort-in button-example p-b0">
											<div className="row">
												<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div className="icon-bx-wraper bx-style-1 p-a20 left">
														<div className="icon-bx-xs bg-primary m-b20"> <Link to={"#"} className="icon-cell"><i className="ti-alarm-clock"></i></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit elit nonummy dolor is euismod end..</p>
														</div>
													</div>
												</div>
												<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div className="icon-bx-wraper bx-style-1 p-a20 left">
														<div className="icon-bx-xs radius bg-primary"> <Link to={"#"} className="icon-cell"><i className="ti-agenda"></i></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit elit nonummy dolor is euismod end..</p>
														</div>
													</div>
												</div>
												<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div className="icon-bx-wraper bx-style-1 p-a20 left">
														<div className="icon-bx-xs text-primary bg-white radius border-1 "> <Link to={"#"} className="icon-cell"><i className="ti-desktop"></i></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit elit nonummy dolor is euismod end..</p>
														</div>
													</div>
												</div>
												<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div className="icon-bx-wraper bx-style-1 p-a20 left">
														<div className="icon-sm text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><i className="ti-world"></i></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit elit nonummy dolor is euismod end..</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>icon box style 1 aligh right</h4>
										</div>
										<div className="section-content box-sort-in button-example p-b0">
											<div className="row">
												<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div className="icon-bx-wraper bx-style-1 p-a20 right">
														<div className="icon-bx-xs bg-primary m-b20"> <Link to={"#"} className="icon-cell"><i className="ti-ruler-pencil"></i></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit elit nonummy dolor is euismod end..</p>
														</div>
													</div>
												</div>
												<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div className="icon-bx-wraper bx-style-1 p-a20 right">
														<div className="icon-bx-xs radius bg-primary"> <Link to={"#"} className="icon-cell"><i className="ti-desktop"></i></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit elit nonummy dolor is euismod end..</p>
														</div>
													</div>
												</div>
												<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div className="icon-bx-wraper bx-style-1 p-a20 right">
														<div className="icon-bx-xs text-primary bg-white radius border-1 "> <Link to={"#"} className="icon-cell"><i className="ti-palette"></i></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit elit nonummy dolor is euismod end..</p>
														</div>
													</div>
												</div>
												<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
													<div className="icon-bx-wraper bx-style-1 p-a20 right">
														<div className="icon-sm text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><i className="ti-gift"></i></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit elit nonummy dolor is euismod end..</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full bg-gray content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>icon box style 2 aligh center</h4>
										</div>
										<div className="section-content box-sort-in button-example p-b0">
											<div className="row">
												<div className="col-lg-4 col-md-6 col-sms-6">
													<div className="icon-bx-wraper bx-style-2 m-t40 m-b30 p-a30 center">
														<div className="icon-bx-sm bg-primary m-b20"> <Link to={"#"} className="icon-cell"><i className="ti-image"></i></Link> </div>
														<div className="icon-content p-t40">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-6">
													<div className="icon-bx-wraper bx-style-2 m-t40 m-b30 p-a30 center">
														<div className="icon-bx-sm radius bg-primary m-b20"> <Link to={"#"} className="icon-cell"><i className="ti-bar-chart"></i></Link> </div>
														<div className="icon-content p-t40">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-6">
													<div className="icon-bx-wraper bx-style-2 m-t40 m-b30 p-a30 center">
														<div className="icon-bx-sm text-primary bg-white radius border-1 m-b20"> <Link to={"#"} className="icon-cell text-primary"><i className="ti-face-smile"></i></Link> </div>
														<div className="icon-content p-t40">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>icon box style 2 aligh left</h4>
										</div>
										<div className="section-content box-sort-in button-example p-b0">
											<div className="row">
												<div className="col-lg-4 col-md-6 col-sm-12">
													<div className="icon-bx-wraper bx-style-2 m-l40 m-b30 p-a30 left">
														<div className="icon-bx-sm bg-primary m-b20"> <Link to={"#"} className="icon-cell"><i className="ti-face-smile"></i></Link> </div>
														<div className="icon-content p-l40">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-12">
													<div className="icon-bx-wraper bx-style-2 m-l40 m-b30 p-a30 left">
														<div className="icon-bx-sm radius bg-primary"> <Link to={"#"} className="icon-cell"><i className="ti-write"></i></Link> </div>
														<div className="icon-content p-l40">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-12">
													<div className="icon-bx-wraper bx-style-2 m-l40 m-b30 p-a30 left">
														<div className="icon-bx-sm text-primary bg-white radius border-1"> <Link to={"#"} className="icon-cell text-primary"><i className="ti-desktop"></i></Link> </div>
														<div className="icon-content p-l40">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full bg-gray content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>icon box style 2 aligh right</h4>
										</div>
										<div className="section-content box-sort-in p-a30 button-example p-b0">
											<div className="row">
												<div className="col-lg-4 col-md-6 col-sm-12">
													<div className="icon-bx-wraper bx-style-2 m-r40 m-b30 p-a30 right">
														<div className="icon-bx-sm bg-primary m-b20"> <Link to={"#"} className="icon-cell"><i className="ti-face-smile"></i></Link> </div>
														<div className="icon-content p-r40">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-12">
													<div className="icon-bx-wraper bx-style-2 m-r40 m-b30 p-a30 right">
														<div className="icon-bx-sm radius bg-primary"> <Link to={"#"} className="icon-cell"><i className="ti-calendar"></i></Link> </div>
														<div className="icon-content p-r40">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-12">
													<div className="icon-bx-wraper bx-style-2 m-r40 m-b30 p-a30 right">
														<div className="icon-bx-sm text-primary bg-white radius border-1"> <Link to={"#"} className="icon-cell text-primary"><i className="ti-printer"></i></Link> </div>
														<div className="icon-content p-r40">
															<h5 className="dlab-tilte text-uppercase">Icon Box</h5>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
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
				
                </div>

                <Footer />
            </>
        )
    }
}

export default shortIconBoxStyles;