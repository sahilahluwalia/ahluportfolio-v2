import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ImageRows from "../../../components/Products/ImageRows";

import { companyDetails, socialMediaLinks } from "../../../data/websiteData";
// import {  } from "react-router-dom";
import { masterProductLink as productList } from "../../../data/productsData";

const Products = () => {
  //   console.log(catalogueList);
  //   console.log();
  return (
    <>
      {/* make a section where you can download the Products on desktop it would show 4 images on one row in flex position and in mobile it would go in columne direction use bootstrap css classes */}
      <div id='products' className='section-full blue-bg '>
        <div className='container'>
          <div className='text-center section-head'>
            <h2 className=' box-title m-tb0'>Products we cater</h2>
            <p>
              We have a wide range of products and services in Special Purpose
              Machine manufacturing, Assembly Automation & Power press
              Automation solutions
            </p>
            <div className='dlab-separator bg-primary'></div>

            {/* create a reponsive 3 columns in desktop and 1 colum in mobile screen in bootstrap */}
            <div className='container'></div>

            <div className='row gx-5'>
              <ImageRows data={productList} noOfRows={4} />
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Products;
