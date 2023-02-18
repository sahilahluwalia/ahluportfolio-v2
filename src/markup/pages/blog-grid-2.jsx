import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('../../images/banner/bnr1.jpg')

class BlogGrid2 extends Component {


    render() {
        return (
            <>
                <Header/>
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
								<h1 className="text-white">Blog grid 2</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={"./"}>Home</Link></li>
										<li>Blog grid 2</li>
									</ul>
								</div>
							</div>
                        </div>
                    </div>
                    <div className="content-area">
						<div className="container">
							<div id="masonry" className="dlab-blog-grid-2" style={{width: "100%"}}>
								<div className="row">
									<div className="post card-container col-lg-6 col-md-6 col-sm-12">
										<div className="blog-post blog-grid blog-rounded blog-effect1">
											<div className="dlab-post-media dlab-img-effect"> 
												<Link to={"./blog-single"}><img src={require("../../images/blog/grid/pic1.jpg")} alt=""/></Link> 
											</div>
											<div className="dlab-info p-a25 border-1">
												<div className="dlab-post-meta ">
													<ul>
														<li className="post-date"><strong>August 4,</strong><span> 2022</span></li>
														<li className="post-author">By <Link to={"#"}>Jamie</Link></li>
													</ul>
												</div>
												<div className="dlab-post-title ">
													<h4 className="post-title"><Link to={"./blog-single"}>Why Are Children So Obsessed</Link></h4>
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
									<div className="post card-container col-lg-6 col-md-6 col-sm-12">
										<div className="blog-post blog-grid blog-rounded blog-effect1">
											<div className="dlab-post-media dlab-img-effect"> 
												<Link to={"./blog-single"}><img src={require("../../images/blog/grid/pic2.jpg")} alt=""/></Link> 
											</div>
											<div className="dlab-info p-a25 border-1">
												<div className="dlab-post-meta">
													<ul>
														<li className="post-date"> <strong>12 Aug</strong> <span> 2016</span> </li>
														<li className="post-author"> By <Link to={"#"}>Reuben</Link> </li>
													</ul>
												</div>
												<div className="dlab-post-title">
													<h4 className="post-title"><Link to={"./blog-single"}>The Shocking Revelation of Industry</Link></h4>
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
									<div className="post card-container col-lg-6 col-md-6 col-sm-12">
										<div className="blog-post blog-grid blog-rounded blog-effect1">
											<div className="dlab-post-media dlab-img-effect"> 
												<Link to={"./blog-single"}><img src={require("../../images/blog/grid/pic3.jpg")} alt=""/></Link> 
											</div>
											<div className="dlab-info p-a25 border-1">
												<div className="dlab-post-meta ">
													<ul>
														<li className="post-date"> <strong>13 Aug</strong> <span> 2016</span> </li>
														<li className="post-author"> By <Link to={"#"}>Caroline</Link> </li>
													</ul>
												</div>
												<div className="dlab-post-title ">
													<h4 className="post-title"><Link to={"./blog-single"}>The Story Of Industry Has Just Gone</Link></h4>
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
									<div className="post card-container col-lg-6 col-md-6 col-sm-12">
										<div className="blog-post blog-grid blog-rounded blog-effect1">
											<div className="dlab-post-media dlab-img-effect"> 
												<Link to={"./blog-single"}><img src={require("../../images/blog/grid/pic4.jpg")} alt=""/></Link> 
											</div>
											<div className="dlab-info p-a25 border-1">
												<div className="dlab-post-meta">
													<ul>
														<li className="post-date"> <strong>14 Aug</strong> <span> 2016</span> </li>
														<li className="post-author"> By <Link to={"#"}>Harry</Link> </li>
													</ul>
												</div>
												<div className="dlab-post-title ">
													<h4 className="post-title"><Link to={"./blog-single"}>Seven Outrageous Ideas For Your Industry</Link></h4>
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
									<div className="post card-container col-lg-6 col-md-6 col-sm-12">
										<div className="blog-post blog-grid blog-rounded blog-effect1">
											<div className="dlab-post-media dlab-img-effect"> 
												<Link to={"./blog-single"}><img src={require("../../images/blog/grid/pic1.jpg")} alt=""/></Link> 
											</div>
											<div className="dlab-info p-a25 border-1">
												<div className="dlab-post-meta ">
													<ul>
														<li className="post-date"> <strong>15 Aug</strong> <span> 2016</span> </li>
														<li className="post-author"> By <Link to={"#"}>Anna</Link> </li>
													</ul>
												</div>
												<div className="dlab-post-title ">
													<h4 className="post-title"><Link to={"./blog-single"}>How Industry Can Increase</Link></h4>
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
									<div className="post card-container col-lg-6 col-md-6 col-sm-12">
										<div className="blog-post blog-grid blog-rounded blog-effect1">
											<div className="dlab-post-media dlab-img-effect"> 
												<Link to={"./blog-single"}><img src={require("../../images/blog/grid/pic2.jpg")} alt=""/></Link> 
											</div>
											<div className="dlab-info p-a25 border-1">
												<div className="dlab-post-meta">
													<ul>
														<li className="post-date"> <strong>16 Aug</strong> <span> 2016</span> </li>
														<li className="post-author"> By <Link to={"#"}>Oliver</Link> </li>
													</ul>
												</div>
												<div className="dlab-post-title ">
													<h4 className="post-title"><Link to={"./blog-single"}>Here's What People Are Saying</Link></h4>
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
							<div className="pagination-bx clearfix  col-md-12 text-center">
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
                <Footer/>                
            </>
        )
    }
}
export default BlogGrid2;