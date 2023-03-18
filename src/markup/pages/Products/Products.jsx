import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ImageRows from "../../../components/Products/ImageRows";

import { companyDetails, socialMediaLinks } from "../../../data/websiteData";
// import {  } from "react-router-dom";
import { masterProductLink as productList } from "../../../data/productsData";
// const productList = [
//   {
//     name: "Power Press Automation",
//     link: "power-press-automation",
//     image:
//       "https://www.bansalpresses.com/wp-content/uploads/2022/11/Power_Press_bNX250.jpg",
//   },
//   {
//     name: "Special Purpose Machines",
//     link: "special-purpose-machines",
//     image:
//       "https://www.bansalpresses.com/wp-content/uploads/2022/11/3-in-1-decoiler-straightener-feeder.jpg",
//   },
//   {
//     name: "Vision Inspection System",
//     link: "vision-inspection-system",
//     image:
//       "https://www.bansalpresses.com/wp-content/uploads/2022/11/accessories.jpg",
//   },
// ];

const Products = () => {
  //   console.log(catalogueList);
  //   console.log();
  return (
    <>
      <div className="bg-white ">
        <div className="midContent">
          {/* make a section where you can download the Products on desktop it would show 4 images on one row in flex position and in mobile it would go in columne direction use bootstrap css classes */}
          <div className="py-5 bg-white section-full">
            <div className="container">
              <div className="text-center section-head">
                <h2 className=" box-title m-tb0">
                  Products
                  <span className="bg-primary"></span>
                </h2>
                <p>We have a wide range of products and services.</p>
                <div className="dlab-separator bg-primary"></div>

                {/* create a reponsive 3 columns in desktop and 1 colum in mobile screen in bootstrap */}
                <div className="container"></div>

                <div className="row gx-5">
                  <ImageRows data={productList} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Products;
