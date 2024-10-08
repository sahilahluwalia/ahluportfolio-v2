import React, { useState } from "react";

import ImageRows from "components/Products/ImageRows";
import { specialPurposeProductList as productList } from "data/productsData";
// import { companyDetails, socialMediaLinks } from "../../data/websiteData";

const SpecialPurposeMachines = () => {
  //   console.log(catalogueList);
  //   console.log();
  return (
    <>
      <div  className='blue-bg '>
        <div id={'specialpurpose'}   className='midContent'>
          {/* make a section where you can download the Products on desktop it would show 4 images on one row in flex position and in mobile it would go in columne direction use bootstrap css classes */}
          <div className='py-2 section-full'>
            <div className='container'>
              <div className='text-center section-head mb-0'>
                <h2 className=' box-title m-tb0'>Special Purpose Machines</h2>
                <p>
                  We customize Special Purpose Machines based on applicational
                  requirements in the Sheet Metal industry & Electrical Assembly
                  field.
                </p>
                <div className='dlab-separator bg-primary'></div>
              </div>
              {/* <ImageSlider images={images} /> */}
              <div className='row'>
                <div className='text-center section-head'>
                  <div className='row gx-5'>
                    <ImageRows data={productList} noOfRows={4} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialPurposeMachines;
