import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr4 = require('./../../images/banner/bnr4.jpg');
//var bg8 = require('./../../images/background/bg8.jpg');

class shortImageBoxContent extends Component {


    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    
					<div className="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
								<h1 className="text-white">Images box content</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={"/"}>Home</Link></li>
										<li>Element</li>
										<li>Images box content</li>
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
											<h4>Blog Content Box 1</h4>
										</div>
										<div className="section-content box-sort-in button-example p-b0">
											<div className="row">
												<div className="post card-container col-lg-4 col-md-6 col-sm-6">
													<div className="blog-post blog-grid blog-rounded blog-effect1">
														<div className="dlab-post-media dlab-img-effect"> 
															<Link to={"./blog-single"}><img src={require("../../images/blog/grid/pic1.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info p-a20 border-1">
															<div className="dlab-post-meta">
																<ul>
																	<li className="post-date"><strong>August 4,</strong><span> 2022</span></li>
																	<li className="post-author">By <Link to={"#"}>Jamie</Link></li>
																</ul>
															</div>
															<div className="dlab-post-title">
																<h4 className="post-title"><Link to={"./blog-single"}>Title of first blog post</Link></h4>
															</div>
															<div className="dlab-post-text">
															   <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															</div>
															<div className="dlab-post-readmore"> 
																<Link to={"./blog-single"} title="READ MORE" rel="bookmark" className="site-button">READ MORE
																	<i className="ti-arrow-right"></i>
																</Link>
															</div>
														</div>
													</div>
												</div>
												<div className="post card-container col-lg-4 col-md-6 col-sm-6">
													<div className="blog-post blog-grid blog-rounded blog-effect1">
														<div className="dlab-post-media dlab-img-effect"> 
															<Link to={"./blog-single"}><img src={require("../../images/blog/grid/pic2.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info p-a20 border-1">
															<div className="dlab-post-meta">
																<ul>
																	<li className="post-date"> <strong>12 Aug</strong> <span> 2016</span> </li>
																	<li className="post-author"> By <Link to={"#"}>Reuben</Link></li>
																</ul>
															</div>
															<div className="dlab-post-title">
																<h4 className="post-title"><Link to={"./blog-single"}>Title of first blog post</Link></h4>
															</div>
															<div className="dlab-post-text">
															   <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															</div>
															<div className="dlab-post-readmore"> 
																<Link to={"./blog-single"} title="READ MORE" rel="bookmark" className="site-button">READ MORE
																	<i className="ti-arrow-right"></i>
																</Link>
															</div>
														</div>
													</div>
												</div>
												<div className="post card-container col-lg-4 col-md-6 col-sm-6">
													<div className="blog-post blog-grid blog-rounded blog-effect1">
														<div className="dlab-post-media dlab-img-effect"> 
															<Link to={"./blog-single"}><img src={require("../../images/blog/grid/pic3.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info p-a20 border-1">
															<div className="dlab-post-meta">
																<ul>
																	<li className="post-date"> <strong>13 Aug</strong> <span> 2016</span> </li>
																	<li className="post-author"> By <Link to={"#"}>Caroline</Link> </li>
																</ul>
															</div>
															<div className="dlab-post-title">
																<h4 className="post-title"><Link to={"./blog-single"}>Title of first blog post</Link></h4>
															</div>
															<div className="dlab-post-text">
															   <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															</div>
															<div className="dlab-post-readmore"> 
																<Link to={"./blog-single"} title="READ MORE" rel="bookmark" className="site-button">READ MORE
																	<i className="ti-arrow-right"></i>
																</Link>
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
						<div className="dlab-divider bg-gray-dark tb10"></div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>Blog Content Box 2</h4>
										</div>
										<div className="section-content p-b0">
											<div className="row">
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box"> 
														<div className="dlab-media dlab-img-overlay1 dlab-img-effect on rotate no-hover"> <img src={require("../../images/blog/grid/pic1.jpg")} alt=""/>
															<div className="dlab-info-has p-a20 no-hover ">
																<Link to={"#"} className="site-button button-sm m-b10">Fashion</Link>
																<div className="dlab-post-meta text-white">
																	<ul>
																		<li className="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
																		<li className="post-author"> By <Link to={"#"}>demongo</Link> </li>
																	</ul>
																</div>
																<div className="dlab-post-title">
																	<h5 className="post-title"><Link to={"./blog-single"}>There are many variations.</Link></h5>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box"> 
														<div className="dlab-media dlab-img-overlay1 dlab-img-effect on rotate no-hover"> <img src={require("../../images/blog/grid/pic2.jpg")} alt=""/>
															<div className="dlab-info-has p-a20 no-hover ">
																<Link to={"#"} className="site-button button-sm red m-b10">Fashion</Link>
																<div className="dlab-post-meta text-white">
																	<ul>
																		<li className="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
																		<li className="post-author"> By <Link to={"#"}>demongo</Link> </li>
																	</ul>
																</div>
																<div className="dlab-post-title">
																	<h5 className="post-title"><Link to={"./blog-single"}>There are many variations.</Link></h5>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box"> 
														<div className="dlab-media dlab-img-overlay1 dlab-img-effect on rotate no-hover"> <img src={require("../../images/blog/grid/pic3.jpg")} alt=""/>
															<div className="dlab-info-has p-a20 no-hover">
																<Link to={"#"} className="site-button button-sm pink m-b10">Fashion</Link>
																<div className="dlab-post-meta text-white">
																	<ul>
																		<li className="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
																		<li className="post-author"> By <Link to={"#"}>demongo</Link> </li>
																	</ul>
																</div>
																<div className="dlab-post-title">
																	<h5 className="post-title"><Link to={"./blog-single"}>There are many variations.</Link></h5>
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
						<div className="dlab-divider bg-gray-dark tb10"></div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>Images box with content demo 1</h4>
										</div>
										<div className="section-content p-b0">
											<div className="row">
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box fly-box">
														<div className="dlab-media"> 
															<Link to={"./blog-single"}><img src={require("../../images/our-work/pic6.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info p-a20 text-center bg-white">
															<h4 className="m-a0 bg-primary content-box-head"><Link to={"./blog-single"} className="text-white">Title Come Here</Link></h4>
															<p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box fly-box">
														<div className="dlab-media"> 
															<Link to={"./blog-single"}><img src={require("../../images/our-work/pic5.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info p-a20 text-center bg-white">
															<h4 className="m-a0 bg-primary content-box-head"><Link to={"./blog-single"} className="text-white">Title Come Here</Link></h4>
															<p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box fly-box">
														<div className="dlab-media"> 
															<Link to={"./blog-single"}><img src={require("../../images/our-work/pic4.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info p-a20 text-center bg-white">
															<h4 className="m-a0 bg-primary content-box-head"><Link to={"./blog-single"} className="text-white">Title Come Here</Link></h4>
															<p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dlab-divider bg-gray-dark tb10"></div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>Images box with content demo 2</h4>
										</div>
										<div className="section-content p-b0">
											<div className="row">
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box img-content-style-1 fly-box">
														<div className="dlab-media dlab-img-overlay1 dlab-img-effect"> 
															<img src={require("../../images/our-work/pic1.jpg")} alt=""/>
														</div>
														<div className="dlab-title-bx bg-white p-a20 text-center">
															<p className="font-16 text-secondry m-b5">Herbal Beauty Salon</p>
															<div className="dlab-divider margin-0 bg-black"></div>
															<p className="font-16 text-secondry m-a0"><small>Branding and Identity</small></p>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box img-content-style-1 fly-box">
														<div className="dlab-media dlab-img-overlay1 dlab-img-effect"> 
															<img src={require("../../images/our-work/pic3.jpg")} alt=""/>
														</div>
														<div className="dlab-title-bx bg-white p-a20 text-center">
															<p className="font-16 text-secondry m-b5">Herbal Beauty Salon</p>
															<div className="dlab-divider margin-0 bg-black"></div>
															<p className="font-16 text-secondry m-a0"><small>Branding and Identity</small></p>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box img-content-style-1 fly-box">
														<div className="dlab-media dlab-img-overlay1 dlab-img-effect"> 
															<img src={require("../../images/our-work/pic2.jpg")} alt=""/>
														</div>
														<div className="dlab-title-bx bg-white p-a20 text-center">
															<p className="font-16 text-secondry m-b5">Herbal Beauty Salon</p>
															<div className="dlab-divider margin-0 bg-black"></div>
															<p className="font-16 text-secondry m-a0"><small>Branding and Identity</small></p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dlab-divider bg-gray-dark tb10"></div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>Half Blog Images</h4>
										</div>
										<div className="section-content box-sort-in button-example p-b0">
											<div className="row">
												<div className="col-md-12 col-lg-12">
													<div className="blog-post blog-md clearfix border-1 br-col-b1 radius-sm">
														<div className="dlab-post-media dlab-img-effect zoom-slow"> 
															<Link to={"./blog-single"}><img src={require("../../images/blog/grid/pic1.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-post-info">
															<div className="dlab-post-meta">
																<ul>
																	<li className="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
																	<li className="post-author"> By <Link to={"#"}>demongo</Link> </li>
																</ul>
															</div>
															<div className="dlab-post-title">
																<h4 className="post-title"><Link to={"./blog-single"}>Title of first blog post</Link></h4>
															</div>
															<div className="dlab-post-text">
																<p className="p-r15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
															</div>
															<div className="dlab-post-readmore"> 
																<Link to={"./blog-single"} title="READ MORE" rel="bookmark" className="site-button">READ MORE
																	<i className="ti-arrow-right"></i>
																</Link>
															</div>
														</div>
													</div>
												</div>
												<div className="col-md-12 col-lg-12">
													<div className="blog-post blog-md clearfix border-1 br-col-b1 radius-sm bg-primary text-white">
														<div className="dlab-post-media dlab-img-effect zoom-slow"> 
															<Link to={"./blog-single"}><img src={require("../../images/blog/grid/pic2.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-post-info">
															<div className="dlab-post-meta ">
																<ul>
																	<li className="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
																	<li className="post-author"> By <Link to={"#"}>demongo</Link> </li>
																</ul>
															</div>
															<div className="dlab-post-title">
																<h4 className="post-title"><Link to={"./blog-single"}>Title of first blog post</Link></h4>
															</div>
															<div className="dlab-post-text">
																<p className="p-r15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
															</div>
															<div className="dlab-post-readmore"> 
																<Link to={"./blog-single"} title="READ MORE" rel="bookmark" className="site-button white">READ MORE
																	<i className="ti-arrow-right"></i>
																</Link>
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
						<div className="dlab-divider bg-gray-dark tb10"></div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>Blog Content Box 1</h4>
										</div>
										<div className="section-content box-sort-in button-example p-b0">
											<div className="row">
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box">
														<div className="dlab-media dlab-img-overlay4"> 
															<Link to={"./blog-single"}><img src={require("../../images/our-work/pic1.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info">
															<h4 className="dlab-title m-t20"><Link to={"./blog-single"}>Title Come Here</Link></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<Link to={"./blog-single"} className="site-button">More</Link>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box">
														<div className="dlab-media dlab-img-overlay4"> 
															<Link to={"./blog-single"}><img src={require("../../images/our-work/pic2.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info">
															<h4 className="dlab-title m-t20"><Link to={"./blog-single"}>Title Come Here</Link></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<Link to={"./blog-single"} className="site-button">More</Link> 
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box">
														<div className="dlab-media dlab-img-overlay4"> 
															<Link to={"./blog-single"}><img src={require("../../images/our-work/pic3.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info">
															<h4 className="dlab-title m-t20"><Link to={"./blog-single"}>Title Come Here</Link></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<Link to={"./blog-single"} className="site-button">More</Link> 
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dlab-divider bg-gray-dark tb10"></div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>Fade Slide</h4>
										</div>
										<div className="section-content box-sort-in button-example p-b0">
											<div className="row">
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box">
														<div className="dlab-media dlab-img-overlay5"> 
															<Link to={"./blog-single"}><img src={require("../../images/our-work/pic1.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info p-a30 border-1">
															<h4 className="dlab-title m-t0"><Link to={"./blog-single"}>Title Come Here</Link></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<Link to={"./blog-single"} className="site-button">More</Link> 
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box">
														<div className="dlab-media dlab-img-overlay5"> 
															<Link to={"./blog-single"}><img src={require("../../images/our-work/pic2.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info p-a30 border-1">
															<h4 className="dlab-title m-t0"><Link to={"./blog-single"}>Title Come Here</Link></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<Link to={"./blog-single"} className="site-button">More</Link> 
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box">
														<div className="dlab-media dlab-img-overlay5"> 
															<Link to={"./blog-single"}><img src={require("../../images/our-work/pic3.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info p-a30 border-1">
															<h4 className="dlab-title m-t0"><Link to={"./blog-single"}>Title Come Here</Link></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<Link to={"./blog-single"} className="site-button">More</Link> 
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dlab-divider bg-gray-dark tb10"></div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>Images box with content demo 3</h4>
										</div>
										<div className="section-content box-sort-in button-example p-b0">
											<div className="row">
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box">
														<div className="dlab-media dlab-img-overlay6"> 
															<Link to={"./blog-single"}><img src={require("../../images/our-work/pic1.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info p-a30 bg-gray">
															<h4 className="dlab-title m-t0"><Link to={"./blog-single"}>Title Come Here</Link></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<Link to={"./blog-single"} className="site-button">More</Link> 
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box">
														<div className="dlab-media dlab-img-overlay6"> 
															<Link to={"./blog-single"}><img src={require("../../images/our-work/pic2.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info p-a30 bg-gray">
															<h4 className="dlab-title m-t0"><Link to={"./blog-single"}>Title Come Here</Link></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<Link to={"./blog-single"} className="site-button">More</Link> 
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box">
														<div className="dlab-media dlab-img-overlay6"> 
															<Link to={"./blog-single"}><img src={require("../../images/our-work/pic3.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info p-a30 bg-gray">
															<h4 className="dlab-title m-t0"><Link to={"./blog-single"}>Title Come Here</Link></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<Link to={"./blog-single"} className="site-button">More</Link> 
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dlab-divider bg-gray-dark tb10"></div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>Images box with content demo 4</h4>
										</div>
										<div className="section-content">
											<div className="row">
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box p-a20 border-1">
														<div className="dlab-media dlab-img-overlay7"> 
															<Link to={"./blog-single"}><img src={require("../../images/our-work/pic1.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info">
															<h4 className="dlab-title m-t20"><Link to={"./blog-single"}>Title Come Here</Link></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<Link to={"./blog-single"} className="site-button">More</Link> 
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box p-a20 border-1">
														<div className="dlab-media dlab-img-overlay7"> 
															<Link to={"./blog-single"}><img src={require("../../images/our-work/pic2.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info">
															<h4 className="dlab-title m-t20"><Link to={"./blog-single"}>Title Come Here</Link></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<Link to={"./blog-single"} className="site-button">More</Link> 
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box p-a20 border-1">
														<div className="dlab-media dlab-img-overlay7"> 
															<Link to={"./blog-single"}><img src={require("../../images/our-work/pic3.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info">
															<h4 className="dlab-title m-t20"><Link to={"./blog-single"}>Title Come Here</Link></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<Link to={"./blog-single"} className="site-button">More</Link> 
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dlab-divider bg-gray-dark tb10"></div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>Images box with content demo 5</h4>
										</div>
										<div className="section-content p-b0">
											<div className="row">
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box p-a20 border-1 bg-gray">
														<div className="dlab-media dlab-img-overlay8"> 
															<Link to={"./blog-single"}><img src={require("../../images/our-work/pic1.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info">
															<h4 className="dlab-title m-t20"><Link to={"./blog-single"}>Title Come Here</Link></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<Link to={"./blog-single"} className="site-button">More</Link> 
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box p-a20 border-1 bg-gray">
														<div className="dlab-media dlab-img-overlay8"> 
															<Link to={"./blog-single"}><img src={require("../../images/our-work/pic2.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info">
															<h4 className="dlab-title m-t20"><Link to={"./blog-single"}>Title Come Here</Link></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<Link to={"./blog-single"} className="site-button">More</Link> 
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-6 m-b30">
													<div className="dlab-box p-a20 border-1 bg-gray">
														<div className="dlab-media dlab-img-overlay8"> 
															<Link to={"./blog-single"}><img src={require("../../images/our-work/pic3.jpg")} alt=""/></Link> 
														</div>
														<div className="dlab-info">
															<h4 className="dlab-title m-t20"><Link to={"./blog-single"}>Title Come Here</Link></h4>
															<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
															<Link to={"./blog-single"} className="site-button">More</Link> 
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

export default shortImageBoxContent;