import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
//import { Accordion, AccordionItem } from 'react-sanfona';
//import { Accordion } from 'react-bootstrap';
//import Nouislider from "nouislider-react";
//import "nouislider/distribute/nouislider.css";
import PriceRange from '../element/priceRange';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
//import 'react-accessible-accordion/dist/fancy-example.css';


const bg = require('../../images/banner/bnr5.jpg')

const ShopSidebar = () => {
	const [activeDefault, setActiveDefault] = useState(0);           
        return (
            <>
                <Header/>
                
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Shop Grid 3 Side Bar</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to="/">Home</Link></li>
                                        <li>Shop Grid 3 Side Bar</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full content-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 m-b30">
                                    <aside className="side-bar shop-categories sticky-top">
                                        <div className="widget recent-posts-entry">
                                            <div className="dlab-accordion advanced-search toggle" id="accordion1">
												<Accordion className="p-filter dlab-accordion advanced-search toggle" allowMultipleExpanded>
													<AccordionItem >
														<div  className="acod-head">
															<h6 className="acod-title">
																<AccordionItemButton className=''>
																	PRODUCT CATEGORIES
																</AccordionItemButton>
															</h6>	
														</div>
														<AccordionItemPanel as='div'> 
															<div className="acod-content">
																<div className="widget widget_services">
																	<ul>
																		<li><Link to={"./shop-cart"}>Bags</Link></li>
																		<li><Link to={"./shop-cart"}>Jeans</Link></li>
																		<li><Link to={"./shop-cart"}>Shoes</Link></li>
																		<li><Link to={"./shop-cart"}>Sweaters</Link></li>
																		<li><Link to={"./shop-cart"}>Tops</Link></li>
																		<li><Link to={"./shop-cart"}>Women</Link></li>						
																	</ul>
																</div>
															</div>	
														</AccordionItemPanel>
													</AccordionItem>
													<AccordionItem>
														<div  className="acod-head">
															<h6 className="acod-title">
																<AccordionItemButton >
																	PRICE RANGE
																</AccordionItemButton>
															</h6>	
														</div>
														<AccordionItemPanel as='div'> 
															<div className="acod-content">
																<div className="price-slide-2 range-slider">
																	<PriceRange/>
																</div>
															</div>	
														</AccordionItemPanel>
													</AccordionItem>
													<AccordionItem>
														<div  className="acod-head">
															<h6 className="acod-title">
																<AccordionItemButton >
																	COLOR
																</AccordionItemButton>
															</h6>	
														</div>
														<AccordionItemPanel as='div'> 
															<div id="color" className="acod-body collapse show">
																<div className="acod-content">
																	<h6>Select the color</h6>
																	<div className="btn-group product-item-color" data-toggle="buttons">
																		<label className="btn bg-red active">
																			<input name="options" id="option1" checked="" type="radio"/>
																		</label>
																		<label className="btn bg-pink">
																			<input name="options" id="option2" type="radio"/>
																		</label>
																		<label className="btn bg-yellow">
																			<input name="options" id="option3" type="radio"/>
																		</label>
																		<label className="btn bg-blue">
																			<input name="options" id="option4" type="radio"/>
																		</label>
																		<label className="btn bg-green">
																			<input name="options" id="option5" type="radio"/>
																		</label>
																	</div>
																</div>
															</div>
														</AccordionItemPanel>
													</AccordionItem>
													<AccordionItem>
														<div  className="acod-head">
															<h6 className="acod-title">
																<AccordionItemButton >
																	SIZE
																</AccordionItemButton>
															</h6>	
														</div>
														<AccordionItemPanel as='div'> 
															<div className="acod-content">
																<h6>Product Size</h6>
																<div className="btn-group product-item-size" data-toggle="buttons">
																	<label className="btn active">
																		<input name="options" id="option6" checked="" type="radio"/>XS
																	</label>
																	<label className="btn">
																		<input name="options" id="option7" type="radio"/> LG
																	</label>
																	<label className="btn">
																		<input name="options" id="option8" type="radio"/> MD
																	</label>
																	<label className="btn">
																		<input name="options" id="option9" type="radio"/> SM
																	</label>
																	<label className="btn">
																		<input name="options" id="option10" type="radio"/> Xl
																	</label>
																</div>	
															</div>	
														</AccordionItemPanel>
													</AccordionItem>
													<AccordionItem>
														<div  className="acod-head">
															<h6 className="acod-title">
																<AccordionItemButton >
																	VENDOR
																</AccordionItemButton>
															</h6>	
														</div>
														<AccordionItemPanel as='div'> 
															<div id="vendor" className="acod-body collapse show">
																<div className="acod-content">
																	<div className="product-brand">
																		<div className="search-content">
																			<input id="seating1" type="checkbox"/>
																			<label htmlFor="seating1"  className="search-content-area">Gap</label>
																		</div>
																		<div className="search-content">
																			<input id="seating2" type="checkbox"/>
																			<label htmlFor="seating2"  className="search-content-area">Guess</label>
																		</div>
																		<div className="search-content">
																			<input id="seating3" type="checkbox"/>
																			<label htmlFor="seating3"  className="search-content-area">Lacoste</label>
																		</div>
																		<div className="search-content">
																			<input id="seating4" type="checkbox"/>
																			<label htmlFor="seating4"  className="search-content-area">Levi's</label>
																		</div>
																		<div className="search-content">
																			<input id="seating5" type="checkbox"/>
																			<label htmlFor="seating5"  className="search-content-area">Polo</label>
																		</div>
																	</div>
																</div>
															</div>	
														</AccordionItemPanel>
													</AccordionItem>
													<AccordionItem>
														<div  className="acod-head">
															<h6 className="acod-title">
																<AccordionItemButton >
																	POPULAR TAGS
																</AccordionItemButton>
															</h6>	
														</div>
														<AccordionItemPanel as='div'> 
															<div id="tags" className="acod-body">
																<div className="acod-content">
																	<div className="widget_tag_cloud radius">
																		<div className="tagcloud"> <Link to="#">Design</Link> 
																		<Link to="#">User interface</Link> 
																		<Link to="#">SEO</Link> 
																		<Link to="#">WordPress</Link> 
																		<Link to="#">Development</Link> 
																		<Link to="#">Joomla</Link> 
																		<Link to="#">Design</Link> 
																		<Link to="#">User interface</Link> 
																		<Link to="#">SEO</Link> 
																		<Link to="#">WordPress</Link>
																		<Link to="#">Development</Link> 
																		<Link to="#">Joomla</Link> 
																		<Link to="#">Design</Link> 
																		<Link to="#">User interface</Link> 
																		<Link to="#">SEO</Link> 
																		<Link to="#">WordPress</Link> 
																		<Link to="#">Development</Link> 
																		<Link to="#">Joomla</Link> </div>
																	</div>
																</div>
															</div>
														</AccordionItemPanel>
													</AccordionItem>
													<AccordionItem>
														<div  className="acod-head">
															<h6 className="acod-title">
																<AccordionItemButton >
																	FEATURES
																</AccordionItemButton>
															</h6>	
														</div>
														<AccordionItemPanel as='div'> 
															<div id="features" className="acod-body">
																<div className="acod-content">
																	<div className="item-widgets-box">
																		<div className="item-widgets-left">
																			<img src={require("../../images/product/thumb/item1.jpg")} alt=""/>
																		</div>
																		<div className="item-widgets-body text-black">
																			<h6 className="item-title text-capitalize font-weight-500 m-t0">
																				<Link to="/shop-product-details">Product Title</Link>
																			</h6>
																			<ul className="item-review text-yellow-light">
																				<li><i className="fa fa-star"></i></li>
																				<li><i className="fa fa-star"></i></li>
																				<li><i className="fa fa-star"></i></li>
																				<li><i className="fa fa-star-half-o"></i></li>
																				<li><i className="fa fa-star-o"></i></li>
																			</ul>
																			<h6 className="item-price m-b0">
																				<del>$232</del> 
																				<span className="text-primary">$192</span>
																			</h6>
																		</div>
																	</div>
																	<div className="item-widgets-box">
																		<div className="item-widgets-left">
																			<img src={require("../../images/product/thumb/item2.jpg")} alt=""/>
																		</div>
																		<div className="item-widgets-body text-black">
																			<h6 className="item-title text-capitalize font-weight-500 m-t0">
																				<Link to="/shop-product-details">Product Title</Link>
																			</h6>
																			<ul className="item-review text-yellow-light">
																				<li><i className="fa fa-star"></i></li>
																				<li><i className="fa fa-star"></i></li>
																				<li><i className="fa fa-star"></i></li>
																				<li><i className="fa fa-star-half-o"></i></li>
																				<li><i className="fa fa-star-o"></i></li>
																			</ul>
																			<h6 className="item-price m-b0">
																				<del>$232</del> 
																				<span className="text-primary">$192</span>
																			</h6>
																		</div>
																	</div>
																	<div className="item-widgets-box">
																		<div className="item-widgets-left">
																			<img src={require("../../images/product/thumb/item3.jpg")} alt=""/>
																		</div>
																		<div className="item-widgets-body text-black">
																			<h6 className="item-title text-capitalize font-weight-500 m-t0">
																				<Link to="/shop-product-details">Product Title</Link>
																			</h6>
																			<ul className="item-review text-yellow-light">
																				<li><i className="fa fa-star"></i></li>
																				<li><i className="fa fa-star"></i></li>
																				<li><i className="fa fa-star"></i></li>
																				<li><i className="fa fa-star-half-o"></i></li>
																				<li><i className="fa fa-star-o"></i></li>
																			</ul>
																			<h6 className="item-price m-b0">
																				<del>$232</del> 
																				<span className="text-primary">$192</span>
																			</h6>
																		</div>
																	</div>
																</div>
															</div>
														</AccordionItemPanel>
													</AccordionItem>
												</Accordion>	
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                                <div className="col-lg-9 col-md-8 m-b30">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="item-box m-b10">
                                                <div className="item-img">
                                                    <img src={require("../../images/product/item1.jpg")} alt=""/>
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Checked Short Dress</Link></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star-half-o me-1"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price">
                                                        <del>$232</del> 
                                                        <span className="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="item-box m-b10 item-style-1">
                                                <div className="item-img">
                                                    <img src={require("../../images/product/item2.jpg")} alt=""/>
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Slim Fit Chinos</Link></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star-half-o me-1"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price">
                                                        <del>$232</del> 
                                                        <span className="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="item-box m-b10">
                                                <div className="item-img">
                                                    <img src={require("../../images/product/item3.jpg")} alt=""/>
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Dark Brown Boots</Link></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star-half-o me-1"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price">
                                                        <del>$232</del> 
                                                        <span className="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="item-box m-b10">
                                                <div className="item-img">
                                                    <img src={require("../../images/product/item4.jpg")} alt=""/>
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Light Blue Denim Dress</Link></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star-half-o me-1"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price">
                                                        <del>$232</del> 
                                                        <span className="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="item-box m-b10">
                                                <div className="item-img">
                                                    <img src={require("../../images/product/item5.jpg")} alt=""/>
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Green Trousers</Link></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star-half-o me-1"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price">
                                                        <del>$232</del> 
                                                        <span className="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="item-box m-b10 item-style-1">
                                                <div className="item-img">
                                                    <img src={require("../../images/product/item6.jpg")} alt=""/>
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Unisex Sunglasses</Link></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star-half-o me-1"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price">
                                                        <del>$232</del> 
                                                        <span className="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="item-box m-b10">
                                                <div className="item-img">
                                                    <img src={require("../../images/product/item7.jpg")} alt=""/>
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Blue Round-Neck Tshirt</Link></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star-half-o me-1"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price">
                                                        <del>$232</del> 
                                                        <span className="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="item-box m-b10">
                                                <div className="item-img">
                                                    <img src={require("../../images/product/item8.jpg")} alt=""/>
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Men Grey Casual Shoes</Link></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star-half-o me-1"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price">
                                                        <del>$232</del> 
                                                        <span className="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="item-box m-b10">
                                                <div className="item-img">
                                                    <img src={require("../../images/product/item1.jpg")} alt=""/>
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Checked Short Dress</Link></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star-half-o me-1"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price">
                                                        <del>$232</del> 
                                                        <span className="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="item-box m-b10 item-style-1">
                                                <div className="item-img">
                                                    <img src={require("../../images/product/item2.jpg")} alt=""/>
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Slim Fit Chinos</Link></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star-half-o me-1"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price">
                                                        <del>$232</del> 
                                                        <span className="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="item-box m-b10">
                                                <div className="item-img">
                                                    <img src={require("../../images/product/item3.jpg")} alt=""/>
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Dark Brown Boots</Link></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star-half-o me-1"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price">
                                                        <del>$232</del> 
                                                        <span className="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="item-box m-b10">
                                                <div className="item-img">
                                                    <img src={require("../../images/product/item4.jpg")} alt=""/>
                                                    <div className="item-info-in center">
                                                        <ul>
                                                            <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                            <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item-info text-center text-black p-a10">
                                                    <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Light Blue Denim Dress</Link></h6>
                                                    <ul className="item-review">
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star me-1"></i></li>
                                                        <li><i className="fa fa-star-half-o me-1"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <h4 className="item-price">
                                                        <del>$232</del> 
                                                        <span className="text-primary">$192</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full p-t50 p-b20 bg-primary text-white">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-lg-4">
                                    <div className="icon-bx-wraper left shop-service-info m-b30">
                                        <div className="icon-md text-black radius"> 
                                            <Link to="#" className="icon-cell text-white"><i className="fa fa-gift"></i></Link> 
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">Free shipping on orders $60+</h5>
                                            <p>Order more than 60$ and you will get free shippining Worldwide. More info.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4">
                                    <div className="icon-bx-wraper left shop-service-info m-b30">
                                        <div className="icon-md text-black radius"> 
                                            <Link to="#" className="icon-cell text-white"><i className="fa fa-plane"></i></Link> 
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">Worldwide delivery</h5>
                                            <p>We deliver to the following countries: USA, Canada, Europe, Australia</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4">
                                    <div className="icon-bx-wraper left shop-service-info m-b30">
                                        <div className="icon-md text-black radius"> 
                                            <Link to="#" className="icon-cell text-white"><i className="fa fa-history"></i></Link> 
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
                </div>                
                <Footer hideContactInfo />                
            </>
        )
    
}
export default ShopSidebar;