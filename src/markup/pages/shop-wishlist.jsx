import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('../../images/banner/bnr4.jpg')

class ShopWishlist extends Component {


    render() {
        return (
            <>
                <Header/>
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Wishlist</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to="/">Home</Link></li>
                                        <li>Wishlist</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full content-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="table-responsive">
                                        <table className="table check-tbl">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Product name</th>
                                                    <th>Unit Price</th>
                                                    <th>Quantity</th>
                                                    <th>Add to cart </th>
                                                    <th>Close</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr >
                                                    <td className="product-item-img">
                                                        <img src={require("../../images/product/thumb/item1.jpg")} alt=""/>
                                                    </td>
                                                    <td className="product-item-name">Prduct Item 3</td>
                                                    <td className="product-item-price">$28.00</td>
                                                    <td className="product-item-quantity">
                                                        <div className="quantity btn-quantity max-w80">
                                                            <input id="demo_vertical2" type="text" value="1" className="form-control" name="demo_vertical2"/>
                                                        </div>
                                                    </td>
                                                    <td className="product-item-totle">
                                                        <Link to="/shop-cart" className="site-button">Add To Cart</Link>
                                                    </td>
                                                    <td className="product-item-close">
                                                        <Link to="#" data-dismiss="alert" aria-label="close" className="ti-close"></Link>
                                                    </td>
                                                </tr>
                                                <tr >
                                                    <td className="product-item-img">
                                                        <img src={require("../../images/product/thumb/item2.jpg")} alt=""/>
                                                    </td>
                                                    <td className="product-item-name">Prduct Item 3</td>
                                                    <td className="product-item-price">$28.00</td>
                                                    <td className="product-item-quantity">
                                                        <div className="quantity btn-quantity max-w80">
                                                            <input id="demo_vertical3" type="text" value="1" className="form-control" name="demo_vertical2"/>
                                                        </div>
                                                    </td>
                                                    <td className="product-item-totle">
                                                        <Link to="/shop-cart" className="site-button">Add To Cart</Link>
                                                    </td>
                                                    <td className="product-item-close">
                                                        <Link to="#" data-dismiss="alert" aria-label="close" className="ti-close"></Link>
                                                    </td>
                                                </tr>
                                                <tr >
                                                    <td className="product-item-img">
                                                        <img src={require("../../images/product/thumb/item3.jpg")} alt=""/>
                                                    </td>
                                                    <td className="product-item-name">Prduct Item 3</td>
                                                    <td className="product-item-price">$28.00</td>
                                                    <td className="product-item-quantity">
                                                        <div className="quantity btn-quantity max-w80">
                                                            <input id="demo_vertical4" type="text" value="1" className="form-control" name="demo_vertical2"/>
                                                        </div>
                                                    </td>
                                                    <td className="product-item-totle">
                                                        <Link to="/shop-cart" className="site-button">Add To Cart</Link>
                                                    </td>
                                                    <td className="product-item-close">
                                                        <Link to="#" data-dismiss="alert" aria-label="close" className="ti-close"></Link>
                                                    </td>
                                                </tr>
                                                <tr >
                                                    <td className="product-item-img">
                                                        <img src={require("../../images/product/thumb/item4.jpg")} alt=""/>
                                                    </td>
                                                    <td className="product-item-name">Prduct Item 3</td>
                                                    <td className="product-item-price">$28.00</td>
                                                    <td className="product-item-quantity">
                                                        <div className="quantity btn-quantity max-w80">
                                                            <input id="demo_vertical5" type="text" value="1" className="form-control" name="demo_vertical2"/>
                                                        </div>
                                                    </td>
                                                    <td className="product-item-totle">
                                                        <Link to="/shop-cart" className="site-button">Add To Cart</Link>
                                                    </td>
                                                    <td className="product-item-close">
                                                        <Link to="#" data-dismiss="alert" aria-label="close" className="ti-close"></Link>
                                                    </td>
                                                </tr>
                                                <tr className="alert">
                                                    <td className="product-item-img">
                                                        <img src={require("../../images/product/thumb/item5.jpg")} alt=""/>
                                                    </td>
                                                    <td className="product-item-name">Prduct Item 3</td>
                                                    <td className="product-item-price">$28.00</td>
                                                    <td className="product-item-quantity">
                                                        <div className="quantity btn-quantity max-w80">
                                                            <input id="demo_vertical7" type="text" value="1" className="form-control" name="demo_vertical2"/>
                                                        </div>
                                                    </td>
                                                    <td className="product-item-totle">
                                                        <Link to="/shop-cart" className="site-button">Add To Cart</Link>
                                                    </td>
                                                    <td className="product-item-close">
                                                        <Link to="#" data-dismiss="alert" aria-label="close" className="ti-close"></Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
                                            <h5 className="dlab-tilte">Fre shipping on orders $60+</h5>
                                            <p>Order more than 60$ and you will get fre shippining Worldwide. More info.</p>
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
                                            <p>Not happy with our product, feel fre to return it, we will refund 100% your money!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
                <Footer hideContactInfo/>                
            </>
        )
    }
}
export default ShopWishlist;