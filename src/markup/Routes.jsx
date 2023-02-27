import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages/index";
import About1 from "./pages/about-1";
import About2 from "./pages/about-2";
import BlogGrid2 from "./pages/blog-grid-2";
import BlogGrid2Sidebar from "./pages/blog-grid-2-sidebar";
import BlogGrid2SidebarLeft from "./pages/blog-grid-2-sidebar-left";
import BlogGrid3 from "./pages/blog-grid-3";
import BlogGrid3Sidebar from "./pages/blog-grid-3-sidebar";
import BlogGrid3SidebarLeft from "./pages/blog-grid-3-sidebar-left";
import BlogGrid4 from "./pages/blog-grid-4";
import BlogHalfImg from "./pages/blog-half-img";
import BlogHalfImgSidebarLeft from "./pages/blog-half-img-left-sidebar";
import BlogHalfImgSidebar from "./pages/blog-half-img-sidebar";
import BlogLargeImg from "./pages/blog-large-img";
import BlogLargeImgSidebarLeft from "./pages/blog-large-img-left-sidebar";
import BlogLargeImgSidebar from "./pages/blog-large-img-sidebar";
import BlogSingle from "./pages/blog-single";
import BlogSingleSidebarLeft from "./pages/blog-single-left-sidebar";
import BlogSingleSidebar from "./pages/blog-single-sidebar";
import ComingSoon1 from "./pages/coming-soon-1";
import Contact1 from "./pages/contact-1";
import Contact2 from "./pages/contact-2";
import Contact3 from "./pages/contact-3";
import Contact4 from "./pages/contact-4";
import Error403 from "./pages/error-403";
import Error404 from "./pages/error-404";
import Error405 from "./pages/error-405";
import Faq1 from "./pages/faq-1";
import Faq2 from "./pages/faq-2";
import HelpDesk from "./pages/help-desk";
import PortfolioDetails from "./pages/portfolio-details";
import PortfolioGrid2 from "./pages/portfolio-grid-2";
import PortfolioGrid3 from "./pages/portfolio-grid-3";
import PortfolioGrid4 from "./pages/portfolio-grid-4";
import PrivacyPolicy from "./pages/privacy-policy";
import Services1 from "./pages/services-1";
import Services2 from "./pages/services-2";
import ServicesDetails from "./pages/services-details";
import ShopCart from "./pages/shop-cart";
import ShopCheckout from "./pages/shop-checkout";
import ShopLogin from "./pages/shop-login";
import shopProductDetails from "./pages/shop-product-details";
import ShopRegister from "./pages/shop-register";
import ShopSidebar from "./pages/shop-sidebar";
import ShopWishlist from "./pages/shop-wishlist";
import Shop from "./pages/shop";
import Team1 from "./pages/team-1";
import Team2 from "./pages/team-2";
import Index2 from "./pages/index-2";
import Index3 from "./pages/index-3";
import Index4 from "./pages/index-4";
import Index5 from "./pages/index-5";
import Index6 from "./pages/index-6";
import Index7 from "./pages/index-7";
import Index8 from "./pages/index-8";
import Index9 from "./pages/index-9";
import Index10 from "./pages/index-10";
import Index11 from "./pages/index-11";
import Index12 from "./pages/index-12";
import Index13 from "./pages/index-13";
import Index14 from "./pages/index-14";
import Index15 from "./pages/index-15";
import shortButtons from "./pages/shortcode-buttons";
import shortAlertBox from "./pages/shortcode-alert-box";
import shortIconBoxStyles from "./pages/shortcode-icon-box-styles";
import shortIconBox from "./pages/shortcode-icon-box";
import shortPricingTable from "./pages/shortcode-pricing-table";
import shortDividers from "./pages/shortcode-dividers";
import shortListGroup from "./pages/shortcode-list-group";
import shortTitleSeparators from "./pages/shortcode-title-separators";
import shortImageBoxContent from "./pages/shortcode-image-box-content";
import shortPagination from "./pages/shortcode-pagination";
import shortCounters from "./pages/shortcode-counters";
import shortTestimonials from "./pages/shortcode-testimonials";
import shortImagesEffects from "./pages/shortcode-images-effects";
import shopWidgets from "./pages/shortcode-shop-widgets";
import shortTeam from "./pages/shortcode-team";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import About from "./pages/About";
import { ipDataToLocalStorage } from "../fetchers";
import axios from "axios";
const Router = () => {
  const location = useLocation();
  const ipData = async (ip) => {
    const result = await axios.get(`https://ipapi.co/${ip}/json/`);
    console.log(result.data);
  };
  const fetcher = async () => {
    const result = await axios.get("https://api.ipify.org?format=json");
    console.log("NEWER RESUKLT");
    const ip = result.data.ip;
    console.log(ip);
    ipData(ip);
  };

  useEffect(() => {
    console.log("location changed");
    // console.log(location);
    ipDataToLocalStorage(location);
    fetcher();
    // Track all subsequent pageviews
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="quote" element={<Quote />} />
      <Route path="contact" element={<Contact />} />
      <Route path="gg" element={<Index />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Quote />} />
      <Route path="enguiry" element={<Quote />} />

      {/* <Route path="/about-2" component={About2} />
          <Route path="/blog-grid-2-sidebar" component={BlogGrid2Sidebar} />
          <Route path="/blog-grid-3" component={BlogGrid3} />
          <Route path="/blog-grid-2" component={BlogGrid2} />
          <Route path="/blog-grid-2-sidebar" component={BlogGrid2Sidebar} />
          <Route
            path="/blog-grid-2-sidebar-left"
            component={BlogGrid2SidebarLeft}
          />
          <Route path="/blog-grid-3" component={BlogGrid3} />
          <Route path="/blog-grid-3-sidebar" component={BlogGrid3Sidebar} />
          <Route
            path="/blog-grid-3-sidebar-left"
            component={BlogGrid3SidebarLeft}
          />
          <Route path="/blog-grid-4" component={BlogGrid4} />
          <Route path="/blog-half-img" component={BlogHalfImg} />
          <Route
            path="/blog-half-img-left-sidebar"
            component={BlogHalfImgSidebarLeft}
          />
          <Route path="/blog-half-img-sidebar" component={BlogHalfImgSidebar} />
          <Route path="/blog-large-img" component={BlogLargeImg} />
          <Route
            path="/blog-large-img-left-sidebar"
            component={BlogLargeImgSidebarLeft}
          />
          <Route
            path="/blog-large-img-sidebar"
            component={BlogLargeImgSidebar}
          />
          <Route path="/blog-single" component={BlogSingle} />
          <Route
            path="/blog-single-left-sidebar"
            component={BlogSingleSidebarLeft}
          />
          <Route path="/blog-single-sidebar" component={BlogSingleSidebar} />
          <Route path="/coming-soon-1" component={ComingSoon1} />
          <Route path="/contact-1" component={Contact1} />
          <Route path="/contact-2" component={Contact2} />
          <Route path="/contact-3" component={Contact3} />
          <Route path="/contact-4" component={Contact4} />
          <Route path="/error-403" component={Error403} />
          <Route path="/error-404" component={Error404} />
          <Route path="/error-405" component={Error405} />
          <Route path="/faq-1" component={Faq1} />
          <Route path="/faq-2" component={Faq2} />
          <Route path="/help-desk" component={HelpDesk} />
          <Route path="/portfolio-details" component={PortfolioDetails} />
          <Route path="/portfolio-grid-2" component={PortfolioGrid2} />
          <Route path="/portfolio-grid-3" component={PortfolioGrid3} />
          <Route path="/portfolio-grid-4" component={PortfolioGrid4} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/services-1" component={Services1} />
          <Route path="/services-2" component={Services2} />
          <Route path="/services-details" component={ServicesDetails} />
          <Route path="/shop-cart" component={ShopCart} />
          <Route path="/shop-checkout" component={ShopCheckout} />
          <Route path="/shop-login" component={ShopLogin} />
          <Route path="/shop-product-details" component={shopProductDetails} />
          <Route path="/shop-register" component={ShopRegister} />
          <Route path="/shop-sidebar" component={ShopSidebar} />
          <Route path="/shop-wishlist" component={ShopWishlist} />
          <Route path="/shop" component={Shop} />
          <Route path="/team-1" component={Team1} />
          <Route path="/team-2" component={Team2} />
          <Route path="/index-2" component={Index2} />
          <Route path="/index-3" component={Index3} />
          <Route path="/index-4" component={Index4} />
          <Route path="/index-5" component={Index5} />
          <Route path="/index-6" component={Index6} />
          <Route path="/index-7" component={Index7} />
          <Route path="/index-8" component={Index8} />
          <Route path="/index-9" component={Index9} />
          <Route path="/index-10" component={Index10} />
          <Route path="/index-11" component={Index11} />
          <Route path="/index-12" component={Index12} />
          <Route path="/index-13" component={Index13} />
          <Route path="/index-14" component={Index14} />
          <Route path="/index-15" component={Index15} />
          <Route path="/shortcode-buttons" component={shortButtons} />
          <Route path="/shortcode-alert-box" component={shortAlertBox} />
          <Route
            path="/shortcode-icon-box-styles"
            component={shortIconBoxStyles}
          />
          <Route path="/shortcode-icon-box" component={shortIconBox} />
          <Route
            path="/shortcode-pricing-table"
            component={shortPricingTable}
          />
          <Route path="/shortcode-dividers" component={shortDividers} />
          <Route path="/shortcode-list-group" component={shortListGroup} />
          <Route
            path="/shortcode-title-separators"
            component={shortTitleSeparators}
          />
          <Route
            path="/shortcode-image-box-content"
            component={shortImageBoxContent}
          />
          <Route path="/shortcode-pagination" component={shortPagination} />
          <Route path="/shortcode-counters" component={shortCounters} />
          <Route path="/shortcode-testimonials" component={shortTestimonials} />
          <Route
            path="/shortcode-images-effects"
            component={shortImagesEffects}
          />
          <Route path="/shortcode-shop-widgets" component={shopWidgets} />
          <Route path="/shortcode-team" component={shortTeam} /> */}
    </Routes>
  );
};

export default Router;
