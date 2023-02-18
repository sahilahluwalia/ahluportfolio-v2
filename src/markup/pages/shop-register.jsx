import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

const bg = require('../../images/banner/bnr5.jpg')

class ShopRegister extends Component {


    render() {
        return (
            <>
                <Header/>
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle bg-pt"  style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Register</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to="/">Home</Link></li>
                                        <li>Register</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full content-inner shop-account">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2 className="font-weight-700 m-t0 m-b40">CREATE AN ACCOUNT</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 m-b30">
                                    <div className="p-a30 border-1  max-w500 m-auto">
                                        <div className="tab-content">
                                            <form id="login" className="tab-pane active">
                                                <h4 className="font-weight-700">PERSONAL INFORMATION</h4>
                                                <p className="font-weight-600">If you have an account with us, please log in.</p>
                                                <div className="form-group">
                                                    <label className="font-weight-700">First Name *</label>
                                                    <input name="dzName" required="" className="form-control" placeholder="First Name" type="text"/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="font-weight-700">Last Name *</label>
                                                    <input name="dzName" required="" className="form-control" placeholder="Last Name" type="text"/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="font-weight-700">E-MAIL *</label>
                                                    <input name="dzName" required="" className="form-control" placeholder="Your Email Id" type="email"/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="font-weight-700">PASSWORD *</label>
                                                    <input name="dzName" required="" className="form-control " placeholder="Type Password" type="password"/>
                                                </div>
                                                <div className="text-left m-t15">
                                                    <button className="site-button button-lg radius-no outline outline-2">CREATE</button>
                                                </div>
                                            </form>
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
                <Footer hideContactInfo/>                
            </>
        )
    }
}
export default ShopRegister;