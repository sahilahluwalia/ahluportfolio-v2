import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('../../images/banner/bnr4.jpg')

const Rating = () =>{
    return(
        <>
            <ul className="item-review">
                <li><i className="fa fa-star me-1"></i></li>
                <li><i className="fa fa-star me-1"></i></li>
                <li><i className="fa fa-star me-1"></i></li>
                <li><i className="fa fa-star-half-o me-1"></i></li>
                <li><i className="fa fa-star-o"></i></li>
            </ul>
        </>
    )
}

class Shop extends Component {


    render() {
        return (
            <>
                <Header/>
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Shop Grid 4</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to="/">Home</Link></li>
                                        <li>Shop Grid 4</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full content-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="item-box m-b10">
                                        <div className="item-img">
                                            <img src={require("../../images/product/item1.jpg")} alt=""/>
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Checked Short Dress</Link></h6>
                                            <Rating />
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="item-box m-b10 item-style-1">
                                        <div className="item-img">
                                            <img src={require("../../images/product/item2.jpg")} alt=""/>
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Slim Fit Chinos</Link></h6>
                                            <Rating />
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="item-box m-b10">
                                        <div className="item-img">
                                            <img src={require("../../images/product/item3.jpg")} alt=""/>
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Dark Brown Boots</Link></h6>
                                            <Rating />
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="item-box m-b10">
                                        <div className="item-img">
                                            <img src={require("../../images/product/item4.jpg")} alt=""/>
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Light Blue Denim Dress</Link></h6>
                                            <Rating />
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="item-box m-b10">
                                        <div className="item-img">
                                            <img src={require("../../images/product/item5.jpg")} alt=""/>
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Green Trousers</Link></h6>
                                            <Rating />
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="item-box m-b10 item-style-1">
                                        <div className="item-img">
                                            <img src={require("../../images/product/item6.jpg")} alt=""/>
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Unisex Sunglasses</Link></h6>
                                            <Rating />
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="item-box m-b10">
                                        <div className="item-img">
                                            <img src={require("../../images/product/item7.jpg")} alt=""/>
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Blue Round-Neck Tshirt</Link></h6>
                                            <Rating />
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="item-box m-b10">
                                        <div className="item-img">
                                            <img src={require("../../images/product/item8.jpg")} alt=""/>
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Men Grey Casual Shoes</Link></h6>
                                            <Rating />
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="item-box m-b10">
                                        <div className="item-img">
                                            <img src={require("../../images/product/item9.jpg")} alt=""/>
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Checked Short Dress</Link></h6>
                                            <Rating />
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="item-box m-b10 item-style-1">
                                        <div className="item-img">
                                            <img src={require("../../images/product/item1.jpg")} alt=""/>
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Slim Fit Chinos</Link></h6>
                                            <Rating />
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="item-box m-b10">
                                        <div className="item-img">
                                            <img src={require("../../images/product/item2.jpg")} alt=""/>
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Dark Brown Boots</Link></h6>
                                            <Rating />
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="item-box m-b10">
                                        <div className="item-img">
                                            <img src={require("../../images/product/item3.jpg")} alt=""/>
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center text-black p-a10">
                                            <h6 className="item-title font-weight-500"><Link to="/shop-product-details">Light Blue Denim Dress</Link></h6>
                                            <Rating />
                                            <h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>
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
}
export default Shop;