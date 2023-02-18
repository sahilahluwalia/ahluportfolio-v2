import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr4 = require('./../../images/banner/bnr4.jpg');
var bg1 = require('./../../images/background/bg1.jpg');
var bg2 = require('./../../images/background/bg2.jpg');
var bg3 = require('./../../images/background/bg3.jpg');

class shortButtons extends Component {


    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry align-m text-center">
                                <h1 className="text-white">Buttons</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
										<li><Link to={"./"}>Home</Link></li>
										<li>Element</li>
										<li>Buttons</li>
									</ul>
                                </div>
                            </div>
                        </div>
                    </div>
					<div className="text-center">
						<div className="section-full content-inner">		
							<div className="container">
								<div className="row">
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix">
											<h4>Basic Buttons</h4>
										</div>
										<div className="section-content box-sort-in  button-example m-b30">
											<button className="btn btn-secondary" type="button">Default</button>
											<button className="btn btn-primary" type="button">Primary</button>
											<button className="btn btn-success" type="button">Success</button>
											<button className="btn btn-info" type="button">Info</button>
											<button className="btn btn-warning" type="button">Warning</button>
											<button className="btn btn-danger" type="button">Danger</button>
											<button className="btn btn-link" type="button">Link</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner bg-black-light">		
							<div className="container">
								<div className="row">	
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix text-white">
											<h4>Basic Buttons Outline</h4>
										</div>
										<div className="section-content box-sort-in  button-example m-b30">
											<button className="btn btn-outline-secondary" type="button">Default</button>
											<button className="btn btn-outline-primary" type="button">Primary</button>
											<button className="btn btn-outline-success" type="button">Success</button>
											<button className="btn btn-outline-info" type="button">Info</button>
											<button className="btn btn-outline-warning" type="button">Warning</button>
											<button className="btn btn-outline-danger" type="button">Danger</button>
											<button className="btn btn-outline-link" type="button">Link</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner">		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix">
											<h4>Basic Buttons Size</h4>
											
										</div>
										<div className="section-content box-sort-in  button-example m-b30">
											<button type="button" className="btn btn-primary btn-lg">Large button</button>
											<button type="button" className="btn btn-secondary btn-lg">Large button</button>
											<button type="button" className="btn btn-primary">Large button</button>
											<button type="button" className="btn btn-secondary">Large button</button>
											<button type="button" className="btn btn-primary btn-sm">Large button</button>
											<button type="button" className="btn btn-secondary btn-sm">Large button</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner bg-gray bg-img-fix overlay-black-dark" style={{ backgroundImage: "url(" + bg2 + ")" }}>	
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix text-white">
											<h4>Basic Buttons Size</h4>
											
										</div>
										<div className="section-content box-sort-in  button-example m-b30">
											<button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>
											<button type="button" className="btn btn-secondary btn-lg btn-block">Block level button</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner">		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix ">
											<h4>Basic Buttons Radio </h4>
											
										</div>
										<div className="section-content box-sort-in m-b30 ">
											<div className="btn-group m-b10" data-toggle="buttons">
											  <label className="btn btn-primary active">
												<input type="radio" name="options"  checked/> Radio 1
											  </label>
											  <label className="btn btn-primary">
												<input type="radio" name="options" /> Radio 2
											  </label>
											  <label className="btn btn-primary">
												<input type="radio" name="options" /> Radio 3
											  </label>
											</div>
											<div className="btn-group  m-b10" data-toggle="buttons">
											  <label className="btn site-button red active">
												<input type="radio" name="options"  checked /> Radio 1
											  </label>
											  <label className="btn site-button red">
												<input type="radio" name="options"  /> Radio 2
											  </label>
											  <label className="btn site-button red">
												<input type="radio" name="options"  /> Radio 3
											  </label>
											</div>
											<div className="btn-group  m-b10" data-toggle="buttons">
											  <label className="btn site-button yellow active">
												<input type="radio" name="options"  checked /> Radio 1
											  </label>
											  <label className="btn site-button yellow">
												<input type="radio" name="options"  /> Radio 2
											  </label>
											  <label className="btn site-button yellow">
												<input type="radio" name="options"  /> Radio 3
											  </label>
											</div>
											<div className="btn-group m-b10" data-toggle="buttons">
											  <label className="btn site-button blue active">
												<input type="radio" name="options"  checked /> Radio 1
											  </label>
											  <label className="btn site-button blue">
												<input type="radio" name="options"  /> Radio 2
											  </label>
											  <label className="btn site-button blue">
												<input type="radio" name="options"  /> Radio 3
											  </label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner bg-black-light">		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix text-white" >
											<h4>Basic Buttons Checkbox </h4>
										</div>
										<div className="section-content box-sort-in m-b30 ">
											<div className="btn-group flex-wrap m-b10" data-toggle="buttons">
												<label className="btn btn-primary active">
													<input type="checkbox" checked /> Checkbox 1
												</label>
												<label className="btn btn-primary">
													<input type="checkbox" /> Checkbox 2
												</label>
												<label className="btn btn-primary">
													<input type="checkbox" /> Checkbox 3
												</label>
											</div>
											
											<div className="btn-group flex-wrap m-b10" data-toggle="buttons">
												<label className="btn site-button red active">
													<input type="checkbox" checked /> Checkbox 1
												</label>
												<label className="btn site-button red">
													<input type="checkbox" /> Checkbox 2
												</label>
												<label className="btn site-button red">
													<input type="checkbox" /> Checkbox 3
												</label>
											</div>
											
