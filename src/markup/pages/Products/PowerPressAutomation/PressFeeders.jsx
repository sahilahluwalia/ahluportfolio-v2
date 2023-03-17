import React, { useState } from "react";
import { Link } from "react-router-dom";
import asrf from "../../../../asserts/machine-pics/asrf.png";
// import { companyDetails, socialMediaLinks } from "../../data/websiteData";
import ImageRows from "../../../../components/Products/ImageRows";
const rollingServoFeeder = [
  {
    name: "Rolling Servo Feeders",
    link: "asrf",
    image: asrf,
  },
];

const PressFeeders = () => {
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
                  Press Feeder
                  <span className="bg-primary"></span>
                </h2>
                <p>We have a wide range of Press Feeder.</p>
                <div className="dlab-separator bg-primary"></div>

                {/* create a reponsive 3 columns in desktop and 1 colum in mobile screen in bootstrap */}
                <div className="container"></div>

                <div className="row gx-5">
                  <h4 className="m-b10">Rolling Servo feeders</h4>
                  <div>
                    <p>
                      Rolling Servo feeders are used to feed the material to the
                      press. The material is fed to the press by the rolling
                      action of the feeder.{" "}
                    </p>
                  </div>
                  <ImageRows data={rollingServoFeeder} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PressFeeders;
