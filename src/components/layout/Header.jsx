'use client'

import React, { useEffect } from "react";
import Link from "next/link";
import Sticky from "react-stickynode";
import {
  headerDetails,
  ahluLogoWithName,
  companyDetails,
  socialMediaLinks,
} from "../../data/websiteData";
import { catalogueListItemsWithSubmenu } from "../../utils/catalogues";
import {
  masterAboutUsListItemsWithSubmenu,
  masterProductsListItemsWithSubmenu,
} from "../../data/productsData";
import { usePathname } from 'next/navigation'
import Image from "next/image";
const navbarlinks = [
  {
    name: "Home",
    link: "/",
    activePage: "home",
  },
  {
    name: "About Us",
    link: "/about",
    activePage: "about",
  },
  {
    name: "Products",
    link: "/products",
    activePage: "products",
  },
  {
    name: "Catalogues",
    link: "/catalogues",
  },
  {
    name: "Contact Us",
    link: "/contact",
    activePage: "contact",
  },
];

const activePageDetector = (pathName) => {
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

const Header = () => {
  useEffect(() => {
    const btn = document.querySelector(".navicon");
    const nav = document.querySelector(".header-nav");

    function toggleFunc() {
      btn.classList.toggle("open");
      nav.classList.toggle("show");
    }

    btn?.addEventListener("click", toggleFunc);

    // Sidenav li open close
    const navUl = [].slice.call(
      document.querySelectorAll(".header-nav > ul > li")
    );
    for (let y = 0; y < navUl.length; y++) {
      navUl[y].addEventListener("click", function () {
        checkLi(this);
      });
    }

    function checkLi(current) {
      const active = current.classList.contains("open");
      navUl.forEach((el) => el.classList.remove("open"));

      if (active) {
        current.classList.remove("open");
      } else {
        current.classList.add("open");
      }
    }

    // Cleanup function
    return () => {
      btn?.removeEventListener("click", toggleFunc);
      navUl.forEach((el) => el.removeEventListener("click", checkLi));
    };
  }, []);
  const pathName = usePathname()
  console.log(pathName)
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
                <Link href="/">
                  <Image src={ahluLogoWithName} alt="ahlu logo" />
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
                    <h4 className="title">{headerDetails.officeHoursTitle}</h4>
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
            style={{}}
          >
            <div className="main-bar clearfix ">
              <div className="container-fluid clearfix ">
                <div className="logo-header mostion">
                  <Link href="/">
                    <Image src={ahluLogoWithName} alt="ahlu ahluLogoWithName" />
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

                <Link href="/quote">
                  <div className="extra-nav border-0">
                    <h5 className="text-nowrap fw-bold fs-3 bigger-hover">
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
                    <Link href="/">
                      <Image src={ahluLogoWithName} alt="" />
                    </Link>
                  </div>
                  <ul className="nav navbar-nav">
                    {navbarlinks.map((link, index) => {
                      // if (link.name === "Catalogues") {
                      //   return catalogueListItemsWithSubmenu;
                      // } else if (link.name === "Products") {
                      //   return masterProductsListItemsWithSubmenu;
                      // } else if (link.name === "About Us") {
                      //   return masterAboutUsListItemsWithSubmenu;
                      // } else
                        return (
                          <li
                            key={index}
                            className={
                              activePageDetector(pathName) ===
                              link.name.toLowerCase()
                                ? "active"
                                : ""
                            }
                          >
                            <Link href={link.link}>{link.name}</Link>
                          </li>
                        );
                    })}
                  </ul>

                  <div className="dlab-social-icon">
                    <ul>
                      {socialMediaLinks.map((item, index) => {
                        if (item.image)
                          return (
                            <li key={index}>
                              <a
                                className={item.icon}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={item.link}
                              >
                                <Image
                                  style={{
                                    width: "1.5rem",
                                  }}
                                  src={item.image}
                                  alt=""
                                />
                              </a>
                            </li>
                          );
                        else
                          return (
                            <li key={index}>
                              <a
                                className={item.icon}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={item.link}
                              >
                                .
                              </a>
                            </li>
                          );
                      })}
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
};

export default Header;
