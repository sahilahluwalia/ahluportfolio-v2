import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr4 = require('./../../images/banner/bnr4.jpg');
var bg8 = require('./../../images/background/bg8.jpg');

class shortListGroup extends Component {


    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
								<h1 className="text-white">List Groups</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={"./"}>Home</Link></li>
										<li>Element</li>
										<li>List Groups</li>
									</ul>
								</div>
							</div>
                        </div>
                    </div>
					
					<div className="bg-white">
						<div className="section-full bg-white content-inner bg-img-fix">
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<div className="sort-title clearfix text-center">
											<h4>Listing With Numbering &amp; Alfha </h4>
										</div>
										<div className="section-content box-sort-in m-b10 p-b0 button-example m-b30">
											<div className="row">
												<div className="col-md-4 col-lg-4">
													<ul className="list-star red list-box">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div className="col-md-4 col-lg-4 ">
													<ul className="list-cup primary list-box style1">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div className="col-md-4 col-lg-4">
													<ul className="list-heart primary list-box style2">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="section-content box-sort-in m-b10 p-b0 button-example m-b30">
											<div className="row">
												<div className="col-md-4 col-lg-4">
													<ul className="list-star red rounded">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div className="col-md-4 col-lg-4">
													<ul className="list-cup primary reverse rounded">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div className="col-md-4 col-lg-4">
													<ul className="list-heart primary rounded border">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
											</div>								
										</div>
										<div className="section-content box-sort-in m-b10 p-b0 button-example">
											<div className="max-w600 m-auto">
												<ul className="list-star reverse list-box ">
													<li>Create just what you need for your Perfect Website. </li>
													<li>Create just what you need for your Perfect Website. </li>
													<li>Create just what you need for your Perfect Website. </li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full bg-white content-inner overlay-black-dark bg-img-fix text-white" style={{ backgroundImage: "url(" + bg8 + ")" }}>
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<div className="sort-title clearfix text-center text-white">
											<h4>Listing With Numbering &amp; Alfha </h4>
										</div>
										<div className="section-content box-sort-in m-b10 p-b0 button-example m-b30 ">
											<div className="row">
												<div className="col-md-4 col-lg-4">
													<ul className="list-star red list-box">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div className="col-md-4 col-lg-4 ">
													<ul className="list-cup primary list-box style1">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div className="col-md-4 col-lg-4">
													<ul className="list-heart primary list-box style2">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="section-content box-sort-in m-b10 p-b0 button-example m-b30">
											<div className="row">
												<div className="col-md-4 col-lg-4">
													<ul className="list-star red rounded">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div className="col-md-4 col-lg-4">
													<ul className="list-cup primary reverse rounded">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div className="col-md-4 col-lg-4">
													<ul className="list-heart primary rounded border">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
													</ul>
												</div>
											</div>								
										</div>
										<div className="section-content box-sort-in m-b10 p-b0 button-example">
											<div className="max-w600 m-auto">
												<ul className="list-star reverse list-box ">
													<li>Create just what you need for your Perfect Website. </li>
													<li>Create just what you need for your Perfect Website. </li>
													<li>Create just what you need for your Perfect Website. </li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<div className="sort-title clearfix text-center">
											<h4>Listing with symbols</h4>
										</div>
										<div className="section-content box-sort-in m-b10 p-b0 button-example">
											<div className="row">
												<div className="col-md-4 col-lg-4 col-sm-6">
													<ul className="list-circle">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div className="col-md-4 col-lg-4 col-sm-6">
													<ul className="list-angle-right">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div className="col-md-4 col-lg-4 col-sm-6">
													<ul className="list-arrow">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<hr/>
												<div className="col-md-4 col-lg-4 col-sm-6">
													<ul  className="list-icon-box primary">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div className="col-md-4 col-lg-4 col-sm-6">
													<ul className="list-check secondry">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div className="col-md-4 col-lg-4 col-sm-6">
													<ul  className="list-checked black">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<hr/>
												<div className="col-md-4 col-lg-4 col-sm-6">
													<ul className="list-chevron-circle orange ">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div className="col-md-4 col-lg-4 col-sm-6">
													<ul className="list-hand-point green">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div className="col-md-4 col-lg-4 col-sm-6">
													<ul className="list-star red">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<hr/>
												<div className="col-md-4 col-lg-4 col-sm-6">
													<ul className="list-cup green">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div className="col-md-4 col-lg-4 col-sm-6">
													<ul className="list-pen red">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<div className="col-md-4 col-lg-4 col-sm-6">
													<ul className="list-heart orange">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ul>
												</div>
												<hr/>
												<div className="col-lg-3 col-md-3 col-sm-6">
													<ol className="list-num-count no-round">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ol>
												</div>
												<div className="col-lg-3 col-md-3 col-sm-6">
													<ol className="list-num-count no-round upper-alpha">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ol>
												</div>
												<div className="col-lg-3 col-md-3 col-sm-6">
													<ol className="list-num-count no-round upper-roman">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ol>
												</div>
												<div className="col-lg-3 col-md-3 col-sm-6">
													<ol className="list-num-count no-round lower-alpha">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ol>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dlab-divider bg-gray-dark"><i className="icon-dot c-square"></i></div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<div className="sort-title clearfix text-center">
											<h4>Listing With Numbering &amp; Alfha </h4>
										</div>
										<div className="section-content box-sort-in m-b10 p-b0 button-example">
											<div className="row">
												<div className="col-md-4 col-lg-4 col-sm-6">
													<ol className="list-num-count">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ol>
												</div>
												<div className="col-md-4 col-lg-4 col-sm-6">
													<ol className="list-num-count upper-alpha">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ol>
												</div>
												<div className="col-md-4 col-lg-4 col-sm-6">
													<ol className="list-num-count lower-alpha">
														<li>Lorem ipsum dolor sit amet</li>
														<li>Aorem ipsum dolor sit amet</li>
														<li>Borem ipsum dolor sit amet</li>
													</ol>
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

export default shortListGroup;