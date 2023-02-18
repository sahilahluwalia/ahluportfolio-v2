import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr4 = require('./../../images/banner/bnr4.jpg');

class shortPagination extends Component {

    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
								<h1 className="text-white">Pagination</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={"./"}>Home</Link></li>
										<li>Element</li>
										<li>Pagination</li>
									</ul>
								</div>
							</div>
                        </div>
                    </div>
					
					<div className="bg-white">
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-6 col-md-12">
										<h4>Pagination Style</h4>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx primary clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx rounded-sm clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx rounded-sm primary clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx rounded clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx rounded primary clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i></Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}><i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx primary clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i></Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}><i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx rounded clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx rounded primary clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx primary clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx primary clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="next pull-right"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx gray clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx gray clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-12">
										<h4>Pagination Size</h4>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx pagination-sm clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx pagination-lg clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx pagination-sm primary clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx clearfix primary">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx pagination-lg clearfix primary">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx rounded pagination-sm clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx rounded clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx rounded pagination-lg clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx rounded pagination-sm primary clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx rounded clearfix primary">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx rounded pagination-lg clearfix primary">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in pagination-sm m-b15">
											<div className="pagination-bx rounded-sm clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="next pull-right"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx primary rounded clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="next pull-right"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
											</div>
										</div>
										<div className="section-content box-sort-in m-b15">
											<div className="pagination-bx rounded pagination-lg clearfix">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
													<li className="next pull-right"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
												</ul>
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

export default shortPagination;