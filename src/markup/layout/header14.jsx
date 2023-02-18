import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';
import {Link as ScrollTo} from 'react-scroll'



class Header14 extends Component {

    constructor(props){
        super(props)
        this.state = {
            fixed: false,
            navbar:false
        }
    }

    componentDidMount() {

        // sidebar open/close

        var btn = document.querySelector('.menu-icon');
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

    openMenu = (event) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            navbar: true
        })
    }

    closeMenu = () => {
        this.setState({
            ...this.state,
            navbar: false
        })
    }

    handleStateChange = (status)=> {
        const fixed = status.status === Sticky.STATUS_FIXED ? true : false
        
        this.setState({
            ...this.state,
            fixed
        })
        
    }

    render() {
        const active = this.state.fixed ? "is-fixed" : ""
        const activeMenu = this.state.navbar ? "active" : ""
        return (
            <>
            <Sticky 
            innerZ={999} 
            enabled={true}
            onStateChange={this.handleStateChange}
            >
                <header className="site-header mo-left header-full header header-transparent header-sidenav onepage white">
                    <div class={`sticky-header main-bar-wraper ${active} navbar-expand-lg`}>
                        <div className="main-bar clearfix">
                            <div className="container-fluid p-r0">
                                <div className="header-content-bx">
                                    <div className="logo-header">
                                        <Link to="/"><img src={require("../../images/logo-white.png")} alt=""/></Link>
                                    </div>
                                    <div className="extra-nav">
                                        <div className="extra-cell">
                                            <ul>
                                                <li className="search-btn">
                                                    <Link to="#" className="menu-icon" onClick={this.openMenu}>
                                                        <div className="menu-icon-in">
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class={`header-nav navbar-collapse collapse full-sidenav navbar ${activeMenu}`}>
                        <div className="logo-header">
                            <Link to="/"><img src={require("../../images/logo.png")} alt=""/></Link>
                        </div>
                        <ul className="nav navbar-nav ">	                                                                          
                            <li><ScrollTo activeclassName="active" offset={-65} smooth={true} to="home"   >Home</ScrollTo></li>
                            <li><ScrollTo activeclassName="active" offset={-65} smooth={true} to="about"  >About Us</ScrollTo></li>
                            <li><ScrollTo activeclassName="active" offset={-65} smooth={true} to="choose-us" className="scroll nav-link">Why Choose Us</ScrollTo></li>
                            <li><ScrollTo activeclassName="active" offset={-65} smooth={true} to="services" className="scroll nav-link">Our Services</ScrollTo></li>
                            <li><ScrollTo activeclassName="active" offset={-65} smooth={true} to="latestnews" className="scroll nav-link">Latest News</ScrollTo></li>
                            <li><ScrollTo activeclassName="active" offset={-65} smooth={true} to="team" className="scroll nav-link">Our Team</ScrollTo></li>
                            <li><ScrollTo activeclassName="active" offset={-65} smooth={true} to="client" className="scroll nav-link">Our Client</ScrollTo></li>
                            <li><ScrollTo activeclassName="active" offset={-65} smooth={true} to="footer" className="scroll nav-link">Contact Us</ScrollTo></li>
                        </ul>
                        <div className="social-menu">
                            <ul>
                                <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                            </ul>
                            <p className="copyright-head">© 2022 Industry </p>
                        </div>
                    </div>
                    <div class={`menu-close ${activeMenu}`} onClick={this.closeMenu}>
                        <i className="ti-close"></i>
                    </div>
                </header>               
            </Sticky>
            </>
        )
    }
}
export default Header14;