											<div className="btn-group flex-wrap m-b10" data-toggle="buttons">
												<label className="btn site-button blue active">
													<input type="checkbox" checked /> Checkbox 1
												</label>
												<label className="btn site-button blue">
													<input type="checkbox" /> Checkbox 2
												</label>
												<label className="btn site-button blue">
													<input type="checkbox" /> Checkbox 3
												</label>
											</div>
											
											<div className="btn-group flex-wrap m-b10" data-toggle="buttons">
												<label className="btn site-button yellow active">
													<input type="checkbox" checked /> Checkbox 1
												</label>
												<label className="btn site-button yellow">
													<input type="checkbox" /> Checkbox 2
												</label>
												<label className="btn site-button yellow">
													<input type="checkbox" /> Checkbox 3
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner">		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix">
											<h4>Theme Button Pramary & Secondry</h4>
											
										</div>
										<div className="section-content box-sort-in  button-example m-b30">
											<button className="site-button m-r15" type="button">Site Button</button>
											<button className="site-button-secondry" type="button">Site Button secondry</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner bg-black-light">		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix text-white">
											<h4>Theme Button Size</h4>
											
										</div>
										<div className="section-content box-sort-in  button-example m-b30">
											<button className="site-button button-xl m-r15" type="button">Button extra large</button>
											<button className="site-button button-lg m-r15" type="button">Button large</button>
											<button className="site-button m-r15" type="button">Button medium</button>
											<button className="site-button button-sm m-r15" type="button">Button samll</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner">		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix ">
											<h4>Theme Button Color</h4>
										</div>
										<div className="section-content box-sort-in  button-example m-b30">
											<button className="site-button black m-r15" type="button">Black</button>
											<button className="site-button gray m-r15" type="button">Gray</button>
											<button className="site-button pink m-r15" type="button">Pink</button>
											<button className="site-button blue m-r15" type="button">Blue</button>
											<button className="site-button green m-r15" type="button">Green</button>
											<button className="site-button orange m-r15" type="button">Orange</button>
											<button className="site-button red m-r15" type="button">Red</button>
											<button className="site-button brown m-r15" type="button">Brown</button>
											<button className="site-button yellow m-r15" type="button">Yellow</button>
											<button className="site-button purple m-r15" type="button">Purpal</button>
											<button className="site-button white m-r15" type="button">white</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner bg-gray bg-img-fix overlay-black-dark" style={{ backgroundImage: "url(" + bg3 + ")" }}>		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix text-white">
											<h4>Theme Buttons with rounded corner</h4>
										</div>
										<div className="section-content box-sort-in  button-example m-b30">
											<button className="site-button black radius-xl  m-r15" type="button">Black</button>
											<button className="site-button gray radius-xl  m-r15" type="button">Gray</button>
											<button className="site-button pink radius-xl  m-r15" type="button">Pink</button>
											<button className="site-button blue radius-xl  m-r15" type="button">Blue</button>
											<button className="site-button green radius-xl  m-r15" type="button">Green</button>
											<button className="site-button orange radius-xl  m-r15" type="button">Orange</button>
											<button className="site-button red radius-xl  m-r15" type="button">Red</button>
											<button className="site-button brown radius-xl  m-r15" type="button">Brown</button>
											<button className="site-button yellow radius-xl  m-r15" type="button">Yellow</button>
											<button className="site-button purple radius-xl  m-r15" type="button">Purpal</button>
											<button className="site-button white radius-xl m-r15" type="button">white</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner">		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix">
											<h4>Theme Buttons with Gradient</h4>
											
										</div>
										<div className="section-content box-sort-in  button-example m-b30">
											<button className="site-button black gradient m-r15" type="button">Black</button>
											<button className="site-button gray gradient m-r15" type="button">Gray</button>
											<button className="site-button pink gradient m-r15" type="button">Pink</button>
											<button className="site-button blue gradient m-r15" type="button">Blue</button>
											<button className="site-button green gradient m-r15" type="button">Green</button>
											<button className="site-button orange gradient m-r15" type="button">Orange</button>
											<button className="site-button red gradient m-r15" type="button">Red</button>
											<button className="site-button brown gradient m-r15" type="button">Brown</button>
											<button className="site-button yellow gradient m-r15" type="button">Yellow</button>
											<button className="site-button purple gradient m-r15" type="button">Purpal</button>
											<button className="site-button white gradient m-r15" type="button">white</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner bg-img-fix overlay-black-dark" style={{ backgroundImage: "url(" + bg1 + ")" }}>		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix text-white">
											<h4>Theme Buttons with sharp corner</h4>
											
										</div>
										<div className="section-content box-sort-in  button-example m-b30">
											<button className="site-button black radius-no  m-r15" type="button">Black</button>
											<button className="site-button gray radius-no  m-r15" type="button">Gray</button>
											<button className="site-button pink radius-no  m-r15" type="button">Pink</button>
											<button className="site-button blue radius-no  m-r15" type="button">Blue</button>
											<button className="site-button green radius-no  m-r15" type="button">Green</button>
											<button className="site-button orange radius-no  m-r15" type="button">Orange</button>
											<button className="site-button red radius-no  m-r15" type="button">Red</button>
											<button className="site-button brown radius-no  m-r15" type="button">Brown</button>
											<button className="site-button yellow radius-no  m-r15" type="button">Yellow</button>
											<button className="site-button purple radius-no  m-r15" type="button">Purpal</button>
											<button className="site-button white radius-no m-r15" type="button">white</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner">		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix">
											<h4>Theme Buttons with icons</h4>
											
