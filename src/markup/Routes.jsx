import React, { useEffect } from "react";
import { Route, Routes, useLocation, Switch } from "react-router-dom";
import Index from "./pages/index";
import Error404 from "./pages/error-404";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import About from "./pages/About";
import Products from "./pages/Products/Products";
import ProductBase from "./pages/Products/ProductBase";
import Catalogues from "./pages/Catalogues";
import PowerPressAutomation from "./pages/Products/PowerPressAutomation/PowerPressAutomation";
import TransferSystem from "./pages/Products/PowerPressAutomation/TransferSystem";
import SheetMetalDies from "./pages/Products/PowerPressAutomation/SheetMetalDies";
import PressFeeders from "./pages/Products/PowerPressAutomation/PressFeeders";
import Ast2aii from "./pages/Products/PowerPressAutomation/TransferSystem/Ast2aii";
import Ast2ai from "./pages/Products/PowerPressAutomation/TransferSystem/Ast2ai";
import SpecialPurposeMachines from "./pages/Products/SpecialPurposeMachines/SpecialPurposeMachines";
import AssemblySPMS from "./pages/Products/SpecialPurposeMachines/AssemblySPMS";
import OperationalSPMS from "./pages/Products/SpecialPurposeMachines/OperationalSPMS";
import VisionInspectionSystems from "./pages/Products/VisionInspectionSystems/VisionInspectionSystems";
import RootProduct from "./pages/Products/RootProduct";
import Base from "./pages/Base";
import { ipDataToLocalStorage, ping } from "../fetchers";
import axios from "axios";
import Layout from "../components/layout/Layout";
import Ast3aii from "./pages/Products/PowerPressAutomation/TransferSystem/Ast3ii";
import Acsts from "./pages/Products/PowerPressAutomation/TransferSystem/Acsts";
import Ampts from "./pages/Products/PowerPressAutomation/TransferSystem/Ampts";
import Asrf from "./pages/Products/PowerPressAutomation/PressFeeder/Asrf";
import Ampf from "./pages/Products/PowerPressAutomation/PressFeeder/Ampf";
import BlogMainPage from "./pages/Blog/BlogMainPage";
import BlogLeftBase from "./pages/Blog/BlogLeftBase";
import PowerPressBlog from "./pages/Blog/Posts/PowerPressBlog";
import PowerPressAutomationBlog from "./pages/Blog/Posts/PowerPressAutomationBlog";
import Abf from "./pages/Products/PowerPressAutomation/PressFeeder/Abf";
import ElectricalPanels from "./pages/Products/ElectricalPanels/ElectricalPanels";
import APFCPanel from "./pages/Products/ElectricalPanels/ApfcPanel";
import DOLPanel from "./pages/Products/ElectricalPanels/DolPanel";
import HVACPanel from "./pages/Products/ElectricalPanels/HvacPanel";
import ApfcPanel from "./pages/Products/ElectricalPanels/ApfcPanel";
import DolPanel from "./pages/Products/ElectricalPanels/DolPanel";
import HvacPanel from "./pages/Products/ElectricalPanels/HvacPanel";
import MccPanel from "./pages/Products/ElectricalPanels/MccPanel";
import PccPanel from "./pages/Products/ElectricalPanels/PccPanel";
const Router = () => {
  const location = useLocation();
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);
  useEffect(() => {
    // console.log("location changed");
    // console.log(location.pathname);
    ping(location);

    // ipDataToLocalStorage(location);
    // fetcher();
    // Track all subsequent pageviews
  }, [location]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='blog' element={<BlogLeftBase />}>
          <Route index element={<BlogMainPage />} />
          <Route
            path='power-press-and-its-introduction'
            element={<PowerPressBlog />}
          />
          <Route
            path='power-press-automation-and-its-introduction'
            element={<PowerPressAutomationBlog />}
          />
          <Route path=':name' element={<h1>ds</h1>} />
        </Route>
        <Route index element={<Homepage />} />
        <Route path='quote' element={<Quote />} />
        <Route path='contact' element={<Contact />} />
        <Route path='gg' element={<Index />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<ProductBase />}>
          <Route index element={<Products />} />
          {/* <Route path="transfer-system" element={<h2>sdvsdv</h2>} /> */}
          <Route path='power-press-automation' element={<Base />}>
            <Route index element={<PowerPressAutomation />} />
            <Route path='transfer-system' element={<TransferSystem />} />
            <Route path='transfer-system/ast2aii' element={<Ast2aii />} />
            <Route path='transfer-system/ast2ai' element={<Ast2ai />} />
            <Route path='transfer-system/ast3aii' element={<Ast3aii />} />
            <Route path='transfer-system/acsts' element={<Acsts />} />
            <Route path='transfer-system/ampts' element={<Ampts />} />
            <Route path='sheet-metal-dies' element={<SheetMetalDies />} />
            <Route path='press-feeders' element={<PressFeeders />} />
            <Route path='press-feeders/asrf' element={<Asrf />} />
            <Route path='press-feeders/ampf' element={<Ampf />} />
          </Route>
          <Route path='special-purpose-machines' element={<Base />}>
            <Route index element={<SpecialPurposeMachines />} />
            <Route path='assembly-spms' element={<AssemblySPMS />} />
            <Route path='operational-spms' element={<OperationalSPMS />} />
          </Route>

          <Route path='vision-inspection-system' element={<Base />}>
            <Route index element={<VisionInspectionSystems />} />
          </Route>
          <Route path='electrical-panels' element={<Base />}>
            <Route index element={<ElectricalPanels />} />
            <Route path='apfc-panel' element={<ApfcPanel />} />
            <Route path='dol-panel' element={<DolPanel />} />
            <Route path='hvac-panel' element={<HvacPanel />} />
            <Route path='mcc-panel' element={<MccPanel />} />
            <Route path='pcc-panel' element={<PccPanel />} />
          </Route>
        </Route>
        <Route path='enguiry' element={<Quote />} />
        <Route path='catalogues' element={<Catalogues />} />
        <Route path='*' component={<Error404 />} />
      </Route>
    </Routes>
  );
};
// {
/* <Route path="/about-2" component={About2} />
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
          <Route path="/shortcode-team" component={shortTeam} /> */
// }

export default Router;
