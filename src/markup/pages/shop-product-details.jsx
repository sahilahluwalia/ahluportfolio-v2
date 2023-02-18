import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ProductSlider from '../element/productSlider';
import ProductGallerySlider from '../element/productGallerySlider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

const bg = require('../../images/banner/bnr5.jpg')

class shopProductDetails extends Component {


    render() {
        return (
            <>
            <Header/>
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Product Details</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to="/">Home</Link></li>
                                        <li>Product Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full content-inner bg-white">
                        <div className="container woo-entry">
                            <div className="row m-b30">
                                <div className="col-md-5 col-lg-5 col-sm-12 m-b30">
                                    <ProductGallerySlider/>
                                </div>
                                <div className="col-md-7 col-lg-7 col-sm-12">
                                    <form method="post" className="cart sticky-top">
                                        <div className="dlab-post-title">
                                            <h4 className="post-title"><Link to="#">Product name</Link></h4>
                                            <p className="m-b10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                                            <div className="dlab-divider bg-gray tb15">
                                                <i className="icon-dot c-square"></i>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <h3 className="m-tb10">$2,140.00 </h3>
                                            <div className="shop-item-rating">
                                                <span className="rating-bx"> 
                                                    <i className="fa fa-star"></i> 
                                                    <i className="fa fa-star"></i> 
                                                    <i className="fa fa-star"></i> 
                                                    <i className="fa fa-star-o"></i> 
                                                    <i className="fa fa-star-o"></i> 
                                                </span>
                                                <span>4.5 Rating</span>
                                            </div>
                                        </div>
                                        <div className="shop-item-tage">
                                            <span>Tags :- </span>
                                            <Link to="#">Shoes,</Link>
                                            <Link to="#">Clothing</Link>
                                            <Link to="#">T-shirts</Link>
                                        </div>
                                        <div className="dlab-divider bg-gray tb15">
                                            <i className="icon-dot c-square"></i>
                                        </div>
                                        <div className="row">
                                            <div className="m-b30 col-md-7 col-sm-8">
                                                <h6>Product Size</h6>
                                                <div className="btn-group product-item-size" data-toggle="buttons">
                                                    <label className="btn active">
                                                        <input type="radio" name="options" id="option1" checked/>XS
                                                    </label>
                                                    <label className="btn">
                                                        <input type="radio" name="options" id="option2"/> LG
                                                    </label>
                                                    <label className="btn">
                                                        <input type="radio" name="options" id="option3"/> MD
                                                    </label>
                                                    <label className="btn">
                                                        <input type="radio" name="options" id="option4"/> SM
                                                    </label>
                                                    <label className="btn">
                                                        <input type="radio" name="options" id="option5"/> Xl
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="m-b30 col-md-5 col-sm-4">
                                                <h6>Select quantity</h6>
                                                <div className="quantity btn-quantity style-1">
                                                    <input id="demo_vertical2" type="text" value="1" className="form-control" name="demo_vertical2"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m-b30">
                                            <h6>Select the color</h6>
                                            <div className="btn-group product-item-color" data-toggle="buttons">
                                                <label className="btn bg-red active">
                                                    <input type="radio" name="options" id="option6" checked/>
                                                </label>
                                                <label className="btn bg-pink">
                                                    <input type="radio" name="options" id="option7"/>
                                                </label>
                                                <label className="btn bg-yellow">
                                                    <input type="radio" name="options" id="option8"/>
                                                </label>
                                                <label className="btn bg-blue">
                                                    <input type="radio" name="options" id="option9"/>
                                                </label>
                                                <label className="btn bg-green">
                                                    <input type="radio" name="options" id="option10"/>
                                                </label>
                                            </div>
                                        </div>
                                        <button className="site-button radius-no">
                                            <i className="ti-shopping-cart"></i> Add To Cart
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="row m-b30">
                                <div className="col-lg-12">
                                    <div className="dlab-tabs  product-description tabs-site-button">
                                        <Tabs>
                                            <TabList className="nav nav-tabs ">
                                                <Tab selectedClassName="tab-active">
                                                    <Link  to="#" >
                                                        <i className="fa fa-globe"></i> Description
                                                    </Link>
                                                </Tab>
                                                <Tab selectedClassName="tab-active">
                                                    <Link  to="#">
                                                        <i className="fa fa-photo"></i> Additional Information
                                                    </Link>
                                                </Tab>
                                                <Tab selectedClassName="tab-active">
                                                    <Link  to="#g">
                                                        <i className="fa fa-cog"></i> Product Review
                                                    </Link>
                                                </Tab>
                                            </TabList>
                                        
                                            <TabPanel className="tab-pane">
                                                <p className="m-b10">Suspendisse et justo. Praesent mattis commyolk augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis  commyolk augue aliquam ornare augue.</p>
                                                <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
                                                <ul className="list-check primary">
                                                    <li>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and </li>
                                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </li>
                                                </ul>
                                            </TabPanel>

                                            <TabPanel className="tab-pane ">
                                                <table className="table table-bordered" >
                                                    <tr>
                                                        <td>Size</td>
                                                        <td>Small, Medium & Large</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Color</td>
                                                        <td>Pink & White</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Rating</td>
                                                        <td>
                                                            <span className="rating-bx"> 
                                                                <i className="fa fa-star"></i> 
                                                                <i className="fa fa-star"></i> 
                                                                <i className="fa fa-star"></i> 
                                                                <i className="fa fa-star-o"></i> 
                                                                <i className="fa fa-star-o"></i> 
                                                            </span> 
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Waist</td>
                                                        <td>26 cm</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Length</td>
                                                        <td>40 cm</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Chest</td>
                                                        <td>33 inches</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Fabric</td>
                                                        <td>Cotton, Silk & Synthetic</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Warranty</td>
                                                        <td>3 Months</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Chest</td>
                                                        <td>33 inches</td>
                                                    </tr>
                                                </table>
                                            </TabPanel>

                                            <TabPanel className="tab-pane ">
                                                <div id="comments">
                                                    <ol className="commentlist">
                                                        <li className="comment">
                                                            <div className="comment_container"> 
                                                                <img className="avatar avatar-60 photo" src={require("../../images/testimonials/pic1.jpg")} alt=""/>
                                                                <div className="comment-text">
                                                                    <div  className="star-rating">
                                                                        <div data-rating="3"> 
                                                                            <i className="fa fa-star text-yellow" data-alt="1" title="regular"></i> 
                                                                            <i className="fa fa-star text-yellow" data-alt="2" title="regular"></i> 
                                                                            <i className="fa fa-star-o text-yellow" data-alt="3" title="regular"></i> 
                                                                            <i className="fa fa-star-o text-yellow" data-alt="4" title="regular"></i> 
                                                                            <i className="fa fa-star-o text-yellow" data-alt="5" title="regular"></i> 
                                                                        </div>
                                                                    </div>
                                                                    <p className="meta"> 
                                                                        <strong className="author">Cobus Bester</strong> 
                                                                        <span><i className="fa fa-clock-o"></i> March 7, 2013</span> 
                                                                    </p>
                                                                    <div className="description">
                                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="comment">
                                                            <div className="comment_container"> 
                                                                <img className="avatar avatar-60 photo" src={require("../../images/testimonials/pic2.jpg")} alt=""/>
                                                                <div className="comment-text">
                                                                    <div  className="star-rating">
                                                                        <div data-rating="3"> 
                                                                            <i className="fa fa-star text-yellow" data-alt="1" title="regular"></i> 
                                                                            <i className="fa fa-star text-yellow" data-alt="2" title="regular"></i> 
                                                                            <i className="fa fa-star text-yellow" data-alt="3" title="regular"></i> 
                                                                            <i className="fa fa-star-o text-yellow" data-alt="4" title="regular"></i> 
                                                                            <i className="fa fa-star-o text-yellow" data-alt="5" title="regular"></i> 
                                                                        </div>
                                                                    </div>
                                                                    <p className="meta"> 
                                                                        <strong className="author">Cobus Bester</strong> 
                                                                        <span><i className="fa fa-clock-o"></i> March 7, 2013</span> 
                                                                    </p>
                                                                    <div className="description">
                                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="comment">
                                                            <div className="comment_container"> 
                                                                <img className="avatar avatar-60 photo" src={require("../../images/testimonials/pic3.jpg")} alt=""/>
                                                                <div className="comment-text">
                                                                    <div  className="star-rating">
                                                                        <div data-rating="3"> 
                                                                            <i className="fa fa-star text-yellow" data-alt="1" title="regular"></i> 
                                                                            <i className="fa fa-star text-yellow" data-alt="2" title="regular"></i> 
                                                                            <i className="fa fa-star text-yellow" data-alt="3" title="regular"></i> 
                                                                            <i className="fa fa-star text-yellow" data-alt="4" title="regular"></i> 
                                                                            <i className="fa fa-star-o text-yellow" data-alt="5" title="regular"></i> 
                                                                        </div>
                                                                    </div>
                                                                    <p className="meta"> 
                                                                        <strong className="author">Cobus Bester</strong> 
                                                                        <span><i className="fa fa-clock-o"></i> March 7, 2013</span> 
                                                                    </p>
                                                                    <div className="description">
                                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </div>
                                                <div id="review_form_wrapper">
                                                    <div id="review_form">
                                                        <div id="respond" className="comment-respond">
                                                            <h3 className="comment-reply-title" id="reply-title">Add a review</h3>
                                                            <form className="comment-form" method="post" >
                                                                <div className="comment-form-author">
                                                                    <label>Name <span className="required">*</span></label>
                                                                    <input type="text" aria-required="true" size="30" value="" name="author" id="author"/>
                                                                </div>
                                                                <div className="comment-form-email">
                                                                    <label>Email <span className="required">*</span></label>
                                                                    <input type="text" aria-required="true" size="30" value="" name="email" id="email"/>
                                                                </div>
                                                                <div className="comment-form-rating">
                                                                    <label className="pull-left m-r20">Your Rating</label>
                                                                    <div className="rating-widget">
                                                                        <div className="rating-stars">
                                                                            <ul id="stars">
                                                                                <li className="star" title="Poor" data-value="1">
                                                                                    <i className="fa fa-star fa-fw"></i>
                                                                                </li>
                                                                                <li className="star" title="Fair" data-value="2">
                                                                                    <i className="fa fa-star fa-fw"></i>
                                                                                </li>
                                                                                <li className="star" title="Good" data-value="3">
                                                                                    <i className="fa fa-star fa-fw"></i>
                                                                                </li>
                                                                                <li className="star" title="Excellent" data-value="4">
                                                                                    <i className="fa fa-star fa-fw"></i>
                                                                                </li>
                                                                                <li className="star" title="WOW!!!" data-value="5">
                                                                                    <i className="fa fa-star fa-fw"></i>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-form-comment">
                                                                    <label>Your Review</label>
                                                                    <textarea aria-required="true" rows="8" cols="45" name="comment" id="comment"></textarea>
                                                                </div>
                                                                <div className="form-submit">
                                                                    <input type="submit" value="Submit" className="site-button" id="submit" name="submit"/>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h5 className="m-b20">Related Products</h5>
                                    <ProductSlider/>
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
}
export default shopProductDetails;