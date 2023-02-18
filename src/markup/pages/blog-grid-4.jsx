import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('../../images/banner/bnr1.jpg')

class BlogGrid4 extends Component {


    render() {
        return (
            <>
                <Header/>
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Blog grid 4</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to="/">Home</Link></li>
                                        <li>Blog grid 4</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-area">
						<div className="container">
							<div className="row">
								<div id="masonry" className="dlab-blog-grid-3 col-lg-12">
									<div className="row">
										<div className="post card-container col-xl-3 col-lg-4 col-md-6 col-sm-6">
											<div className="blog-post blog-grid blog-rounded blog-effect1">
												<div className="dlab-post-media dlab-img-effect"> 
													<Link to={"./blog-single"}><img src={require("../../images/blog/grid/pic1.jpg")} alt=""/></Link> 
												</div>
												<div className="dlab-info p-a20 border-1">
													<div className="dlab-post-meta">
														<ul>
															<li className="post-date"> <strong>17 Aug</strong> <span> 2016</span> </li>
															<li className="post-author"> By <Link to={"#"}>Aaron</Link> </li>
														</ul>
													</div>
													<div className="dlab-post-title ">
														<h5 className="post-title"><Link to={"./blog-single"}>Why Are Children So Obsessed</Link></h5>
													</div>
													<div className="dlab-post-text">
														<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
													</div>
													<div className="dlab-post-readmore"> 
														<Link to={"./blog-single"} title="READ MORE" rel="bookmark" className="site-button">READ MORE
															<i className="ti-arrow-right"></i>
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className="post card-container col-xl-3 col-lg-4 col-md-6 col-sm-6">
											<div className="blog-post blog-grid blog-rounded blog-effect1">
												<div className="dlab-post-media dlab-img-effect"> 
													<Link to={"./blog-single"}><img src={require("../../images/blog/grid/pic2.jpg")} alt=""/></Link> 
												</div>
												<div className="dlab-info p-a20 border-1">
													<div className="dlab-post-meta">
														<ul>
															<li className="post-date"> <strong>16 Aug</strong> <span> 2016</span> </li>
															<li className="post-author"> By <Link to={"#"}>Jamie</Link> </li>
														</ul>
													</div>
													<div className="dlab-post-title ">
														<h5 className="post-title"><Link to={"./blog-single"}>How To Get People To Like Industry</Link></h5>
													</div>
													<div className="dlab-post-text">
														 <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
													</div>
													<div className="dlab-post-readmore"> 
														<Link to={"./blog-single"} title="READ MORE" rel="bookmark" className="site-button">READ MORE
															<i className="ti-arrow-right"></i>
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className="post card-container col-xl-3 col-lg-4 col-md-6 col-sm-6">
										   <div className="blog-post blog-grid blog-rounded blog-effect1">
												<div className="dlab-post-media dlab-img-effect"> 
													<Link to={"./blog-single"}><img src={require("../../images/blog/grid/pic3.jpg")} alt=""/></Link> 
												</div>
												<div className="dlab-info p-a20 border-1">
													<div className="dlab-post-meta">
														<ul>
															<li className="post-date"> <strong>15 Aug</strong> <span> 2016</span> </li>
															<li className="post-author"> By <Link to={"#"}>Anna</Link> </li>
														</ul>
													</div>
													<div className="dlab-post-title ">
														<h5 className="post-title"><Link to={"./blog-single"}>The Story Of Industry Has Just</Link></h5>
													</div>
													<div className="dlab-post-text">
														<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
													</div>
													<div className="dlab-post-readmore"> 
														<Link to={"./blog-single"} title="READ MORE" rel="bookmark" className="site-button">READ MORE
															<i className="ti-arrow-right"></i>
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className="post card-container col-xl-3 col-lg-4 col-md-6 col-sm-6">
											<div className="blog-post blog-grid blog-rounded blog-effect1">
												<div className="dlab-post-media dlab-img-effect"> 
													<Link to={"./blog-single"}><img src={require("../../images/blog/grid/pic4.jpg")} alt=""/></Link> 
												</div>
												<div className="dlab-info p-a20 border-1">
													<div className="dlab-post-meta">
														<ul>
															<li className="post-date"> <strong>14 Aug</strong> <span> 2016</span> </li>
															<li className="post-author"> By <Link to={"#"}>Victoria</Link> </li>
														</ul>
													</div>
													<div className="dlab-post-title">
														<h5 className="post-title"><Link to={"./blog-single"}>Seven Outrageous Ideas Industry</Link></h5>
													</div>
													<div className="dlab-post-text">
														<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
													</div>
													<div className="dlab-post-readmore"> 
														<Link to={"./blog-single"} title="READ MORE" rel="bookmark" className="site-button">READ MORE
															<i className="ti-arrow-right"></i>
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className="post card-container col-xl-3 col-lg-4 col-md-6 col-sm-6">
											<div className="blog-post blog-grid blog-rounded blog-effect1">
												<div className="dlab-post-media dlab-img-effect"> 
													<Link to={"./blog-single"}><img src={require("../../images/blog/grid/pic4.jpg")} alt=""/></Link> 
												</div>
												<div className="dlab-info p-a20 border-1">
													<div className="dlab-post-meta">
														<ul>
															<li className="post-date"> <strong>13 Aug</strong> <span> 2016</span> </li>
															<li className="post-author"> By <Link to={"#"}>Winnie </Link> </li>
														</ul>
													</div>
													<div className="dlab-post-title">
														<h5 className="post-title"><Link to={"./blog-single"}>How Industry Can Increase</Link></h5>
													</div>
													<div className="dlab-post-text">
														 <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
													</div>
													<div className="dlab-post-readmore"> 
														<Link to={"./blog-single"} title="READ MORE" rel="bookmark" className="site-button">READ MORE
															<i className="ti-arrow-right"></i>
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className="post card-container col-xl-3 col-lg-4 col-md-6 col-sm-6">
											<div className="blog-post blog-grid blog-rounded blog-effect1">
												<div className="dlab-post-media dlab-img-effect"> 
													<Link to={"./blog-single"}><img src={require("../../images/blog/grid/pic3.jpg")} alt=""/></Link> 
												</div>
												<div className="dlab-info p-a20 border-1">
													<div className="dlab-post-meta">
														<ul>
															<li className="post-date"> <strong>12 Aug</strong> <span> 2016</span> </li>
															<li className="post-author"> By <Link to={"#"}>Jone</Link> </li>
														</ul>
													</div>
													<div className="dlab-post-title ">
														<h5 className="post-title"><Link to={"./blog-single"}>Here's What People Are Saying</Link></h5>
													</div>
													<div className="dlab-post-text">
														<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
													</div>
													<div className="dlab-post-readmore"> 
														<Link to={"./blog-single"} title="READ MORE" rel="bookmark" className="site-button">READ MORE
															<i className="ti-arrow-right"></i>
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className="post card-container col-xl-3 col-lg-4 col-md-6 col-sm-6">
										   <div className="blog-post blog-grid blog-rounded blog-effect1">
												<div className="dlab-post-media dlab-img-effect"> 
													<Link to={"./blog-single"}><img src={require("../../images/blog/grid/pic2.jpg")} alt=""/></Link> 
												</div>
												<div className="dlab-info p-a20 border-1">
													<div className="dlab-post-meta">
														<ul>
															<li className="post-date"> <strong>11 Aug</strong> <span> 2016</span> </li>
															<li className="post-author"> By <Link to={"#"}>Jack</Link> </li>
														</ul>
													</div>
													<div className="dlab-post-title">
														<h5 className="post-title"><Link to={"./blog-single"}>The Shocking Revelation of Industry</Link></h5>
													</div>
													<div className="dlab-post-text">
														<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
													</div>
													<div className="dlab-post-readmore"> 
														<Link to={"./blog-single"} title="READ MORE" rel="bookmark" className="site-button">READ MORE
															<i className="ti-arrow-right"></i>
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className="post card-container col-xl-3 col-lg-4 col-md-6 col-sm-6">
											<div className="blog-post blog-grid blog-rounded blog-effect1">
												<div className="dlab-post-media dlab-img-effect"> 
													<Link to={"./blog-single"}><img src={require("../../images/blog/grid/pic1.jpg")} alt=""/></Link> 
												</div>
												<div className="dlab-info p-a20 border-1">
													<div className="dlab-post-meta">
														<ul>
															<li className="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
															<li className="post-author"> By <Link to={"#"}>Oliver</Link> </li>
														</ul>
													</div>
													<div className="dlab-post-title">
														<h5 className="post-title"><Link to={"./blog-single"}>Here's What People Are Saying</Link></h5>
													</div>
													<div className="dlab-post-text">
														<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
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
								<div className="pagination-bx clearfix col-md-12 text-center">
									<ul className="pagination">
										<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
										<li className="active"><Link to={"#"}>1</Link></li>
										<li><Link to={"#"}>2</Link></li>
										<li><Link to={"#"}>3</Link></li>
										<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
									</ul>
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
export default BlogGrid4;