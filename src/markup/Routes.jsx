import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
// import RootProduct from "./pages/Products/RootProduct";
import Base from "./pages/Base";
import { ipDataToLocalStorage, ping } from "../fetchers";
// import axios from "axios";
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
// import APFCPanel from "./pages/Products/ElectricalPanels/ApfcPanel";
// import DOLPanel from "./pages/Products/ElectricalPanels/DolPanel";
// import HVACPanel from "./pages/Products/ElectricalPanels/HvacPanel";
import ApfcPanel from "./pages/Products/ElectricalPanels/ApfcPanel";
import DolPanel from "./pages/Products/ElectricalPanels/DolPanel";
import HvacPanel from "./pages/Products/ElectricalPanels/HvacPanel";
import MccPanel from "./pages/Products/ElectricalPanels/MccPanel";
import PccPanel from "./pages/Products/ElectricalPanels/PccPanel";
import VisionMission from "./pages/About/VisionMission";
import StoryTimeline from "./pages/About/StoryTimeline.jsx";
import WhyAhluEngineers from "./pages/About/WhyAhluEngineers";
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
        <Route path='vision-mission' element={<VisionMission />} />
        <Route path='story-timeline' element={<StoryTimeline />} />
        <Route path='why-ahlu-engineers' element={<WhyAhluEngineers />} />
        <Route path='quality-policy-certifications' element={<About />} />
        <Route path='awards-recognition' element={<About />} />
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
            <Route path="press-feeders/abf" element={<Abf/>}/>
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


export default Router;
