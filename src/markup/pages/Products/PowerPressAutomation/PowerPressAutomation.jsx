import React, { useState } from "react";
import ImageRows from "components/Products/ImageRows";
import { powerPressAutomationProductList as productList } from "data/productsData";

const PowerPressAutomation = () => {
  return (
    <>
      <div className='bg-white '>
        <div className='midContent'>
          {/* make a section where you can download the Products on desktop it would show 4 images on one row in flex position and in mobile it would go in columne direction use bootstrap css classes */}
          <div className='py-5 bg-white section-full'>
            <div className='container'>
              <div className='text-center section-head'>
                <h2 className=' box-title m-tb0'>
                  Power press Automation Solution
                  <span className='bg-primary'></span>
                </h2>
                <p>
                  We offer wide range of Power press Automation Solutions
                  ranging from Standard/Customized Feeding Systems, Customized
                  Tools and Dies with Operational Tapping/Assembly embedded in
                  same System.
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
