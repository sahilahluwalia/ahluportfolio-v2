import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';



class Header3 extends Component {

    state = {
        fixed:false
    }

    componentDidMount() {

        // sidebar open/close

        var btn = document.querySelector('.navicon');
        var nav = document.querySelector('.header-nav');
       
        function toggleFunc() {
            btn.classList.toggle("open");
            nav.classList.toggle("show");
        }

        btn.addEventListener('click', toggleFunc);


        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.header-nav > ul > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }

        function checkLi(current) {
            const active = current.classList.contains("open")
            navUl.forEach(el => el.classList.remove('open'));
            //current.classList.add('open');
           
            if(active){
                current.classList.remove('open') 
                //console.log("active")
            } else{
                current.classList.add('open');
                //console.log("close")
            }
        }

    }

    handleStateChange = (status)=> {
        const fixed = status.status === Sticky.STATUS_FIXED ? true : false
        
        this.setState({
            fixed
        })
        
    }

    render() {
        const active = this.state.fixed ? "is-fixed" : ""
        return (
            <>
             <Sticky 
             innerZ={999} 
             enabled={true}
             onStateChange={this.handleStateChange}
             >
                <header className="site-header mo-left header-transparent header navstyle3">
                    <div class={`sticky-header main-bar-wraper ${active} navbar-expand-lg`}>
                        <div className="main-bar clearfix ">
                            <div className="container clearfix">
                                <div className="logo-header mostion">
                                    <Link to="/"><img src={require("../../images/logo-white.png")} alt=""/></Link>
                                </div>
                                
                                <button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                
                                <div className="extra-nav">
                                    <div className="extra-cell">
                                        <button id="quik-search-btn" type="button" className="site-button-link"><i className="la la-search"></i></button>
                                    </div>
                                </div>
                                
                                <div className="dlab-quik-search ">
                                    <form action="#">
                                        <input name="search" value="" type="text" className="form-control" placeholder="Type to search"/>
                                        <span id="quik-search-remove"><i className="ti-close"></i></span>
                                    </form>
                                </div>
                                
                                <div className="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
                                    <div className="logo-header d-md-block d-lg-none">
                                        <Link to="/"><img src={require("../../images/logo.png")} alt=""/></Link>
                                    </div>
                                    <ul className="nav navbar-nav">	
                                        <li className="has-mega-menu homedemo"> <Link to="#">Home<i className="fa fa-chevron-down"></i></Link>
                                            <ul className="mega-menu">
                                                <li><Link to="/"><img src={require("../../demo/pic1.jpg")} alt=""/><span>Home - Default</span></Link></li>
                                                <li><Link to="/index-2"><img src={require("../../demo/pic2.jpg")} alt=""/><span>Home - Oil/Gas Plant</span></Link></li>
                                                <li><Link to="/index-3"><img src={require("../../demo/pic3.jpg")} alt=""/><span>Home - Steel Plant</span></Link></li>
                                                <li><Link to="/index-4"><img src={require("../../demo/pic4.jpg")} alt=""/><span>Home - Factory</span></Link></li>
                                                <li><Link to="/index-5"><img src={require("../../demo/pic5.jpg")} alt=""/><span>Home - Construct</span></Link></li>
                                                <li><Link to="/index-6"><img src={require("../../demo/pic6.jpg")} alt=""/><span>Home - Solar Plant</span></Link></li>
                                                <li><Link to="/index-7"><img src={require("../../demo/pic7.jpg")} alt=""/><span>Home - Food Industry</span></Link></li>
                                                <li><Link to="/index-8"><img src={require("../../demo/pic8.jpg")} alt=""/><span>Home - Agriculture</span></Link></li>
                                                <li><Link to="/index-9"><img src={require("../../demo/pic9.jpg")} alt=""/><span>Home - Ship Industry</span></Link></li>
                                                <li><Link to="/index-10"><img src={require("../../demo/pic10.jpg")} alt=""/><span>Home - Leather Industry</span></Link></li>
                                                <li><Link to="/index-11"><img src={require("../../demo/pic11.jpg")} alt=""/><span>Home - Nuclear Plant</span></Link></li>
                                                <li><Link to="/index-12"><img src={require("../../demo/pic12.jpg")} alt=""/><span>Home - Beer Factory</span></Link></li>
                                                <li><Link to="/index-13"><img src={require("../../demo/pic13.jpg")} alt=""/><span>Home - Mining Industry</span></Link></li>
                                                <li><Link to="/index-14"><img src={require("../../demo/pic14.jpg")} alt=""/><span>Home - Car Industry</span></Link></li>
                                                <li><Link to="/index-15"><img src={require("../../demo/pic15.jpg")} alt=""/><span>Home - Plastic Industry</span></Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-mega-menu"> <Link to={'#'}>Pages<i className="fa fa-chevron-down"></i></Link>
											<ul className="mega-menu">
												<li>
													<Link to={'#'}>Pages</Link>
													<ul>
														<li><Link to={'/about-1'}>About us 1</Link></li>
														<li><Link to={'/about-2'}>About us 2</Link></li>
														<li><Link to={'/services-1'}>Services 1</Link></li>
														<li><Link to={'/services-2'}>Services 2</Link></li>
														<li><Link to={'/services-details'}>Services Details</Link></li>
													</ul>
												</li>
												<li>
													<Link to={'#'}>Pages</Link>
													<ul>
														<li><Link to={'/team-1'}>Team 1</Link></li>
														<li><Link to={'/team-2'}>Team 2</Link></li>
														<li><Link to={'/faq-1'}>Faqs 1</Link></li>
														<li><Link to={'/faq-2'}>Faqs 2</Link></li>
														<li><Link to={'/portfolio-grid-2'}>portfolio Grid 2</Link></li>
													</ul>
												</li>
												<li>
													<Link to={'#'}>Pages</Link>
													<ul>
														<li><Link to={'/portfolio-grid-3'}>Portfolio Grid 3</Link></li>
														<li><Link to={'/portfolio-grid-4'}>Portfolio Grid 4</Link></li>
														<li><Link to={'/portfolio-details'}>Portfolio Details</Link></li>
														<li><Link to={'/error-403'}>Error 403</Link></li>
													</ul>
												</li>
												<li>
													<Link to={'#'}>Pages</Link>
													<ul>
														<li><Link to={'/error-404'}>Error 404</Link></li>
														<li><Link to={'/error-405'}>Error 405</Link></li>
														<li><Link to={'/help-desk'}>Help Desk</Link></li>
														<li><Link to={'/privacy-policy'}>Privacy Policy</Link></li>
													</ul>
												</li>
											</ul>
										</li>
                                        <li>
                                            <Link to="#">Shop<i className="fa fa-chevron-down"></i></Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/shop">Shop</Link></li>
                                                <li><Link to="/shop-sidebar">Shop Sidebar</Link></li>
                                                <li><Link to="/shop-product-details">Product Details</Link></li>
                                                <li><Link to="/shop-cart">Cart</Link></li>
                                                <li><Link to="/shop-wishlist">Wishlist</Link></li>
                                                <li><Link to="/shop-checkout">Checkout</Link></li>
                                                <li><Link to="/shop-login">Login</Link></li>
                                                <li><Link to="/shop-register">Register</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-mega-menu"> 
											<Link to={'#'}>Blog<i className="fa fa-chevron-down"></i></Link>
											<ul className="mega-menu">
												<li> <Link to={'#'}>Blog</Link>
													<ul>
														<li><Link to={'/blog-half-img'}>Half image</Link></li>
														<li><Link to={'/blog-half-img-sidebar'}>Half image sidebar</Link></li>
														<li><Link to={'/blog-half-img-left-sidebar'}>Half image sidebar left</Link></li>
														<li><Link to={'/blog-large-img'}>Large image</Link></li>
													</ul>
												</li>
												<li> <Link to={'#'}>Blog</Link>
													<ul>
														<li><Link to={'blog-large-img-sidebar'}>Large image sidebar</Link></li>
														<li><Link to={'blog-large-img-left-sidebar'}>Large image sidebar left</Link></li>
														<li><Link to={'blog-grid-2'}>Grid 2</Link></li>
														<li><Link to={'blog-grid-2-sidebar'}>Grid 2 sidebar</Link></li>
													</ul>
												</li>
												<li> <Link to={'#'}>Blog</Link>
													<ul>
														<li><Link to={'blog-grid-2-sidebar-left'}>Grid 2 sidebar left</Link></li>
														<li><Link to={'blog-grid-3'}>Grid 3</Link></li>
														<li><Link to={'blog-grid-3-sidebar'}>Grid 3 sidebar</Link></li>
														<li><Link to={'blog-grid-3-sidebar-left'}>Grid 3 sidebar left</Link></li>
													</ul>
												</li>
												<li> <Link to={'#'}>Blog</Link>
													<ul>
														<li><Link to={'blog-grid-4'}>Grid 4</Link></li>
														<li><Link to={'blog-single'}>Single</Link></li>
														<li><Link to={'blog-single-sidebar'}>Single sidebar</Link></li>
														<li><Link to={'blog-single-left-sidebar'}>Single sidebar right</Link></li>
													</ul>
												</li>
											</ul>
										</li>
										<li className="has-mega-menu"> <Link to={'#'}>Element<i className="fa fa-chevron-down"></i></Link>
											<ul className="mega-menu">
												<li><Link to={'#'}>Element</Link>
													<ul>
														<li><Link to={'shortcode-buttons'}><i className="ti-mouse"></i> Buttons</Link></li>
														<li><Link to={'shortcode-icon-box-styles'}><i className="ti-layout-grid2"></i> Icon box styles</Link></li>
														<li><Link to={'shortcode-pricing-table'}><i className="ti-layout-grid2-thumb"></i> Pricing table</Link></li>
														<li><Link to={'shortcode-team'}><i className="ti-user"></i> Team</Link></li>
													</ul>
												</li>
												<li> <Link to={'#'}>Element</Link>
													<ul>
														<li><Link to={'shortcode-image-box-content'}><i className="ti-image"></i> Image box content</Link></li>
														<li><Link to={'shortcode-counters'}><i className="ti-timer"></i> Counters</Link></li>
														<li><Link to={'shortcode-shop-widgets'}><i className="ti-shopping-cart"></i> Shop Widgets</Link></li>
														<li><Link to={'shortcode-dividers'}><i className="ti-layout-list-post"></i> Dividers</Link></li>
													</ul>
												</li>
												<li> <Link to={'#'}>Element</Link>
													<ul>
														<li><Link to={'shortcode-images-effects'}><i className="ti-layout-media-overlay"></i> Images effects</Link></li>
														<li><Link to={'shortcode-testimonials'}><i className="ti-comments"></i> Testimonials</Link></li>
														<li><Link to={'shortcode-pagination'}><i className="ti-more"></i> Pagination</Link></li>
														<li><Link to={'shortcode-alert-box'}><i className="ti-alert"></i> Alert box</Link></li>
													</ul>
												</li>
												<li> <Link to={'#'}>Element</Link>
													<ul>
														<li><Link to={'shortcode-icon-box'}><i className="ti-layout-media-left-alt"></i> Icon Box</Link></li>
														<li><Link to={'shortcode-list-group'}><i className="ti-list"></i> List group</Link></li>
														<li><Link to={'shortcode-title-separators'}><i className="ti-layout-line-solid"></i> Title Separators</Link></li>
													</ul>
												</li>
											</ul>
										</li>
                                        <li>
                                            <Link to="#">Contact Us<i className="fa fa-chevron-down"></i></Link>
                                            <ul className="sub-menu right">
                                                <li><Link to="/contact-1">Contact us 1</Link></li>
                                                <li><Link to="/contact-2">Contact us 2</Link></li>
                                                <li><Link to="/contact-3">Contact us 3</Link></li>
                                                <li><Link to="/contact-4">Contact us 4</Link></li>
                                            </ul>
                                        </li>
                                    </ul>	
                                    <div className="dlab-social-icon">
                                        <ul>
                                            <li><Link className="site-button facebook sharp-sm fa fa-facebook" to="#"></Link></li>
                                            <li><Link className="site-button twitter sharp-sm fa fa-twitter" to="#"></Link></li>
                                            <li><Link className="site-button linkedin sharp-sm fa fa-linkedin" to="#"></Link></li>
                                            <li><Link className="site-button instagram sharp-sm fa fa-instagram" to="#"></Link></li>
                                        </ul>
                                    </div>			
                                </div>
                            </div>
                        </div>
                    </div>
                </header> 
            </Sticky>               
            </>
        )
    }
}
export default Header3;