										</div>
										<div className="section-content box-sort-in  button-example m-b30">
											<button className="site-button black m-r5" type="button"><span className="site-button-inr">Black <i className="fa fa-arrow-circle-o-right"></i></span></button>
											<button className="site-button gray m-r5" type="button"><span className="site-button-inr">Gray <i className="fa fa-dollar"></i></span></button>
											<button className="site-button pink m-r5" type="button"><span className="site-button-inr">Pink <i className="ti-email"></i></span></button>
											<button className="site-button blue m-r5" type="button"><span className="site-button-inr">Blue <i className="fa fa-gavel"></i></span></button>
											<button className="site-button green m-r5" type="button"><span className="site-button-inr">Green <i className="fa fa-joomla"></i></span></button>
											<button className="site-button orange m-r5" type="button"><span className="site-button-inr">Orange <i className="fa fa-key"></i></span></button>
											<button className="site-button red  m-r5" type="button"><span className="site-button-inr">Red <i className="fa fa-umbrella"></i></span></button>
											<button className="site-button brown m-r5" type="button"><span className="site-button-inr">Brown <i className="fa fa-random"></i></span></button>
											<button className="site-button yellow m-r5" type="button"><span className="site-button-inr">Yellow <i className="fa fa-image"></i></span></button>
											<button className="site-button white m-r5" type="button"><span className="site-button-inr">white <i className="ti-user"></i></span></button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner bg-black-light">		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix text-white">
											<h4>Theme Buttons with Outline 1PX</h4>
											
										</div>
										<div className="section-content box-sort-in  button-example m-b30">
											<button className="site-button outline black m-r15" type="button">Black</button>
											<button className="site-button outline gray m-r15" type="button">Gray</button>
											<button className="site-button outline pink m-r15" type="button">Pink</button>
											<button className="site-button outline blue m-r15" type="button">Blue</button>
											<button className="site-button outline green m-r15" type="button">Green</button>
											<button className="site-button outline orange m-r15" type="button">Orange</button>
											<button className="site-button outline red m-r15" type="button">Red</button>
											<button className="site-button outline brown m-r15" type="button">Brown</button>
											<button className="site-button outline yellow m-r15" type="button">Yellow</button>
											<button className="site-button outline purple m-r15" type="button">Purpal</button>
											<button className="site-button outline white m-r15" type="button">white</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner">		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix">
											<h4>Theme Buttons with Outline 2PX</h4>
											
										</div>
										<div className="section-content box-sort-in  button-example m-b30">
											<button className="site-button outline outline-2 black m-r15" type="button">Black</button>
											<button className="site-button outline outline-2 gray m-r15" type="button">Gray</button>
											<button className="site-button outline outline-2 pink m-r15" type="button">Pink</button>
											<button className="site-button outline outline-2 blue m-r15" type="button">Blue</button>
											<button className="site-button outline outline-2 green m-r15" type="button">Green</button>
											<button className="site-button outline outline-2 orange m-r15" type="button">Orange</button>
											<button className="site-button outline outline-2 red m-r15" type="button">Red</button>
											<button className="site-button outline outline-2 brown m-r15" type="button">Brown</button>
											<button className="site-button outline outline-2 yellow m-r15" type="button">Yellow</button>
											<button className="site-button outline outline-2 purple m-r15" type="button">Purpal</button>
											<button className="site-button outline outline-2 white m-r15" type="button">white</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner bg-black-light">		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix text-white">
											<h4>Theme Buttons with Outline Radius</h4>
											
										</div>
										<div className="section-content box-sort-in  button-example m-b30">
											<button className="site-button outline outline-2 black m-r15 radius-xl" type="button">Black</button>
											<button className="site-button outline outline-2 gray m-r15 radius-xl" type="button">Gray</button>
											<button className="site-button outline outline-2 pink m-r15 radius-xl" type="button">Pink</button>
											<button className="site-button outline outline-2 blue m-r15 radius-xl" type="button">Blue</button>
											<button className="site-button outline outline-2 green m-r15 radius-xl" type="button">Green</button>
											<button className="site-button outline outline-2 orange m-r15 radius-xl" type="button">Orange</button>
											<button className="site-button outline outline-2 red m-r15 radius-xl" type="button">Red</button>
											<button className="site-button outline outline-2 brown m-r15 radius-xl" type="button">Brown</button>
											<button className="site-button outline outline-2 yellow m-r15 radius-xl" type="button">Yellow</button>
											<button className="site-button outline outline-2 purple m-r15 radius-xl" type="button">Purpal</button>
											<button className="site-button outline outline-2 white m-r15 radius-xl" type="button">white</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner">		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix">
											<h4>Theme Buttons Link</h4>
											
										</div>
										<div className="section-content box-sort-in  button-example m-b30">
											<Link to={"#"} className="site-button-link white m-r15">White</Link> 
											<Link to={"#"} className="site-button-link black m-r15">Black</Link> 
											<Link to={"#"} className="site-button-link gray m-r15">Gray</Link> 
											<Link to={"#"} className="site-button-link pink m-r15">Pink</Link> 
											<Link to={"#"} className="site-button-link blue m-r15">Blue</Link> 
											<Link to={"#"} className="site-button-link green m-r15">Green</Link> 
											<Link to={"#"} className="site-button-link orange m-r15">Orange</Link> 
											<Link to={"#"} className="site-button-link red m-r15">Red</Link> 
											<Link to={"#"} className="site-button-link brown m-r15">Brown</Link>
											<Link to={"#"} className="site-button-link yellow m-r15">Yellow</Link> 
											<Link to={"#"} className="site-button-link purple m-r15">Purple</Link> 
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner bg-black-light">		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix text-white">
											<h4>Theme Buttons Dropdown</h4>
											
