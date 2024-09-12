import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';
import {companyDetails, headerDetails, socialMediaLinks} from "../../data/websiteData";
import BlueAhluLogo from '../../asserts/Ahlu_Blue_logo.png'
import AhluText from '../../asserts/ahlu_word.png'


class Header8 extends Component {

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
            <header className="site-header header center mo-left frame-box ">
                <div className="top-bar">
                    <div className="container">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="dlab-topbar-left">
                                <ul>
                                    <li><i className="fa fa-phone m-r5"></i>
                                        <a href={headerDetails.phoneNumberTo}>
                                               {headerDetails.phoneNumber}
                                        </a>
                                    </li>
                                    <li><i className="fa fa-envelope-o m-r5"></i>
                                        <a href={`mailto:${companyDetails.email}`}>
                                            {companyDetails.email}
                                        </a></li>
                                </ul>
                            </div>
                            <div className="dlab-topbar-right topbar-social">
                                <span className="m-r10">Follows Us :</span>
                                <ul>
                                    <li><Link
                                        target="_blank"
                                        to={socialMediaLinks.find((item) => item.name === 'linkedin').link}
                                              className="site-button circle-sm linkedin sharp-sm"><i
                                        className="fa fa-linkedin"></i></Link></li>
                                    <li><Link
                                        target="_blank"
                                        to={socialMediaLinks.find((item) => item.name === 'youtube').link}
                                              className="site-button circle-sm youtube"><i
                                        className="fa fa-youtube"></i></Link></li>
                                    <li><Link
                                        target="_blank"
                                        to={socialMediaLinks.find((item) => item.name === 'indiamart').link}
                                              className="site-button circle-sm google-plus">
                                        <img src={socialMediaLinks.find((item) => item.name === 'indiamart').image} alt='indiamart-logo'/>
                                        </Link></li>
                                    <li><Link
                                        target="_blank"

                                        to={socialMediaLinks.find((item) => item.name === 'whatsapp').link} className="site-button circle-sm whatsapp"><i
                                        className="fa fa-whatsapp"></i></Link></li>
                                    <li><Link
                                        // open in new tab
                                        target="_blank"
                                        to="https://www.ahlu.in/satyam" className="site-button circle-sm rounded-circle">
                                        <img src={BlueAhluLogo} alt='ahlu-engineers-logo  '/>

                                    </Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <Sticky
                    innerZ={999}
                    enabled={true}
                onStateChange={this.handleStateChange}
                >
                    <div
                        className={`sticky-header main-bar-wraper ${active} navbar-expand-lg`}
                    >
                        <div className="main-bar clearfix ">
                            <div className="container clearfix">
                                <div

                                    className="logo-header mostion">
                                    <Link to="/"><img src={BlueAhluLogo} className="logo1 p-2" alt=""/>

                                        <img src={AhluText} className="logo2 " alt=""/>
                                    </Link>
                                </div>

                                <button
                                    className="navbar-toggler collapsed navicon justify-content-end " type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>

                                <div className="header-nav navbar-collapse collapse justify-content-between" id="navbarNavDropdown">
                                    <div className="logo-header mostion">
                                        <Link to="/"><img src={BlueAhluLogo} alt=""/></Link>
                                    </div>
                                    <ul className="nav navbar-nav d-flex justify-content-end">
                                        <li className=" has-mega-menu homedemo"><Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="#">About Us<i className="fa fa-chevron-down"></i></Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/vision-mission">Vision & Mission</Link></li>
                                                <li><Link to="/story-timeline">Story & Timeline</Link></li>
                                                <li><Link to="/why-ahlu-engineers">Why AhluEngineers?</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="#">Products<i className="fa fa-chevron-down"></i></Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/products/power-press-automation#powerpress">Power Press Automation</Link></li>
                                                <li><Link to="/products/special-purpose-machines#specialpurpose">Special Purpose Machine</Link></li>
                                                <li><Link to="/products/electrical-panels#specialpurpose">Electrical Panels</Link></li>
                                            </ul>
                                        </li>

                                    </ul>
                                    <ul className="nav navbar-nav d-flex justify-content-start">
                                        <li className=" has-mega-menu homedemo"><Link to="/catalogues">Catalogues</Link>
                                        </li>
                                        <li className=" has-mega-menu homedemo"><Link to="/videos">Videos</Link>
                                        </li>
                                        <li className=" has-mega-menu homedemo"><Link to="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                    <div className="dlab-social-icon">
                                        <ul>
                                        <li><Link className="site-button facebook circle-sm outline fa fa-facebook" to="/javascript:void(0);"></Link></li>
                                            <li><Link className="site-button twitter circle-sm outline fa fa-twitter" to="/javascript:void(0);"></Link></li>
                                            <li><Link className="site-button linkedin circle-sm outline fa fa-linkedin" to="/javascript:void(0);"></Link></li>
                                            <li><Link className="site-button instagram circle-sm outline fa fa-instagram" to="/javascript:void(0);"></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Sticky>
            </header>
            </>
        )
    }
}
export default Header8;
