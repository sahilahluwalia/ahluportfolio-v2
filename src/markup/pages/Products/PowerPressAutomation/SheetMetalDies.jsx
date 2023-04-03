import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageRows from "components/Products/ImageRows";
import LeftSection from "components/Products/LeftSection";
import FirstRow from "components/Products/FirstRow";
import { RightSection } from "components/Products/RightSection";
import ProductList from "components/Products/ProductList";
import ImageSlider from "components/Products/ImageSlider";
import { sheetMetalProductList } from "data/productsData";
// import { companyDetails, socialMediaLinks } from "../../data/websiteData";



const SheetMetalDies = () => {
  //   console.log(catalogueList);
  //   console.log();
  return (
    <>
      <div className='blue-bg'>
        <div className='midContent'>
          {/* make a section where you can download the Products on desktop it would show 4 images on one row in flex position and in mobile it would go in columne direction use bootstrap css classes */}
          <div className='py-5 section-full'>
            <div className='container'>
              {/* <ImageSlider images={images} /> */}
              <div className='row'>
                <LeftSection mainScreen>
                  <h1 className=' text-black m-tb0'>SHEET METAL DIES</h1>
                  <div className='dlab-separator bg-primary'></div>
                  <div className='text-center section-head'>
                    <div className='row gx-5'>
                      <ImageRows data={sheetMetalProductList} noOfRows={4} />
                    </div>
                  </div>
                </LeftSection>

                <RightSection mainScreen>
                  <ProductList withoutImage />
                </RightSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SheetMetalDies;
