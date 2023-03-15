import React, { useState } from "react";
import { Link } from "react-router-dom";

// import { companyDetails, socialMediaLinks } from "../../data/websiteData";

const productList = [
  {
    name: "Double Bar System",
    link: "double-bar-system",
    image:
      "https://www.bansalpresses.com/wp-content/uploads/2022/11/Power_Press_bNX250.jpg",
  },
  {
    name: "Single Bar System",
    link: "single-bar-system",
    image:
      "https://www.bansalpresses.com/wp-content/uploads/2022/11/3-in-1-decoiler-straightener-feeder.jpg",
  },
  {
    name: "Multi Press Type",
    link: "multi-press-type",
    image:
      "https://www.bansalpresses.com/wp-content/uploads/2022/11/accessories.jpg",
  },
];

const TransferSystem = () => {
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
                  Transfer System
                  <span className="bg-primary"></span>
                </h2>
                <p>We have a wide range of Transfer System.</p>
                <div className="dlab-separator bg-primary"></div>

                {/* create a reponsive 3 columns in desktop and 1 colum in mobile screen in bootstrap */}
                <div className="container"></div>

                <div className="row gx-5">
                  {productList.map((item) => {
                    return (
                      <>
                        <h4 className="m-b10">{item.name}</h4>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferSystem;
