import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../element/counter';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr4 = require('./../../images/banner/bnr4.jpg');
var bg1 = require('./../../images/background/bg1.jpg');
var bg2 = require('./../../images/background/bg2.jpg');

class shortCounters extends Component {

    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
								<h1 className="text-white">Counters</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={"./"}>Home</Link></li>
										<li>Element</li>
										<li>Counters</li>
									</ul>
								</div>
							</div>
                        </div>
                    </div>
					
					<div className="content">
						<div className="section-full content-inner bg-white bg-img-fix">
							<div className="container">
								<div className="section-content">
									<div className="row">
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="counter-style-1">
												<div className="">
													<Counter count={7652}/>
												</div>
												<span className="counter-text">Completed Projects</span>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="counter-style-1">
												<div className="">
													<Counter count={4562}/>
												</div>
												<span className="counter-text">Happy Clients</span>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="counter-style-1">
												<div className="">
													<Counter count={3569}/>
												</div>
												<span className="counter-text">Questions Answered</span>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="counter-style-1">
												<div className="">
													<Counter count={2089}/>
												</div>
												<span className="counter-text">Ordered Coffee's</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner bg-gray">
							<div className="container">
								<div className="section-content">
									 <div className="row">
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="counter-style-1">
												<div className="">
													<i className="icon flaticon-factory text-primary"></i>
													<Counter className="counter" count={7652}/>
												</div>
												<span className="counter-text">Completed Projects</span>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="counter-style-1">
												<div className="">
													<i className="icon flaticon-worker text-primary"></i>
													<Counter count={4562}/>
												</div>
												<span className="counter-text">Happy Clients</span>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="counter-style-1">
												<div className="">
													<i className="icon flaticon-settings text-primary"></i>
													<Counter count={3569}/>
												</div>
												<span className="counter-text">Questions Answered</span>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="counter-style-1">
												<div className="">
													<i className="icon flaticon-conveyor text-primary"></i>
													<Counter count={2089}/>
												</div>
												<span className="counter-text">Ordered Coffee's</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner bg-white bg-img-fix">
							<div className="container">
								<div className="section-content">
									<div className="row">
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="m-b30 dlab-box text-center counter-style-2">
												<div className="icon-lg "><i className="flaticon-factory"></i></div>
												<div className="text-primary"><Counter count={7652}/></div>
												<span className="counter-text">Completed Projects</span> 
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="m-b30 dlab-box text-center counter-style-2">
												<div className="icon-lg "><i className="flaticon-worker"></i></div>
												<div className="text-primary"><Counter count={4562}/></div>
												<span className="counter-text">Happy Clients</span>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="m-b30 dlab-box text-center counter-style-2">
												<div className="icon-lg "><i className="flaticon-settings"></i></div>
												<div className="text-primary"><Counter count={3569}/></div>
												<span className="counter-text">Questions Answered</span> 
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="m-b10 dlab-box text-center counter-style-2">
												<div className="icon-lg"><i className="flaticon-conveyor"></i></div>
												<div className="text-primary"><Counter count={2089}/></div>
												<span className="counter-text">Ordered Coffee's</span> 
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full overlay-black-dark bg-img-fix text-white content-inner" style={{ backgroundImage: "url(" + bg1 + ")" }}>
							<div className="container">
								<div className="section-content">
									<div className="row">
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="m-b30 dlab-box text-center counter-style-2">
												<div className="icon-lg "><i className="flaticon-factory"></i></div>
												<div className="text-blue"><Counter count={7652}/></div>
												<span className="counter-text">Completed Projects</span> 
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="m-b30 dlab-box text-center counter-style-2">
												<div className="icon-lg "><i className="flaticon-worker"></i></div>
												<div className="text-blue"><Counter count={4562}/></div>
												<span className="counter-text">Happy Clients</span>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="m-b30 dlab-box text-center counter-style-2">
												<div className="icon-lg "><i className="flaticon-settings"></i></div>
												<div className="text-blue"><Counter count={3569}/></div>
												<span className="counter-text">Questions Answered</span> 
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="m-b10 dlab-box text-center counter-style-2">
												<div className="icon-lg "><i className="flaticon-conveyor"></i></div>
												<div className="text-blue"><Counter count={2089}/></div>
												<span className="counter-text">Ordered Coffee's</span> 
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner bg-white bg-img-fix">
							<div className="container">
								<div className="section-content">
									<div className="row">
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="counter-style-1">
												<div className="text-blue">
													<Counter count={7652}/>
												</div>
												<span className="counter-text">Completed Projects</span>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="counter-style-1">
												<div className="text-red">
													<Counter count={4562}/>
												</div>
												<span className="counter-text">Happy Clients</span>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="counter-style-1">
												<div className="text-yellow">
													<Counter count={3569}/>
												</div>
												<span className="counter-text">Questions Answered</span>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="counter-style-1">
												<div className="text-pink">
													<Counter count={2089}/>
												</div>
												<span className="counter-text">Ordered Coffee's</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full overlay-black-dark bg-img-fix text-white content-inner" style={{ backgroundImage: "url(" + bg2 + ")" }}>
							<div className="container">
								<div className="section-content">
									<div className="row">
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="dis-tbl m-auto ">
												<div className="m-b30 dis-tbl-cell dlab-box text-center counter-style-3 rounded text-blue">
													<div className="text-blue">
														<Counter count={652}/>
													</div>
													<span className="counter-text text-white">Projects</span> 
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="dis-tbl m-auto">
												<div className="m-b30 dis-tbl-cell dlab-box text-center counter-style-3 rounded text-red">
													<div className="text-red">
														<Counter count={562}/>
													</div>
													<span className="counter-text text-white">Clients</span> 
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="dis-tbl m-auto">
												<div className="m-b30 dis-tbl-cell dlab-box text-center counter-style-3 rounded text-yellow">
													<div className="text-red">
														<Counter count={569}/>
													</div>
													<span className="counter-text text-white">Faqs</span> 
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="dis-tbl m-auto">
												<div className="m-b30 dis-tbl-cell dlab-box text-center counter-style-3 rounded text-pink">
													<div className="text-red">
														<Counter count={289}/>
													</div>
													<span className="counter-text text-white">Ordered</span> 
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner bg-white bg-img-fix text-center">
							<div className="container">
								<div className="section-content">
									<div className="row">
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="counter-style-4">
												<div className="">
													<Counter count={7652}/>
												</div>
												<span className="counter-text">Completed Projects</span>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="counter-style-4">
												<div className="">
													<Counter count={4562}/>
												</div>
												<span className="counter-text">Happy Clients</span>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="counter-style-4">
												<div className="">
													<Counter count={3569}/>
												</div>
												<span className="counter-text">Questions Answered</span>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
											<div className="counter-style-4">
												<div className="">
													<Counter count={2089}/>
												</div>
												<span className="counter-text">Ordered Coffee's</span>
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

export default shortCounters;