import React, { useState } from "react";
import ImageRows from "components/Products/ImageRows";
import { powerPressAutomationProductList as productList } from "data/productsData";

const PowerPressAutomation = () => {
  return (
    <>
      <div className='blue-bg  '>
        <div id={'powerpress'} className='midContent'>
          {/* make a section where you can download the Products on desktop it would show 4 images on one row in flex position and in mobile it would go in columne direction use bootstrap css classes */}
          <div className='py-2 section-full'>
            <div className='container'>
              <div className='text-center section-head'>
                <h2 className=' box-title m-tb0'>
                  POWER PRESS Automation Solutions
                  <span className='bg-primary'></span>
                </h2>
                <p>
                We offer complete Power press automation solutions including Transfer Systems, Tools & Dies and other solutions to cover all your manufacturing needs to compete in Global market.
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
        </div>
      </div>
    </>
  );
};

export default PowerPressAutomation;
