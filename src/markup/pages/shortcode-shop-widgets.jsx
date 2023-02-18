import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr4 = require('./../../images/banner/bnr4.jpg');

class shopWidgets extends Component {

    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
								<h1 className="text-white">Shop Widgets</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={"./"}>Home</Link></li>
										<li>Element</li>
										<li>Shop Widgets</li>
									</ul>
								</div>
							</div>
                        </div>
                    </div>
					
					<div className="section-full bg-white content-inner">
						<div className="container">
							<div className="row">
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box m-b30">
										<div className="item-img">
											<img src={require("../../images/product/item1.jpg")} alt=""/>
											<div className="item-info-in">
												<ul>
													<li><Link to={"#"}><i className="ti-shopping-cart"></i></Link></li>
													<li><Link to={"#"}><i className="ti-eye"></i></Link></li>
													<li><Link to={"#"}><i className="ti-heart"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="item-info text-center text-black p-a10">
											<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
											<ul className="item-review">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
												<li><i className="fa fa-star-o"></i></li>
											</ul>
											<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box m-b30 item-style-1">
										<div className="item-img">
											<img src={require("../../images/product/item2.jpg")} alt=""/>
											<div className="item-info-in">
												<ul>
													<li><Link to={"#"}><i className="ti-shopping-cart"></i></Link></li>
													<li><Link to={"#"}><i className="ti-eye"></i></Link></li>
													<li><Link to={"#"}><i className="ti-heart"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="item-info text-center text-black p-a10">
											<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
											<ul className="item-review">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
												<li><i className="fa fa-star-o"></i></li>
											</ul>
											<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box m-b30">
										<div className="item-img">
											<img src={require("../../images/product/item3.jpg")} alt=""/>
											<div className="item-info-in">
												<ul>
													<li><Link to={"#"}><i className="ti-shopping-cart"></i></Link></li>
													<li><Link to={"#"}><i className="ti-eye"></i></Link></li>
													<li><Link to={"#"}><i className="ti-heart"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="item-info text-center text-black p-a10">
											<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
											<ul className="item-review">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
												<li><i className="fa fa-star-o"></i></li>
											</ul>
											<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box m-b30">
										<div className="item-img">
											<img src={require("../../images/product/item4.jpg")} alt=""/>
											<div className="item-info-in">
												<ul>
													<li><Link to={"#"}><i className="ti-shopping-cart"></i></Link></li>
													<li><Link to={"#"}><i className="ti-eye"></i></Link></li>
													<li><Link to={"#"}><i className="ti-heart"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="item-info text-center text-black p-a10">
											<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
											<ul className="item-review">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
												<li><i className="fa fa-star-o"></i></li>
											</ul>
											<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
							</div>	
						</div>	
					</div>	
					<div className="section-full bg-gray content-inner">
						<div className="container">
							<div className="row">
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box m-b30">
										<div className="item-img">
											<img src={require("../../images/product/item5.jpg")} alt=""/>
											<div className="item-info-in">
												<ul>
													<li><Link to={"#"}><i className="ti-shopping-cart"></i></Link></li>
													<li><Link to={"#"}><i className="ti-eye"></i></Link></li>
													<li><Link to={"#"}><i className="ti-heart"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="item-info text-center text-black p-a20 bg-white">
											<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
											<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box m-b30 item-style-1">
										<div className="item-img">
											<img src={require("../../images/product/item6.jpg")} alt=""/>
											<div className="item-info-in">
												<ul>
													<li><Link to={"#"}><i className="ti-shopping-cart"></i></Link></li>
													<li><Link to={"#"}><i className="ti-eye"></i></Link></li>
													<li><Link to={"#"}><i className="ti-heart"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="item-info text-center text-black p-a20 bg-white">
											<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
											<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box m-b30">
										<div className="item-img">
											<img src={require("../../images/product/item7.jpg")} alt=""/>
											<div className="item-info-in">
												<ul>
													<li><Link to={"#"}><i className="ti-shopping-cart"></i></Link></li>
													<li><Link to={"#"}><i className="ti-eye"></i></Link></li>
													<li><Link to={"#"}><i className="ti-heart"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="item-info text-center text-black p-a20 bg-white">
											<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
											<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box m-b30">
										<div className="item-img">
											<img src={require("../../images/product/item8.jpg")} alt=""/>
											<div className="item-info-in">
												<ul>
													<li><Link to={"#"}><i className="ti-shopping-cart"></i></Link></li>
													<li><Link to={"#"}><i className="ti-eye"></i></Link></li>
													<li><Link to={"#"}><i className="ti-heart"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="item-info text-center text-black p-a20 bg-white">
											<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
											<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
							</div>	
						</div>	
					</div>	
					<div className="section-full bg-white content-inner">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="dlab-box m-b30"> 
										<div className="dlab-media dlab-img-overlay2 dlab-img-effect on rotate"> <img src={require("../../images/product/item1.jpg")} alt=""/>
											<div className="dlab-info-has p-a20 no-hover ">
												<Link to={"#"} className="site-button button-sm m-b10">Fashion</Link>
												<h5>There are many variations.</h5>
												<div className="dlab-post-meta text-white">
													<ul>
														<li className="post-date"> <i className="ti-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
														<li className="post-author"><i className="ti-user"></i>By <Link to={"#"}>demongo</Link> </li>
														<li className="post-comment"><i className="ti-comment-alt"></i> <Link to={"#"}>0</Link> </li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="dlab-box m-b30"> 
										<div className="dlab-media dlab-img-overlay2 dlab-img-effect on rotate"> <img src={require("../../images/product/item2.jpg")} alt=""/>
											<div className="dlab-info-has p-a20 no-hover ">
												<Link to={"#"} className="site-button button-sm red m-b10">Fashion</Link>
												<h5>There are many variations.</h5>
												<div className="dlab-post-meta text-white">
													<ul>
														<li className="post-date"> <i className="ti-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
														<li className="post-author"><i className="ti-user"></i>By <Link to={"#"}>demongo</Link> </li>
														<li className="post-comment"><i className="ti-comment-alt"></i> <Link to={"#"}>0</Link> </li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="dlab-box m-b30"> 
										<div className="dlab-media dlab-img-overlay2 dlab-img-effect on rotate"> <img src={require("../../images/product/item3.jpg")} alt=""/>
											<div className="dlab-info-has p-a20 no-hover ">
												<Link to={"#"} className="site-button button-sm pink m-b10">Fashion</Link>
												<h5>There are many variations.</h5>
												<div className="dlab-post-meta text-white">
													<ul>
														<li className="post-date"> <i className="ti-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
														<li className="post-author"><i className="ti-user"></i>By <Link to={"#"}>demongo</Link> </li>
														<li className="post-comment"><i className="ti-comment-alt"></i> <Link to={"#"}>0</Link> </li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>	
						</div>	
					</div>
					<div className="section-full bg-gray">
						<div className="container-fluid">
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-12 p-lr0">
									<div className="dlab-box"> 
										<div className="dlab-media dlab-img-overlay2 dlab-img-effect on rotate"> <img src={require("../../images/product/item12.jpg")} alt=""/>
											<div className="dlab-info-has p-a20 no-hover ">
												<Link to={"#"} className="site-button button-sm m-b10">Fashion</Link>
												<h5>There are many variations.</h5>
												<div className="dlab-post-meta text-white">
													<ul>
														<li className="post-date"> <i className="ti-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
														<li className="post-author"><i className="ti-user"></i>By <Link to={"#"}>demongo</Link> </li>
														<li className="post-comment"><i className="ti-comment-alt"></i> <Link to={"#"}>0</Link> </li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 p-lr0">
									<div className="dlab-box"> 
										<div className="dlab-media dlab-img-overlay2 dlab-img-effect on rotate"> <img src={require("../../images/product/item11.jpg")} alt=""/>
											<div className="dlab-info-has p-a20 no-hover ">
												<Link to={"#"} className="site-button button-sm red m-b10">Fashion</Link>
												<h5>There are many variations.</h5>
												<div className="dlab-post-meta text-white">
													<ul>
														<li className="post-date"> <i className="ti-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
														<li className="post-author"><i className="ti-user"></i>By <Link to={"#"}>demongo</Link> </li>
														<li className="post-comment"><i className="ti-comment-alt"></i> <Link to={"#"}>0</Link> </li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 p-lr0">
									<div className="dlab-box"> 
										<div className="dlab-media dlab-img-overlay2 dlab-img-effect on rotate"> <img src={require("../../images/product/item10.jpg")} alt=""/>
											<div className="dlab-info-has p-a20 no-hover ">
												<Link to={"#"} className="site-button button-sm pink m-b10">Fashion</Link>
												<h5>There are many variations.</h5>
												<div className="dlab-post-meta text-white">
													<ul>
														<li className="post-date"> <i className="ti-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
														<li className="post-author"><i className="ti-user"></i>By <Link to={"#"}>demongo</Link> </li>
														<li className="post-comment"><i className="ti-comment-alt"></i> <Link to={"#"}>0</Link> </li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>	
						</div>	
					</div>		
					<div className="section-full bg-white content-inner-2">
						<div className="container">
							<div className="row">
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<h4>Top Rated</h4>
									<div className="dlab-separator bg-primary"></div>
									<div className="item-widgets-box">
										<div className="item-widgets-left">
											<img src={require("../../images/product/thumb/item1.jpg")} alt=""/>
										</div>
										<div className="item-widgets-body text-black">
											<h6 className="item-title text-uppercase font-weight-500 m-t0"><Link to={"#"}>Product Title</Link></h6>
											<ul className="item-review text-yellow-light">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
												<li><i className="fa fa-star-o"></i></li>
											</ul>
											<h6 className="item-price m-b0"><del>$232</del> <span className="text-primary">$192</span></h6>
										</div>
									</div>
									<div className="item-widgets-box">
										<div className="item-widgets-left">
											<img src={require("../../images/product/thumb/item2.jpg")} alt=""/>
										</div>
										<div className="item-widgets-body text-black">
											<h6 className="item-title text-uppercase font-weight-500 m-t0"><Link to={"#"}>Product Title</Link></h6>
											<ul className="item-review text-yellow-light">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
												<li><i className="fa fa-star-o"></i></li>
											</ul>
											<h6 className="item-price m-b0"><del>$232</del> <span className="text-primary">$192</span></h6>
										</div>
									</div>
									<div className="item-widgets-box">
										<div className="item-widgets-left">
											<img src={require("../../images/product/thumb/item3.jpg")} alt=""/>
										</div>
										<div className="item-widgets-body text-black">
											<h6 className="item-title text-uppercase font-weight-500 m-t0"><Link to={"#"}>Product Title</Link></h6>
											<ul className="item-review text-yellow-light">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
												<li><i className="fa fa-star-o"></i></li>
											</ul>
											<h6 className="item-price m-b0"><del>$232</del> <span className="text-primary">$192</span></h6>
										</div>
									</div>
									<div className="item-widgets-box">
										<div className="item-widgets-left">
											<img src={require("../../images/product/thumb/item4.jpg")} alt=""/>
										</div>
										<div className="item-widgets-body text-black">
											<h6 className="item-title text-uppercase font-weight-500 m-t0"><Link to={"#"}>Product Title</Link></h6>
											<ul className="item-review text-yellow-light">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
												<li><i className="fa fa-star-o"></i></li>
											</ul>
											<h6 className="item-price m-b0"><del>$232</del> <span className="text-primary">$192</span></h6>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<h4>Recent Item</h4>
									<div className="dlab-separator bg-primary"></div>
									<div className="item-widgets-box">
										<div className="item-widgets-left">
											<img src={require("../../images/product/thumb/item5.jpg")} alt=""/>
										</div>
										<div className="item-widgets-body text-black">
											<h6 className="item-title text-uppercase font-weight-500 m-t0"><Link to={"#"}>Product Title</Link></h6>
											<ul className="item-review text-yellow-light">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
												<li><i className="fa fa-star-o"></i></li>
											</ul>
											<h6 className="item-price m-b0"><del>$232</del> <span className="text-primary">$192</span></h6>
										</div>
									</div>
									<div className="item-widgets-box">
										<div className="item-widgets-left">
											<img src={require("../../images/product/thumb/item1.jpg")} alt=""/>
										</div>
										<div className="item-widgets-body text-black">
											<h6 className="item-title text-uppercase font-weight-500 m-t0"><Link to={"#"}>Product Title</Link></h6>
											<ul className="item-review text-yellow-light">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
												<li><i className="fa fa-star-o"></i></li>
											</ul>
											<h6 className="item-price m-b0"><del>$232</del> <span className="text-primary">$192</span></h6>
										</div>
									</div>
									<div className="item-widgets-box">
										<div className="item-widgets-left">
											<img src={require("../../images/product/thumb/item2.jpg")} alt=""/>
										</div>
										<div className="item-widgets-body text-black">
											<h6 className="item-title text-uppercase font-weight-500 m-t0"><Link to={"#"}>Product Title</Link></h6>
											<ul className="item-review text-yellow-light">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
												<li><i className="fa fa-star-o"></i></li>
											</ul>
											<h6 className="item-price m-b0"><del>$232</del> <span className="text-primary">$192</span></h6>
										</div>
									</div>
									<div className="item-widgets-box">
										<div className="item-widgets-left">
											<img src={require("../../images/product/thumb/item3.jpg")} alt=""/>
										</div>
										<div className="item-widgets-body text-black">
											<h6 className="item-title text-uppercase font-weight-500 m-t0"><Link to={"#"}>Product Title</Link></h6>
											<ul className="item-review text-yellow-light">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
												<li><i className="fa fa-star-o"></i></li>
											</ul>
											<h6 className="item-price m-b0"><del>$232</del> <span className="text-primary">$192</span></h6>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<h4>Popular Item</h4>
									<div className="dlab-separator bg-primary"></div>
									<div className="item-widgets-box">
										<div className="item-widgets-left">
											<img src={require("../../images/product/thumb/item4.jpg")} alt=""/>
										</div>
										<div className="item-widgets-body text-black">
											<h6 className="item-title text-uppercase font-weight-500 m-t0"><Link to={"#"}>Product Title</Link></h6>
											<ul className="item-review text-yellow-light">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
												<li><i className="fa fa-star-o"></i></li>
											</ul>
											<h6 className="item-price m-b0"><del>$232</del> <span className="text-primary">$192</span></h6>
										</div>
									</div>
									<div className="item-widgets-box">
										<div className="item-widgets-left">
											<img src={require("../../images/product/thumb/item5.jpg")} alt=""/>
										</div>
										<div className="item-widgets-body text-black">
											<h6 className="item-title text-uppercase font-weight-500 m-t0"><Link to={"#"}>Product Title</Link></h6>
											<ul className="item-review text-yellow-light">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
												<li><i className="fa fa-star-o"></i></li>
											</ul>
											<h6 className="item-price m-b0"><del>$232</del> <span className="text-primary">$192</span></h6>
										</div>
									</div>
									<div className="item-widgets-box">
										<div className="item-widgets-left">
											<img src={require("../../images/product/thumb/item1.jpg")} alt=""/>
										</div>
										<div className="item-widgets-body text-black">
											<h6 className="item-title text-uppercase font-weight-500 m-t0"><Link to={"#"}>Product Title</Link></h6>
											<ul className="item-review text-yellow-light">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
												<li><i className="fa fa-star-o"></i></li>
											</ul>
											<h6 className="item-price m-b0"><del>$232</del> <span className="text-primary">$192</span></h6>
										</div>
									</div>
									<div className="item-widgets-box">
										<div className="item-widgets-left">
											<img src={require("../../images/product/thumb/item2.jpg")} alt=""/>
										</div>
										<div className="item-widgets-body text-black">
											<h6 className="item-title text-uppercase font-weight-500 m-t0"><Link to={"#"}>Product Title</Link></h6>
											<ul className="item-review text-yellow-light">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
												<li><i className="fa fa-star-o"></i></li>
											</ul>
											<h6 className="item-price m-b0"><del>$232</del> <span className="text-primary">$192</span></h6>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<h4>New Item</h4>
									<div className="dlab-separator bg-primary"></div>
									<div className="item-widgets-box">
										<div className="item-widgets-left">
											<img src={require("../../images/product/thumb/item3.jpg")} alt=""/>
										</div>
										<div className="item-widgets-body text-black">
											<h6 className="item-title text-uppercase font-weight-500 m-t0"><Link to={"#"}>Product Title</Link></h6>
											<ul className="item-review text-yellow-light">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
												<li><i className="fa fa-star-o"></i></li>
											</ul>
											<h6 className="item-price m-b0"><del>$232</del> <span className="text-primary">$192</span></h6>
										</div>
									</div>
									<div className="item-widgets-box">
										<div className="item-widgets-left">
											<img src={require("../../images/product/thumb/item4.jpg")} alt=""/>
										</div>
										<div className="item-widgets-body text-black">
											<h6 className="item-title text-uppercase font-weight-500 m-t0"><Link to={"#"}>Product Title</Link></h6>
											<ul className="item-review text-yellow-light">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
												<li><i className="fa fa-star-o"></i></li>
											</ul>
											<h6 className="item-price m-b0"><del>$232</del> <span className="text-primary">$192</span></h6>
										</div>
									</div>
									<div className="item-widgets-box">
										<div className="item-widgets-left">
											<img src={require("../../images/product/thumb/item5.jpg")} alt=""/>
										</div>
										<div className="item-widgets-body text-black">
											<h6 className="item-title text-uppercase font-weight-500 m-t0"><Link to={"#"}>Product Title</Link></h6>
											<ul className="item-review text-yellow-light">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
												<li><i className="fa fa-star-o"></i></li>
											</ul>
											<h6 className="item-price m-b0"><del>$232</del> <span className="text-primary">$192</span></h6>
										</div>
									</div>
									<div className="item-widgets-box">
										<div className="item-widgets-left">
											<img src={require("../../images/product/thumb/item1.jpg")} alt=""/>
										</div>
										<div className="item-widgets-body text-black">
											<h6 className="item-title text-uppercase font-weight-500 m-t0"><Link to={"#"}>Product Title</Link></h6>
											<ul className="item-review text-yellow-light">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
												<li><i className="fa fa-star-o"></i></li>
											</ul>
											<h6 className="item-price m-b0"><del>$232</del> <span className="text-primary">$192</span></h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="section-full bg-gray content-inner text-center">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-md-12 m-b30">
									<div className="item-add text-white">
										<img src={require("../../images/product/item12.jpg")} alt=""/>
										<div className="add-box">
											<div className="dis-block">
												<h5>SUMMER SALE</h5>
												<h2>UP TO 50% OFF</h2>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-12 m-b30">
									<div className="item-add text-white">
										<img src={require("../../images/product/item11.jpg")} alt=""/>
										<div className="add-box">
											<div className="dis-block">	
												<h5>SUMMER SALE</h5>
												<h2>UP TO 50% OFF</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="section-full bg-white content-inner text-center">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-md-12 m-b30">
									<div className="item-add text-black add-style-2 bg-gray">
										<img src={require("../../images/product/item12.jpg")} alt=""/>
										<div className="add-box">
											<div className="dis-block">
												<h5>SUMMER SALE</h5>
												<h2>UP TO 50% OFF</h2>
												<Link to={"#"} className="site-button radius-xl outline outline-2 black" >View More</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-12 m-b30">
									<div className="item-add text-black add-style-2 bg-gray">
										<img src={require("../../images/product/item11.jpg")} alt=""/>
										<div className="add-box">
											<div className="dis-block">
												<h5>SUMMER SALE</h5>
												<h2>UP TO 50% OFF</h2>
												<Link to={"#"} className="site-button radius-xl outline outline-2 black">View More</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="section-full p-t50 p-b20 bg-white">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="icon-bx-wraper left shop-service-info m-b30">
										<div className="icon-md text-black radius"> 
											<Link to={"#"} className="icon-cell text-black"><i className="fa fa-gift"></i></Link> 
										</div>
										<div className="icon-content">
											<h5 className="dlab-tilte">Free shipping on orders $60+</h5>
											<p>Order more than 60$ and you will get free shippining Worldwide. More info.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="icon-bx-wraper left shop-service-info m-b30">
										<div className="icon-md text-black radius"> 
											<Link to={"#"} className="icon-cell text-black"><i className="fa fa-plane"></i></Link> 
										</div>
										<div className="icon-content">
											<h5 className="dlab-tilte">Worldwide delivery</h5>
											<p>We deliver to the following countries: USA, Canada, Europe, Australia</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="icon-bx-wraper left shop-service-info m-b30">
										<div className="icon-md text-black radius"> 
											<Link to={"#"} className="icon-cell text-black"><i className="fa fa-history"></i></Link> 
										</div>
										<div className="icon-content">
											<h5 className="dlab-tilte">60 days money back guranty!</h5>
											<p>Not happy with our product, feel free to return it, we will refund 100% your money!</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="section-full bg-gray content-inner text-center">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-12 m-b20">
									<div className="item-box">
										<div className="item-img outline-hv">
											<img src={require("../../images/product/item9.jpg")} alt=""/>
										</div>
										<div className="item-info text-left text-black p-tb10">
											<h4 className="item-title font-weight-500 m-b10"><Link to={"#"}>The Best Shop Was Created </Link></h4>
											<div className="dlab-post-meta text-gray">
												<ul>
													<li className="post-date"> <i className="ti-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
													<li className="post-author"><i className="ti-user"></i>By <Link to={"#"}>demongo</Link> </li>
													<li className="post-comment"><i className="ti-comment-alt"></i> <Link to={"#"}>0</Link> </li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 m-b20">
									<div className="item-box">
										<div className="item-img outline-hv">
											<img src={require("../../images/product/item4.jpg")} alt=""/>
										</div>
										<div className="item-info text-left text-black p-tb10">
											<h4 className="item-title font-weight-500 m-b10"><Link to={"#"}>The Best Shop Was Created </Link></h4>
											<div className="dlab-post-meta text-gray">
												<ul>
													<li className="post-date"> <i className="ti-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
													<li className="post-author"><i className="ti-user"></i>By <Link to={"#"}>demongo</Link> </li>
													<li className="post-comment"><i className="ti-comment-alt"></i> <Link to={"#"}>0</Link> </li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 m-b20">
									<div className="item-box">
										<div className="item-img outline-hv">
											<img src={require("../../images/product/item2.jpg")} alt=""/>
										</div>
										<div className="item-info text-left text-black p-tb10">
											<h4 className="item-title font-weight-500 m-b10"><Link to={"#"}>The Best Shop Was Created </Link></h4>
											<div className="dlab-post-meta text-gray">
												<ul>
													<li className="post-date"> <i className="ti-calendar"></i><strong>10 Aug</strong> <span> 2016</span> </li>
													<li className="post-author"><i className="ti-user"></i>By <Link to={"#"}>demongo</Link> </li>
													<li className="post-comment"><i className="ti-comment-alt"></i> <Link to={"#"}>0</Link> </li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="section-full p-t50 p-b20 bg-black-light text-white">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="icon-bx-wraper left shop-service-info m-b30">
										<div className="icon-md text-white radius"> 
											<Link to={"#"} className="icon-cell text-white"><i className="fa fa-gift"></i></Link> 
										</div>
										<div className="icon-content">
											<h5 className="dlab-tilte">Free shipping on orders $60+</h5>
											<p>Order more than 60$ and you will get free shippining Worldwide. More info.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="icon-bx-wraper left shop-service-info m-b30">
										<div className="icon-md text-white radius"> 
											<Link to={"#"} className="icon-cell text-white"><i className="fa fa-plane"></i></Link> 
										</div>
										<div className="icon-content">
											<h5 className="dlab-tilte">Worldwide delivery</h5>
											<p>We deliver to the following countries: USA, Canada, Europe, Australia</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="icon-bx-wraper left shop-service-info m-b30">
										<div className="icon-md text-white radius"> 
											<Link to={"#"} className="icon-cell text-white"><i className="fa fa-history"></i></Link> 
										</div>
										<div className="icon-content">
											<h5 className="dlab-tilte">60 days money back guranty!</h5>
											<p>Not happy with our product, feel free to return it, we will refund 100% your money!</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="section-full bg-gray content-inner-1">
						<div className="container">
							<div className="row">
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box m-b30">
										<div className="item-img">
											<img src={require("../../images/product/item1.jpg")} alt=""/>
											<div className="item-info-in no-bg tb left">
												<ul>
													<li><Link to={"#"}><i className="ti-shopping-cart"></i></Link></li>
													<li><Link to={"#"}><i className="ti-eye"></i></Link></li>
													<li><Link to={"#"}><i className="ti-heart"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="item-info text-left text-black p-a20 bg-white">
											<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
											<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box m-b30 item-style-1">
										<div className="item-img">
											<img src={require("../../images/product/item2.jpg")} alt=""/>
											<div className="item-info-in no-bg tb top right">
												<ul>
													<li><Link to={"#"}><i className="ti-shopping-cart"></i></Link></li>
													<li><Link to={"#"}><i className="ti-eye"></i></Link></li>
													<li><Link to={"#"}><i className="ti-heart"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="item-info text-center text-black p-a20 bg-white">
											<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
											<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box m-b30">
										<div className="item-img">
											<img src={require("../../images/product/item3.jpg")} alt=""/>
											<div className="item-info-in no-bg tb right">
												<ul>
													<li><Link to={"#"}><i className="ti-shopping-cart"></i></Link></li>
													<li><Link to={"#"}><i className="ti-eye"></i></Link></li>
													<li><Link to={"#"}><i className="ti-heart"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="item-info text-center text-black p-a20 bg-white">
											<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
											<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box m-b30">
										<div className="item-img">
											<img src={require("../../images/product/item4.jpg")} alt=""/>
											<div className="item-info-in no-bg tb top">
												<ul>
													<li><Link to={"#"}><i className="ti-shopping-cart"></i></Link></li>
													<li><Link to={"#"}><i className="ti-eye"></i></Link></li>
													<li><Link to={"#"}><i className="ti-heart"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="item-info text-center text-black p-a20 bg-white">
											<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
											<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
							</div>	
							<div className="row">
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box m-b30">
										<div className="item-img">
											<img src={require("../../images/product/item8.jpg")} alt=""/>
											<div className="item-info-in left">
												<ul>
													<li><Link to={"#"}><i className="ti-shopping-cart"></i></Link></li>
													<li><Link to={"#"}><i className="ti-eye"></i></Link></li>
													<li><Link to={"#"}><i className="ti-heart"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="item-info text-left text-black p-a20 bg-white">
											<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
											<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box m-b30 item-style-1">
										<div className="item-img">
											<img src={require("../../images/product/item7.jpg")} alt=""/>
											<div className="item-info-in top right">
												<ul>
													<li><Link to={"#"}><i className="ti-shopping-cart"></i></Link></li>
													<li><Link to={"#"}><i className="ti-eye"></i></Link></li>
													<li><Link to={"#"}><i className="ti-heart"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="item-info text-center text-black p-a20 bg-white">
											<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
											<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box m-b30">
										<div className="item-img">
											<img src={require("../../images/product/item6.jpg")} alt=""/>
											<div className="item-info-in right">
												<ul>
													<li><Link to={"#"}><i className="ti-shopping-cart"></i></Link></li>
													<li><Link to={"#"}><i className="ti-eye"></i></Link></li>
													<li><Link to={"#"}><i className="ti-heart"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="item-info text-center text-black p-a20 bg-white">
											<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
											<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box m-b30">
										<div className="item-img">
											<img src={require("../../images/product/item5.jpg")} alt=""/>
											<div className="item-info-in top">
												<ul>
													<li><Link to={"#"}><i className="ti-shopping-cart"></i></Link></li>
													<li><Link to={"#"}><i className="ti-eye"></i></Link></li>
													<li><Link to={"#"}><i className="ti-heart"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="item-info text-center text-black p-a20 bg-white">
											<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
											<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
							</div>	
							<div className="row">
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box m-b30">
										<div className="item-img">
											<img src={require("../../images/product/item8.jpg")} alt=""/>
											<div className="item-info-in center">
												<ul>
													<li><Link to={"#"}><i className="ti-shopping-cart"></i></Link></li>
													<li><Link to={"#"}><i className="ti-eye"></i></Link></li>
													<li><Link to={"#"}><i className="ti-heart"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="item-info text-left text-black p-a20 bg-white">
											<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
											<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box m-b30 item-style-1">
										<div className="item-img">
											<img src={require("../../images/product/item7.jpg")} alt=""/>
											<div className="item-info-in full no-bg">
												<div className="center p-lr40">
													<Link to={"#"} className="site-button radius-xl m-b10 btn-block"><i className="ti-shopping-cart"></i> Add To Cart</Link>
													<Link to={"#"} className="site-button radius-xl btn-block"><i className="ti-heart"></i> Wishlist</Link>
												</div>
											</div>
										</div>
										<div className="item-info text-center text-black p-a20 bg-white">
											<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
											<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box m-b30">
										<div className="item-img">
											<img src={require("../../images/product/item6.jpg")} alt=""/>
											<div className="item-info-in full">
												<div className="center p-lr40">
													<Link to={"#"} className="site-button radius-xl m-b10 btn-block"><i className="ti-shopping-cart"></i> Add To Cart</Link>
													<Link to={"#"} className="site-button radius-xl btn-block"><i className="ti-heart"></i> Wishlist</Link>
												</div>
											</div>
										</div>
										<div className="item-info text-center text-black p-a20 bg-white">
											<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
											<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="item-box m-b30">
										<div className="item-img">
											<img src={require("../../images/product/item5.jpg")} alt=""/>
											<div className="item-info-in">
												<ul>
													<li><Link to={"#"}><i className="ti-shopping-cart"></i></Link></li>
													<li><Link to={"#"}><i className="ti-eye"></i></Link></li>
													<li><Link to={"#"}><i className="ti-heart"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="item-info text-center text-black p-a20 bg-white">
											<h6 className="item-title text-uppercase font-weight-500"><Link to={"#"}>Product Title</Link></h6>
											<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
										</div>
									</div>
								</div>
							</div>
						</div>	
					</div>
					<div className="section-full bg-white content-inner">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-md-12 m-b30">
									<div className="item-add add-style-3">
										<img src={require("../../images/product/item11.jpg")} alt=""/>
										<div className="add-box">
											<div className="m-auto add-box-in text-black">
												<h5>CLEARANCE SALES</h5>
												<h2>GET UP TO 20% OFF</h2>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-12 m-b30">
									<div className="item-add add-style-3">
										<img src={require("../../images/product/item10.jpg")} alt=""/>
										<div className="add-box ">
											<div className="m-auto add-box-in black text-white">
												<h5>CLEARANCE SALES</h5>
												<h2>GET UP TO 20% OFF</h2>
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

export default shopWidgets;