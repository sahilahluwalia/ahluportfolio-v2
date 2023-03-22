import React, { useState } from "react";
import ast2aii from "asserts/machine-pics/ast2aii.png";
import ast3aii from "asserts/machine-pics/ast3aii.png";
import acsts from "asserts/machine-pics/acsts.png";
import ampts from "asserts/machine-pics/ampts.png";
import ImageRows from "components/Products/ImageRows";
import LeftSection from "components/Products/LeftSection";
import FirstRow from "components/Products/FirstRow";
import { RightSection } from "components/Products/RightSection";
import ProductList from "components/Products/ProductList";
import ImageSlider from "components/Products/ImageSlider";
import { transferSystemProducts } from "data/productsData";
const images = [ast3aii, ast2aii, acsts, ampts];

const TransferSystem = () => {
  return (
    <>
      <div className='bg-white '>
        <div className='midContent'>
          {/* make a section where you can download the Products on desktop it would show 4 images on one row in flex position and in mobile it would go in columne direction use bootstrap css classes */}
          <div className='py-5 bg-white section-full'>
            <div className='container'>
              {/* <ImageSlider images={images} /> */}
              <div className='row'>
                <LeftSection mainScreen>
                  <div className='text-center section-head'>
                    {/* <h2 className=' box-title m-tb0'>
                      Transfer System
                      <span className='bg-primary'></span>
                    </h2>
                    <p>We have a wide range of Transfer System.</p>
                    <div className='dlab-separator bg-primary'></div> */}

                    {/* create a reponsive 3 columns in desktop and 1 colum in mobile screen in bootstrap */}

                    <div className='row gx-5'>
                      <ImageRows data={transferSystemProducts} noOfRows={4} />
                    </div>

                    {/* <div className='row gx-5'>
                  <h4 className='m-b10'>Double Bar System</h4>
                  <div>
                    <p>We have a wide range of Double Bar System.</p>
                  </div>
                  <ImageRows data={doubleBarSystem} noOfRows={4} />

                  <h4 className='m-b10 m-t30'>Single Bar System</h4>
                  <div>
                    <p>We have a wide range of Single Bar System.</p>
                  </div>
                  <ImageRows data={singleBarSystem} />

                  <h4 className='m-b10 m-t30'> Multi Press Type</h4>
                  <div>
                    <p>We have a wide range of Multi Press Type.</p>
                  </div>
                  <ImageRows data={multiPressType} />
                </div> */}
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

export default TransferSystem;
