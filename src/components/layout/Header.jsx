import React, { useState, useEffect, Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Sticky from "react-stickynode";
import {
  headerDetails,
  ahluLogoWithName,
  companyDetails,
} from "../../data/websiteData";

const navbarlinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Catalogues",
    link: "/catalogues",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];

const activePageDetector = (window) => {
  const pathName = window?.location?.pathname;
  switch (pathName) {
    case "/":
      return "home";
    case "/about":
      return "about";
    case "/products":
      return "products";
    case "/enguiry":
      return "enguiry";
    case "/contact":
      return "contact";
    default:
      return;
  }
};

class Header extends Component {
  componentDidMount() {
    // console.log(window.location.pathname);

    var btn = document.querySelector(".navicon");
    var nav = document.querySelector(".header-nav");

    function toggleFunc() {
      btn.classList.toggle("open");
      nav.classList.toggle("show");
    }

    btn?.addEventListener("click", toggleFunc);

    // Sidenav li open close
    var navUl = [].slice.call(
      document.querySelectorAll(".header-nav > ul > li")
    );
    for (var y = 0; y < navUl.length; y++) {
      navUl[y].addEventListener("click", function () {
        checkLi(this);
      });
    }

    function checkLi(current) {
      const active = current.classList.contains("open");
      navUl.forEach((el) => el.classList.remove("open"));
      //current.classList.add('open');

      if (active) {
        current.classList.remove("open");
        //console.log("active")
      } else {
        current.classList.add("open");
        //console.log("close")
      }
    }
  }
  render() {
    return (
      <>
        <header className="site-header mo-left header header-curve ext-header ">
          <div
            className="middle-bar"
            style={{
              maxWidth: "1535px",
              margin: "auto",
            }}
          >
            <div className="container-fluid">
              <div className="middle-area">
                <div className="logo-header">
                  <Link to="/">
                    <img src={ahluLogoWithName} alt="ahlu logo" />
                  </Link>
                </div>
                <div className="service-list">
                  <ul>
                    <a href={headerDetails.phoneNumberTo}>
                      <li>
                        <i className="la la-phone"></i>
                        <h4 className="title">{headerDetails.phoneNumber}</h4>
                        <span>Connect us via</span>
                      </li>
                    </a>
                    <li>
                      <i className="la la-clock-o"></i>
                      <h4 className="title">
                        {headerDetails.officeHoursTitle}
                      </h4>
                      <span>{headerDetails.officeHours}</span>
                    </li>
                    <a
                      href={companyDetails.googleMapLink}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <li>
                        <i className="la la-map"></i>
                        <h4 className="title">{headerDetails.addressTitle}</h4>
                        <span>{headerDetails.address}</span>
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Sticky innerZ={999} enabled={true}>
            <div
              className="sticky-header main-bar-wraper navbar-expand-lg"
              style={
                {
                  // maxWidth: "1535px",
                  // margin: "auto",
                }
              }
            >
              <div className="main-bar clearfix ">
                <div className="container-fluid clearfix">
                  <div className="logo-header mostion">
                    <Link to="/">
                      <img src={ahluLogoWithName} alt="ahlu ahluLogoWithName" />
                    </Link>
                  </div>

                  <button
                    className="navbar-toggler collapsed navicon justify-content-end"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>

                  <Link to="/quote">
                    {" "}
                    <div className="extra-nav border-0">
                      <h5 className="text-black text-nowrap fw-bold fs-3">
                        GET FREE QUOTE
                      </h5>
                    </div>
                  </Link>

                  <div className="dlab-quik-search ">
                    <form action="#">
                      <input
                        name="search"
                        value=""
                        type="text"
                        className="form-control"
                        placeholder="Type to search"
                      />
                      <span id="quik-search-remove">
                        <i className="ti-close"></i>
                      </span>
                    </form>
                  </div>

                  <div
                    className="header-nav navbar-collapse collapse justify-content-start"
                    id="navbarNavDropdown"
                  >
                    <div className="logo-header d-md-block d-lg-none">
                      <Link to="/">
                        <img src={ahluLogoWithName} alt="" />
                      </Link>
                    </div>
                    <ul className="nav navbar-nav">
                      {navbarlinks.map((link, index) => {
                        return (
                          <li
                            key={index}
                            className={
                              activePageDetector(window) ==
                              link.name.toLowerCase()
                                ? "active"
                                : ""
                            }
                          >
                            <Link to={link.link}>{link.name}</Link>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="dlab-social-icon">
                      <ul>
                        <li>
                          <Link
                            className="site-button sharp-sm fa fa-facebook"
                            to="/#"
                          ></Link>
                        </li>
                        <li>
                          <Link
                            className="site-button sharp-sm fa fa-twitter"
                            to="/#"
                          ></Link>
                        </li>
                        <li>
                          <Link
                            className="site-button sharp-sm fa fa-linkedin"
                            to="/#"
                          ></Link>
                        </li>
                        <li>
                          <Link
                            className="site-button sharp-sm fa fa-instagram"
                            to="/#"
                          ></Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Sticky>
        </header>
      </>
    );
  }
}
export default Header;
