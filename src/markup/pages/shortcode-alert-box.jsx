import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr4 = require('./../../images/banner/bnr4.jpg');

class shortAlertBox extends Component {
    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
								<h1 className="text-white">Alert Box</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={"./"}>Home</Link></li>
										<li>Element</li>
										<li>Alert Box</li>
									</ul>
								</div>
							</div>
                        </div>
                    </div>
					<div className="bg-white alert-box-area">
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>Alert box</h4>
										</div>
										<div className="section-content box-sort-in m-b30">
											<div className="alert alert-success"> <strong>Success!</strong> Indicates a successful or positive action. </div>
											<div className="alert alert-info"> <strong>Info!</strong> Indicates a neutral informative change or action. </div>
											<div className="alert alert-warning"> <strong>Warning!</strong> Indicates a warning that might need attention. </div>
											<div className="alert alert-danger"> <strong>Danger!</strong> Indicates a dangerous or potentially negative action. </div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dlab-divider bg-gray-dark"></div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>Alert box closable</h4>
										</div>
										<div className="section-content box-sort-in m-b30">
											<div className="alert alert-success"> <Link to={"#"} className="close ti-close" data-dismiss="alert" aria-label="close"></Link> <strong>Success!</strong> This alert box could indicate a successful or positive action. </div>
											<div className="alert alert-info"> <Link to={"#"} className="close ti-close" data-dismiss="alert" aria-label="close"></Link> <strong>Info!</strong> This alert box could indicate a neutral informative change or action. </div>
											<div className="alert alert-warning"> <Link to={"#"} className="close ti-close" data-dismiss="alert" aria-label="close"></Link> <strong>Warning!</strong> This alert box could indicate a warning that might need attention. </div>
											<div className="alert alert-danger"> <Link to={"#"} className="close ti-close" data-dismiss="alert" aria-label="close"></Link> <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action. </div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dlab-divider bg-gray-dark"></div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>Alert box sizing</h4>
										</div>
										<div className="section-content box-sort-in m-b30">
											<div className="alert alert-success alert-sm"> <strong>Success!</strong> Indicates a successful or positive action. </div>
											<div className="alert alert-info"> <strong>Info!</strong> Indicates a neutral informative change or action. </div>
											<div className="alert alert-warning alert-lg"> <strong>Warning!</strong> Indicates a warning that might need attention. </div>
											<div className="alert alert-danger alert-xl"> <strong>Danger!</strong> Indicates a dangerous or potentially negative action. </div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dlab-divider bg-gray-dark"></div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>Alert box with icon</h4>
										</div>
										<div className="section-content box-sort-in m-b30">
											<div className="alert alert-success"> <strong><i className="fa fa-thumbs-o-up"></i> Success!</strong> Indicates a successful or positive action. </div>
											<div className="alert alert-info"> <strong><i className="fa fa-info-circle"></i> Info!</strong> Indicates a neutral informative change or action. </div>
											<div className="alert alert-warning"> <strong><i className="fa fa-warning"></i> Warning!</strong> Indicates a warning that might need attention. </div>
											<div className="alert alert-danger"> <strong><i className="fa fa-remove"></i> Danger!</strong> Indicates a dangerous or potentially negative action. </div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dlab-divider bg-gray-dark"></div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>Alert box no rounded</h4>
										</div>
										<div className="section-content box-sort-in m-b30">
											<div className="alert alert-success no-radius"> <strong>Success!</strong> Indicates a successful or positive action. </div>
											<div className="alert alert-info no-radius"> <strong>Info!</strong> Indicates a neutral informative change or action. </div>
											<div className="alert alert-warning no-radius"> <strong>Warning!</strong> Indicates a warning that might need attention. </div>
											<div className="alert alert-danger no-radius"> <strong>Danger!</strong> Indicates a dangerous or potentially negative action. </div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dlab-divider bg-gray-dark"></div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>Alert box no background</h4>
										</div>
										<div className="section-content box-sort-in m-b30">
											<div className="alert alert-success no-bg"> <strong>Success!</strong> Indicates a successful or positive action. </div>
											<div className="alert alert-info no-bg"> <strong>Info!</strong> Indicates a neutral informative change or action. </div>
											<div className="alert alert-warning no-bg"> <strong>Warning!</strong> Indicates a warning that might need attention. </div>
											<div className="alert alert-danger no-bg"> <strong>Danger!</strong> Indicates a dangerous or potentially negative action. </div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dlab-divider bg-gray-dark"></div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>Alert box with summery</h4>
										</div>
										<div className="section-content box-sort-in m-b30">
											<div className="alert alert-danger"> <strong><i className="fa fa-warning"></i>Danger!</strong> Indicates a dangerous or potentially negative action.
												<ul className="list-angle-right">
													<li>Please check your username.</li>
													<li>Please your password.</li>
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

export default shortAlertBox;