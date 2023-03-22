import React, { useState } from "react";
import { Link } from "react-router-dom";
import asrf from "../../../../asserts/machine-pics/asrf.png";
// import { companyDetails, socialMediaLinks } from "../../data/websiteData";
import ImageRows from "../../../../components/Products/ImageRows";
import Flap from "asserts/machine-pics/Design Image Data/Flap/Flap1.png";
import { pressFeederProducts } from "data/productsData";
import LeftSection from "components/Products/LeftSection";
import FirstRow from "components/Products/FirstRow";
import { RightSection } from "components/Products/RightSection";
import ProductList from "components/Products/ProductList";

const PressFeeders = () => {
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
                    <div className='row gx-5'>
                      <ImageRows data={pressFeederProducts} noOfRows={4} />
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

export default PressFeeders;
