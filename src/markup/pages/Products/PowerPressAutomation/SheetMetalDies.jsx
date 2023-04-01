import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageRows from "components/Products/ImageRows";
import LeftSection from "components/Products/LeftSection";
import FirstRow from "components/Products/FirstRow";
import { RightSection } from "components/Products/RightSection";
import ProductList from "components/Products/ProductList";
import ImageSlider from "components/Products/ImageSlider";
import { transferSystemProducts } from "data/productsData";
// import { companyDetails, socialMediaLinks } from "../../data/websiteData";

const productList = [
  {
    name: "Progressive Dies",
    link: "progressive-dies",
    image:
      "https://www.bansalpresses.com/wp-content/uploads/2022/11/Power_Press_bNX250.jpg",
  },
  {
    name: "Transfer Dies",
    link: "transfer-dies",
    image:
      "https://www.bansalpresses.com/wp-content/uploads/2022/11/3-in-1-decoiler-straightener-feeder.jpg",
  },
  {
    name: "Compound Dies",
    link: "compound-dies",
    image:
      "https://www.bansalpresses.com/wp-content/uploads/2022/11/accessories.jpg",
  },
];

const SheetMetalDies = () => {
  //   console.log(catalogueList);
  //   console.log();
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
                  <h1 className=' text-black m-tb0'>SHEET METAL DIES</h1>
                  <div className='dlab-separator bg-primary'></div>
                  <div className='text-center section-head'>
                    <div className='row gx-5'>
                      <ImageRows data={productList} noOfRows={4} />
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
