import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import ScrollToTop from "../components/helper/ScrollToTop";
const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="page-wraper">
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default Router;
