import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeftSection from "components/Products/LeftSection";
import FirstRow from "components/Products/FirstRow";
import { RightSection } from "components/Products/RightSection";
import ProductList from "components/Products/ProductList";
import ImageRows from "components/Products/ImageRows";

// import { companyDetails, socialMediaLinks } from "../../data/websiteData";

const productList = [
  {
    name: "Operational SPMS",
    link: "operational-spms",
    image:
      "https://www.bansalpresses.com/wp-content/uploads/2022/11/Power_Press_bNX250.jpg",
  },
  {
    name: "Assembly SPMS",
    link: "assembly-spms",
    image:
      "https://www.bansalpresses.com/wp-content/uploads/2022/11/3-in-1-decoiler-straightener-feeder.jpg",
  },
];

const SpecialPurposeMachines = () => {
  //   console.log(catalogueList);
  //   console.log();
  return (
    <>
      <div className='bg-white '>
        <div className='midContent'>
          {/* make a section where you can download the Products on desktop it would show 4 images on one row in flex position and in mobile it would go in columne direction use bootstrap css classes */}
          <div className='py-5 bg-white section-full'>
            <div className='container'>
              <div className='text-center section-head'>
                <h2 className=' box-title m-tb0'>
                  Special Purpose Machines
                </h2>
                <p>We have a wide range of Special Purpose Machines .</p>
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
