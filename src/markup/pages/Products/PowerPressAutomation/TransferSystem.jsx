import React, { useState } from "react";
import ast2all from "../../../../asserts/machine-pics/ast2all.png";
import ast3all from "../../../../asserts/machine-pics/ast3all.png";
// import { companyDetails, socialMediaLinks } from "../../data/websiteData";
import acsts from "../../../../asserts/machine-pics/acsts.png";
import ampts from "../../../../asserts/machine-pics/ampts.png";
import ImageRows from "../../../../components/Products/ImageRows";
const doubleBarSystem = [
  {
    name: "AST2AII Series",
    link: "ast2all",
    image: ast2all,
  },
  {
    name: "AST3AII Series",
    link: "ast3all",
    image: ast3all,
  },
];

const singleBarSystem = [
  {
    name: "ACSTS Series",
    link: "acsts",
    image: acsts,
  },
];

const multiPressType = [
  {
    name: "AMPTS Series",
    link: "ampts",
    image: ampts,
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
                  <h4 className="m-b10">Double Bar System</h4>
                  <div>
                    <p>We have a wide range of Double Bar System.</p>
                  </div>
                  <ImageRows data={doubleBarSystem} />

                  <h4 className="m-b10 m-t30">Single Bar System</h4>
                  <div>
                    <p>We have a wide range of Single Bar System.</p>
                  </div>
                  <ImageRows data={singleBarSystem} />

                  <h4 className="m-b10 m-t30"> Multi Press Type</h4>
                  <div>
                    <p>We have a wide range of Multi Press Type.</p>
                  </div>
                  <ImageRows data={multiPressType} />
                </div>
                <div className="row gx-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferSystem;