										</div>
										<div className="section-content box-sort-in m-b30">
											<Dropdown className="btn-group m-t10 m-l10">
												<Dropdown.Toggle as="button"  className="site-button dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary <i className=""></i></Dropdown.Toggle>
												<Dropdown.Menu className="dropdown-menu">
													<li><Dropdown.Item className="dropdown-item" >Action</Dropdown.Item></li>
													<li><Dropdown.Item className="dropdown-item" >Another action</Dropdown.Item></li>
													<li><Dropdown.Item className="dropdown-item" >Something else here</Dropdown.Item></li>
													<li><Dropdown.Item className="dropdown-item" >Separated link</Dropdown.Item></li>
												</Dropdown.Menu>
											</Dropdown>
											<Dropdown className="btn-group m-t10 m-l10">
												<Dropdown.Toggle as="button" type="button" className="site-button red dropdown-toggle" >
													Primary <i className=""></i>
												</Dropdown.Toggle>
												<Dropdown.Menu as="ul" className="dropdown-menu">
												  <li><Dropdown.Item className="dropdown-item">Action</Dropdown.Item></li>
												  <li><Dropdown.Item className="dropdown-item">Another action</Dropdown.Item></li>
												  <li><Dropdown.Item className="dropdown-item">Something else here</Dropdown.Item></li>
												  <li><Dropdown.Item className="dropdown-item">Separated link</Dropdown.Item></li>
												</Dropdown.Menu>
											</Dropdown>
											<Dropdown className="btn-group m-t10 m-l10">
												<Dropdown.Toggle as="button" type="button" className="site-button yellow dropdown-toggle" >Primary <i className=""></i></Dropdown.Toggle>
												<Dropdown.Menu as="ul" className="dropdown-menu">
												  <li><Dropdown.Item  className="dropdown-item">Action</Dropdown.Item></li>
												  <li><Dropdown.Item  className="dropdown-item">Another action</Dropdown.Item></li>
												  <li><Dropdown.Item  className="dropdown-item">Something else here</Dropdown.Item></li>
												  <li><Dropdown.Item  className="dropdown-item">Separated link</Dropdown.Item></li>
												</Dropdown.Menu>
											</Dropdown>
											<Dropdown className="btn-group m-t10 m-l10">
												<Dropdown.Toggle as="button"  className="site-button pink dropdown-toggle" >Primary <i className=""></i></Dropdown.Toggle>
												<Dropdown.Menu ul className="dropdown-menu">
												  <li><Dropdown.Item to={"#"} className="dropdown-item">Action</Dropdown.Item></li>
												  <li><Dropdown.Item to={"#"} className="dropdown-item">Another action</Dropdown.Item></li>
												  <li><Dropdown.Item to={"#"} className="dropdown-item">Something else here</Dropdown.Item></li>
												  <li><Dropdown.Item to={"#"} className="dropdown-item">Separated link</Dropdown.Item></li>
												</Dropdown.Menu>
											</Dropdown>
											<Dropdown className="btn-group  m-t10 m-l10">
												<button as="button" type="button" className="btn btn-primary">Primary</button >
												<Dropdown.Toggle type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split">
												  <i className=""></i>
												</Dropdown.Toggle>
												<Dropdown.Menu as="ul" className="dropdown-menu">
												  <li><Dropdown.Item className="dropdown-item">Action</Dropdown.Item></li>
												  <li><Dropdown.Item className="dropdown-item">Another action</Dropdown.Item></li>
												  <li><Dropdown.Item className="dropdown-item">Something else here</Dropdown.Item></li>
												  <li><Dropdown.Item className="dropdown-item">Separated link</Dropdown.Item></li>
												</Dropdown.Menu>
											 </Dropdown>
											 <Dropdown className="btn-group m-t10 m-l10">
												<button as="button" type="button" className="btn btn-secondary">Secondary</button>
												<Dropdown.Toggle as="button" type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" >
												  <i className=""></i>
												</Dropdown.Toggle>
												<Dropdown.Menu as="ul" className="dropdown-menu">
												  <li><Dropdown.Item className="dropdown-item" >Action</Dropdown.Item></li>
												  <li><Dropdown.Item className="dropdown-item" >Another action</Dropdown.Item></li>
												  <li><Dropdown.Item className="dropdown-item" >Something else here</Dropdown.Item></li>
												  <li><Dropdown.Item className="dropdown-item" >Separated link</Dropdown.Item></li>
												</Dropdown.Menu>
											 </Dropdown>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner">		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix">
											<h4>Theme Buttons Box Shadow</h4>
										</div>
										<div className="section-content box-sort-in  button-example m-b30">
											<button className="site-button outline outline-2 black m-r15 radius-xl box-shadow" type="button">Black</button>
											<button className="site-button outline outline-2 gray m-r15 radius-xl box-shadow" type="button">Gray</button>
											<button className="site-button outline outline-2 pink m-r15 radius-xl box-shadow" type="button">Pink</button>
											<button className="site-button outline outline-2 blue m-r15 radius-xl box-shadow" type="button">Blue</button>
											<button className="site-button outline outline-2 green m-r15 radius-xl box-shadow" type="button">Green</button>
											<button className="site-button outline outline-2 orange m-r15 radius-xl box-shadow" type="button">Orange</button>
											<button className="site-button outline outline-2 red m-r15 radius-xl box-shadow" type="button">Red</button>
											<button className="site-button outline outline-2 brown m-r15 radius-xl box-shadow" type="button">Brown</button>
											<button className="site-button outline outline-2 yellow m-r15 radius-xl box-shadow" type="button">Yellow</button>
											<button className="site-button outline outline-2 purple m-r15 radius-xl box-shadow" type="button">Purpal</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner bg-black-light">		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix text-white">
											<h4>Theme Buttons Box Shadow</h4>
											
										</div>
										<div className="section-content box-sort-in  button-example m-b30">
											<button className="site-button black m-r15 radius-xl box-shadow" type="button">Black</button>
											<button className="site-button gray m-r15 radius-xl box-shadow" type="button">Gray</button>
											<button className="site-button pink m-r15 radius-xl box-shadow" type="button">Pink</button>
											<button className="site-button blue m-r15 radius-xl box-shadow" type="button">Blue</button>
											<button className="site-button green m-r15 radius-xl box-shadow" type="button">Green</button>
											<button className="site-button orange m-r15 radius-xl box-shadow" type="button">Orange</button>
											<button className="site-button red m-r15 radius-xl box-shadow" type="button">Red</button>
											<button className="site-button brown m-r15 radius-xl box-shadow" type="button">Brown</button>
											<button className="site-button yellow m-r15 radius-xl box-shadow" type="button">Yellow</button>
											<button className="site-button purple m-r15 radius-xl box-shadow" type="button">Purpal</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner">		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix">
											<h4>Theme Buttons Box Shadow</h4>
											
										</div>
										<div className="section-content box-sort-in  button-example m-b30">
											<button className="site-button black m-r15 box-shadow" type="button">Black</button>
											<button className="site-button gray m-r15 box-shadow" type="button">Gray</button>
											<button className="site-button pink m-r15 box-shadow" type="button">Pink</button>
											<button className="site-button blue m-r15 box-shadow" type="button">Blue</button>
											<button className="site-button green m-r15 box-shadow" type="button">Green</button>
											<button className="site-button orange m-r15 box-shadow" type="button">Orange</button>
											<button className="site-button red m-r15 box-shadow" type="button">Red</button>
											<button className="site-button brown m-r15 box-shadow" type="button">Brown</button>
											<button className="site-button yellow m-r15 box-shadow" type="button">Yellow</button>
											<button className="site-button purple m-r15 box-shadow" type="button">Purpal</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner bg-black-light">		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix text-white">
											<h4>Theme Buttons Circle Small</h4>
											
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button black m-r15 circle-sm box-shadow" type="button"><i className="fa fa-star-o"></i></button>
											<button className="site-button gray m-r15 circle-sm box-shadow" type="button"><i className="fa fa-bar-chart-o"></i></button>
											<button className="site-button pink m-r15 circle-sm box-shadow" type="button"><i className="fa fa-bars"></i></button>
											<button className="site-button blue m-r15 circle-sm box-shadow" type="button"><i className="fa fa-bell"></i></button>
											<button className="site-button green m-r15 circle-sm box-shadow" type="button"><i className="ti-comment-alt"></i></button>
											<button className="site-button orange m-r15 circle-sm box-shadow" type="button"><i className="fa fa-clock-o"></i></button>
											<button className="site-button red m-r15 circle-sm box-shadow" type="button"><i className="fa fa-cloud-download"></i></button>
											<button className="site-button brown m-r15 circle-sm box-shadow" type="button"><i className="fa fa-diamond"></i></button>
											<button className="site-button yellow m-r15 circle-sm box-shadow" type="button"><i className="fa fa-folder-open-o"></i></button>
											<button className="site-button purple m-r15 circle-sm box-shadow" type="button"><i className="fa fa-lightbulb-o"></i></button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner">		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix">
											<h4>Theme Buttons Circle Middle</h4>
											
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button black m-r15 circle box-shadow" type="button"><i className="fa fa-star-o"></i></button>
											<button className="site-button gray m-r15 circle box-shadow" type="button"><i className="fa fa-bar-chart-o"></i></button>
											<button className="site-button pink m-r15 circle box-shadow" type="button"><i className="fa fa-bars"></i></button>
											<button className="site-button blue m-r15 circle box-shadow" type="button"><i className="fa fa-bell"></i></button>
											<button className="site-button green m-r15 circle box-shadow" type="button"><i className="ti-comment-alt"></i></button>
											<button className="site-button orange m-r15 circle box-shadow" type="button"><i className="fa fa-clock-o"></i></button>
											<button className="site-button red m-r15 circle box-shadow" type="button"><i className="fa fa-cloud-download"></i></button>
											<button className="site-button brown m-r15 circle box-shadow" type="button"><i className="fa fa-diamond"></i></button>
											<button className="site-button yellow m-r15 circle box-shadow" type="button"><i className="fa fa-folder-open-o"></i></button>
											<button className="site-button purple m-r15 circle box-shadow" type="button"><i className="fa fa-lightbulb-o"></i></button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner bg-black-light">		
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix text-white">
											<h4>Theme Buttons Circle Large</h4>
											
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button black m-r15 circle-lg box-shadow" type="button"><i className="fa fa-star-o"></i></button>
											<button className="site-button gray m-r15 circle-lg box-shadow" type="button"><i className="fa fa-bar-chart-o"></i></button>
											<button className="site-button pink m-r15 circle-lg box-shadow" type="button"><i className="fa fa-bars"></i></button>
											<button className="site-button blue m-r15 circle-lg box-shadow" type="button"><i className="fa fa-bell"></i></button>
											<button className="site-button green m-r15 circle-lg box-shadow" type="button"><i className="ti-comment-alt"></i></button>
											<button className="site-button orange m-r15 circle-lg box-shadow" type="button"><i className="fa fa-clock-o"></i></button>
											<button className="site-button red m-r15 circle-lg box-shadow" type="button"><i className="fa fa-cloud-download"></i></button>
											<button className="site-button brown m-r15 circle-lg box-shadow" type="button"><i className="fa fa-diamond"></i></button>
											<button className="site-button yellow m-r15 circle-lg box-shadow" type="button"><i className="fa fa-folder-open-o"></i></button>
											<button className="site-button purple m-r15 circle-lg box-shadow" type="button"><i className="fa fa-lightbulb-o"></i></button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner">	
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix">
											<h4>Theme Buttons Social</h4>
											
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button-link facebook m-r15 hover" type="button"><i className="fa fa-facebook"></i></button>
											<button className="site-button-link google-plus m-r15 hover" type="button"><i className="fa fa-google-plus"></i></button>
											<button className="site-button-link linkedin m-r15 hover" type="button"><i className="fa fa-linkedin"></i></button>
											<button className="site-button-link instagram m-r15 hover" type="button"><i className="fa fa-instagram"></i></button>
											<button className="site-button-link twitter m-r15 hover" type="button"><i className="fa fa-twitter"></i></button>
											<button className="site-button-link youtube m-r15 hover" type="button"><i className="fa fa-youtube-play"></i></button>
											<button className="site-button-link whatsapp m-r15 hover" type="button"><i className="fa fa-whatsapp"></i></button>
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button-link facebook m-r15 circle-sm outline" type="button"><i className="fa fa-facebook"></i></button>
											<button className="site-button-link google-plus m-r15 circle-sm outline" type="button"><i className="fa fa-google-plus"></i></button>
											<button className="site-button-link linkedin m-r15 circle-sm outline" type="button"><i className="fa fa-linkedin"></i></button>
											<button className="site-button-link instagram m-r15 circle-sm outline" type="button"><i className="fa fa-instagram"></i></button>
											<button className="site-button-link twitter m-r15 circle-sm outline" type="button"><i className="fa fa-twitter"></i></button>
											<button className="site-button-link youtube m-r15 circle-sm outline" type="button"><i className="fa fa-youtube-play"></i></button>
											<button className="site-button-link whatsapp m-r15 circle-sm outline" type="button"><i className="fa fa-whatsapp"></i></button>
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button facebook m-r15 circle-sm" type="button"><i className="fa fa-facebook"></i></button>
											<button className="site-button google-plus m-r15 circle-sm" type="button"><i className="fa fa-google-plus"></i></button>
											<button className="site-button linkedin m-r15 circle-sm" type="button"><i className="fa fa-linkedin"></i></button>
											<button className="site-button instagram m-r15 circle-sm" type="button"><i className="fa fa-instagram"></i></button>
											<button className="site-button twitter m-r15 circle-sm" type="button"><i className="fa fa-twitter"></i></button>
											<button className="site-button youtube m-r15 circle-sm" type="button"><i className="fa fa-youtube-play"></i></button>
											<button className="site-button whatsapp m-r15 circle-sm" type="button"><i className="fa fa-whatsapp"></i></button>
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button facebook m-r15 circle" type="button"><i className="fa fa-facebook"></i></button>
											<button className="site-button google-plus m-r15 circle" type="button"><i className="fa fa-google-plus"></i></button>
											<button className="site-button linkedin m-r15 circle" type="button"><i className="fa fa-linkedin"></i></button>
											<button className="site-button instagram m-r15 circle" type="button"><i className="fa fa-instagram"></i></button>
											<button className="site-button twitter m-r15 circle" type="button"><i className="fa fa-twitter"></i></button>
											<button className="site-button youtube m-r15 circle" type="button"><i className="fa fa-youtube-play"></i></button>
											<button className="site-button whatsapp m-r15 circle" type="button"><i className="fa fa-whatsapp"></i></button>
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button facebook m-r15 circle-lg" type="button"><i className="fa fa-facebook"></i></button>
											<button className="site-button google-plus m-r15 circle-lg" type="button"><i className="fa fa-google-plus"></i></button>
											<button className="site-button linkedin m-r15 circle-lg" type="button"><i className="fa fa-linkedin"></i></button>
											<button className="site-button instagram m-r15 circle-lg" type="button"><i className="fa fa-instagram"></i></button>
											<button className="site-button twitter m-r15 circle-lg" type="button"><i className="fa fa-twitter"></i></button>
											<button className="site-button youtube m-r15 circle-lg" type="button"><i className="fa fa-youtube-play"></i></button>
											<button className="site-button whatsapp m-r15 circle-lg" type="button"><i className="fa fa-whatsapp"></i></button>
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button facebook m-r15 button-sm" type="button"><i className="fa fa-facebook"></i> Facebook</button>
											<button className="site-button google-plus m-r15 button-sm" type="button"><i className="fa fa-google-plus"></i> Google Plus</button>
											<button className="site-button linkedin m-r15 button-sm" type="button"><i className="fa fa-linkedin"></i> Linkedin</button>
											<button className="site-button instagram m-r15 button-sm" type="button"><i className="fa fa-instagram"></i> Instagram</button>
											<button className="site-button twitter m-r15 button-sm" type="button"><i className="fa fa-twitter"></i> Twitter</button>
											<button className="site-button youtube m-r15 button-sm" type="button"><i className="fa fa-youtube-play"></i> Youtube</button>
											<button className="site-button whatsapp m-r15 button-sm" type="button"><i className="fa fa-whatsapp"></i> Whatsapp</button>
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button facebook m-r15" type="button"><i className="fa fa-facebook"></i> Facebook</button>
											<button className="site-button google-plus m-r15" type="button"><i className="fa fa-google-plus"></i> Google Plus</button>
											<button className="site-button linkedin m-r15" type="button"><i className="fa fa-linkedin"></i> Linkedin</button>
											<button className="site-button instagram m-r15" type="button"><i className="fa fa-instagram"></i> Instagram</button>
											<button className="site-button twitter m-r15" type="button"><i className="fa fa-twitter"></i> Twitter</button>
											<button className="site-button youtube m-r15" type="button"><i className="fa fa-youtube-play"></i> Youtube</button>
											<button className="site-button whatsapp m-r15" type="button"><i className="fa fa-whatsapp"></i> Whatsapp</button>
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button facebook m-r15 sharp-sm" type="button"><i className="fa fa-facebook"></i></button>
											<button className="site-button google-plus m-r15 sharp-sm" type="button"><i className="fa fa-google-plus"></i></button>
											<button className="site-button linkedin m-r15 sharp-sm" type="button"><i className="fa fa-linkedin"></i></button>
											<button className="site-button instagram m-r15 sharp-sm" type="button"><i className="fa fa-instagram"></i></button>
											<button className="site-button twitter m-r15 sharp-sm" type="button"><i className="fa fa-twitter"></i></button>
											<button className="site-button youtube m-r15 sharp-sm" type="button"><i className="fa fa-youtube-play"></i></button>
											<button className="site-button whatsapp m-r15 sharp-sm" type="button"><i className="fa fa-whatsapp"></i></button>
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button facebook m-r15 sharp" type="button"><i className="fa fa-facebook"></i></button>
											<button className="site-button google-plus m-r15 sharp" type="button"><i className="fa fa-google-plus"></i></button>
											<button className="site-button linkedin m-r15 sharp" type="button"><i className="fa fa-linkedin"></i></button>
											<button className="site-button instagram m-r15 sharp" type="button"><i className="fa fa-instagram"></i></button>
											<button className="site-button twitter m-r15 sharp" type="button"><i className="fa fa-twitter"></i></button>
											<button className="site-button youtube m-r15 sharp" type="button"><i className="fa fa-youtube-play"></i></button>
											<button className="site-button whatsapp m-r15 sharp" type="button"><i className="fa fa-whatsapp"></i></button>
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button facebook m-r15 sharp-lg" type="button"><i className="fa fa-facebook"></i></button>
											<button className="site-button google-plus m-r15 sharp-lg" type="button"><i className="fa fa-google-plus"></i></button>
											<button className="site-button linkedin m-r15 sharp-lg" type="button"><i className="fa fa-linkedin"></i></button>
											<button className="site-button instagram m-r15 sharp-lg" type="button"><i className="fa fa-instagram"></i></button>
											<button className="site-button twitter m-r15 sharp-lg" type="button"><i className="fa fa-twitter"></i></button>
											<button className="site-button youtube m-r15 sharp-lg" type="button"><i className="fa fa-youtube-play"></i></button>
											<button className="site-button whatsapp m-r15 sharp-lg" type="button"><i className="fa fa-whatsapp"></i></button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner bg-gray">	
							<div className="container">
								<div className="row">			
									<div className="col-lg-12 post card-container">
										<div className="sort-title clearfix">
											<h4>Theme Buttons Social Outline</h4>
											
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button facebook m-r15 circle-sm outline" type="button"><i className="fa fa-facebook"></i></button>
											<button className="site-button google-plus m-r15 circle-sm outline" type="button"><i className="fa fa-google-plus"></i></button>
											<button className="site-button linkedin m-r15 circle-sm outline" type="button"><i className="fa fa-linkedin"></i></button>
											<button className="site-button instagram m-r15 circle-sm outline" type="button"><i className="fa fa-instagram"></i></button>
											<button className="site-button twitter m-r15 circle-sm outline" type="button"><i className="fa fa-twitter"></i></button>
											<button className="site-button youtube m-r15 circle-sm outline" type="button"><i className="fa fa-youtube-play"></i></button>
											<button className="site-button whatsapp m-r15 circle-sm outline" type="button"><i className="fa fa-whatsapp"></i></button>
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button facebook m-r15 circle outline" type="button"><i className="fa fa-facebook"></i></button>
											<button className="site-button google-plus m-r15 circle outline" type="button"><i className="fa fa-google-plus"></i></button>
											<button className="site-button linkedin m-r15 circle outline" type="button"><i className="fa fa-linkedin"></i></button>
											<button className="site-button instagram m-r15 circle outline" type="button"><i className="fa fa-instagram"></i></button>
											<button className="site-button twitter m-r15 circle outline" type="button"><i className="fa fa-twitter"></i></button>
											<button className="site-button youtube m-r15 circle outline" type="button"><i className="fa fa-youtube-play"></i></button>
											<button className="site-button whatsapp m-r15 circle outline" type="button"><i className="fa fa-whatsapp"></i></button>
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button facebook m-r15 circle-lg outline" type="button"><i className="fa fa-facebook"></i></button>
											<button className="site-button google-plus m-r15 circle-lg outline" type="button"><i className="fa fa-google-plus"></i></button>
											<button className="site-button linkedin m-r15 circle-lg outline" type="button"><i className="fa fa-linkedin"></i></button>
											<button className="site-button instagram m-r15 circle-lg outline" type="button"><i className="fa fa-instagram"></i></button>
											<button className="site-button twitter m-r15 circle-lg outline" type="button"><i className="fa fa-twitter"></i></button>
											<button className="site-button youtube m-r15 circle-lg outline" type="button"><i className="fa fa-youtube-play"></i></button>
											<button className="site-button whatsapp m-r15 circle-lg outline" type="button"><i className="fa fa-whatsapp"></i></button>
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button facebook m-r15 outline button-sm" type="button"><i className="fa fa-facebook"></i> Facebook</button>
											<button className="site-button google-plus m-r15 outline  button-sm" type="button"><i className="fa fa-google-plus"></i> Google Plus</button>
											<button className="site-button linkedin m-r15 outline  button-sm" type="button"><i className="fa fa-linkedin"></i> Linkedin</button>
											<button className="site-button instagram m-r15 outline button-sm" type="button"><i className="fa fa-instagram"></i> Instagram</button>
											<button className="site-button twitter m-r15 outline button-sm" type="button"><i className="fa fa-twitter"></i> Twitter</button>
											<button className="site-button youtube m-r15 outline button-sm" type="button"><i className="fa fa-youtube-play"></i> Youtube</button>
											<button className="site-button whatsapp m-r15 outline button-sm" type="button"><i className="fa fa-whatsapp"></i> Whatsapp</button>
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button facebook m-r15 outline" type="button"><i className="fa fa-facebook"></i> Facebook</button>
											<button className="site-button google-plus m-r15 outline" type="button"><i className="fa fa-google-plus"></i> Google Plus</button>
											<button className="site-button linkedin m-r15 outline" type="button"><i className="fa fa-linkedin"></i> Linkedin</button>
											<button className="site-button instagram m-r15 outline" type="button"><i className="fa fa-instagram"></i> Instagram</button>
											<button className="site-button twitter m-r15 outline" type="button"><i className="fa fa-twitter"></i> Twitter</button>
											<button className="site-button youtube m-r15 outline" type="button"><i className="fa fa-youtube-play"></i> Youtube</button>
											<button className="site-button whatsapp m-r15 outline" type="button"><i className="fa fa-whatsapp"></i> Whatsapp</button>
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button facebook m-r15 sharp-sm outline" type="button"><i className="fa fa-facebook"></i></button>
											<button className="site-button google-plus m-r15 sharp-sm outline" type="button"><i className="fa fa-google-plus"></i></button>
											<button className="site-button linkedin m-r15 sharp-sm outline" type="button"><i className="fa fa-linkedin"></i></button>
											<button className="site-button instagram m-r15 sharp-sm outline" type="button"><i className="fa fa-instagram"></i></button>
											<button className="site-button twitter m-r15 sharp-sm outline" type="button"><i className="fa fa-twitter"></i></button>
											<button className="site-button youtube m-r15 sharp-sm  outline" type="button"><i className="fa fa-youtube-play"></i></button>
											<button className="site-button whatsapp m-r15 sharp-sm outline" type="button"><i className="fa fa-whatsapp"></i></button>
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button facebook m-r15 sharp outline" type="button"><i className="fa fa-facebook"></i></button>
											<button className="site-button google-plus m-r15 sharp outline" type="button"><i className="fa fa-google-plus"></i></button>
											<button className="site-button linkedin m-r15 sharp outline" type="button"><i className="fa fa-linkedin"></i></button>
											<button className="site-button instagram m-r15 sharp outline" type="button"><i className="fa fa-instagram"></i></button>
											<button className="site-button twitter m-r15 sharp outline" type="button"><i className="fa fa-twitter"></i></button>
											<button className="site-button youtube m-r15 sharp outline" type="button"><i className="fa fa-youtube-play"></i></button>
											<button className="site-button whatsapp m-r15 sharp outline" type="button"><i className="fa fa-whatsapp"></i></button>
										</div>
										<div className="section-content box-sort-in  button-example m-b30 ">
											<button className="site-button facebook m-r15 sharp-lg  outline" type="button"><i className="fa fa-facebook"></i></button>
											<button className="site-button google-plus m-r15 sharp-lg outline" type="button"><i className="fa fa-google-plus"></i></button>
											<button className="site-button linkedin m-r15 sharp-lg outline" type="button"><i className="fa fa-linkedin"></i></button>
											<button className="site-button instagram m-r15 sharp-lg outline" type="button"><i className="fa fa-instagram"></i></button>
											<button className="site-button twitter m-r15 sharp-lg outline" type="button"><i className="fa fa-twitter"></i></button>
											<button className="site-button youtube m-r15 sharp-lg outline" type="button"><i className="fa fa-youtube-play"></i></button>
											<button className="site-button whatsapp m-r15 sharp-lg outline" type="button"><i className="fa fa-whatsapp"></i></button>
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

export default shortButtons;